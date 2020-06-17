import React from 'react';

import { Container } from './styles';

function header({name, children, color}) {
  return (
    <Container color={color} >
      <h1>{name}</h1>
      {children}
    </Container>
    );
}

export default header;