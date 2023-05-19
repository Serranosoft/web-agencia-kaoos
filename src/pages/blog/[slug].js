import { getAllSlugs, getPostBySlug } from "../api/wordpress";
import styles from '../../styles/blog/[slug].module.scss';
import Head from "next/head";

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
                <div>
                    <h1>{data.title}</h1>
                    {data.featuredImage && <img src={data.featuredImage.node.sourceUrl} />}
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