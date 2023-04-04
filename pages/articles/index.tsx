/*
    pages/articles/index.tsx : pages/articles.tsx와 같은 역할을 한다. (articles 폴더의 index.tsx)
*/
import ArticleLayout from "@/components/Article/ArticleLayout";
import Container from "@/components/commonLayout/Container";
import { allArticles, Article } from "@/.contentlayer/generated";
import { buildTree } from "@/libs/utils";
import { TreeRoot } from "@/libs/types";

export default function Articles({tree}: {tree: TreeRoot}) {
    console.log('allArticles = ', allArticles)
    return (
        <>
            <ArticleLayout tree={tree}>
                <Container>
                    articles
                </Container>
            </ArticleLayout>
        </>
    )
}

/**
 * getStaticProps는 Next.js 페이지 컴포넌트에만 사용할 수 있음. ArticleLayout에는 사용할 수 없다고 함.
 */
export const getStaticProps = async () => {
    const tree = buildTree(allArticles);
    return { props: { tree } }
}

