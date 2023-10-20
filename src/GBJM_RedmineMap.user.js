// ==UserScript==
// @name         GBJM_Redmine 導航
// @namespace
// @version      0.2
// @description  try to take over the world!
// @author       GBJM IT-PG @Yuno
// @match        http://redmine.gbjm-tec.com.tw/*
// @icon         https://freeiconshop.com/wp-content/uploads/edd/location-map-flat.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var redmine_ip = "http://192.168.1.53:3000";
    // 取得當前網址(不要前面網址)
    var url = location.href.replace(location.origin, "");
    url = redmine_ip + url;
    // 開啟當前頁
    window.open(url,"_self");
})();