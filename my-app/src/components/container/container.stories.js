import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './index'
import StoryRouter from 'storybook-react-router'
// import { action } from '@storybook/addon-actions';
// import { Login } from '@storybook/react/demo';



storiesOf('Components/Container', module)
  .add('default', () => (
    <Container>
       Children Here
    </Container>
  ))