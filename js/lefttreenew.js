var LeftTree = LeftTree || {};
LeftTree.Tools = {
    getQueryString: function (data) {
        var tdata = '';
        for (var key in data) {
            tdata += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
        }
        tdata = tdata.replace(/^&/g, "");
        return tdata
    },
    addEvent: function (elm, type, fn, useCapture) {
        if (elm.addEventListener) {
            elm.addEventListener(type, fn, useCapture);
            return true;
        } else if (elm.attachEvent) {
            var r = elm.attachEvent('on' + type, fn);
            return r;
        } else {
            elm['on' + type] = fn;
        }
    },
    MathWinHeigth: function () {
        var winH = 0;
        if (window.innerHeight) {
            winH = Math.min(window.innerHeight, document.documentElement.clientHeight);
        } else if (document.documentElement && document.documentElement.clientHeight) {
            winH = document.documentElement.clientHeight;
        } else if (document.body) {
            winH = document.body.clientHeight;
        }
        return winH;
    },
    getElementByClassName: function (tagName, className) {
        var classObj = document.getElementsByTagName(tagName);
        var len = classObj.length;
        for (var i = 0; i < len; i++) {
            if (classObj[i].className == className) {
                return classObj[i];
                break;
            }
        }
    },
    attrStyle: function (elem, attr) {
        if (!elem) { return; }
        if (elem.style[attr]) {
            return elem.style[attr];
        } else if (elem.currentStyle) {
            return elem.currentStyle[attr];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            attr = attr.replace(/([A-Z])/g, '-$1').toLowerCase();
            return document.defaultView.getComputedStyle(elem, null).getPropertyValue(attr);
        } else {
            return null;
        }
    },
    getOffsetTop: function (element) {
        var top = 0;
        while (element) {
            if (LeftTree.Tools.attrStyle(element, "position") === "fixed") {
                break;
            }
            top += element.offsetTop;
            element = element.offsetParent;
        }
        return top;
    }
};

function SetTagUrlCity(tagType, tagUrl, otherPara, allSpell) {
    var cityId = typeof params.cityid == 'undefined' ? "" : params.cityid;
    var cityCode = typeof params.citycode == 'undefined' ? "" : params.citycode;
    var keyWord = typeof params.keyword == 'undefined' ? "" : params.keyword;
    var showType = typeof params.showtype == 'undefined' ? "" : params.showtype;
    var objId = typeof params.objid == 'undefined' ? 0 : params.objid;
    allSpell = typeof allSpell == 'undefined' ? "" : allSpell;
    var tagEle = document.getElementById("treeNav_" + tagType);
    if (tagEle) {
        tagUrl = tagUrl.replace("@objid@", objId);
        tagUrl = tagUrl.replace("@objspell@", allSpell);
        tagUrl = tagUrl.replace("@citycode@", cityCode);
        tagUrl = tagUrl.replace("@cityid@", cityId);
        tagUrl = tagUrl.replace("@keyword@", keyWord);
        if (otherPara != null && otherPara.length > 0 && cityId > 0) {
            tagUrl += otherPara.replace("@cityid@", cityId);
            tagUrl = tagUrl.replace("@citycode@", cityCode);
            tagUrl = tagUrl.replace("@showtype@", showType);
        }
        tagEle.href = tagUrl;
    }
}
function firstExpandMaster(masterRootLi) {
    if (masterContent == 'undefined')
        return;
    if (masterRootLi == null)
        return;
    masterRootLi.innerHTML += getBrandHtml(masterContent, params.tagtaype);
}
function treeHref(curLitterNum) {
    var hideItemAllHeight = 0;
    for (var i = 1; i < curLitterNum; i++) {
        var hideItem = document.getElementById("letter" + i);
        if (!hideItem)
            continue;
        var hideItemHeight = hideItem.offsetHeight+10;
        console.log(hideItemAllHeight);
        hideItemAllHeight += hideItemHeight;
    }
    var treeBox = document.getElementById("second"); //树
    treeBox.scrollTop = hideItemAllHeight;
    //tree1高度不够滚动，重新计算高度 by sk 2013.03.20
    if (treeBox.scrollTop < hideItemAllHeight) {
        var treeBottom = document.getElementById("tree-bottom");
        treeBottom.style.height = parseInt(treeBottom.style.height) + (hideItemAllHeight - treeBox.scrollTop) + "px";
        treeBox.scrollTop = hideItemAllHeight;
    }
}
//根据导航栏位置设置树形距顶高度
function treeFixedNavTop() {
    var treeFixedNav = document.getElementById("treeFixedNav");
    var bt_smenuNew = document.getElementById("header_logo");
    var toptreeFixedNavHeight = LeftTree.Tools.getOffsetTop(bt_smenuNew); //获取导航栏距离顶部距离
    if (treeFixedNav.className == "publicTabNew publicTabNew-fixed")//判断导航条是否是fixed by songkai 2013.01.21
    {
        document.getElementById("leftTreeBox").style.top = -(bt_navigateNewHeight) + "px";
        return;
    }
    var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    document.getElementById("leftTreeBox").style.top = toptreeFixedNavHeight - scrollHeight + "px";
}
function getBrandHtml(brandList) {
    var html = "<ul class=\"tree-items\">";
    for (var k = 0; k < brandList.length; k++) {
        if (brandList[k].type == "cs") {
            html += getSerialHtml(brandList[k]);
        }
        else {
            var className = "brandType";
            var curIdStr = "";
            if (brandList[k].cur == 1) {
                if (brandList[k].type == "cb") {
                    className += " current";
                    curIdStr = " id=\"curObjTreeNode\"";
                }
            }
            if (brandList.url == "")
                html += "<li" + curIdStr + "><a class=\"" + className + "\"><big>" + brandList[k].name + "</big><span>(" + brandList[k].num + ")</span></a>";
            else
                html += "<li" + curIdStr + "><a href=\"" + brandList[k].url + "\" class=\"" + className + "\"><big>" + brandList[k].name + "</big><span>(" + brandList[k].num + ")</span></a>";
            if (brandList[k].child != undefined) {
                html += "<ul>";
                for (var i = 0; i < brandList[k].child.length; i++)
                    html += getSerialHtml(brandList[k].child[i]);
                html += "</ul>";
            }
            html += "</li>";
        }
    }
    html += "</ul>";
    return html;
}