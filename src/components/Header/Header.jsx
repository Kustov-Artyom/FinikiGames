import "./Header.css";

function Header() {
    return (
        <header className="header">
            <a href="#" className="header__logo">
                <img src="./logo.svg" alt="logo" />
            </a>

            <nav className="header__nav">
                <a href="#">Лор</a>
                <a href="#">Медиа</a>
                <a href="#">Игра</a>
                <a href="#">Сообщество</a>
                <a href="#">Награды</a>
                <a href="#">Контакты</a>
            </nav>

            <div className="header__actions">
                <input
                    type="text"
                    placeholder="Поиск"
                    disabled
                />
                <button className="login">Войти</button>
                <button className="download">Скачать</button>
            </div>
        </header>
    );
}

export default Header;