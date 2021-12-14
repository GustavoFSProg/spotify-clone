import styled from 'styled-components'
import Image from 'next/image'

export const ContainerImage = styled.div`
  margin-left: 293px;
  margin-top: -492px;
  transition: 0.2s;
  transform: scale(1);
  width: 65px;
  border-radius: 100%;

  :hover {
    width: 70px;
    transform: scale(1);
  }
`
export const Imagem = styled.image`
  transition: ease 0.1s;
  transform: scale(1);
  background: green;

  :hover {
    width: 9999999px;
    background: red;
    transform: scale(1);
  }
`
