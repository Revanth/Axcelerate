import type { Meta, StoryObj } from '@storybook/react';
import Search from './search';

const meta: Meta<typeof Search> = {
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const SearchComponent: Story = {
  args: {
    onChange: (event: React.ChangeEvent) => {
        console.log(event.target);
      },
  },
};