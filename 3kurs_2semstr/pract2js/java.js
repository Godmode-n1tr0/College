let wheel=document.querySelector('.sqare');
let btn =document.querySelector('.wheel_btn');
let turn=0;
let result=0;

btn.addEventListener('click',()=>{
    turn+=Math.random()*3600;

    wheel.style.transform="rotate("+turn+"deg)";


    wheel.addEventListener('transitionend',()=>
    {
    showResult()
    })
})

function showResult(){

    result=turn%360;
    if (result>=0 && result<90)
    {
        alert('Demon King of Blue Lock');
        const video = document.createElement('video');
        video.width = 560;  // ширина
        video.height = 315; // высота
        video.controls = true; // показывать элементы управления (пауза, громкость и т.д.)
        video.autoplay = true; // автоматическое воспроизведение
        
        // Указываем путь к вашему видеофайлу
        video.src = "videos/my_video.mp4"; // или просто "my_video.mp4" если в той же папке
        
        // Добавляем поддержку разных форматов (опционально)
        const source = document.createElement('source');
        source.src = "videos/my_video.mp4";
        source.type = "video/mp4";
        video.appendChild(source);
        
        // Добавляем текст, если браузер не поддерживает видео
        video.innerHTML += "Ваш браузер не поддерживает видео тег";
        
        // Добавляем видео на страницу
        document.body.appendChild(video);
    }
    else if (result>=90 && result <180)
    {
        alert('3');
    }
    else if (result>=180 && result<270)
    {
        alert('2');
    }
    else
    {
        alert('4');
    }
}
