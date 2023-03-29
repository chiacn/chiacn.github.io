import navlinks from "../../data/navlinks"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from 'react'
import { DropNavContainer, NavContainer } from "./Nav.style"


const Links = ({setIsDropMenuOpen}: {setIsDropMenuOpen: any}) => {
    const router = useRouter();
    
    /**
     * a 태그 - data-selected: 사용자 정의 속성 (e.target.dataset이라는 속성으로 가져올 수 있다.)
     */
    return (
        <>
            {navlinks.map(link => (
                <Link href={link.link} key={link.title} passHref>
                    <div
                        data-selected={router.pathname.includes(link.path) ? 'true' : 'false'}
                        onClick={() => setIsDropMenuOpen(false)}
                    >
                        {link.title}
                    </div>
                </Link>
            ))}
            <Link href="/articles/article-01.mdx" key="test" passHref>
                Test
            </Link>
        </>
    )
}

export default function Nav() {
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

    /*
        svg TAG 
        <path> 태그를 이용해 도형을 그리고 있음. 
     */
    return (
        <>
        <NavContainer>
            <Links setIsDropMenuOpen={setIsDropMenuOpen} />
            <svg
                onClick={() => setIsDropMenuOpen(!isDropMenuOpen)}
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="38px"
            >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
        </NavContainer>
        <DropNavContainer visible={isDropMenuOpen}>
            <Links setIsDropMenuOpen={setIsDropMenuOpen} />
        </DropNavContainer>
        </>
    )
}