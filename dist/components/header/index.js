import React from 'react';

import { Container } from './styles';

function header({ name, children, color }) {
  return React.createElement(
    Container,
    { color: color },
    React.createElement(
      'h1',
      null,
      name
    ),
    children
  );
}

export default header;