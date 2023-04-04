import styled from '@emotion/styled'
import mq from '../../styles/utils/mq'
import { css } from '@emotion/react'

const dynamicVisible = ({ visible }: {visible: boolean}) => {
  if (visible) {
    return css`
      display: flex;
      border-left: 5px solid var(--bg-sub);
      border-right: none;
      padding-left: 10px;
      padding-right: 5px;
    `
  } else {
    return css`
      @media (max-width: 750px) {
        display: none;
        border-left: none;
      }
    `
  }
}

export const ArticleAsideContainer = styled.div`
    border: 1px solid;
    margin-top: 10%;

    flex-flow: column nowrap;
    display: flex;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-left: 80px;
    &::-webkit-scrollbar {
        display: none;
    }
    ${mq()({
        maxWidth: ['100%', '300px'],
        marginRight: ['0', '20px'],
    })}
    ${dynamicVisible}
`

export const ArticleAsideTitle = styled.div`
    font-size: 25px;
`

export const ArticleAsideList = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

export const ArticleAsideText = styled.span`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0;
  word-break: keep-all;
  font-size: 25px;
  font-weight: 600;
  &:hover {
    color: var(--tx-accent-light);
  }
`

export const ArticleAsideChildText = styled.a`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0 10px 15px;
  word-break: keep-all;
  font-size: 14px;
  &:hover {
    color: var(--tx-accent);
  }
`

export const ArticleAsideMobileIcon = styled.div`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--tx-accent-light);
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  left: 30px;
  border-radius: 100%;
  transition: 0.5s;
  &:hover {
    background: var(--tx-accent);
  }
  ${mq()({
    display: ['flex', 'none'],
  })}
`