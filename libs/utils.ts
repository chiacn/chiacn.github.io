import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, MenuTreeNode } from '@/libs/types'

export const buildMenuTree = (articles: Article[], parentPathNames: string[] = []): MenuTreeNode[] => {
    const level = parentPathNames.length;
    return articles
      .filter( 
        _ =>
          _.pathSegments.length > level &&  // pathSegments.length: 기존 경로 / level (이전) 부모경로, 점점 늘어남 | 재귀함수로 받은 부모 경로 level 길이와 전체 경로 길이가 같아지면 종료.
          _.pathSegments
            .map((_: PathSegment) => _.pathName)
            .join('/')
            .startsWith(parentPathNames.join('/')) 
      )
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
      .map<MenuTreeNode>(doc => {
          const currentPath = doc.pathSegments.slice(0, level+1); // url 중 현재 탐색 중인 계층 level만 반영하도록
          return {
              title: currentPath[currentPath.length-1].pathName,
              urlPath: '/articles/' + currentPath.map((_: PathSegment) => _.pathName).join('/'), 
              children: buildMenuTree(
                  articles,
                  currentPath.map((_: PathSegment) => _.pathName)
              ),
          }
      })
  }

// TODO: export const buildArticlesTree 