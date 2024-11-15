import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logoHeader.png";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #282828;
    padding: 20px 10px;
    position: relative;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;

    @media screen and (max-width: 500px) {
        display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        background-color: #282828;
        padding: 20px;
        z-index: 1000;
    }
`;

const HeaderLink = styled.a`
    text-align: center;
    padding: 12px;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
        display: block;
        padding: 15px;
        transform: translateX(-10px);
        opacity: 0;
        
        &.visible {
            transform: translateX(0);
            opacity: 1;
        }
    }

    &:hover {
        background-color: #ddd;
        color: black;
    }

    &.active {
        background-color: #00ADB5;
        color: white;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1E1E1E;
    }
`;

const LogoImage = styled.img`
    height: 60px;
    width: auto;
`;

const Header = () => {
    const [activeLink, setActiveLink] = useState(true);

    const handleMouseEnter = (link) => {
        setActiveLink(link);
    };

    const handleMouseLeave = () => {
        setActiveLink(false);
    };

    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoImage src={logo} alt="Logo" />
            </LogoContainer>
            <Nav>
                <HeaderLink
                    href="#sobre"
                    className={activeLink === 'sobre' ? 'active' : ''}
                    onMouseEnter={() => handleMouseEnter('sobre')}
                    onMouseLeave={handleMouseLeave}
                    onClick={scrollToSection}
                >
                    Sobre mim
                </HeaderLink>
                <HeaderLink
                    href="#projetos"
                    className={activeLink === 'projetos' ? 'active' : ''}
                    onMouseEnter={() => handleMouseEnter('projetos')}
                    onMouseLeave={handleMouseLeave}
                    onClick={scrollToSection}
                >
                    Projetos
                </HeaderLink>
                <HeaderLink
                    href="#contato"
                    className={activeLink === 'contato' ? 'active' : ''}
                    onMouseEnter={() => handleMouseEnter('contato')}
                    onMouseLeave={handleMouseLeave}
                    onClick={scrollToSection}
                >
                    Contato
                </HeaderLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;