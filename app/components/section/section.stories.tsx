import type { Meta, StoryObj } from '@storybook/react';
import Section from './section';

const meta: Meta<typeof Section> = {
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const SectionComponent: Story = {
    args: {
        name: 'Jane Doe',
        image: 'https://www.sample-videos.com/img/Sample-jpg-image-500kb.jpg', 
      },
};