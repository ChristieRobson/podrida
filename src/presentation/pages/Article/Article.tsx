import React from 'react';
import { Link } from  'react-router-dom';
import type { Article } from '../../../core/article';

export interface Props {
 article: Article;
}

const PureArticle = ({article}: Props) => (
    <>
        <Link to="/">Back to articles</Link>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
    </>
);

PureArticle.displayName = 'Home';

export default PureArticle;