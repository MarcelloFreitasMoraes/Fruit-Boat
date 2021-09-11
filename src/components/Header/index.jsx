import { useState,useEffect } from "react";
import * as S from "./styles";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Container } from "../../styles/Global";
import Modal from "../Modal";
import Search from "../Search";
import axios from "axios";

export default function Header({isLogged, setData }) {
  const [showModal, setShowModal] = useState(false);
  const [busca, setBusca] = useState();
  // const [data, setData] = useState()
  const [reference, setReference] = useState()


  // console.log(data,"tigre");
  // console.log(busca,"leao");

  const url = "https://barraca-de-frutas-default-rtdb.firebaseio.com/Frutas/list.json"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data, 'data')

      const filterProducts = res.data.filter(item =>{
        return item !== null 
      })
      setData(filterProducts);
      setReference(filterProducts)
    });
  }, []);

  useEffect(() => {
    const lowerBusca = busca?.toLowerCase()
    setData(reference?.filter((fruta) =>
      fruta.name.toLowerCase().includes(lowerBusca)
    ))
  }, [busca]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <S.Content>
      <Container>
        <S.Grid>
          <S.Brand>
          <a href="/">   
          <S.Logo src="./logo.png"/>
          </a>            
              <S.TxtLogo>BARRACA <span>de</span> FRUTAS</S.TxtLogo>
            
          </S.Brand>

          <S.Nav>
            <Search setBusca={setBusca}/>
          </S.Nav>

          <S.Icons>
            <a href="/carrinho">
              <FaShoppingCart />
            </a>

            <button onClick={openModal}>
              <FaUser />
            </button>
          </S.Icons>
        </S.Grid>
        <Modal showModal={showModal} setShowModal={setShowModal} isLogged={isLogged} />
      </Container>
    </S.Content>
  );
}
