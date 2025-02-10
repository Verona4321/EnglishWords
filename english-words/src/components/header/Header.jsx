// components/Header.js
import React from "react";
import "./Header.css"; // Импортируйте, если у вас есть стили

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>FLASHCARDS</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <div><a href="#home">Список слов</a></div>
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
