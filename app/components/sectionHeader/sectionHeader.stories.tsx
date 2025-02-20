import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from './sectionHeader';

const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const SectionHeaderComponent: Story = {
    args: {
        activity: 'Attended', 
      },
};