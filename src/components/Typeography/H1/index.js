import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 72px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 0px;
  margin-top: 0px;

  color: 'black';

  text-align: ${props =>
    (props.center && 'center') ||
    (props.left && 'left') ||
    (props.right && 'right') ||
    (props.justify && 'justify')};

  @media only screen and (max-width: 375px) {
    font-size: 48px;
  }
`

export default H1
