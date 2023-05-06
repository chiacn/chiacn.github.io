import React, { useEffect } from 'react';
import * as S from './ArticlesList.style';
import { getArticleListDescription } from '@/libs/utils';
import { articlesList } from '@/libs/types';
import Link from 'next/link';

interface ArticlesList {
    articlesList: [];
    menuTitle: string;
}
export default function ArticlesList({articlesList, menuTitle}: ArticlesList) {
    const description: any = getArticleListDescription(menuTitle)
    useEffect(() => {
        console.log('articlesList = ', articlesList)
        console.log('description = ', description)
    })
    return (
        <>
            <S.ArticleListInfo>
                <S.ArticleListTitle>
                    <div className="menuTitle">{menuTitle}</div>
                </S.ArticleListTitle>
                <S.ArticleListDescription>
                    {description}
                </S.ArticleListDescription>
                <ul>
                { articlesList.length > 0 &&
                  articlesList.map((article: articlesList) => 
                    <li>
                        <Link key={article.urlPath + article.title} href={article.urlPath}> 
                            {article.title} 
                        </Link>
                    </li>
                  )
                }
                </ul>
            </S.ArticleListInfo>
        </>
    )
}