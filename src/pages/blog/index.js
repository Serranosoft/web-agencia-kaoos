import { getAllPosts } from "@/pages/api/wordpress";
import styles from "@/styles/blog/blog.module.scss";
import Container from "@/components/content/container";
import Text from "@/components/content/text";
import Button from "@/components/content/button";
import { Nunito_Sans } from 'next/font/google'
import Head from 'next/head'
import BlogLink from "@/components/blog/blogLink";


const text = Nunito_Sans({ subsets: ['latin'], weight: "400" })

export default function Blog({ data }) {

    return (
        <>
            <Head>
                <title>Posicionamiento SEO y Marketing Digital en Kaoos</title>
                <meta name="description" content="Contenido y guías sobre marketing digital y posicionamiento SEO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="echarts.js"></script>
            </Head>
            <Container fullscreen className={`${styles.root} ${text.className}`}>
                <div>
                    <Text xxxl kanit className={`${styles.title} `}>TRÁFICO CONSTANTE Y CUALIFICADO</Text>
                    <Text xxl kanit className={`${styles.title} `}>DESCUBRE DE QUE TRATA EL SEO</Text>

                    <div className={styles.content}>
                        <div className={styles.list}>
                            {
                                data.edges.map((blog) => {
                                    return (
                                        <BlogLink key={blog.node.id} href={`/blog/${blog.node.slug}`} img={blog.node.featuredImage.node.sourceUrl} alt={blog.node.featuredImage.node.altText} />
                                    )
                                })
                            }
                        </div>
                        <div className={styles.sidebar}>
                            <Text xl>¿Abrumado con demasiada información?</Text>
                            <Text>Comienza a posicionar tu web y obtener tráfico real desde ya con nuestra ayuda.<br></br> Kaoos es una agencia especializada en diseño web y posicionamiento.</Text>
                            <div className={styles.actions}>
                                <Button to="/desarrollo-web" target="_blank">Ver Diseños</Button>
                                <Button highlight={true} target="_blank" to="/">Ver Proyectos</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export const getStaticProps = async () => {
    const data = await getAllPosts("blog");
    return {
        props: {
            data
        },
    };
}