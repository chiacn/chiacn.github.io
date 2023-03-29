import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

import type { DocumentGen } from 'contentlayer/core'

/*
    (사용 설명)
    경로에 맞는 mdx파일에 title, date 등 required: true로 지정한 요소가 있어야 가져와집니다.
    ex. 
    ---
    title: test
    date: 2023-03-29
    description: 테스트입니다.
    thumbnailUrl: /posts/thumbnail/2021-review.jpg
    tags: ['테스트다.']
    ---

*/

/*
    rehype-slug 
    HTML AST(Abstract Syntax Tree)의 헤딩 요소에 고유한 ID를 추가하는 rehype 플러그인
    => 마크다운 파일이나 HTML 파일에 있는 헤딩에 slug를 생성하여 앵커 링크를 쉽게 만들 수 있게 함.

    rehype-code-titles 
    코드 블록에 제목을 추가하는 rehype 플러그인
    코드 블록의 첫 번째 줄에 `title=...` 구문을 사용하여 코드 블록에 제목을 지정할 수 있게함. 
    => 코드 예제를 구분하기 쉬워짐.

    rehype-autolink-headings
    HTML AST의 헤딩 요소에 자동으로 링크를 추가하는 rehype 플러그인
    각 헤딩에 고유한 ID를 사용하여 문서 내에 앵커 링크를 생성함.
    => 쉽게 특정 섹션으로 이동할 수 있다.

    rehype-prism-plus
    PrimeJS를 사용하여 코드 블록에 구문 강조를 적용함. 
    PrimeJS : 웹페이지에서 코드를 아름답게 강조 표시하기 위한 가벼운 구문 구조 라이브러리

    contentlayer/core
    contentlayer에서 사용되는 마크다운 파일에 대한 타입 정의를 가져온다.
*/

/**
 * doc._raw.flattenedPath : ContentLayer에서 정의한 문서 유형의 파일 경로를 나타냄.
 * 
 * doc - ContentLayer가 contentlayer.config.ts를 읽고 처리할 때 주입함.
 * (예를 들어, url_path의 defineDocumentType에서 resolve 속성으로 사용될 때 doc 객체가 주입된다. )
 * @param {DocumentGen} doc 
 * @returns 
 */
export const urlFromFilePath = (doc: DocumentGen): string => {
    return doc._raw.flattenedPath.replace(/pages\/?/, '')
}

/**
 *  defineDocumentType : 문서 유형을 정의한다.
 *  Document Type 정의는 makeSource를 위한 옵션으로 사용된다. (정의가 Contentlayer로 전달되는 방법)
 *  
 */

export const Article = defineDocumentType(() => ({
    name: 'Article',
    filePathPattern: `articles/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {type: 'string', required: true},
        date: {type: 'string', required: true}
    },
    computedFields: {
        url_path: {
            type: 'string',
            description:
                'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
            resolve: urlFromFilePath,
        },
        pathSegments: {
            type: 'json',
            resolve: doc =>
                doc._raw.flattenedPath
                    .split('/')
                    // skip `/docs` prefix
                    .slice(1)
                    .map(pathName => {
                        return { pathName }
                    }),
        },
    },
}))

/**
 * makeSource는 ContentLayer에 schema와 설정을 제공한다.
 */
export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Article],
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
})