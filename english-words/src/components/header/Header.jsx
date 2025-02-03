// components/Header.js
import React from "react";
import "./Header.css"; // Импортируйте, если у вас есть стили

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Изучаем английские слова</h1>
            </div>
            <nav className="navigation">
                <img src="URL_К_ВАШЕМУ_ИЗОБРАЖЕНИЮ" alt="Логотип" />
                <ul>
                    <li>
                        <a href="#home">Главная</a>
                    </li>
                    <li>
                        <a href="#about">О нас</a>
                    </li>
                    <li>
                        <a href="#services">Услуги</a>
                    </li>
                    <li>
                        <a href="#contact">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
