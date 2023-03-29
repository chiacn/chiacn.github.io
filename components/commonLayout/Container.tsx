
import Head from "next/head"
import Nav from './Nav'
import dynamic from 'next/dynamic'
import { StyledContainer, StyledMain } from './Container.style'
import Footer from "./Footer"

interface ContainerProps {
    children: React.ReactNode;
}

/**
 * Dynamic import : 기존의 import 구문은 정적으로 모듈을 로드, 즉 Javascript 파일을 로드할 때 모든 모듈을 불러온 후 실행한다.
 *                  반면 import() 함수는 필요한 모듈만 동적으로 로드하여 실행할 수 있다. 
 *                  (초기 로딩 속도 개선, 필요한 모듈만 불러와 자원 절약 가능.)
 *                  Next.js에서는 dynamic 함수를 사용하여 동적 로딩을 쉽게 구현할 수 있다. dynamic함수는 React Component를 동적으로 로드할 때 사용한다.
 */
const Header = dynamic(() => import('./Header'), {
    ssr: false,
})

export default function Container({children}: ContainerProps) {   
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>

            <StyledContainer>
                <Header/>
                <StyledMain>{children}</StyledMain>     
                <Footer/>       
            </StyledContainer>
        </>
    )
}