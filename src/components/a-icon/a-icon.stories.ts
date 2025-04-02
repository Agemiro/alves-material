import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/AIcon',
  component: 'a-icon',
  argTypes: {
    name: {control: 'text'},
    color: {control: 'color'},
    size: {control: 'number'},
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'primary',
    size: 24,
  },
};

export const WithSecondaryTheme: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'secondary',
    size: 24,
  },
};

export const WithTertiaryTheme: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'tertiary',
    size: 24,
  },
};

export const WithSuccessTheme: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'success',
    size: 24,
  },
};

export const WithWarningTheme: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'warning',
    size: 24,
  },
};

export const WithErrorTheme: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'error',
    size: 24,
  },
};

export const WithDarkTheme: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    name: 'star',
    color: 'dark',
    size: 24,
  },
};
