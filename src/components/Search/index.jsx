import { Container } from "../../styles/Global";
import * as S from "./styles";
import { FaSearch } from 'react-icons/fa'

export default function Search({ setBusca }) {
 
  return (
    <S.Content>
      <Container>
        <S.Wrapper>
          <S.Form>
            <input
              type="text"
              placeholder="Faça sua busca"
              onChange={(ev) => setBusca(ev.target.value)}
            />
            <S.Icon onClick={(e) =>{ 
              e.preventDefault()
              resultSearch()
            }}>
              <FaSearch />
            </S.Icon>
          </S.Form>
        </S.Wrapper>
      </Container>
    </S.Content>
  );
}
