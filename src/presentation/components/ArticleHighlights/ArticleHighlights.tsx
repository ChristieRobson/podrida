import React from 'react';
import { Link } from  'react-router-dom';
import './ArticleHighlights.css';
import type { Article } from '../../../core/article';

export interface Props {
 article: Article;
 read: boolean;
}

const PureArticleHighlights = ({
    article,
    read,
}: Props) => (
    <Link to={`/article/${article.id}`}  className="Article-highlights">
        <li>
            <img src={article.images[0].files.small} alt='' height="80" width="80" className="Article-highlights_image"/>
            <div className="Article-highlights_details">
                <div className="Article-highlights_header">
                    <h2>{article.title}</h2>
                    {read ? (<div className="Badge Badge-read">Seen</div>) : (<div className="Badge Badge-new">New</div>)}
                </div>
                <div>
                    {`Distance: ${article.location.distance} km`}
                </div>
                <div className="Article-highlights_user">
                    <img src={article.user.current_avatar.small} alt='' height="40" width="40" className='Article-highlights_avatar'/>
                    <div className="Article-highlights_user-name">
                        {article.user.first_name}
                    </div>
                </div>
            </div>

        </li>
    </Link>
);

PureArticleHighlights.displayName = 'ArticleHighlights';

export default PureArticleHighlights;