//添加CSS到head中
function addCSS(url) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = url;
    document.head.appendChild(css);
}
//添加JS到head中    
function addJS(url) {
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = url;
    document.head.appendChild(js);
}
//通过Cookie的name获取Cookie的值
function getCookie(e) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
}
//通过Cookie的name获取Cookie的值
function getCookie(name) {
	if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + '=')
        if (start !== -1) {
            start = start + name.length + 1
            var end = document.cookie.indexOf(';', start)
            if (end === -1) {
                end = document.cookie.length
            }
            return window.decodeURIComponent(document.cookie.substring(start, end))
        } else {
            return ''
        }
    }
    return ''
}
//复制
function doCopy(content) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}