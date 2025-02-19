import type { Meta, StoryObj } from '@storybook/react';
import Section from './section';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Section> = {
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const SectionComponent: Story = {
    args: {
        name: 'John Doe',  // Example name
        image: 'https://www.sample-videos.com/img/Sample-jpg-image-500kb.jpg',  // Example image URL
      },
};