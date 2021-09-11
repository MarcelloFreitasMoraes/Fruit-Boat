import { useState, useEffect } from "react";
import { Container } from "../../styles/Global";
import * as S from "./styles";
import { PDFDownloadLink } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import PdfDocument from '../ReportPdf';
import axios from 'axios'

export default function Car({ data }) {
  const [fruitsSelected, setFruitsSelected] = useState();

  useEffect(() => {
    if (data) {
      const newArray = data.map(item => item[1])
      setFruitsSelected(newArray.filter(item => item !== 'lock'))
    }
  }, [data]);

  const prices = fruitsSelected?.map((som) => {
    return parseFloat(som.price.replace(',', '.'));
  });

  const totalCheckout = prices?.reduce((acumulado, x) => {
    return acumulado + x;
  });

  const url = `https://barraca-de-frutas-default-rtdb.firebaseio.com/Frutas/checkout.json`
  const deleteCheckout = (dados) => {
    axios.delete(url, {
      image: `${dados.image}`,
      name: `${dados.name}`,
      price: `${dados.price}`
    }
    ).then((res) => {
  document.location.reload(true);

    })
  };

  const total = totalCheckout?.toString().replace('.', ',');
  return (
    <S.Details>
      <Container>
        <S.Grid>
          <S.Wrapper>
            <S.BoxTitle>
              <p>Produto</p>
              <p>Quantidade</p>
              <p>Preço</p>
              <p>Opções</p>
            </S.BoxTitle>
            {
              fruitsSelected && fruitsSelected.map(fruit => {
                return (
                  <S.Content key={fruit}>

                    <S.Product>
                      <img src={fruit.image} alt={fruit.name} />
                      <h2>{fruit.name}</h2>
                    </S.Product>
                    <S.Quantidade>1</S.Quantidade>
                    <S.Price>
                      R${fruit.price}
                    </S.Price>
                  </S.Content>
                )
              })
            }
            <S.Delete onClick={() => deleteCheckout(fruitsSelected)}>
              <img src='./excluir.svg' /> <span>Limpar Carrinho</span>
            </S.Delete>
          </S.Wrapper>
          <S.Aside>
            <S.Finish>
              <S.Total>
                <h3>Total: </h3>
                <p>R$ {total}</p>
              </S.Total>

              <div onClick={()=>deleteCheckout(fruitsSelected)}>
                <PDFDownloadLink
                  document={<PdfDocument data={fruitsSelected} total={total} />}
                  fileName="boleto.pdf">
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Finalizar Compra'
                  }
                </PDFDownloadLink>
              </div>
            </S.Finish>
          </S.Aside>
        </S.Grid>
      </Container>
    </S.Details>
  );
}
