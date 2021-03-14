import React from 'react';
import './Home.css';
import Map from '../../components/Map';
import type { Articles } from '../../../core/article';
import ArticleHighlights from '../../components/ArticleHighlights';

interface Props {
 articles: Articles;
 readArticles: Array<string>,
}

const PureHome = ({
    articles,
    readArticles,
}: Props) => (
    <div className="Home-container">
        <div>
            <h1>Items to collect in your area</h1>
            <Map articles={articles}/>
            <ul>
                {articles.map((article) => (
                    <ArticleHighlights 
                        key={article.id}
                        article={article}
                        read={readArticles && readArticles.includes(article.id.toString())}
                    />
                ))}
            </ul>
        </div>
    </div>
);

PureHome.displayName = 'Home';

export default PureHome;