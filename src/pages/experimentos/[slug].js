import H1 from "@/components/content/h1";
import { getAllSlugs, getExperimentBySlug, getPostBySlug } from "@/pages/api/wordpress";
import Head from "next/head";
import { Kanit } from 'next/font/google'

const title = Kanit({ subsets: ['latin'], weight: "700" })

export default function slug({ data }) {

    console.log(data);

    return (
        <>
            {/* <Head>
                <title>{`${data.title} - Kaoos`}</title>
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:image" content={data.featuredImage.node.sourceUrl} />
                <meta property="og:url" content={`https://kaoos.es/experimentos/${data.slug}`} />
                <meta property="og:image" content={data.featuredImage.node.sourceUrl} />
                <meta property="og:title" content={data.title} />
            </Head> */}


            {/* https://www.surfe.com/case-studies/ab-tasty/ */}
            {/* https://www.twingate.com/ CAJA DE ABAJO CON 4 CAJITAS*/}

            <H1>[data.title]</H1>
        </>
    )
}

export const getStaticPaths = async () => {

    const allPosts = await getAllSlugs();
    return {
        paths: allPosts.edges.map(({ node }) => `/experimentos/${node.slug}`),
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const data = await getExperimentBySlug("experimentos", context.params.slug)
    return {
        props: {
            data
        },
    };
}