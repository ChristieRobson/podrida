import React from 'react';
import Map from '../../components/Map';
import type { Articles } from '../../../core/article';

interface Props {
 articles: Articles;
 position?: any;
}

const PureHome = ({
    articles,
    position = [51.505, -0.09],
}: Props) => (
    <>
        <h1>Here are some articles</h1>
        <Map articles={articles}/>

        <ul>
            {articles.map((article) => (
                <li key={article.id}>{article.title} Lat {article.location?.latitude} Lat {article.location?.longitude} Distance {article.location?.distance}</li>
            ))}
        </ul>
    </>
);

PureHome.displayName = 'Home';

export default PureHome;