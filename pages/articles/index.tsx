/*
    pages/articles/index.tsx : pages/articles.tsx와 같은 역할을 한다. (articles 폴더의 index.tsx)
*/
import Container from "@/components/commonLayout/Container";
import { allArticles, Article } from "@/.contentlayer/generated";
import { buildMenuTree } from "@/libs/utils";
import { MenuTreeRoot } from "@/libs/types";

export default function Articles({tree}: {tree: MenuTreeRoot}) {
    return (
        <Container aside={tree}>
            아티클 페이지 메인이다.
        </Container>
    )
}

/**
 * getStaticProps는 Next.js 페이지 컴포넌트에만 사용할 수 있음. ArticleLayout에는 사용할 수 없다고 함.
 */
export const getStaticProps = async () => {
    const tree = buildMenuTree();
    return { props: { tree } }
}

