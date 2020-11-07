import styled from 'styled-components'
import H1 from '../H1'
const H2 = styled(H1)`
  font-size: 60px;

  @media only screen and (max-width: 375px) {
    font-size: 34px; /* @TODO: think of better way to do responsive sizing */
  }
`

export default H2
