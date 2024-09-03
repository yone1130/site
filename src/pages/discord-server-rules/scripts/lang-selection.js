/*
 *
 * Yone Website
 *
 * Copyright (C) よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

"use strict";

(() => {
    const langSelection = class {
        get langs() {
            return ["ja-jp", "en-us"];
        }

        constructor() {
            this.getClientLang();
            this.changePageLang(this.pageLang);
            this.init();
        }

        getClientLang() {
            const langsMap = {
                ja: "ja-jp",
                en: "en-us",
            };

            const defaultLang = "en-us";

            this.pageLang = localStorage.getItem("lang");

            if (this.pageLang !== null) {
                return;
            }

            const userLang = (
                navigator.language || navigator.userLanguage
            ).toLowerCase();

            this.pageLang = langsMap[userLang] || defaultLang;

            localStorage.setItem("lang", this.pageLang);
        }

        changePageLang(lang) {
            switch (lang) {
                case "ja-jp":
                    document.documentElement.lang = "ja-JP";
                    document.title = pageTitleLangs["ja-JP"];
                    document.body.classList.remove(...this.langs);
                    document.body.classList.add("ja-jp");
                    localStorage.setItem("lang", "ja-jp");
                    break;

                case "en-us":
                    document.documentElement.lang = "en-US";
                    document.title = pageTitleLangs["en-US"];
                    document.body.classList.remove(...this.langs);
                    document.body.classList.add("en-us");
                    localStorage.setItem("lang", "en-us");
                    break;

                default:
                    document.documentElement.lang = "en-US";
                    document.title = pageTitleLangs["en-US"];
                    document.body.classList.remove(...this.langs);
                    document.body.classList.add("en-us");
                    localStorage.setItem("lang", "en-us");
                    break;
            }
        }

        init() {
            this.langs.forEach((lang) => {
                $(document).on("click", `#langsLists .${lang}`, () => {
                    this.changePageLang(lang);
                });
            });
        }
    };

    $(() => new langSelection());
})();
