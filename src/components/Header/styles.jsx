import styled from "styled-components";


export const Logo = styled.img`
    width: 80px;
`
export const Content = styled.header`
    background-color: ${props => props.theme.primary};
    padding: 0 0;
    position: relative;
    z-index: 9;
`

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const TxtLogo = styled.p`
    color:#f36b21;
    font-size:24px;
    font-family: cursive;
    
    span: {
        font-size:20px;
    }
`

export const Brand = styled.div`
display: flex;
align-items: center;
`

export const Nav = styled.nav`
    ul {
        display: flex;
    }

    li {
        margin: 0 20px;
    }

    a{
        color: white;
    }

    a:hover{
        color: ${props => props.theme.hoverPrimary};
    }

    @media screen and (max-width: 768px) {
        li{
            margin: 20px;
        }
    }
`

export const Icons = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: green;
    button,a{
        cursor: pointer;
        color: white;
        font-size: 24px;
        font-weight:300px;
        background-color: transparent;
    }

    @media screen and (max-width: 768px) {
        width: 20%;
    }
`