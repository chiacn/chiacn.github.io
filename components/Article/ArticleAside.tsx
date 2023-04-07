import { css } from '@emotion/react';
import { useState } from 'react'
import { MenuTreeRoot } from '../../libs/types'
import * as S from './ArticleAside.style';
import ArticleAsideItem from './ArticleAsideItem';

export default function ArticleAside({tree}: {tree: MenuTreeRoot}) {
    console.log('ArticleAside/ tree = ', tree)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setIsMenuOpen(!isMenuOpen);
    }
    return (
            <S.ArticleAsideContainer visible={isMenuOpen}>
                <S.ArticleAsideTitle>Articles</S.ArticleAsideTitle>
                <S.ArticleAsideList>
                {tree.map(t => (
                    <ArticleAsideItem key={t.title} item={t} />
                ))}
                </S.ArticleAsideList>
            </S.ArticleAsideContainer>
    )
}