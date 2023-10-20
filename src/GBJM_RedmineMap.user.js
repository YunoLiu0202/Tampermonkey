// ==UserScript==
// @name         GBJM_Redmine 導航
// @namespace
// @version      0.1
// @description  try to take over the world!
// @author       GBJM IT-PG @Yuno
// @source       https://github.com/Yuno-Liu/GBJM_Tampermonkey/raw/main/src/GBJM_RedmineMap.user.js
// @namespace    https://github.com/Yuno-Liu/GBJM_Tampermonkey/raw/main/src/GBJM_RedmineMap.user.js
// @match        http://redmine.gbjm-tec.com.tw/*
// @icon         https://freeiconshop.com/wp-content/uploads/edd/location-map-flat.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var redmine_ip = "http://192.168.1.53:3000";
    // 新增一個按鈕元件
    var btn = document.createElement("button");
    // 設定按鈕文字
    btn.innerHTML = "導航到 IP 網址";
    // 設定按鈕樣式
    btn.style = "width: 200px; height: 50px; background-color: #e85f68; color: white; border: none; cursor: pointer; font-size: 20px;";
    // 設定按鈕滑鼠移入樣式
    btn.onmouseover = function() {
        btn.style.backgroundColor = "#d33c4c";
    };
    // 設定按鈕滑鼠移出樣式
    btn.onmouseout = function() {
        btn.style.backgroundColor = "#e85f68";
    };

    // 設定按鈕點擊事件
    btn.onclick = function() {
        // 取得當前網址(不要前面網址)
        var url = location.href.replace(location.origin, "");
        url = redmine_ip + url;
        // 開啟當前頁
        window.open(url,"_self");
    };
    // append 到 id = sidebar 最上層
    document.getElementById("sidebar").prepend(btn);
})();