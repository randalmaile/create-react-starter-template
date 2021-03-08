import React from 'react';
import { string, node } from 'prop-types';
import StyledButton from './styled';

export default function Button({ type = 'button', size, color, children }) {
  return (
    <>
      <StyledButton type={type} size={size} color={color}>
        {children}
      </StyledButton>
    </>
  );
}

Button.propTypes = {
  /**
   * Define the type of button
   */
  type: string,
  /**
   * Define size of the button
   */
  size: string,
  /**
   * Define size of the button
   */
  color: string,
  /**
   * Button text or content
   */
  children: node.isRequired,
};
