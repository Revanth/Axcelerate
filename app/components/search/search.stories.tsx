import type { Meta, StoryObj } from '@storybook/react';
import Search from './search';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Search> = {
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const SearchComponent: Story = {
  args: {
    onChange: (event: React.ChangeEvent) => {
        console.log(event.target);  // For demonstration, logs the input value
      },
  },
};