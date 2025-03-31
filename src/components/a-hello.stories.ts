import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './a-hello';

export default {
  title: 'Components/AHello',
  component: 'a-hello',
  argTypes: {
    onOpen: {action: 'onClick'},
  },
  render: (args) =>
    html`<a-hello @click=${args.onOpen} name=${args.name}></a-hello>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    name: 'Lit',
  },
};
