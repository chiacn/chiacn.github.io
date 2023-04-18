export type MenuTreeNode = {
    title: string;
    urlPath: string;
    children?: any;
}

export type PathSegment = {pathName: string};

export type MenuTreeRoot = MenuTreeNode[];