import { usDateString } from '@/libs/utils';
import * as S from './MDXPost.style'

interface MDXPostProps {
    title: string;
    date: Date;
    children?: React.ReactNode;
}

export default function MDXPost({title, date, children}: MDXPostProps) {
    return (
        <>
            <S.MDXPostContainer>
                <S.MDXPostTitle>{title}</S.MDXPostTitle>
                {date && <S.MDXPostDate>{usDateString(date)}</S.MDXPostDate>}
                {children}
            </S.MDXPostContainer>
        </>
    )
}