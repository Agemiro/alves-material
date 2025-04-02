import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './a-button';
import '../a-icon/a-icon';

const meta: Meta = {
  title: 'Components/AButton',
  component: 'a-button',
  argTypes: {
    label: {control: 'text', description: 'Text inside the button'},
    color: {control: 'color', description: 'Button and icon color'},
    iconSize: {control: 'number'},
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <a-button color=${args.color}> ${args.label} </a-button>
  `,
  args: {
    label: 'Click here',
    color: 'primary',
  },
};

export const WithPrefixIcon: Story = {
  render: (args) => html`
    <a-button color=${args.color}>
      <a-icon
        name="star"
        color=${args.color}
        aPrefix
        size=${args.iconSize}
      ></a-icon>
      ${args.label}
    </a-button>
  `,
  args: {
    label: 'Click here',
    color: 'secondary',
    iconSize: 20,
  },
};

export const WithSuffixIcon: Story = {
  render: (args) => html`
    <a-button color=${args.color}>
      <a-icon
        name="star"
        color="${args.color}"
        aSuffix
        size=${args.iconSize}
      ></a-icon>
      ${args.label}
    </a-button>
  `,
  args: {
    label: 'Click here',
    color: 'success',
    iconSize: 20,
  },
};
