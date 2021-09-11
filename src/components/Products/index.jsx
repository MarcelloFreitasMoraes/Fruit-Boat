import { useState } from 'react'
import * as S from './styles'
import { Container } from '../../styles/Global'
import Checked from '../Checked'
import axios from 'axios'
import Button from '../Button'

export default function Products({ result, isLogged, data }) {
    const [check, setCheck] = useState(false)

    const openChecked = () => {
        setCheck(prev => !prev)
    }


    const url = "https://barraca-de-frutas-default-rtdb.firebaseio.com/Frutas/checkout.json"

    const addCheckout = (dados) => {
        axios.post(url, 
        {
            image: `${dados.image}`,
            name: `${dados.name}`,
            price: `${dados.price}`
        }
        ).then((res) => {
            openChecked()
        })
    };

    return (
        <S.Content>
            <Container>
                <S.Grid>
                    {data?.map((item,index) => {
                        return (
                            <S.Box key={item.name}>   
                                <S.BoxConteudo>                             
                                <img src={item.image} />   
                                <S.BoxNomePrice>                             
                                <h2>{item.name}</h2>                                
                                <S.Pricing>
                                    <sup>R$</sup><span>{item.price}</span><S.Medida>{item.medida}</S.Medida>
                                </S.Pricing>
                                </S.BoxNomePrice>
                                </S.BoxConteudo>
                                {isLogged ? (
                                    <Button
                                        onClick={() => {
                                            addCheckout(item)
                                        }}
                                        label="Adicionar ao Carrinho"
                                    />
                                ) : (
                                    <Button
                                        label="Faça login"
                                        disabled
                                    />
                                )}
                            </S.Box>
                        )
                    })}

                </S.Grid>
                <Checked check={check} setCheck={setCheck} />
            </Container>
        </S.Content>
    )
}
