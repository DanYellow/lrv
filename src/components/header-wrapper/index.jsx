import styled from 'styled-components';

const Header = styled.header`
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;

    &:after {
        content: '';
        height: 5px;
        max-width: 1000px;
        background-color: #D82383;
        position: absolute;
        bottom: 0;
        z-index: 9;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const PageTitle = styled.section`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;

    h1 {
        position: absolute;
        top: -60px;
        padding: 7px 40px 7px 7px;
        background-color: #D82383;
        color: white;
        font-weight: bold;
        font-size: 2rem;
    }
`

export default (props) => {
    return (
        <Header>
            {props.children}
            <PageTitle>
                <h1>
                    {props.pageTitle}
                </h1>
            </PageTitle>
        </Header>
    )
}
