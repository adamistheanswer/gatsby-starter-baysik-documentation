import styled from 'styled-components'
import H1 from '../H1'

const H3 = styled(H1)`
  font-size: 48px;

  @media only screen and (max-width: 375px) {
    font-size: 30px;
  }
`

export default H3
