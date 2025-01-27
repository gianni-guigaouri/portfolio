import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid white;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  margin: auto;
  transition: all 1s ease;
  animation: ${spin} 0.6s linear infinite;
`

export default Loader
