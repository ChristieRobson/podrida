import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Helmet} from 'react-helmet';
import { MemoryRouter } from 'react-router';
import * as testArticles from './mocks/articles.json';

import Map from '../presentation/components/Map';

export default {
  title: 'Components/Map',
  component: Map,
} as Meta;

const Template: Story<any> = (args) => (
  <>
    {/* setup for leaflet */}
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossOrigin=""/>
    </Helmet>
    <MemoryRouter>
      <Map {...args} />
    </MemoryRouter>
  </>
);


export const WithArticles = Template.bind({});
WithArticles.args = {
  // @ts-ignore
  articles: testArticles.default,
};

