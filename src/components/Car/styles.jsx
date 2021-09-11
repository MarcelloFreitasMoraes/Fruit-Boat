import styled from 'styled-components'

export const Details = styled.main`
    padding: 40px 0;
`
export const BoxTitle = styled.main`
color: white;
display: flex;
background: #f58e0a;
justify-content: space-between;
padding: 5px 15px 5px 35px;

    p{
        width: 22%;
    }
`

export const Grid = styled.div`

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
    margin-right: 2%;
    width: 100%;
`

export const Aside = styled.aside`
    background-color: white;
    width: 20%;
    height: 100%;
    padding: 20px;
    display: flex;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Content = styled.section`
    background-color: white;
    display: flex;
    margin-bottom: 20px;
    position: relative;
    justify-content: space-between;
    padding: 5px 15px 5px 35px;
    align-items: center;


    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`

export const Product = styled.div`
    display: flex;
    align-items: center;
    width: 22%;
    
    h2{
        font-size: 16px;
    }

    img{
        width: 150px;
        border-radius: 10px;
    }





`
export const Detail = styled.div`
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    button:hover{
        background-color: ${props => props.theme.hoverPrimary}
    }

    @media screen and (max-width: 768px) {
        padding-top: 40px;
    }
`

export const Quantidade = styled.p`
font-size: 18px;
font-weight: bold;
width: 22%;

`

export const ListProducts = styled.ul`
    margin: 10px 0;

    li{
        color: #9e9e9e;
        font-size: .8em;
    }

    sup {
        font-size: .5em;
    }
`

export const Total = styled.sup`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    h3{
        text-transform: uppercase;
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
    }

    span{
        font-weight: bolder;
    }
`

export const Finish = styled.div`
    p{
        font-size: 20px;
    font-weight: bold;
    color: #f58e0a;
    }

    div > a{
        background-color: ${props => props.theme.primary};
        padding: 10px 25px;
        border-radius: 5px;
        color: white;
        transition: all .3s ease;

        :hover{
            background-color: ${props => props.theme.secondary};
            color: white;
        }
    }
`

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Price = styled.p`
font-size: 18px;
font-weight: bold;
width: 22%;
color: #f58e0a;
`

export const Delete = styled.div`
    width: 22%;
    cursor: pointer;
    margin:20px;

    img {
        width: 15px;
    }
    span {
        font-size: 12px;
    }
`