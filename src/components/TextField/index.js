import React, { useState } from 'react'
import styled from 'styled-components'
import Body1 from '../Typeography/Body1'
import { SearchIcon } from '../Icons'

const TextFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  border-bottom: ${props =>
    props.selected ? '2px solid #2875aa;' : '1px solid black;'};
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledInput = styled.input`
  width: ${props => (props.showHide ? '90%' : '100%')};
  border: 0;
  outline: 0;
  background: transparent;

  font-size: ${props => (props.isLarge ? '34px' : '18px')};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};

  min-height: 45px;
  outline: none;
`

const LeftIconWrapper = styled.div`
  margin-right: 10px;
  margin-top: 6px;
`

const TextField = ({
  search,
  value,
  placeholder,
  id,
  type,
  children,
  isHoverLabelVisible,
  isHoverLabelDisabled,
  handleChange,
  handleSubmit,
  name,

  ...props
}) => {
  const updateParentFormFieldValue = event => {
    if (handleChange) {
      handleChange(event.target.value)
    }
  }

  const [selected, setSelected] = useState(false)

  return (
    <TextFieldWrapper selected={selected}>
      {isHoverLabelDisabled ? (
        <></>
      ) : (
        <>
          {value.length && isHoverLabelVisible ? (
            <Body1
              css={`
                color: grey;
              `}
            >
              {placeholder}
            </Body1>
          ) : (
            <Body1
              css={`
                color: transparent;
              `}
            >
              {placeholder}
            </Body1>
          )}
        </>
      )}

      <InputWrapper>
        {search && (
          <LeftIconWrapper>
            <SearchIcon />
          </LeftIconWrapper>
        )}
        <StyledInput
          {...props}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={updateParentFormFieldValue}
          onFocus={() => {
            setSelected(true)
          }}
          onBlur={() => {
            setSelected(false)
          }}
        />
      </InputWrapper>
      {children}
    </TextFieldWrapper>
  )
}

export default TextField
