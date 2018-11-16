import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index'
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

storiesOf('Components/Form/Button', module)
  .add('default', () => (
    <Button>
     Enviar
    </Button>
  ))
  .add('default-disabled', () => (
    <Button disabled>
     Enviar
    </Button>
  ))
  