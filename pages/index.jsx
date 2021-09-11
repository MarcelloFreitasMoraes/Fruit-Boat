import Head from 'next/head'
import Products from '../src/components/Products'
import axios from "axios";
import { useState,useEffect } from 'react'

export default function Home({isLogged,data}) {
  const [result, setResult] = useState()

  const url = "https://barraca-de-frutas-default-rtdb.firebaseio.com/Frutas/list.json"

  useEffect(() => {
    axios.get(url).then((res) => {

      const filterProducts = res.data.filter(item =>{
        return item !== null 
      })
      setResult(filterProducts);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Barraca de Frutas | Página Inicial</title>
      </Head>
      <Products result={result} isLogged={isLogged} data={data} />
    </>
  )
}
