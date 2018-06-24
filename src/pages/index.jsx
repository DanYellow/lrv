import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Cupcakes from 'components/cupcakes/list'
import ListTitle from 'components/list+title'

const Separator = styled.section`
  padding: 5px;
  margin: 19px auto;
  text-align: center;
  position: relative;
  &:after {
    content: '';
    left: 40%;
    right: 40%;
    top: 50%;
    height: 1px;
    position: absolute;
    transform: translateY(-50%);
    background: #D82383;
    z-index: -1;
  }

  span {
    font-weight: bold;
    background:  #fbf5fd;
    padding: 0 10px;
  }
`

const Price = styled.h3`
  color:  #D82383;
  font-size: 3rem;
  font-weight: bold;
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;

    @media only screen and (max-width: 736px) {
        flex-direction: column;
    }
`

const listA = {
  title: 'Choisissez une saveur de gâteau entre :',
  list: ['Vanille', 'Chocolat', 'Red Velvet'],
}

const listB = {
  title: 'Puis agencez-la avec un glaçage :',
  list: ['Crème fouettée à la vanille', 'Vanille traditionnelle', 'Fromage à la crème', 'Chocolat'],

}

const IndexPage = props => {
  return (
    <div>
      <section>Optez pour un cupcake traditionnel</section>
      <ListContainer>
        <ListTitle {...listA} />
        <ListTitle {...listB} />
      </ListContainer>
      <PriceContainer>
        <Price>15$</Price>
        <span>pour une demi-douzaine</span>
      </PriceContainer>
      <Separator>
        <span>OU</span>
      </Separator>
      <section>Laissez-vous séduire par nos cupcakes maison</section>
      <Cupcakes data={props.data.allCupcakesJson.edges} />
      <PriceContainer>
        <Price>18$</Price>
        <span>pour une demi-douzaine</span>
      </PriceContainer>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query CupcakesQuery {
		allCupcakesJson {
		  edges {
			node {
				id,
			  title,
			  description,
			  image
			}
		  }
		}
  }
`
