import styled from 'styled-components'

const Wrapper = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(10)}px;
`
export default Wrapper
