import React from 'react';
import { ArticleListInfo } from './ArticlesList.style';

interface ArticlesList {
    articlesList: [];
    menuTitle: string;
}

export default function ArticlesList({articlesList, menuTitle}: ArticlesList) {

    return (
        <>
            <ArticleListInfo>
                <div>
                {menuTitle}
                </div>
            </ArticleListInfo>
        </>
    )
}