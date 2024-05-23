/*
 * 
 * Yone Website
 * 
 * Copyright (c) よね/Yone
 * 
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 * 
 */

'use strict';

(() => {
    const loadCommonElements = () => {
        $('header').load('./elements/header.html');
        $('footer').load('./elements/footer.html');
    }

    document.addEventListener("DOMContentLoaded", () => loadCommonElements());
})();
