import styled from 'styled-components'
import H1 from '../H1'

const H4 = styled(H1)`
  font-size: 34px;

  @media only screen and (max-width: 375px) {
    font-size: 24px; /* @TODO: think of better way to do responsive sizing */
  }
`

export default H4
