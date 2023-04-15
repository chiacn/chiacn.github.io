import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Container from '@/components/commonLayout/Container'
import { allArticles, Article } from '@/.contentlayer/generated'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('articles = ', allArticles)
  return (
    <Container>
        Home
    </Container>
  )
}
