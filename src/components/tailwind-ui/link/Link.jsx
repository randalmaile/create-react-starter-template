/* eslint-disable react/require-default-props */
import React from 'react';
import { string, node } from 'prop-types';
import StyledLink from './styled';

function Link({
  target = '_blank',
  className = '',
  children,
  href,
  dataAnalyticsId = null,
  dataAnalyticsLabel = null,
  ...restProps
}) {
  return (
    <StyledLink
      href={href}
      target={target}
      className={className}
      data-analytics-id={dataAnalyticsId}
      data-test-id="sharp-link"
      data-analytics-label={dataAnalyticsLabel}
      {...restProps}
    >
      {children}
    </StyledLink>
  );
}

Link.propTypes = {
  /**
  Optional for telling browser where to open link. It defaults to opening in a separate tab.
  */
  target: string,
  /**
  Optional className to include in rendered component
  */
  className: string,
  /**
  Required and refers to everything included between opening
  and closing tags when invoking component
  */
  children: node.isRequired,
  /**
  Required url for the link
  */
  href: string.isRequired,
  /**
  Optional analytics label to track user engagement
  */
  dataAnalyticsLabel: string,
  /**
  Unique analytics id to track user engagement
  */
  dataAnalyticsId: string,
};

export default Link;
