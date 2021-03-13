import React from 'react';
import type { Article } from '../../../core/article';

export interface Props {
 article: Article;
 handleReturn: () => void;
}

const PureArticle = ({article, handleReturn}: Props) => (
    <>
        <button type="button" onClick={handleReturn}>
            Return to articles
        </button>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
    </>
);

PureArticle.displayName = 'Article';

export default PureArticle;