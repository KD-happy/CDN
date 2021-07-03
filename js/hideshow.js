/*
  本js用来绑定aplyer歌词显示的事件
*/
function ab(){
    ap=document.querySelector('meting-js').aplayer;
    ap.lrc.hide();
    ap.on('error', function (){
        console.log('播放器有错误');
    });
    ap.on('play', function () {
        ap.lrc.show();
    });
    ap.on('pause', function (){
        ap.lrc.hide();
    });
};
setTimeout(ab, 1000);

/*
    绑定了快捷键：Ctrl+Space 播放/停止
    Ctrl+Left 下一首
    Ctrl+Right 上一首
*/
document.onkeydown = onKeyDown; //快捷键
function onKeyDown () {
    if(window.event.ctrlKey){
        if(window.event.keyCode == 32) { //ctrl+space 切换播放
            ap.toggle();
        }
        if(window.event.keyCode == 39) {
            ap.skipForward();
        }
        if(window.event.keyCode == 37) {
            ap.skipBack();
        }
    }
};