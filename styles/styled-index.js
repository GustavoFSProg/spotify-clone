import styled from 'styled-components'
import Image from 'next/image'

export const ContainerImage = styled.div`
  margin-left: 293px;
  margin-top: -492px;
  transition: ease 0.9s;
  transform: scale(1);
  width: 65px;
  border-radius: 100%;

  :hover {
    width: 70px;
    background: green;
    transform: scale(1);
  }
`
export const Imagem = styled.image`
  transition: ease 1.8s;
  transform: scale(1);
  background: green;

  :hover {
    width: 9999999px;
    background: red;
    transform: scale(1);
  }
`
