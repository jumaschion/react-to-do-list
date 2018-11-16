import React from 'react';
import { storiesOf } from '@storybook/react';
import Signup from './index'
import StoryRouter from 'storybook-react-router'
// import { action } from '@storybook/addon-actions';
// import { Login } from '@storybook/react/demo';



storiesOf('Pages/Signup', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Signup/>
  ))
  