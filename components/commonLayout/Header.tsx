import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Group, HeaderContainer, LogoImage, ThemeModeImage } from './Header.style';
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
        <HeaderContainer>
            <Nav/>
            <Group>
                <div onClick={themeModeHandle}>
                    {themeMode === 'dark' ? (
                        <ThemeModeImage alt="밝은 모드로 변경" src="/static/moon.png"/>
                    ) : (
                        <ThemeModeImage alt="어두운 모드로 변경" src="/static/sun.png"/>
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
                        <div className="px-30 bg-blue-500 cursor-pointer font-press">CodingPoodle</div>
                    ) : (
                        <div className="bg-white-500 cursor-pointer font-press">CodingPoodle</div>
                    )}
                </Link>
            </Group>
        </HeaderContainer>
    )
}