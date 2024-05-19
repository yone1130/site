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
    const headerInnerHtml = `
        <div class="header-wrapper">
            <div class="header-logo">
                <img class="header-logo-image" src="https://cdn.yoneyo.com/images/yone_logos/yone_icon.png" alt="Yone's icon">
                <span class="header-title">よね/Yone</span>
            </div>
        </div>
    `;

    const loadCommonElements = () => {
        document.body.header.innerHTML = headerInnerHtml;
        $('footer').load('./elements/footer.html');
    }

    document.addEventListener("DOMContentLoaded", () => loadCommonElements());
})();
