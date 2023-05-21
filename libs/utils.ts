import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, MenuTreeNode } from '@/libs/types'
import { ArticleListDescription, articlesMenuList } from '@/data/menu';

export const buildMenuTree = () => {
    const menuList = articlesMenuList;
    return menuList
        .map( _ => ({
            title: _.title,
            urlPath: `/articles/${_.title}`,
            children: _?.children,
        }))
  }

export const buildArticleList = (articles: Article[], basePath: string, type = undefined): MenuTreeNode[] => {
    const parentPath = (type === 'all') ? '/' : basePath; // 특정 경로(메뉴)의 글들만 보이도록
    return articles
      .filter( 
        _ => (
          _.url_path
          .startsWith(parentPath))
      )
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
      .map<MenuTreeNode>(doc => {
          return {
              title: doc.title,
              urlPath: '/articles/' + doc.pathSegments.map((_: PathSegment) => _.pathName).join('/'), 
          }
      })
  }

export const getArticleListDescription = (menuTitle: string) => {
    return ArticleListDescription[menuTitle]
}

export const usDateString = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('en-US', options)
}