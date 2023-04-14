import React, { useState } from 'react'
import Link from 'next/link'
import { AsideChildText, AsideText } from './Aside.style';
import { MenuTreeNode } from '@/libs/types';

export default function AsideItem({item}: {item: MenuTreeNode}) {

    const [isItemsOpen, setIsItemsOpen] = useState((item.children.length > 0) ? true : false);
    return (
        <React.Fragment key={item.title}>
            {item.children.length > 0 
                ?
                <AsideText onClick={() => setIsItemsOpen(!isItemsOpen)}>
                    <span>{item.title}</span>
                </AsideText>
                :
                <Link href={item.urlPath} passHref>
                    <AsideText onClick={() => setIsItemsOpen(!isItemsOpen)}>
                        <span>{item.title}</span>
                    </AsideText>
                </Link> 
            }
            {item.children && item.children.length > 0 && isItemsOpen && (
                <>
                    {item.children.map(c => (
                        <Link key={c.title} href={c.urlPath}>
                            <AsideChildText>{c.title}</AsideChildText>
                        </Link>
                    ))}
                </>
            )}
        </React.Fragment>
    )
}