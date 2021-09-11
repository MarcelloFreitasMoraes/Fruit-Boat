import React, { useState, useEffect } from 'react'
import Car from '../src/components/Car'
import axios from 'axios'
import * as S from '../src/styles/carrinhoStyle'

export default function listProducts() {
  const [data, setData] = useState()

  const url = "https://barraca-de-frutas-default-rtdb.firebaseio.com/Frutas/checkout.json"

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data) {
        setData(Object.entries(res.data));
      }
    })
  }, []);

  return (
    <>
      {data ? (
        <Car data={data} />
      ) : (
        <S.CarEmpty>
          <p>Carrinho Vazio</p>
          <img src="../carrinho-vazio.svg" alt="carrinho-vazio" />
        </S.CarEmpty>
      )}
    </>
  )
}
