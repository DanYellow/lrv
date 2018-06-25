import styled from 'styled-components';
import logo from './logo-white.png';

const Header = styled.header`
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
`;

const PageTitle = styled.section`
    position: relative;
    max-width: 950px;
    margin: 0 auto;
    border-top: 5px solid #D82383;
    
    @media only screen and (max-width: 768px) {
        margin: 0 15px;
    }


    h1 {
        position: absolute;
        top: -60px;
        padding: 7px 40px 7px 7px;
        background-color: #D82383;
        color: white;
        font-weight: bold;
        font-size: 2rem;
        z-index: 9;
    }
`

const Logo = styled.div`
    position: absolute;
    z-index: 7;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    top: 20%;
    color: white;
    font-size: 1.2rem;
    width: 80%;

    @media only screen and (max-width: 736px) and (orientation: landscape) {
        top: 10%;

        img {
            width: 20%;
        }
    }
`

export default (props) => {
    return (
        <Header>
            <Logo>
                <img src={logo} alt="" width="150" />
                <h1>
                    Pâtisserie spécialisée dans les petits desserts basée à Montréal.
                </h1>
            </Logo>
            {props.children}
            <PageTitle>
                <h1>
                    {props.pageTitle}
                </h1>
            </PageTitle>
        </Header>
    )
}
