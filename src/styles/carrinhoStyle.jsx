import styled from 'styled-components'

export const CarEmpty = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin:20px;
    p{
    font-size: 24px;
    font-weight: bold;
    font-family: cursive;
    color:${props => props.theme.primary}
    }
`