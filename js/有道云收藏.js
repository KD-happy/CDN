javascript: (function () {
    try {
        var a = document.createElement("SCRIPT");
        (a.type = "text/javascript"),
            (a.src =
                "//note.youdao.com/yws/YNoteClipper.js?" + new Date().getTime() / 1e5),
            (a.charset = "utf-8"),
            (a.onerror = function () {
                function d(a) {
                    return (
                        a.indexOf("360ee") > -1 ||
                        a.indexOf("360se") > -1 ||
                        a.indexOf("se") > -1 ||
                        a.indexOf("aoyou") > -1 ||
                        a.indexOf("theworld") > -1 ||
                        a.indexOf("worldchrome") > -1 ||
                        a.indexOf("greenbrowser") > -1 ||
                        a.indexOf("qqbrowser") > -1 ||
                        a.indexOf("baidu") > -1
                    );
                }
                var a = document.createElement("div"),
                    b = navigator.userAgent.toLowerCase(),
                    c = b.match(/chrome\/([\d.]+)/)[1];
                (a.style.cssText =
                    "position: absolute;top: 10px;right: 30px;padding: 5px;border-radius: 5px;box-shadow: rgb(92, 184, 229) 0px 0px 2px; -webkit-box-shadow: rgb(92, 184, 229) 0px 0px 2px;background-color: rgba(92, 184, 229, 0.498039) !important;z-index: 999999;"),
                    (a.innerHTML =
                        c && !d(b)
                            ? '<div style="padding: 20px;border: 1px solid rgb(92, 184, 229);background: white;border-radius: 5px;width: 330px;">该扩展暂不支持收藏该类型https类网站，可前往Chrome应用商店 <a style="color:#1d7fe2" href="https://note.youdao.com/download.html#other" target="_blank">下载</a> 有道云笔记网页剪报插件</div>'
                            : '<div style="padding: 20px;border: 1px solid rgb(92, 184, 229);background: white;border-radius: 5px;">该扩展暂不支持收藏该类型https类网站</div>'),
                    document.body.appendChild(a),
                    (a.onclick = function () {
                        a.style.display = "none";
                    }),
                    setTimeout(function () {
                        a.click();
                    }, 8e3);
            }),
            document.getElementsByTagName("head")[0].appendChild(a);
    } catch (b) {
        alert(b);
    }
})();
