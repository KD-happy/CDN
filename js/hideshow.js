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