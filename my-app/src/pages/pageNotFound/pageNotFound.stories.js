import React from 'react';
import { storiesOf } from '@storybook/react';
import PageNotFound from './index'
import StoryRouter from 'storybook-react-router'
// import { action } from '@storybook/addon-actions';
// import { Login } from '@storybook/react/demo';



storiesOf('Pages/PageNotFound', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <PageNotFound>
    </PageNotFound>
  ))