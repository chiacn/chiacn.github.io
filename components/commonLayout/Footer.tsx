import metadata from "@/data/metadata";
import { BlogInfo, Copyright, FooterContainer, SocialIcon, SocialIconWrap } from "./Footer.style";

export default function Footer() {
    return (
        <FooterContainer>
            <SocialIconWrap>
            {metadata.social.github && (
                <a href={metadata.social.github} target="_blank" rel="noreferrer">
                    <SocialIcon src="/social/github.svg" alt="github"/>
                </a>
            )}
            </SocialIconWrap>
            <Copyright>
                Copyright © {new Date().getFullYear()} {metadata.author}
            </Copyright>
            <BlogInfo>
                chiacn.io
            </BlogInfo>
        </FooterContainer>
    )
}