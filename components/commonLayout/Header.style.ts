import styled from '@emotion/styled'
import mq from '../../styles/utils/mq'

export const HeaderContainer = styled.header`
border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--bg-main);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  ${mq()({
    height: ['60px', '70px'],
    padding: ['0 20px', '0 calc((100% - 800px)/2)'],
  })}
`

export const Group = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
`

export const ThemeModeImage = styled.img`
  height: 30px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  margin-right: 15px;
  transition: all ease 5s;
  &:hover {
    transform: rotateY(720deg);
  }
`

export const LogoImage = styled.img`
  height: 45px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  border-radius: 100%;
`

export const LogoTitle = styled.p`
  
`