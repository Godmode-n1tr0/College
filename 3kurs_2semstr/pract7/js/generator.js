// Объявление переменных для элементов интерфейса
const lengthSlider = document.querySelector('.polzunochek'); // Ползунок длины
const passwordField = document.getElementById('pole'); // Поле для отображения пароля
const generateButton = document.getElementById('gener'); // Кнопка генерации

// Переменные для чекбоксов
const uppercaseCheckbox = document.getElementById('vverh'); // Верхний регистр
const lowercaseCheckbox = document.getElementById('niz'); // Нижний регистр
const numbersCheckbox = document.getElementById('cifri'); // Цифры
const symbolsCheckbox = document.getElementById('simvol'); // Специальные символы

// Наборы символов для генерации пароля
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Функция для генерации случайного символа из строки
function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}

// Функция для перемешивания строки (чтобы пароль был более случайным)
function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

// Основная функция генерации пароля
function generatePassword() {
    // Получаем выбранную длину из ползунка
    const length = parseInt(lengthSlider.value);
    
    // Проверяем, какие опции выбраны
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;
    
    // Если не выбрано ни одной опции, показываем сообщение об ошибке
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        passwordField.textContent = 'Выберите хотя бы 1 условие';
        return;
    }
    
    // Собираем доступные символы на основе выбранных опций
    let availableChars = '';
    if (includeUppercase) availableChars += uppercaseLetters;
    if (includeLowercase) availableChars += lowercaseLetters;
    if (includeNumbers) availableChars += numbers;
    if (includeSymbols) availableChars += symbols;
    
    // Гарантируем, что в пароле будет хотя бы по одному символу из каждой выбранной категории
    let password = '';
    
    // Добавляем гарантированные символы из каждой выбранной категории
    if (includeUppercase) password += getRandomChar(uppercaseLetters);
    if (includeLowercase) password += getRandomChar(lowercaseLetters);
    if (includeNumbers) password += getRandomChar(numbers);
    if (includeSymbols) password += getRandomChar(symbols);
    
    // Дополняем пароль случайными символами до нужной длины
    const remainingLength = length - password.length;
    for (let i = 0; i < remainingLength; i++) {
        password += getRandomChar(availableChars);
    }
    
    // Перемешиваем пароль для большей случайности
    password = shuffleString(password);
    
    // Отображаем сгенерированный пароль
    passwordField.textContent = password;
}

// Функция для обновления отображения текущей длины
function updateLengthDisplay() {
    // Если нужно отображать текущую длину рядом с ползунком, можно добавить элемент для этого
    // В текущем коде просто получаем значение из ползунка
    return lengthSlider.value;
}

// Добавляем обработчик события для кнопки генерации
generateButton.addEventListener('click', generatePassword);

// Можно также добавить генерацию пароля при изменении ползунка
lengthSlider.addEventListener('input', function() {
    // Опционально: можно генерировать новый пароль при изменении длины
    // generatePassword();
    
    // Или просто обновлять отображение текущей длины
    const currentLength = updateLengthDisplay();
    // console.log(`Текущая длина: ${currentLength}`);
});

