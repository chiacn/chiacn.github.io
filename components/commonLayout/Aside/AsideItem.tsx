import React, { useState } from 'react'
import Link from 'next/link'
import * as S from './AsideItem.style';
import { MenuTreeNode } from '@/libs/types';

export default function AsideItem({item}: {item: MenuTreeNode}) {
    const [isItemsOpen, setIsItemsOpen] = useState((item.children.length > 0) ? true : false);
    return (
        <React.Fragment key={item.title}>
            {item.children.length > 0 
                ?
                <S.AsideText onClick={() => setIsItemsOpen(!isItemsOpen)}>
                    <span>{item.title}</span>
                </S.AsideText>
                :
                <Link href={item.urlPath} passHref>
                    <S.AsideText onClick={() => setIsItemsOpen(!isItemsOpen)}>
                        <span>{item.title}</span>
                    </S.AsideText>
                </Link> 
            }
            {item.children.length > 0 && isItemsOpen && (
                <>
                    {item.children.map((childPath: string) => (
                        <Link key={item.urlPath + childPath} href={`${item.urlPath}/${childPath}`}>
                            <S.AsideChildText>{childPath}</S.AsideChildText>
                        </Link>
                    ))}
                </>
            )}
        </React.Fragment>
    )
}