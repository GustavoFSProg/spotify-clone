import { memo } from 'react'
import { StyledButton } from './styles'

const Button = ({ title, Icon, onClick }) => (
  <StyledButton onClick={() => onClick()}>
    <Icon width="26" style={{ marginRight: '0.9rem' }} />
    {title}
  </StyledButton>
)

export default memo(Button)
