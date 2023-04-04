import React, { useState } from 'react'
import Link from 'next/link'
import { ArticleAsideChildText, ArticleAsideText } from './ArticleAside.style';
import { TreeNode } from '@/libs/types';

export default function ArticleAsideItem({item}: {item: TreeNode}) {
    const [isItemsOpen, setIsItemsOpen] = useState(false);
    return (
        <React.Fragment key={item.title}>
            <Link href={item.urlPath} passHref>
                <ArticleAsideText onClick={() => setIsItemsOpen(!isItemsOpen)}>
                    <span>{item.title}</span>
                </ArticleAsideText>
            </Link>
            {item.children && item.children.length > 0 && isItemsOpen && (
                <>
                    {item.children.map(c => (
                        <Link key={c.item} href={c.urlPath}>
                            <ArticleAsideChildText>{c.title}</ArticleAsideChildText>
                        </Link>
                    ))}
                </>
            )}
        </React.Fragment>
    )
}