import styled from 'styled-components'
import Image from 'next/image'

export const ContainerImage = styled.div`
  margin-left: 293px;
  margin-top: -492px;
  transition: ease 1.8s;
  transform: scale(1);
  background: green;
  width: 350px;

  :hover {
    width: 400px;
    background: red;
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
