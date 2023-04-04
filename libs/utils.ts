import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, TreeNode } from '@/libs/types'


/**
    1. allArticles 구조: contentlayer.config.ts에서 지정한 
 */
export const buildTree = (articles: Article[], parentPathNames: string[] = []): TreeNode[] => {
    const level = parentPathNames.length
    return articles
      .filter(
        _ =>
          _.pathSegments.length === level + 1 && // pathSegments의 길이, 즉 경로의 깊이가 부모보다 깊을 때
          _.pathSegments
            .map((_: PathSegment) => _.pathName)
            .join('/')
            .startsWith(parentPathNames.join('/')) // 부모 경로를 포함하는 것 filter
      )
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
      .map<TreeNode>(doc => ({
        title: doc.title,
        date: doc.date,
        urlPath: '/articles/' + doc.pathSegments.map((_: PathSegment) => _.pathName).join('/'),
        children: buildTree(
            articles,
          doc.pathSegments.map((_: PathSegment) => _.pathName)
        ),
      }))
  }