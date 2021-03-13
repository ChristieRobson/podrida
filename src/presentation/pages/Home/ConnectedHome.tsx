import React from 'react';
import { useQuery } from 'react-query';
import Home from './Home';

interface Props {
    readArticles: Array<string>,
}
const PureConnectedHome = ({ readArticles }: Props) => {
    const { isLoading, error, data }  = useQuery('articlesData', () =>
        fetch('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json').then((res:any) =>
            res.json()
        )
    )

    if (isLoading) return (<>Loading...</>);
 
    if (error) return (<>An error has occurred</>);

    return (
        <Home articles={data} readArticles={readArticles}/>
    );
};

PureConnectedHome.displayName = 'ConnectedHome';

export default PureConnectedHome;