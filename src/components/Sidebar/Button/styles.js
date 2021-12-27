import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  max-width: 170px;
  border: none;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  background: none;
  color: #bfbfbf;
  margin: 0;

  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.5rem 0;

  :hover {
    color: white;
    transition: 0.7s;
  }
`
