const theme = document.querySelector('.theme_btn');
let state = true;

theme.addEventListener('click', () => {
    if (state)
    {
        theme.children[0].src = 'img/light-icon.png';
        document.querySelector('link').href = 'style/dark.css';
    }
    else
    {
        theme.children[0].src = 'img/dark-icon.png';
        document.querySelector('link').href = 'style/light.css';
    }
    state = !state;
})