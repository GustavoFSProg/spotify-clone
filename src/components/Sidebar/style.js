import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 346px;
  padding: 1rem;
  padding-left: 1.5rem;
`
export const ImageContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 8px;
`

export const Divider = styled.hr`
  border: 1px solid #333333;
  width: 100%;
  margin: 1rem 0;
`

export const PlayLists = styled.div`
  overflow-y: scroll;
  height: 600px;

  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-track {
    background: black;
  }
  ::-webkit-scrollbar-thumb {
    background: #4d4d4d;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8c8c8c;
  }
`

export const PlayList = styled.p`
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: #999999;
  transition: color ease 0.2s;
  margin-left: 15px;

  :hover {
    color: #ffffff;
  }
`
