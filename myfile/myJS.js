//���CSS��head��
function addCSS(url) {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = url;
    document.head.appendChild(css);
}
//���JS��head��
function addJS(url) {
    let js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = url;
    document.head.appendChild(js);
}
//ͨ��Cookie��name��ȡCookie��ֵ
function getCookie(e) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
}
//ͨ��Cookie��name��ȡCookie��ֵ
function getCookie(name) {
	if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(name + '=')
        if (start !== -1) {
            start = start + name.length + 1
            let end = document.cookie.indexOf(';', start)
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