import Container from "@/components/content/container";
import Text from "@/components/content/text";
import styles from "@/styles/home/blog/showcase.module.scss";
import BlogLink from "@/components/blog/blogLink";
import { useEffect } from "react";

export default function Showcase() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".header", {
                scrollTrigger: {
                    trigger: ".gsap-show-header-trigger",
                    start: "center top",
                    scrub: true,
                },
                yPercent: 0
            });
        });

        return () => ctx.revert();
    })

    return (
        <Container fullscreen className={styles.root}>
            <Text xxxl>No te pierdas lo último en Marketing Digital</Text>
            <div className={styles.card}>
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardInner}>
                    <BlogLink href={`/blog/seo-para-pymes`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/seo-para-pymes-kaoos.jpg"} />
                    <BlogLink href={`/blog/apuntes-de-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/apuntes-de-seo-kaoos.jpg"} />
                    <BlogLink href={`/blog/consultor-seo-freelance`} img={"https://api.kaoos.es/wp-content/uploads/2023/06/consultor-freelance-seo.jpg"} />
                    <BlogLink href={`/blog/como-elaborar-un-presupuesto-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/06/presupuesto-seo.jpg"} />
                </div>
            </div>
            <div className={`${styles.gradient} gsap-seo-cta gsap-show-header-trigger`}></div>
        </Container>
    )
}