import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 468px) {
    grid-template-columns: 50% 50%;
    & > *:nth-child(2n + 1) {
      margin-right: 0.6rem;
    }

    & > *:nth-child(2n) {
      margin-left: 0.6rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 33.3% 33.3% 33.3%;

    & > *:nth-child(3n + 1) {
      margin-left: 0;
      margin-right: 0.8rem;
    }

    & > *:nth-child(3n + 2) {
      margin-right: 0.4rem;
      margin-left: 0.4rem;
    }

    & > *:nth-child(3n) {
      margin-left: 0.8rem;
      margin-right: 0;
    }
  }
`

export default Grid