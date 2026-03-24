// Ожидаем полной загрузки DOM перед выполнением кода
document.addEventListener("DOMContentLoaded", () => {
    
    // Устанавливаем дату окончания отсчета (по умолчанию 13 января 2026, 00:17:00)
    let endDate = new Date("January 13, 2026 00:17:00").getTime();
    
    // Объявляем переменные для хранения:
    let now           // Текущее время
    let timeleft  
    let days          // Количество дней
    let hours         // Количество часов
    let minutes       // Количество минут
    let date          // Дата, введенная пользователем
    let seconds       // Количество секунд
    
    // Устанавливаем интервал обновления каждую секунду (1000 мс)
    setInterval(() => {
        
        // Получаем значение из поля ввода с id="dates"
        date = document.getElementById("dates").value;
        
        // Добавляем обработчик клика на кнопку с id="d"
        document.getElementById("d").addEventListener('click', () => {
            // При клике обновляем дату окончания из поля ввода
            endDate = new Date(date).getTime();
        })
        
        // Получаем текущее время в миллисекундах
        now = new Date().getTime();
        // Вычисляем разницу между конечной и текущей датой
        timeleft = endDate - now;
        
        // Вычисляем количество дней (целое число)
        days = Math.floor(timeleft / (1000*60*60*24));
        // Вычисляем оставшиеся часы после выделения дней
        hours = Math.floor((timeleft % (1000*60*60*24)) / (1000*60*60));
        // Вычисляем оставшиеся минуты после выделения часов
        minutes = Math.floor(timeleft % (1000*60*60) / (1000*60));
        // Вычисляем оставшиеся секунды после выделения минут
        seconds = Math.floor(timeleft % (1000*60) / 1000);
        
        // Функция для склонения слова "день" в зависимости от количества
        function formatDay() {
            // Правила для русского языка:
            if (days == 0 || (days >= 5 && days <=20)){
                return "дней";          // 0, 5-20 дней
            }
            else if((days % 10) === 1){
                return "день";          // 1, 21, 31... день
            }
            else if ([2, 3, 4].includes(days % 10)){
                return "дня";           // 2-4, 22-24 дня
            }
            else{
                return "дней";          // остальные случаи
            }
        }
        
        // Функция для склонения слова "час"
        function formatHours() {
            if (hours == 0 || ((5 <= hours) && hours <= 20)){
                return "часов";         // 0, 5-20 часов
            }
            else if ((hours >= 2 && hours <=4) || (hours >=22 && hours <= 23) ){
                return "часа";          // 2-4, 22-23 часа
            }
            else{
                return "час";           // 1, 21 час
            }
        }
        
        // Функция для склонения слова "минута"
        function formatMinutes() {
            // 1, 21, 31... минута (но не 11)
            if (minutes % 10 == 1 && minutes != 11 ){
                return "минута";
            }
            // 2-4, 22-24 минуты (но не 12-14)
            else if((minutes % 10 == 2 || minutes % 10 == 3 || minutes % 10 == 4) 
                    && minutes != 14 && minutes != 12 && minutes != 13){
                return "минуты";
            }
            else{
                return "минут";         // остальные случаи
            }
        }
        
        // Функция для склонения слова "секунда"
        function formatSeconds() {
            // 1, 21, 31... секунда (но не 11)
            if (seconds % 10 == 1 && seconds != 11){
                return "секунда";
            }
            // 2-4, 22-24 секунды (но не 12-14)
            else if((seconds % 10 == 2 || seconds % 10 == 3 || seconds % 10 == 4) 
                    && seconds != 14 && seconds != 12 && seconds != 13){
                return "секунды";
            }
            else{
                return "секунд";        // остальные случаи
            }
        }
        
        // Проверяем, не истекло ли время
        if (timeleft <= 0) {
            // Если время вышло, показываем сообщение
            return document.getElementById("days").textContent = "Время вышло";
        }
        
        // Обновляем отображение времени с правильными окончаниями:
        document.getElementById("days").textContent = (days + " " +  formatDay());
        document.getElementById("hours").textContent = (hours + " " +  formatHours());
        document.getElementById("minutes").textContent = (minutes + " " +  formatMinutes());
        document.getElementById("seconds").textContent = (seconds + " " +  formatSeconds());
        
    }, 1000); // Интервал обновления: 1000 мс = 1 секунда
})