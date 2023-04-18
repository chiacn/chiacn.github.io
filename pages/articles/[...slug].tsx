
import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, MenuTreeNode } from '@/libs/types'
import { buildArticleList, buildMenuTree } from '@/libs/utils'
import Container from '@/components/commonLayout/Container'
import ArticleLayout from '@/components/Articles/ArticleLayout'
import ArticlesList from '@/components/Articles/ArticlesList'

interface ArticlePostPage {
    menuTree: any;
    article?: any;
    isArticle: boolean;
    articlesList: any;
    menuTitle?: any;
}

const ArticlePostPage = ({menuTree, article, isArticle, articlesList, menuTitle}: ArticlePostPage) => {
    return (
             <Container aside={menuTree}>
                { isArticle ?
                    <ArticleLayout article={article}/>
                    :
                    <ArticlesList articlesList={articlesList} menuTitle={menuTitle}/>
                }
             </Container>
    )
}

/**
 * getStaticPaths : Next.js에서 동적 라우팅을 구현할 때 어떤 경로들을 build-time에 생성할지를 지정하는 함수.
 * 페이지가 필요한 경우 on-demand로 생성하는 대신 페이지들을 빌드타임에 생성하여 성능을 향상시킬 수 있음.
 * 
 * fallback : 
    => getStaticPaths에서 paths: []에 넣지 않은 동적경로의 행동양식을 지정한다. (paths: [~]를 제외한 경로의 행동양식)
 
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
    const articlePath = params.slug.join('/').replace(/.mdx/,'');
    const menuTree = buildMenuTree();
    const articlesList = buildArticleList(allArticles, articlePath);
    const menuTitle = params.slug[params.slug.length-1];

    // mdx인 경우(글)와 아닌 경우(글 목록) 분리
    if(params.slug[params.slug.length-1].endsWith('.mdx')) {
        // 글인 경우
        return {props: { articlePath, menuTree, isArticle: true } }
    }else {
        // 글 목록인 경우
        return { props: { articlePath, menuTree, isArticle: false, articlesList: articlesList, menuTitle: menuTitle } }   
    }
}

export default ArticlePostPage 