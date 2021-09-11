import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/Global'
import { Theme } from '../src/styles/themes/theme'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [isLogged, setIsLogged] = useState()
  const [data,setData]=useState()
  console.log(data,"santossss");
  console.log(pageProps,"pedra");
  const tema = Theme

  useEffect(() => {
    setIsLogged(localStorage.getItem('Logged'))
  }, []);
  return (
    <>
      <Head>
      <title>Barraca de Frutas</title>
      <link rel="shortcut icon" href="../logo.png" />
      </Head>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Header isLogged={isLogged} setData={setData}/>
        <Component {...pageProps} isLogged={isLogged} data={data} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
