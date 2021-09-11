import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const style = StyleSheet.create({
  page: {
    flexDirection: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0'
  },
  box: { margin: 10,fontSize:'10px' },
  flex: {
    width: 200,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize:"10px"
  },
  title: {
    textAlign: 'center',
    fontSize:"15px"
  },
  total:{
    fontSize:"20px",
    marginTop:"8px",
    alignSelf:"flex-end"
  },
  margin:{
    marginTop:"20px"
  }
});

const MyPdf = ({ data, total }) => (

  <Document>
    <Page size="A6" style={style.page}>
      <View style={style.margin}></View>

      <View style={style.box}>
        <Text>BARRACA DE FRUTAS</Text>
      </View>

      <View style={style.box}>
        <Text>RUA: CRISTOVAO COLOMBO, 99 - Ribeirão Pires</Text>
        <Text>CEP: 99999-999- SÃO PAULO- SP</Text>
      </View>

      <View style={style.box}>
        <Text>CUPOM FISCAL</Text>
      </View>

      <View>
        <Text style={style.title}>Produto</Text>
        {data?.map(item => {
          return (
            <>
              <View style={style.flex}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            </>
          )
        })}
        

        <View style={style.total}>
          <Text>Total: <sup>R$</sup>{total}</Text>
        </View>

      </View>
    </Page>
  </Document>
);

export default MyPdf