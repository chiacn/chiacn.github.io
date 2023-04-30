import styled from '@emotion/styled'
import mq from '../../styles/utils/mq'


export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Section = styled.section`
  display: flex;
  width: 100%;
`

export const Aside = styled.aside`
  display: flex;
`

// mq()() <- 메서드 체이닝
export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 80%;
  align-items: center;
  z-index: 10;
  ${mq()({
    padding: ['0 20px', '0'],
  })}
  `