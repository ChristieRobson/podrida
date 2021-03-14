import React from 'react';
import { useQuery } from 'react-query';

export const useArticles = () => useQuery('articlesData', () =>
        fetch('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json').then((res:any) =>
            res.json()
        )
    )