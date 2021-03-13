import React from 'react';
import type { Articles } from '../../../core/article';

interface Props {
 articles: Articles;
}

const PureHome = ({articles}: Props) => (
    <>
        <h1>Here are some articles</h1>
        <ul>
            {articles.map((article) => (
                <li>{article.title} Lat {article.location?.latitude} Lat {article.location?.longitude} Distance {article.location?.distance}</li>
            ))}
        </ul>
    </>
);

PureHome.displayName = 'Home';

export default PureHome;