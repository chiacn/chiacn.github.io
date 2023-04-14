import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as S from './Header.style';
import Nav from './Nav';

export default function Header() {
    const [themeMode, setThemeMode] = useState<string>(document.body.dataset.theme || 'default');

    useEffect(() => {
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode);
    }, [themeMode])

    const themeModeHandle = (e: any) => {
        e.preventDefault();
        setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }

    return (
        <S.HeaderContainer>
            <S.Group>
                <div onClick={themeModeHandle}>
                    {themeMode === 'dark' ? (
                        <S.ThemeModeImage alt="밝은 모드로 변경" src="/static/moon.png"/>
                    ) : (
                        <S.ThemeModeImage alt="어두운 모드로 변경" src="/static/sun.png"/>
                    )
                    }
                </div>
                <Link href="/" passHref> 
                    {/* {themeMode === 'dark' ? (
                        <LogoImage src="/static/logo-dark.jpg" alt="어두운 로고" />
                    ) : (
                        <LogoImage src="/static/logo-light.jpg" alt="밝은 로고" />
                    )} */}
                    {themeMode === 'dark' ? (
                        <div className="bg-white-500 cursor-pointer font-press">CodingPoodle</div>
                    ) : (
                        <div className="bg-white-500 cursor-pointer font-press">CodingPoodle</div>
                    )}
                </Link>
            </S.Group>
            <Nav/>
        </S.HeaderContainer>
    )
}