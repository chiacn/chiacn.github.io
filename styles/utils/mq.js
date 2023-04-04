import facepaint from 'facepaint'

const deviceWidth = {
    m: 750,
}


/**
 * facepaint : 미디어쿼리를 생성하는데 사용되는 라이브러리, 뷰포트 크기에 따라 동적으로 CSS 스타일을 변경
 * @param {*} breakpoints 
 * @returns 
 * 
 * << USE CASE >>
 * export const ArticleAsideContainer = styled.div`
    border: 1px solid;
    margin-top: 10%;
    ${mq()({
        maxWidth: ['100%', '300px'],  ---> facepaint의 literal option이 false(default)면 첫 번재 배열은 mediaQuery가 적용 안 된 기본값.
        marginRight: ['0', '20px'],
    })}
    `
 * 
 */
const mq = (breakpoints=deviceWidth) => {
    const mediaQueries = Object.values(breakpoints)
        .sort((curr, next) => curr - next)
        .map(breakpoint => `@media(min-width: ${breakpoint}px)`)
    // overlap :   '@media(min-width: 768px)', '@media(min-width: 1024px)' 일 때, 1024px에서 두 미디어쿼리를 중첩적으로 적용.
    return facepaint(mediaQueries, {overlap: true}) 
}

export default mq;