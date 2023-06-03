import Container from "../content/container";
import styles from "@/styles/info1/info1.module.scss";
import H2 from "../content/h2";
import { useEffect, useRef } from "react";
import * as basicScroll from 'basicscroll'
import { DM_Serif_Text } from "next/font/google";
import Text from "../content/text";
import Link from "next/link";
import BlogLink from "../blog/blogLink";

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })

export default function Info1() {

    const ref = useRef();

    useEffect(() => {

        const instance = basicScroll.create({
            elem: ref.current,
            from: "bottom-middle",
            to: "bottom-top",
            props: {
                '--test': {
                    from: 1.0,
                    to: 0.85
                },
                "--rocketMove": {
                    from: "0",
                    to: "-1000px"
                },
                "--rocketScale": {
                    from: 1,
                    to: 0.5
                },
                "--ty1": {
                    from: "-50px",
                    to: 0
                },
                "--ty2": {
                    from: "-50px",
                    to: 0
                },
                "--ty3": {
                    from: "-50px",
                    to: 0
                },
                "--ty4": {
                    from: "-50px",
                    to: 0
                },
            }
        })

        const colorInstance = basicScroll.create({
            elem: ref.current,
            from: "top-top",
            to: "bottom-top",
            inside: (instance, percentage, props) => {
                document.querySelector("header").style.transform = "translateY(-100%)";
            },
            outside: (instance, percentage, props) => {
                if (percentage > 190 || percentage < -25) {
                    document.querySelector("header").style.transform = "translateY(0)";
                }
            },
            props: {
                "--bgColor1": {
                    from: 19,
                    to: 255
                },
                "--bgColor2": {
                    from: 0,
                    to: 255
                },
                "--bgColor3": {
                    from: 2255,
                    to: 255
                },
            }
        })

        instance.start()
        colorInstance.start()
    }, [])

    return (
        <Container fullscreen className={styles.root}>

            <div className={styles.effectWrapper} style={{ backgroundColor: `rgb(var(--bgColor1), var(--bgColor2), var(--bgColor3))` }}>
                <div ref={ref} style={{ transform: `scale3d(var(--test), var(--test), 1)` }} className={styles.content}>

                    <div className={styles.columns}>
                        <div>
                            <Text xxxl className={font.className}>Despega tu</Text>
                            <Text>Podemos ordenar el kaoos de tu mente y crear una página web con un diseño único a tu gusto. Solo necestiamos saber cómo funciona tu negocio para ponernos a trabajar. Y si ya tienes una idea, nos adaptamos a tu estilo. </Text>
                        </div>
                        <div>
                            <Text xxxl className={font.className}>página web</Text>
                            <Text>Creamos una estrategia SEO adecuada al tipo de negocio, haciendo un análisis de mercado y competencia. Para páginas web antiguas, comenzamos con una auditoría SEO. A partir de ahí, comenzamos a implementar soluciones.</Text>
                        </div>
                    </div>

                    <div className={styles.rocket} style={{ transform: `translateY(var(--rocketMove)) scale(var(--rocketScale)) translateX(-50%)` }}>
                        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="/rocket.json" background="transparent" speed="1" style={{ width: 500, height: 500 }} loop autoplay></lottie-player>
                    </div>
                </div>
            </div>

            <div className={styles.blogWrapper}>
                <H2>¿Encabezado H2?</H2>
                <div className={styles.list}>
                    <BlogLink href={`/blog/seo-para-pymes`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/seo-para-pymes-kaoos.jpg"} />
                    <BlogLink href={`/blog/apuntes-de-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/apuntes-de-seo-kaoos.jpg"} />
                    <BlogLink href={`/blog/consultor-seo-freelance`} img={"https://api.kaoos.es/wp-content/uploads/2023/05/contratar-freelance-seo-consultor.jpg"} />
                    <BlogLink href={`/blog/como-elaborar-un-presupuesto-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/05/presupuesto-seo-ejemplos.jpg"} />
                </div>
            </div>

        </Container>
    )
}