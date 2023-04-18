import { allArticles, Article } from 'contentlayer/generated'
import { PathSegment, MenuTreeNode } from '@/libs/types'
import { articlesMenuList } from '@/data/menu';

export const buildMenuTree = () => {
    const menuList = articlesMenuList;
    return menuList
        .map( _ => ({
            title: _.title,
            urlPath: `/articles/${_.title}/`,
            children: _.children,
        }))
  }

export const buildArticleList = (articles: Article[], basePath: string): MenuTreeNode[] => {
    return articles
      .filter( 
        _ => (
          _.pathSegments
            .map((_: PathSegment) => _.pathName)
            .join('/')
            .startsWith(basePath))
      )
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
      .map<MenuTreeNode>(doc => {       
          return {
              title: doc.pathSegments[doc.pathSegments.length-1],
              urlPath: '/articles/' + doc.pathSegments.map((_: PathSegment) => _.pathName).join('/'), 
          }
      })
  }

export const usDateString = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('en-US', options)
}