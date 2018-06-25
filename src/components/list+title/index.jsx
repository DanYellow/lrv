import styled from 'styled-components'

const bulletSize = 8; 
const ListTitle = styled.div`
    flex: 50%;
    padding: 2px;
    
    @media only screen and (min-width: 737px) and (max-width: 1024px) {
        margin-bottom: 17px;
        flex: 100%;
    }

    p {
        font-weight: bold;
        margin-bottom: 10px;
    }

    li {
        &:before {
            content: '';
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            display: inline-block;
            background-color: #D82383;
            border-radius: 50%;
            margin-right: 10px;
            margin-bottom: 5px;
            vertical-align: middle;
        }
    }
`

export default ({ title, list }) => (
  <ListTitle>
    <p>{title}</p>
    <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
  </ListTitle>
)
