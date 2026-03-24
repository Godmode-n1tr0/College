//надпись
let absolute=document.querySelector('.Fate');
//кнопка
let btn=document.querySelector('.FateGenerator')
//шар
let circle=document.querySelector('.circle')
//куда будет записываться рандом
let turn=0;

//массив строк
const isagi=['нет','да','возможно','не думаю', 'Demon King of Blue Lock']

//кнопочный обработчик
btn.addEventListener('click',()=>{

    //обнуление
    absolute.textContent = "";    
    //удаление класса 
    circle.classList.remove('animation')
    //вывод строки
    turn=Math.floor(Math.random()*isagi.length);

    //Добавление нового класса
    requestAnimationFrame (() => {
        circle.classList.add('animation')
    })
    //таймаут
    setTimeout( () =>
    {
        absolute.textContent=isagi[turn];
        if (isagi[turn] == "Demon King of Blue Lock"){
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
    },1000);
    
    
    
})
