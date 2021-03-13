import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import * as testArticles from './mocks/articles.json';

import HomePage from '../presentation/pages/Home/Home';

export default {
  title: 'Pages/Home',
  component: HomePage,
} as Meta;

const Template: Story<any> = (args) => <HomePage {...args} />;


export const WithData = Template.bind({});
WithData.args = {
  // @ts-ignore
  articles: testArticles.default,
};

//Loading etc

