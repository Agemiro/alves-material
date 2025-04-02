import {html} from 'lit';
import type {Meta, StoryObj} from '@storybook/web-components';
import './a-input';
import '../a-icon/a-icon';

const meta: Meta = {
  title: 'Components/AInput',
  component: 'a-input',
  argTypes: {
    placeholder: {control: 'text'},
    value: {control: 'text'},
    color: {control: 'color'},
    iconSize: {control: 'number'},
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}></a-input>
  `,
  args: {
    placeholder: 'Type something...',
    value: '',
  },
};

export const WithPrefixIcon: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}>
      <a-icon
        name="search"
        color=${args.color}
        size=${args.iconSize}
        aPrefix
      ></a-icon>
    </a-input>
  `,
  args: {
    placeholder: 'Search...',
    value: '',
    color: '#000000',
    iconSize: 20,
  },
};

export const WithSuffixIcon: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}>
      <a-icon
        name="search"
        color=${args.color}
        size=${args.iconSize}
        aSuffix
      ></a-icon>
    </a-input>
  `,
  args: {
    placeholder: 'Search...',
    value: '',
    color: '#000000',
    iconSize: 20,
  },
};

export const WithBothIcons: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}>
      <a-icon name="search" size=${args.iconSize} aPrefix></a-icon>
      <a-icon name="star" size=${args.iconSize} aSuffix></a-icon>
    </a-input>
  `,
  args: {
    placeholder: 'Type something...',
    value: '',
    iconSize: 20,
  },
};
