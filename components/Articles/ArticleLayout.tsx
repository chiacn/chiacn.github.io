import React, { useEffect } from 'react';
import MDXPost from '../MDXPost';
import { useMDXComponent } from 'next-contentlayer/hooks'


export default function ArticleLayout({article}: {article: any}) {
    const MDXContent = useMDXComponent(article.body.code)
    useEffect(() => {
        console.log('ArticleLayout ==================')
    })
    return (
        <>
            <MDXPost title={article.title} date={article.date}>
                <MDXContent />
            </MDXPost>
        </>
    )
}

