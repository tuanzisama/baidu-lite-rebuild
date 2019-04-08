// ==UserScript==
// @name         Baidu Lite Rebuild 百度轻·重构
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  优化百度搜索
// @author       You
// @match        http://baidu.com/*
// @match        http://www.baidu.com/*
// @match        https://www.baidu.com/*
// @match        https://baidu.com/*
// @grant        none
// ==/UserScript==
(function () {
    // 此段代码放在Tampermonkey插件中
    document.getElementById('wrapper').addEventListener("DOMSubtreeModified", function () {
        var $ = window.jQuery;
        var adPanel = $('.c-container').find('div.f13 span.m');
        adPanel.each(function (index, el) {
            setTimeout(() => {
                $(el).parents('div.c-container').addClass('baidu-ad-panel');
            }, 100)
        });
    }, false);
})();