import React from 'react';
import * as S from './ArticlesList.style';
import { getArticleListDescription } from '@/libs/utils';

interface ArticlesList {
    articlesList: [];
    menuTitle: string;
}
export default function ArticlesList({articlesList, menuTitle}: ArticlesList) {
    const description: any = getArticleListDescription(menuTitle)
    return (
        <>
            <S.ArticleListInfo>
                <S.ArticleListTitle>
                    <div className="menuTitle">{menuTitle}</div>
                </S.ArticleListTitle>
                <S.ArticleListDescription>
                    {description}
                </S.ArticleListDescription>
                
            </S.ArticleListInfo>
        </>
    )
}