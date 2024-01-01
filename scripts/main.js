// 
// main.js | Yone Site
// 
// (c) よね/Yone
// 
// No modification or reproduction of any kind is permitted.
// 改変や複製を一切禁じます。
// 

$(() => {
    $('header').load('./elements/header.html');
    $('footer').load('./elements/footer.html');


    // 2024-01-01 Tsunami Information
    $("main").prepend(`
        <a id="emergency" href="https://webapp.ydits.net/">
            <p>YDITSからのお知らせ：津波警報、津波注意報が発表中されています（20時30分）</p>
        </a>
    `);
    $("#emergency").css({
        "display": "block",
        "background-color": "#f04040",
        "padding": "1em",
        "color": "#ffffffff"
    });
});
