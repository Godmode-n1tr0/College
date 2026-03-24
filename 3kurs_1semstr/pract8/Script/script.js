let VideoList = ['video/1.mp4', 'video/3.mp4', 'video/4.mp4', 'video/5.mp4', 'video/6.mp4', 'video/7.mp4', 'video/8.mp4', ]; //Массив с названием всех изображений
let i = Math.floor(Math.random() * VideoList.length); //Переменная для выбора индекса элемента
let video_left = document.getElementById("video_left"); //Присваиваем переменной элемент html
let video_right = document.getElementById("video_right"); //Присваиваем переменной элемент html

videoleft();
videoright();
video_left.onclick = videoleft; 
video_right.onclick = videoright;

function videoleft() {
    video_left.src = VideoList[i];
    i++;
    if (i >= VideoList.length) {
        i = 0;
    }
}

function videoright() {
    video_right.src = VideoList[i];
    i++;
    if (i >= VideoList.length) {
        i = 0;
    }
}