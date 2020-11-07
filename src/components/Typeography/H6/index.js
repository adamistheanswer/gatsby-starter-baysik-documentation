import styled from 'styled-components'
import H1 from '../H1'

const H6 = styled(H1)`
  margin: ${props => (!props.noMargin ? '0 auto' : '0')};
  font-size: 24px;

  @media only screen and (max-width: 375px) {
    font-size: 20px;
  }
`

export default H6
