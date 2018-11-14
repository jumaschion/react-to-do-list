import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button'
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('default', () => (
    <button className='button'>
     Enviar
    </button>
  ))
  