import Container from "@/components/content/container";
import styles from "@/styles/home/rocket/rocket.module.scss";
import Text from "@/components/content/text";
import { useEffect } from "react";
import { DM_Serif_Text } from "next/font/google";

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })

export default function Info1() {

    useEffect(() => {

        const ctx = gsap.context(() => {
            const scrollTrigger = {
                trigger: ".gsap-content",
                start: "center top",
                end: "+=500",
                scrub: true,
            }
    
            gsap.to(".gsap-content", { scrollTrigger, scale: 0.85, });
            gsap.to(".gsap-wrapper", { scrollTrigger, duration: 0.5, backgroundColor: "rgba(255, 255, 255, 1)" });
            gsap.to(".gsap-text", { scrollTrigger, color: "#000000" });
            gsap.to(".gsap-rocket", { scrollTrigger, y: "-100vh", scale: 0.5 });
            gsap.to(".header", {
                scrollTrigger: {
                    trigger: ".gsap-header-trigger",
                    start: "center top",
                    scrub: true,
                },
                yPercent: -100
            });

            return () => ctx.revert();
        })

    }, [])

    return (
        <Container fullscreen className={styles.root}>

            <div className={`${styles.gradientTop} gsap-header-trigger`}></div>

            <div className={`${styles.effectWrapper} gsap-wrapper`}>
                <div className={`${styles.content} gsap-content`}>

                    <div className={`${styles.columns}`}>
                        <div className="aos-effect3-observer aos-effect3-el">
                            <Text xxxl className={`${font.className} gsap-text`}>Despega tu</Text>
                            <Text className="gsap-text">Podemos ordenar el kaoos de tu mente y crear una página web con un diseño único a tu gusto. Solo necestiamos saber cómo funciona tu negocio para ponernos a trabajar. Y si ya tienes una idea, nos adaptamos a tu estilo. </Text>
                        </div>
                        <div className="aos-effect3-observer aos-effect3-el">
                            <Text xxxl className={`${font.className} gsap-text`}>página web</Text>
                            <Text className="gsap-text">Creamos una estrategia SEO adecuada al tipo de negocio, haciendo un análisis de mercado y competencia. Para páginas web antiguas, comenzamos con una auditoría SEO. A partir de ahí, comenzamos a implementar soluciones.</Text>
                        </div>
                    </div>

                    <div className={`${styles.rocket} gsap-rocket`}>
                        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="/rocket.json" background="transparent" speed="1" style={{ width: 500, height: 500 }} loop autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </Container>
    )
}