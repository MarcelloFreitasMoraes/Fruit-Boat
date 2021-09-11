import React, { useState, useEffect } from 'react'
import Car from '../src/components/Car'
import axios from 'axios'
import * as S from '../src/styles/carrinhoStyle'

export default function listProducts() {
  const [data, setData] = useState()
  console.log(data, "datassssss");

  const url = "https://barraca-de-frutas-default-rtdb.firebaseio.com/Frutas/checkout.json"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res, "resposta");
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
          <img src="../carrinho-vazio.svg" alt="" />
        </S.CarEmpty>
      )}
    </>
  )
}
