import styled from 'styled-components'

import Cupcake from 'components/cupcakes/list-item'

const Cupcakes = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default props => (
  <Cupcakes>
    {props.data.map(cupcake => {
      return <Cupcake key={cupcake.node.id} {...cupcake.node} />
    })}
  </Cupcakes>
)
