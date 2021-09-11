import styled from 'styled-components'

export const Content = styled.div`
    margin: 4% auto;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    grid-gap: 0 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`
export const BoxConteudo = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`

export const BoxNomePrice = styled.div`
margin-right: 50px
`
export const Medida = styled.span`
color:black;
font-size:14px;
margin-left:3px
`

export const Box = styled.div`
    margin: 20px 0;
    text-align: center;
    width: 100%;
    background-color: white;
    transition: all .3s ease-out;
    img{
         
        height: 120px;
        margin-top: 10px;     
        margin-bottom: 10px;
        margin-left: 30px;

    }

    p{
        margin: 10px 0;
    }

    :hover{
        transition: all .3s ease-out;
        transform: scale(1.05);
    }
`

export const Pricing = styled.div`
    margin-bottom: 10px;
    font-size: 2em;
    font-weight: bold;
    color: #f58e0a;
    sup{
        font-size: .5em;
    }
`

