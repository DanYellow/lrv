import styled from 'styled-components';
import { COLOR_PINK } from 'config/variables'


const Navigation = styled.nav`
    width: 100%;
    max-width: 950px;
    margin: 25px auto;
    color: white;
    z-index: 2;
    position: relative;
    font-size: 1.3rem;

    ul {
        display: flex;

        @media only screen and (max-width: 736px) {
            justify-content: space-around;
            width: 100%;
        }


        li {
            margin-right: 10px;

            .active {
                &:after {
                    transform: scaleX(1);
                }
            }

            &:hover, &:active {
                &:after {
                    transform: scaleX(1);
                }
            }

            &:after {
                content: '';
                transform: scaleX(0);
                display: block;
                transform-origin: center left;
                transition: transform 0.25s;
                height: 3px;
                margin-top: 5px;
                background-color: ${COLOR_PINK};
            }

            a {
                color: white;
            }
        }
    }
`

export default (props) => {
    return (
        <Navigation>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li>Galerie</li>
                <li>Contact</li>
            </ul>
        </Navigation>
    )
}
