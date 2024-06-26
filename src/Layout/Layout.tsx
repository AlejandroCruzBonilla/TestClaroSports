import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Exo } from 'next/font/google';
import { Footer } from '@/Layout/components/Footer/Footer';
import { Header } from '@/Layout/components/Header/Header';

const exo = Exo({ subsets: ['latin'], display: 'swap' });

export interface Props {
  children: ReactNode | ReactNode[];
  seo: SeoProps;
}

export interface SeoProps {
  title: string;
  description: string;
}

export const Layout: NextPage<Props> = ({ seo, children }) => {
  const { title, description } = seo;

  return (
    <>
      <Head>
        <title>{`Claro Sports | ${title}`}</title>
        <meta name='description' content={description} />
				<meta property="og:title" content={`Claro Sports | ${title}`}></meta>
				<meta property="og:description" content={description}></meta>
				<meta property="og:image" content="https://test-claro-sport.vercel.app/mas-claro-que-nunca1-160012.jpg"></meta>
      </Head>
      <Header />
      <main className={`${exo.className}`}>{children}</main>
      <Footer />
    </>
  );
};
