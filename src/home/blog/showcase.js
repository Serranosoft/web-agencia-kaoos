import Container from "@/components/content/container";
import Text from "@/components/content/text";
import styles from "@/styles/home/blog/showcase.module.scss";
import BlogLink from "@/components/blog/blogLink";

export default function Showcase() {

    return (
        <Container fullscreen className={styles.root}>
            <Text xxxl>¿Encabezado H2?</Text>
            <div className={styles.card}>
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardInner}>
                    <BlogLink href={`/blog/seo-para-pymes`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/seo-para-pymes-kaoos.jpg"} />
                    <BlogLink href={`/blog/apuntes-de-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/apuntes-de-seo-kaoos.jpg"} />
                    <BlogLink href={`/blog/consultor-seo-freelance`} img={"https://api.kaoos.es/wp-content/uploads/2023/06/consultor-freelance-seo.jpg"} />
                    <BlogLink href={`/blog/como-elaborar-un-presupuesto-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/06/presupuesto-seo.jpg"} />
                </div>
            </div>
            <div className={`${styles.gradient} gsap-seo-cta`}></div>
        </Container>
    )
}