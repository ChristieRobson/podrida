import React from 'react';
import { useArticles } from '../../../queries/useArticles';
import Home from './Home';

interface Props {
    readArticles: Array<string>,
}
const PureConnectedHome = ({ readArticles }: Props) => {
    const { isLoading, error, data }  = useArticles();

    if (isLoading) return (<>Loading...</>);
 
    if (error) return (<>An error has occurred</>);

    return (
        <Home articles={data} readArticles={readArticles}/>
    );
};

PureConnectedHome.displayName = 'ConnectedHome';

export default PureConnectedHome;