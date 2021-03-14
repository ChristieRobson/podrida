import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import nock from 'nock';
import ConnectedArticle from '../ConnectedArticle';

describe('ConnectedArticke', () => {
    describe('before query has been fetched', () => {
        test('renders loading component', async () => {
            const markAsRead = jest.fn;
    
            const queryClient = new QueryClient();
            
            const component = render(
                <QueryClientProvider client={queryClient}>
                    <ConnectedArticle id='1234' markAsRead={markAsRead}/>
                </QueryClientProvider>
            );
           
            const loadingText = screen.getByText(/Loading/i);
            expect(loadingText).toBeInTheDocument();
          });
    });

    describe('when id matches an article', () => {
        test('renders Article component', async () => {

            const articlesStub = [
                {
                  id: 1234,
                  title: 'Some data for a test, its not a full article',
                  user: {
                      first_name: 'Bob',
                  },
                  images: [
                        {
                            files: {
                                original: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/image.jpg",
                                large: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/large_image.jpg",
                                medium: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/medium_image.jpg",
                                small: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/small_image.jpg"
                            },
                        }
                    ],
                }
              ];
    
            const markAsRead = jest.fn;
    
            const queryClient = new QueryClient();
            queryClient.setQueryData('articlesData', articlesStub);
            
            const component = render(
                <QueryClientProvider client={queryClient}>
                    <ConnectedArticle id='1234' markAsRead={markAsRead}/>
                </QueryClientProvider>
            );
           
            const articleTestId = screen.getByTestId('article_1234');
            expect(articleTestId).toBeInTheDocument();
          });
    });

    describe('when id is not found in list of articles', () => {
        test('renders message showing not found', async () => {

            const articlesStub = [
                {
                  id: 1234,
                  title: 'Some data for a test, its not a full article',
                  user: {
                      first_name: 'Bob',
                  },
                  images: [
                        {
                            files: {
                                original: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/image.jpg",
                                large: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/large_image.jpg",
                                medium: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/medium_image.jpg",
                                small: "https:\/\/cdn.olioex.com\/uploads\/photo\/file\/00gRGrBRDFYrR2j-9SJVYg\/small_image.jpg"
                            },
                        }
                    ],
                }
              ];
    
            const markAsRead = jest.fn;
    
            const queryClient = new QueryClient();
            queryClient.setQueryData('articlesData', articlesStub);
            
            const component = render(
                <QueryClientProvider client={queryClient}>
                    <ConnectedArticle id='5678' markAsRead={markAsRead}/>
                </QueryClientProvider>
            );
           
            const notFoundText = screen.getByText(/Unable to find article/i);
            expect(notFoundText).toBeInTheDocument();
          });
    })
    
})
