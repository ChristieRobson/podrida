import React from 'react';
import { Link } from  'react-router-dom';
import Map from '../../components/Map';
import type { Articles } from '../../../core/article';

interface Props {
 articles: Articles;
 readArticles: Array<string>,
}

const PureHome = ({
    articles,
    readArticles,
}: Props) => (
    <>
        <h1>Here are some articles</h1>
        <Map articles={articles}/>

        <ul>
            {articles.map((article) => (
                <Link to={`/article/${article.id}`}  key={article.id}>
                    <li>
                        {article.title} { ' ' }
                        {readArticles.includes(article.id.toString()) ? 'read' : 'new'}
                    </li>
                </Link>
            ))}
        </ul>
    </>
);

PureHome.displayName = 'Home';

export default PureHome;