import { Header, Nav, StyledLink, StyledButton } from './NavBar.styled';

const NavBar = () => {
    return (
        <Header>
            <Nav>
                <StyledLink $new to="https://tutorez.com.ua">
                    Головна
                </StyledLink>
                <StyledLink $new to="/note-book/referral">
                    Запрошення
                </StyledLink>
                <StyledButton $new type="button">
                    Промокод
                </StyledButton>
            </Nav>
        </Header>
    );
};

export default NavBar;
