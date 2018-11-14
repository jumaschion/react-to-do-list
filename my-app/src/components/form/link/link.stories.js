import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import Link from './link'


storiesOf('Components/Form/Link', module)
  .addDecorator(StoryRouter())
  .add('defalut', () => (
    <Link href='/'>
    Link Here
    </Link>
  ))
  