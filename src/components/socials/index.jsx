import React from 'react'
import styled from 'styled-components'

import { COLOR_PINK } from 'config/colors'

const Socials = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  margin-left: 10px;

  @media only screen and (min-width: 1025px) {
    li {
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 736px) {
    margin-top: 15px;
    font-size: 3rem;
  }

  @media only screen and (min-width: 737px) and (max-width: 1024px) {
    font-size: 3rem;
  }

  a {
    color: black;

    &:hover,
    &:active {
      color: ${COLOR_PINK};
    }
  }
`

export default ({ data }) => {
  return (
    <Socials>
      {data.map(social => {
        return (
          <li key={social.url}>
            <a href={social.url}>
              <i className={`icon icon-${social.icon}`} />
            </a>
          </li>
        )
      })}
    </Socials>
  )
}
