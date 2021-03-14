import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { useArticles } from './useArticles';

test('requests test articles from api and returns data', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const articlesStub = [
      {
        id: 1234,
        title: 'Some data for a test, its not a full article'
      }
    ];

    const expectation = nock('https://s3-eu-west-1.amazonaws.com')
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true' 
    })
    .get('/olio-staging-images/developer/test-articles-v4.json')
    .reply(200, articlesStub);
    
    const { result, waitFor } = renderHook(() => useArticles(), { wrapper });
    
    await waitFor(() => result.current.isSuccess);
    
    expect(result.current.data).toEqual(articlesStub);
  });