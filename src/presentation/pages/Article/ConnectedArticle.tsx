import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from "react-router-dom";
import { Article as ArticleType } from '../../../core/article'; 
import Article from './Article';

interface Props {
    id: string,
    markAsRead: (id: string) => void;
}

const PureConnectedArticle= ({ 
    id,
    markAsRead,
}: Props) => {

    let history = useHistory();

    const handleReturn = () => {
        // mark current article as read then return to homepage
        markAsRead(id);
        history.push('/');
    }

    const { isLoading, error, data: articles }  = useQuery('articlesData', () =>
        fetch('https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json').then((res:any) =>
            res.json()
        )
    );

    if (isLoading) return (<>Loading...</>);
 
    if (error) return (<>An error has occurred</>);

    if (articles && articles.length > 1) {
        const article = articles.find((element:ArticleType) => element.id.toString() === id );
        if (article) {
            return (<Article article={article} handleReturn={handleReturn}/>)
        }
    }

    return (
        <div>Unable to find article {id}</div>
    );
};

PureConnectedArticle.displayName = 'ConnectedArticle';

export default PureConnectedArticle;