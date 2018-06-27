import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReactStringReplace from 'react-string-replace'

import PageTitle from 'components/page-title';

import { COLOR_PINK } from 'config/variables'

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
    background: ${COLOR_PINK};
    z-index: -1;
  }

  span {
    font-weight: bold;
    background:  #fbf5fd;
    padding: 0 10px;
  }
`

const Price = styled.h3`
  color:  ${COLOR_PINK};
  font-size: 3rem;
  font-weight: bold;
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
`

const PriceInline = styled.span`
  color: ${COLOR_PINK};
  font-weight: bold;
  font-size: 1.05rem;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;

    @media only screen and (max-width: 736px) {
        flex-direction: column;
    }
`

const Title = styled.h1`
  display: inline-block;
  margin-bottom: 17px;
  padding-right: 25px;
  font-size: 2.5rem;
  border-bottom: 5px solid ${COLOR_PINK};
`

const Paragraph = styled.p`
    padding: 2px;
    margin-bottom: 15px;
`

const Verrines = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 45%;
    flex-grow: 0;
    margin-bottom: 25px;
    padding-right: 25px;

    @media only screen and (max-width: 736px) {
      flex: 1 auto;
    }

    h6 {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`

const Footer = styled.footer`
  margin-top: 25px;

  p {
    font-weight: bold;
  }
`

const listA = {
  title: 'Choisissez une saveur de gâteau entre :',
  list: ['Vanille', 'Chocolat', 'Red Velvet'],
}

const listB = {
  title: 'Puis agencez-la avec un glaçage :',
  list: [
    'Crème fouettée à la vanille',
    'Vanille traditionnelle',
    'Fromage à la crème',
    'Chocolat',
  ],
}

const listVerrines = [
  {
    title: 'Le shortcake aux fraises',
    description:
      'Un gâteau à la vanille accompagné d’une sauce à la fraise et de la crème fouettée. (__price__ chacun)',
    price: '2,75',
  },
  {
    title: 'Gâteau au fromage traditionnel',
    description:
      'Un délicieux gâteau au fromage à la New Yorkaise (__price__ chacun)',
    price: '2,25',
  },
  {
    title: 'La canadienne',
    description:
      'Un gâteau à la vanille accompagné d’une sauce maison à la pomme et l’érable. (__price__ chacun)',
    price: '2,75',
  },
  {
    title: 'Mousse au chocolat',
    description:
      'Une mousse veloutée au chocolat blanc ou au chocolat au lait. (__price__ chacun)',
    price: '2,75',
  },
  {
    title: 'Gâteau au fromage aux oreos',
    description:
      'Un gâteau fromage crémeux garni de vos biscuits préférés. (__price__ chacun)',
    price: '2,25',
  },
]



const IndexPage = props => {
  return (
    <div>
      <PageTitle title="Services" />
      <Title>Nos cupcakes</Title>
      <Paragraph>Optez pour un cupcake traditionnel</Paragraph>
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
      <Paragraph>Laissez-vous séduire par nos cupcakes maison</Paragraph>
      <Cupcakes data={props.data.allCupcakesJson.edges} />
      <PriceContainer>
        <Price>18$</Price>
        <span>pour une demi-douzaine</span>
      </PriceContainer>

      <Title>Nos verrines</Title>
      <Paragraph>
        Changez vos cupcakes en verrine pour{' '}
        <PriceInline>0,25&nbsp;$</PriceInline> de plus l’unité.
      </Paragraph>
      <Verrines>
        {listVerrines.map(({ title, description, price }) => {
          return (
            <li key={title}>
              <h6>{title}</h6>
              <p>
                {ReactStringReplace(description, '__price__', (match, i) => (
                  <PriceInline>{price} $</PriceInline>
                ))}
              </p>
            </li>
          )
        })}
      </Verrines>
      <Footer>
        <p>
          Laissez-nous vous accompagner lors de votre célébration.
          Contactez-nous pour une table à desserts. <br />
          Nous en avons pour tous les goûts et tous les budgets.
        </p>
      </Footer>
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
