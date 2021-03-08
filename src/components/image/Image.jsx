import React from 'react';
import { string, node } from 'prop-types';

export default function Image({ w = 'full', ...restProps}) {
  return (
    <>
      <StyledImage aspectRatio={aspectRatio} background={background} w={w} {...restProps}>
        {children}
      </StyledImage>
    </>
  );
}

Image.propTypes = {
  /**
   * Define size of the button
   */
  background: string,
  /**
   * Define size of the button
   */
  w: string,
  /**
   * Button text or content
   */
  children: node.isRequired,
};

Prop name	Type	Default	Description
aspectRatio	number	1	
bg	custom	grey-light	
children	node	undefined	
is	union	img	
One of type: string, func, object
text	custom	undefined	
w	custom	full
