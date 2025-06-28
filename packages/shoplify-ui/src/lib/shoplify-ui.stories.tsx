import type { Meta, StoryObj } from '@storybook/react';
import { ShoplifyUi } from './shoplify-ui';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShoplifyUi> = {
  component: ShoplifyUi,
  title: 'ShoplifyUi',
};
export default meta;
type Story = StoryObj<typeof ShoplifyUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShoplifyUi!/gi)).toBeTruthy();
  },
};
