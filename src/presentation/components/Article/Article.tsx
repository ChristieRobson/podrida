import React from 'react';
import type { Article } from '../../../core/article';

export interface Props {
 article: Article;
}

const PureArticle = ({article}: Props) => (
    <>
        <h1>{article.title}</h1>
        <p>Some other article stuff will go here</p>
    </>
);

PureArticle.displayName = 'Home';

export default PureArticle;