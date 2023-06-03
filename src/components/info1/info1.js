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

    const contentRef = useRef();
    const blogRef = useRef();

    useEffect(() => {

        const instance = basicScroll.create({
            elem: contentRef.current,
            from: "bottom-middle",
            to: "bottom-top",
            inside: () => {
                document.querySelector("header").style.transform = "translateY(-100%)";
            },
            outside: (percentage) => {
                if (percentage > 380 || percentage < -100) {
                    document.querySelector("header").style.transform = "translateY(0)";
                }
            },
            props: {
                '--divScale': {
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

        const blogLinkInstance = basicScroll.create({
            elem: blogRef.current,
            from: "top-bottom", // por encima del elemento sobrepasando la mitad del viewport
            to: "bottom-middle", // por debajo del elemento sobrepasando la parte superior del viewport
            props: {
                "--ty1": {
                    from: "50px",
                    to: "0px",
                },
                "--ty2": {
                    from: "-80px",
                    to: "0px",
                },
                "--ty3": {
                    from: "70px",
                    to: "0px",
                },
                "--ty4": {
                    from: "-30px",
                    to: "0px",
                }
            }
        })

        instance.start()
        blogLinkInstance.start();
    }, [])

    return (
        <Container fullscreen className={styles.root}>

            <div className={styles.effectWrapper} style={{ backgroundColor: `rgb(var(--bgColor1), var(--bgColor2), var(--bgColor3))` }}>
                <div ref={contentRef} style={{ transform: `scale3d(var(--divScale), var(--divScale), 1)` }} className={styles.content}>

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
                <div ref={blogRef} className={styles.list}>
                    <BlogLink href={`/blog/seo-para-pymes`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/seo-para-pymes-kaoos.jpg"} style={{transform: `translateY(var(--ty1)) translateX(var(--ty4))`}} />
                    <BlogLink href={`/blog/apuntes-de-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/04/apuntes-de-seo-kaoos.jpg"} style={{transform: `translateY(var(--ty2)) translateX(var(--ty3))`}} />
                    <BlogLink href={`/blog/consultor-seo-freelance`} img={"https://api.kaoos.es/wp-content/uploads/2023/05/contratar-freelance-seo-consultor.jpg"} style={{transform: `translateY(var(--ty3)) translateX(var(--ty1))`}} />
                    <BlogLink href={`/blog/como-elaborar-un-presupuesto-seo`} img={"https://api.kaoos.es/wp-content/uploads/2023/05/presupuesto-seo-ejemplos.jpg"} style={{transform: `translateY(var(--ty4)) translateX(var(--ty2))`}} />
                </div>
            </div>

        </Container>
    )
}