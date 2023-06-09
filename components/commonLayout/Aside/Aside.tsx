import { useState } from 'react'
import { MenuTreeRoot } from '@/libs/types'
import * as S from './Aside.style';
import AsideItem from './AsideItem';

interface AsideProps {
    menuTree: MenuTreeRoot;
    title?: string;
}

export default function Aside({menuTree, title = 'Articles'}: AsideProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setIsMenuOpen(!isMenuOpen);
    }
    return (
            <S.AsideContainer visible={isMenuOpen}>
                <S.AsideTitle>{title}</S.AsideTitle>
                <S.AsideList>
                {menuTree?.map(t => (
                    <AsideItem key={t.title} item={t} />
                ))}
                </S.AsideList>
            </S.AsideContainer>
    )
}