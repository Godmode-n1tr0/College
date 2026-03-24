const btn = document.querySelector('.lang');
let stete = 1;

const textRus = `<div class="up">
            <div class="logo">ЮристПро</div>
            <nav class="menu_nav">
                <a href="#">Услуги</a>
                <a href="#">Юристы</a>
                <a href="#">Консультации</a>
            </nav>
            <div class="menu_contact">
                <a href="#"><img src="img/vk.png" alt="vk"> </a>
                <a href="#"><img src="img/ok.png" alt="ok"></a>
                <a href="#"><img src="img/MAX.png" alt="MAX"></a>
            </div>
        </div>
        <div class="content">
            <div class="content_text">
                <p class="content_slogan">Выбор лучших компаний</p>
                <h1 class="content_title">Ваш <a class = "content_title1">надежный</a> партнер в мире бизнеса</h1>
                <p class="content_desc">Комплексные юридические решения для роста и защиты вашего бизнеса - от стартапов до крупных корпораций</p>
            </div>
            <form action="" class="content_form">
                <div class="form_content">
                    <h2 class="form_title">Запишись на <a class="form_title1">консультацию</a> прямо сейчас</h2>
                    <div class="form_item">
                        <input type="text" name="" id="" placeholder="Введите Ваше фио">
                        <input type="text" name="" id="" placeholder="Введите Ваш номер телефона">
                        <input type="text" name="" id="" placeholder="Введите Ваш электронный адрес">
                    </div>
                    <button class="form_btn">Записаться</button>
                </div>
            </form>
        </div>`;

const textEng = `<div class="up">
    <div class="logo">LegalPro</div>
    <nav class="menu_nav">
        <a href="#">Services</a>
        <a href="#">Lawyers</a>
        <a href="#">Consulting</a>
    </nav>
    <div class="menu_contact">
        <a href="#"><img src="img/vk.png" alt="vk"> </a>
        <a href="#"><img src="img/ok.png" alt="ok"></a>
        <a href="#"><img src="img/MAX.png" alt="MAX"></a>
    </div>
</div>
<div class="content">
    <div class="content_text">
        <p class="content_slogan">The choice of the best companies</p>
        <h1 class="content_title">Your <a class = "content_title1">reliable</a> partner in the business world</h1>
        <p class="content_desc">Comprehensive legal solutions for the growth and protection of your business - from startups to large corporations</p>
    </div>
    <form action="" class="content_form">
        <div class="form_content">
            <h2 class="form_title">Sign up for a <a class="form_title1">consultation</a> right now</h2>
            <div class="form_item">
                <input type="text" name="" id="" placeholder="Enter your full name">
                <input type="text" name="" id="" placeholder="Enter your phone number">
                <input type="text" name="" id="" placeholder="Enter your email address">
            </div>
            <button class="form_btn">Sign up</button>
        </div>
    </form>
</div>`;

const textFran = `<div class="up">
            <div class="logo">JuristePro</div>
            <nav class="menu_nav">
                <a href="#">Services</a>
                <a href="#">Juristes</a>
                <a href="#">Consultations</a>
            </nav>
            <div class="menu_contact">
                <a href="#"><img src="img/vk.png" alt="vk"> </a>
                <a href="#"><img src="img/ok.png" alt="ok"></a>
                <a href="#"><img src="img/MAX.png" alt="MAX"></a>
            </div>
        </div>
        <div class="content">
            <div class="content_text">
                <p class="content_slogan">Le choix des meilleures entreprises</p>
                <h1 class="content_title">Votre <a class = "content_title1">partenaire</a> de confiance dans le monde des affaires</h1>
                <p class="content_desc">Solutions juridiques complètes pour la croissance et la protection de votre entreprise - des startups aux grandes entreprises</p>
            </div>
            <form action="" class="content_form">
                <div class="form_content">
                    <h2 class="form_title">Prenez rendez-vous pour une <a class="form_title1">consultation</a> dès maintenant</h2>
                    <div class="form_item">
                        <input type="text" name="" id="" placeholder="Entrez votre nom complet">
                        <input type="text" name="" id="" placeholder="Entrez votre numéro de téléphone">
                        <input type="text" name="" id="" placeholder="Entrez votre adresse e-mail">
                    </div>
                    <button class="form_btn">S'inscrire</button>
                </div>
            </form>
        </div>`;

btn.addEventListener('click', () => {
    if (stete == 1){
        btn.children[0].src = 'img/fran.png';
        document.querySelector('main').innerHTML = textEng;
        stete++;
    }
    else if (stete == 2){
        btn.children[0].src = 'img/rus.png';
        document.querySelector('main').innerHTML = textFran;
        stete++;
    }
    else if (stete == 3){
        btn.children[0].src = 'img/grb.png';
        document.querySelector('main').innerHTML = textRus;
        stete = 1;
    }
})