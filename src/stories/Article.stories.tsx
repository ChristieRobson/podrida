import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import * as testArticle from './mocks/article.json';

import Article from '../presentation/pages/Article/Article';

export default {
  title: 'Pages/Article',
  component: Article,
} as Meta;

const Template: Story<any> = (args) => <Article {...args} />;


export const Example = Template.bind({});
Example.args = {
  // @ts-ignore
  article: testArticle.default,
};

