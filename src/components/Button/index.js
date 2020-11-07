import styled from 'styled-components'

const Button = styled.button`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;

  margin: ${props => (props.center && '0 auto') || '0'};
  padding: ${props =>
    (props.large && '12px 20px') || (props.small && '4px 20px') || '8px 20px'};

  font-size: ${props => (props.large && '20px') || '18px'};
  font-weight: normal;

  font-size: ${props =>
    (props.large && '20px') || (props.small && '18px') || '18px'};
  background: ${props =>
    props.outline || props.isTextOnly ? '#ffffff' : props.theme.main};
  color: ${props => (props.outline ? props.theme.main : props.theme.fontColor)};

  border-radius: 150px;
  border: transparent solid 2px;
  border: ${props =>
    props.outline
      ? `${props.theme.main} solid 2px;`
      : 'transparent solid 2px;'};

  box-shadow: none;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    color: ${props => (props.outline ? '#fff' : props.theme.fontColor)};
    border: ${props =>
      props.isTextOnly
        ? 'transparent solid 2px'
        : props.theme.border
        ? `${props.theme.border} solid 2px`
        : `${props.theme.fontColor} solid 2px`};

    box-shadow: ${props =>
      props.isTextOnly ? 'none' : '0 0 10px 2px rgba(33, 30, 30, 0.21)'};
    ${props => props.isTextOnly && 'text-decoration: underline;'}
  }

  &:active {
    background: ${props =>
      ((props.outline || props.isTextOnly) && 'transparent;') ||
      `${props.theme.main}`};
    border: ${props =>
      (props.outline && 'transparent solid 2px;') ||
      `${props.theme.fontColor} solid 2px`};
    box-shadow: none;
    ${props => props.isTextOnly && 'text-decoration: underline;'}
  }

  &:hover {
    color: ${props => (props.outline ? '#fff' : props.theme.fontColor)};
    border: ${props =>
      props.theme.border
        ? `${props.theme.border} solid 2px`
        : `${props.theme.fontColor} solid 2px`};
    border: ${props =>
      (props.outline || props.isTextOnly) && 'transparent solid 2px;'};
    background: ${props => (props.isTextOnly ? '#fff' : props.theme.main)};
    box-shadow: ${props =>
      props.isTextOnly ? 'none' : '0 0 10px 2px rgba(33, 30, 30, 0.21)'};
    ${props => props.isTextOnly && 'text-decoration: underline;'}
  }

  &:disabled {
    background-color: ${props =>
      props.outline || props.isTextOnly ? 'transparent' : ' #dddddd'};
    color: #848484;
    border: ${props =>
      (props.outline && '#848484 solid 2px;') || `transparent solid 2px`};
    cursor: default;
    box-shadow: none;
  }

  min-height: -moz-max-content; /* Firefox/Gecko */
  min-height: -webkit-max-content; /* Chrome */

  min-width: -moz-max-content; /* Firefox/Gecko */
  min-width: -webkit-max-content; /* Chrome */

  /* Responsive Sizing */
  width: 200px;

  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`

export default Button
