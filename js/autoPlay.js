function setInfo(name, value) {
    sessionStorage.setItem(name, value);
}
function getInfo(name) {
    return sessionStorage.getItem(name);
}
function abb(){
    function apDo() {
        ap.seek(getInfo('apTime'));
        ap.play();
    }
    if(getInfo('apPlaying') == '1') {
        ap.list.switch(getInfo('apIndex'));
        setTimeout(apDo, 500);
    }
    if(document.querySelector('a') != null) {
        document.querySelector('a').addEventListener('click', function(e){
            if(ap.audio.paused == false) {
                setInfo('apPlaying', 1); //正在播放
                setInfo('apIndex', ap.list.index); //设置播放的索引
                setInfo('apTime', ap.audio.currentTime);
            }
        }, true)
    }
    window.addEventListener("popstate", function(e) {
        if(ap.audio.paused == false) {
            setInfo('apPlaying', 1); //正在播放
            setInfo('apIndex', ap.list.index); //设置播放的索引
            setInfo('apTime', ap.audio.currentTime);
        }
    });
    // window.onhashchange = function (e) {
    //     if(ap.audio.paused == false) {
    //         setInfo('apPlaying', 1); //正在播放
    //         setInfo('apIndex', ap.list.index); //设置播放的索引
    //         setInfo('apTime', ap.audio.currentTime);
    //     }
    // }
}
setTimeout(abb, 1000);

// ap=document.querySelector('meting-js').aplayer;
// function setPlay() {
//     setInfo('apPlaying', 1); //正在播放
//     setInfo('apIndex', ap.list.index); //设置播放的索引
//     setInfo('apTime', ap.audio.currentTime);
//     console.log('www');
// }
// ap.on('play', function () {
//     setInfo('Clear', setInterval(setPlay, 500));
//     // var Clear = setInterval(setPlay, 500);
// });
// ap.on('pause', function () {
//     clearInterval(getInfo('Clear'));
// })
// function bg() {
//     function apDo() {
//         ap.seek(getInfo('apTime'));
//         ap.play();
//     }
//     if(getInfo('apPlaying') == '1') {
//         ap.list.switch(getInfo('apIndex'));
//         setTimeout(apDo, 500);
//         setTimeout(setInfo('Clear', setInterval(setPlay, 500)), 1000);
//     }
// }
// setTimeout(ab, 1500);