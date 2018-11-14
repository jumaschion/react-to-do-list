import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index'
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

storiesOf('Input', module)
  .add('default', () => (
    <Input type='text' placeholder='Digite seu nome' required/>
  ))
  