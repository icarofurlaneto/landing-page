import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    overflow: hidden;
    background-color: #282828;
    padding: 20px 10px;
`;

const Nav = styled.nav`
    float: right;

    @media screen and (max-width: 500px) {
        float: none;
`;

const HeaderLink = styled.a`
    float: left;
    text-align: center;
    padding: 12px;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    &:hover {
        background-color: #ddd;
        color: black;
    }

    &.active {
        background-color: #BB86FC;
        color: white;
    }
    
    @media screen and (max-width: 500px) {
        float: none;
        display: block;
        text-align: left;
    }
`;

const LinkLogo = styled(HeaderLink)`
    font-size: 25px;
    font-weight: bold;
`;



const Header = () => {
    return (
        <HeaderContainer>
            <LinkLogo href="#default" className="logo">Ícaro Developer</LinkLogo>
            <Nav>
                <HeaderLink href="#sobre" className="active">Sobre mim</HeaderLink>
                <HeaderLink href="#projetos">Projetos</HeaderLink>
                <HeaderLink href="#contato">Contato</HeaderLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;