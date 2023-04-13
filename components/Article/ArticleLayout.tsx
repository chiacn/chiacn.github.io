import { MenuTreeRoot } from "@/libs/types";
import ArticleAside from "./ArticleAside";
import { ArticleLayoutContainer } from "./ArticleLayout.style";

export default function ArticleLayout({children, tree}: {children: React.ReactNode; tree: MenuTreeRoot}) {

    return (
        <>
        <ArticleLayoutContainer>
            <ArticleAside tree={tree}/>
            {children}
        </ArticleLayoutContainer>
        </>
    )
}
