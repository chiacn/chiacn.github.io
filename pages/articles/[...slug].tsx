
import ArticleLayout from '@/components/Article/ArticleLayout'
import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, TreeNode } from '@/libs/types'
import { buildTree } from '@/libs/utils'

const ArticlePostPage = ({tree, article}: {tree: any; article: any}) => {
    return <ArticleLayout tree={tree} article={article} />
}

/**
 * getStaticPaths : Next.js에서 동적 라우팅을 구현할 때 어떤 경로들을 build-time에 생성할지를 지정하는 함수.
 * 페이지가 필요한 경우 on-demand로 생성하는 대신 페이지들을 빌드타임에 생성하여 성능을 향상시킬 수 있음.
 
  @returns { 
    Prmoise<{
        paths: {params: {slug: string[]}}[];
        fallback: string
     }> 
  }
 */
export const getStaticPaths = async () => {
    const paths = allArticles.map(article => ({
        params: {
            // ex. { slug: {id: 1} } slug는 [...slug].tsx에서 동적 segment 값.
            slug: article.pathSegments.map((_: PathSegment) => _.pathName),
        },
    }))
    return { paths, fallback: 'blocking' }
}

/**
 * getStaticProps
 * @param {Object} params : Dynamic routing에서 URL 경로에서 추출된 파라미터 값을 포함하는 객체이다. 즉 url 경로와 관련
 *    예를 들어, pages/[articleCategory]/[...slug].tsx에서 params는 {articleCategory: "cs", slug: "1"} 
 * 
 *  (참고) - SSG(Static Site Generation) 방식이기 때문에 여기 console찍으면 브라우저가 아니라 terminal에 표시된다.
 */
export const getStaticProps = async ({ params }: {params: any}) => {
    const pagePath = params.slug.join('/').replace(/.mdx/,'')
    const article = allArticles.find(
        _ => _.pathSegments.map((_: PathSegment) => _.pathName).join('/') === pagePath
    ) || null // !: TypeScript 비 null 단언 연산자 (속성 값이 null이 아님을 단언한다.)

    const tree = buildTree(allArticles);
    return { props: { article, tree } }
}

export default ArticlePostPage 