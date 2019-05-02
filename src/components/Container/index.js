import PropTypes from 'prop-types'
import React from 'react'
import { CenteredContainer, PaddedContainer } from './styles'

const Container = ({ backgroundColor, center, children, maxWidth, verticalPadding, ...rest }) => (
  <PaddedContainer backgroundColor={backgroundColor} verticalPadding={verticalPadding} {...rest}>
    <CenteredContainer center={center} maxWidth={maxWidth}>
      {children}
    </CenteredContainer>
  </PaddedContainer>
)

Container.propTypes = {
  backgroundColor: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node,
  maxWidth: PropTypes.number,
  verticalPadding: PropTypes.number
}

export { Container }
