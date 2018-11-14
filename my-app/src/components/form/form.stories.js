import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import Form from './index'


storiesOf('Components/Form', module)
  .add('default', () => (
<Form className='form'>
    <h2 className='form__title'>Exemplo</h2>
    <p className='form__text'>Exemplo 2</p>
</Form>
  ))
  