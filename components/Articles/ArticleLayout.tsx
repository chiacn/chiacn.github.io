import React, { useEffect } from 'react';
import MDXPost from '../MDXPost';
import { useMDXComponent } from 'next-contentlayer/hooks'


export default function ArticleLayout({article}) {
    const MDXContent = useMDXComponent(article.body.code)

    return (
        <>
            <MDXPost title={article.title} date={article.date}>
                <MDXContent />
            </MDXPost>
        </>
    )
}

