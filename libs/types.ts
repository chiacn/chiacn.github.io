export type TreeNode = {
    title: string;
    date: string;
    urlPath: string;
    children: TreeNode[];
}

export type PathSegment = {pathName: string};

export type TreeRoot = TreeNode[];