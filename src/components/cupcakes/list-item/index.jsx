import styled from 'styled-components';

const Cupcake = styled.li`
    flex: 33%;
    padding: 2px;
    margin-bottom: 30px;
    flex-grow: 0;
    font-family: 'latoregular';

    @media only screen and (min-width: 737px) and (max-width: 1024px) and (orientation: landscape),
    screen and (max-width: 736px) and (orientation: landscape) {
      flex: 50%;
    }

    @media only screen and (max-width: 736px) and (orientation: portrait) {
      flex: 100%;
    }

    p {
      margin-top: 3px;
    }
`;

const Title = styled.figcaption`
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  color: white;
  background-color: #D82383;
  padding: 5px;
  border-bottom: 2px solid rgb(112, 3, 61);
`

const Image = styled.figure`
  position: relative;
  margin-bottom: 7px;

  img {
    width: 100%;
  }
`

export default ({title, description, image}) => (
  <Cupcake>
    <Image>
      <img src={image} alt="" />
      <Title>{title}</Title>
    </Image>
    <p>
      { description }
    </p>
  </Cupcake>
)
