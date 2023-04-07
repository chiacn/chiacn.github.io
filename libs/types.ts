export type MenuTreeNode = {
    title: string;
    urlPath: string;
    children: MenuTreeNode[];
}

export type PathSegment = {pathName: string};

export type MenuTreeRoot = MenuTreeNode[];