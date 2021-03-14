import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router';
import {Helmet} from 'react-helmet';
import * as testArticles from './mocks/articles.json';

import HomePage from '../presentation/pages/Home/Home';

export default {
  title: 'Pages/Home',
  component: HomePage,
} as Meta;

const Template: Story<any> = (args) => (
  <MemoryRouter>
        {/* setup for leaflet */}
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossOrigin=""/>
    </Helmet>
    <HomePage {...args} />
  </MemoryRouter>
);


export const WithData = Template.bind({});
WithData.args = {
  // @ts-ignore
  articles: testArticles.default,
};

//Loading etc

