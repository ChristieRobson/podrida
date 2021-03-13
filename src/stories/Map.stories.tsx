import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import * as testArticles from './mocks/articles.json';

import Map from '../presentation/components/Map';

export default {
  title: 'Components/Map',
  component: Map,
} as Meta;

const Template: Story<any> = (args) => <Map {...args} />;


export const WithArticles = Template.bind({});
WithArticles.args = {
  // @ts-ignore
  articles: testArticles.default,
};

