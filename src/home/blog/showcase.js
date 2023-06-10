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
                    <BlogLink href={`/blog/seo-para-pymes`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/seo-para-pymes-kaoos.jpg"} style={{ transform: `translateY(var(--ty1)) translateX(var(--ty4))` }} />
                    <BlogLink href={`/blog/apuntes-de-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/apuntes-de-seo-kaoos.jpg"} style={{ transform: `translateY(var(--ty2)) translateX(var(--ty3))` }} />
                    <BlogLink href={`/blog/consultor-seo-freelance`} img={"https://api.kaoos.es/wp-content/uploads/2023/05/contratar-freelance-seo-consultor.jpg"} style={{ transform: `translateY(var(--ty3)) translateX(var(--ty1))` }} />
                    <BlogLink href={`/blog/como-elaborar-un-presupuesto-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/05/presupuesto-seo-ejemplos.jpg"} style={{ transform: `translateY(var(--ty4)) translateX(var(--ty2))` }} />

                </div>
            </div>
            <div className={`${styles.gradient} gsap-seo-cta`}></div>
        </Container>
    )
}