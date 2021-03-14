import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router';
import * as testArticle from './mocks/article.json';

import ArticleHighlights from '../presentation/components/ArticleHighlights/index';

export default {
  title: 'Components/ArticleHighlights',
  component: ArticleHighlights,
} as Meta;

const Template: Story<any> = (args) => (
    <div style={{backgroundColor: '#F8F8F8', padding: '20px'}}>
        <MemoryRouter>
            <ArticleHighlights {...args} />
        </MemoryRouter>
    </div>
);


export const Seen = Template.bind({});
Seen.args = {
  // @ts-ignore
  article: testArticle.default,
  read: true,
};

export const New = Template.bind({});
New.args = {
  // @ts-ignore
  article: testArticle.default,
  read: false,
};

