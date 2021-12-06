import styled from 'styled-components'

export const Buttom = styled.button`
  width: 120px;
  display: flex;
  border: none;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  background: none;
  color: white;
  margin: 0;
  padding: 0;
  font-size: 13px;

  :hover {
    background: lightgrey;
    transition: 0.7s;
  }
`
export const Container = styled.div`
  background: black;
  width: 20%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const PlayLists = styled.p`
  cursor: pointer;
  color: white;
  margin-top: 25px;
  font-size: 14px;

  :hover {
    color: yellow;
    transition: 0.5s;
  }
`
