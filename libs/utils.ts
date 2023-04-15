import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, MenuTreeNode } from '@/libs/types'

/**
 * buildMenuTree : 메뉴 구성 Tree를 return함.
 *  
 * @param articles contentlayer 라이브러리로 구성한 파일/폴더 계층 정보
 * @param parentPathNames 
 *      ex. posts/articles/argorithm/a.mdx 에서,
 *          parentPathNames : argorithm -> posts/articles -> posts/articles/argorithm -> posts/articles/argorithm/a (재귀함수 순회에 따라 parentPathNames가 점점 길어짐)
 *          
 */

export const buildMenuTree = (articles: Article[], parentPathNames: string[] = []): MenuTreeNode[] => {
    const level = (parentPathNames.length > 0) ? parentPathNames.length +1 : 1;

    // pathSegments.length-1을 해주는 이유 : posts/articles/argorithm/a(.mdx)에서 마지막 파일을 제거해주기 위해 (메뉴에 폴더 단위까지만 표기되도록)
    return articles
      .filter( 
        _ =>
          _.pathSegments.length-1 >= level &&  // pathSegments.length: 전체 경로 / level (이전) 부모경로, 점점 늘어남 | 재귀함수로 받은 부모 경로 level 길이와 전체 경로 길이가 같아지면 종료.
          _.pathSegments
            .map((_: PathSegment) => _.pathName)
            .join('/')
            .startsWith(parentPathNames.join('/')) 
      )
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
      .map<MenuTreeNode>(doc => {
          // url 중 현재 탐색 중인 계층 level만 반영하도록
          const currentPath = doc.pathSegments.slice(0, level);
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


export const usDateString = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('en-US', options)
}