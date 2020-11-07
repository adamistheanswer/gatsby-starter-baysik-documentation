import styled from 'styled-components'

const Body1 = styled.div`
  margin: ${props => (!props.noMargin ? '0 auto 10px auto;' : '0')};
  font-size: 18px;
  font-style: normal;
  font-weight: ${props => (props.bold && `bold`) || `normal`};
  font-stretch: normal;
  line-height: 32px;
  letter-spacing: normal;
  ${props => props.lineThrough && 'text-decoration: line-through'};

  color: 'black';

  text-align: ${props =>
    (props.center && 'center') ||
    (props.left && 'left') ||
    (props.right && 'right') ||
    (props.justify && 'justify')};
`

export default Body1
