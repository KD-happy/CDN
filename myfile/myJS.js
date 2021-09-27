/******************** 添加外部链接资源到head中 ********************/
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


/******************** 对网站的Cookie的操作 ********************/
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
//此方法和上面的是一样的
function getCookieValue(name){
   let arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
//设置Cookie的值
function setCookie(cookiename, value){
    let exp = new Date();
    exp.setTime(exp.getTime() + 3*60*60*1000);
    document.cookie = cookiename + "="+ escape (value) + "; path=/; expires=" + exp.toGMTString();
}


/******************** 其他好玩的功能 ********************/
//复制
function doCopy(content) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}
//延迟时间： await sleep(1000).then(函数)
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
//获得一个随机数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//网站通知：通过网站来调用的通知，在右下角
function showMessageWindow(title, content, callback){
    if(window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function(status) {
            var notice_ = new Notification(title, { body: content });
            notice_.onclick = function() {
                callback();
            }
        });
    }   
}

// 获取链接的参数 不知道百度怎么搜索
function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]); return null;
}


// 获取本站cookie
Cookies = prompt('本网站的Cookie', document.cookie);
function doCopy(content) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}
if(Cookies != null) {
    doCopy(Cookies);
}