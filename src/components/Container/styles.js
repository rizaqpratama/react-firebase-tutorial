import styled, { css } from 'styled-components'

export const PaddedContainer = styled.div`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-position: left;
      background-repeat: no-repeat;
    `};
  ${props =>
    css`
      padding: ${props.verticalPadding || 48}px 36px;
    `};
`

export const CenteredContainer = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : 1200)}px;
  margin: 0 auto;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`
