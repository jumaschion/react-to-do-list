import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './index'
import StoryRouter from 'storybook-react-router'
// import { action } from '@storybook/addon-actions';
// import { Login } from '@storybook/react/demo';



storiesOf('Pages/Login', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Login/>
  ))
  