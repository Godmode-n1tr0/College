let VideoList = ['video/video1.mp4', 'video/video2.mp4', 'video/video3.mp4'];
let i = 0;
let video_left = document.getElementById("v1");
let video = document.querySelector(".da1ba3b");
video_left.src = VideoList[i];

function applyAnimation() {
    video.classList.remove('da1ba3b');
    void video.offsetWidth;
}

document.getElementById("next").addEventListener('click', () => {
    i++;

    video.classList.remove('da1ba3b');

    if (i >= VideoList.length){
        i = 0;
    }
    video_left.src = VideoList[i];
    video_left.parentElement.load();

    requestAnimationFrame(()=>{
        video.classList.add('da1ba3b');
    })
});

document.getElementById("back").addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = VideoList.length - 1;
    }
    video_left.src = VideoList[i];
    video_left.parentElement.load();
    requestAnimationFrame(()=>{
        video.classList.add('da1ba3b');
    })
});

applyAnimation();