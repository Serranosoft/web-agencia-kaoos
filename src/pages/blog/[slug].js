import H1 from "@/components/content/h1";
import { getAllSlugs, getPostBySlug } from "@/pages/api/wordpress";
import styles from '@/styles/blog/[slug].module.scss';
import Head from "next/head";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { Kanit } from 'next/font/google'
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

const title = Kanit({ subsets: ['latin'], weight: "700" })

export default function slug({ data }) {






    return (
        <>
            <Head>
                <title>{`${data.title} - Kaoos`}</title>
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:image" content={data.featuredImage.node.sourceUrl} />
                <meta property="og:url" content={`https://kaoos.es/blog/${data.slug}`} />
                <meta property="og:image" content={data.featuredImage.node.sourceUrl} />
                <meta property="og:title" content={data.title} />
            </Head>

            <section className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <Breadcrumbs />
                        <span className={styles.title}>Kaoos — </span><H1 className={`${title.className} ${styles.title}`}>{data.title}</H1>
                        <div>
                            <AiOutlineUser />
                            <Link target="_blank" href="https://twitter.com/hugmelevi">{data.author.node.name}</Link>
                        </div>
                    </div>
                    <img src={data.featuredImage.node.sourceUrl} />
                </div>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
            </section>
        </>
    )
}

export const getStaticPaths = async () => {

    const allPosts = await getAllSlugs();
    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`),
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const data = await getPostBySlug("blog", context.params.slug)
    return {
        props: {
            data
        },
    };
}