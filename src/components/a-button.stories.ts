import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './a-button';

export default {
  title: 'Components/AButton',
  component: 'a-button',
  render: (args) => html`<a-button name=${args.label}></a-button>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    name: 'Lit',
  },
};
