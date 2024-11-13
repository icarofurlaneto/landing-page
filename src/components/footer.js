import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #282828;
    padding: 20px 0;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const SocialLinks = styled.div`
    margin-bottom: 20px;

    a {
        color: #00000;
        font-size: 24px;
        margin: 0 15px;
        transition: color 0.3s ease;

        &:hover {
            color: #00ADB5;
        }
    }
`;

const Copyright = styled.p`
    color: #888;
    font-size: 14px;
    margin: 0;
`;


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <FooterContent>
                <SocialLinks>
                    <a href="https://github.com/icarofurlaneto" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/%C3%ADcaro-furlaneto-a7a268264/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </SocialLinks>
                <Copyright>
                    <p>&copy; {currentYear} ÍcaroDev. Todos os direitos reservados.</p>
                </Copyright>
            </FooterContent>
        </StyledFooter>
    );
};

export default Footer;