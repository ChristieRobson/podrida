import React from 'react';
import './Article.css';
import type { Article } from '../../../core/article';

export interface Props {
 article: Article;
 handleReturn: () => void;
}

const PureArticle = ({article, handleReturn}: Props) => (
    <>
        <button type="button" onClick={handleReturn} className="Nav-button">
            &larr;  Return to articles
        </button>
        <div className="Article_container" data-testid={`article_${article.id}`}>
            <div>
                <div className="Article_image-wrapper">
                    <img src={article.images[0].files?.medium} alt='' className="Article_image"/>
                </div>
                <div className="Article_details">
                    
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <p>Likes: {article.reactions?.likes}</p>
                    <p>Views: {article.reactions?.views}</p>
                    <div className="Article-user">
                        <img src={article.user?.current_avatar?.small} alt='' height="40" width="40" className='Article-avatar'/>
                        <div className="Article-user_name">
                            {article.user?.first_name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

PureArticle.displayName = 'Article';

export default PureArticle;