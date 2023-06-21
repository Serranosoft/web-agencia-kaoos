import Button from "@/components/content/button";
import Container from "@/components/content/container";
import H1 from "@/components/content/h1";
import SubHeading from "@/components/content/subheading";
import Text from "@/components/content/text";
import styles from "@/styles/centro/seo/seo.module.scss";
import { Kanit } from "next/font/google";
import Link from "next/link";

const title = Kanit({ subsets: ['latin'], weight: ["700", "900"] })

export default function Seo() {

    return (
        <Container fullscreen className={styles.root}>
            <div>
                <div className={styles.hero}>
                    <div>
                        <H1 kanit>SEO Marketing Hub 2.0</H1>
                        <Text xl>Ya sea que sea nuevo en SEO o quiera aprender estrategias avanzadas, este es su centro de conocimiento de SEO.</Text>
                        <Button href="/centro/seo" highlight>Empezar ahora</Button>
                    </div>
                    <img src="https://api.kaoos.es/wp-content/uploads/2023/06/seo-marketing-hub-hero.svg" alt="seo marketing hub" />
                </div>

                <div className={styles.content}>
                    <div className={styles.box}>
                        <Link href="/centro/seo">
                            <div>
                                <Text xl>SEO Fundamentals</Text>
                                <img src="https://api.kaoos.es/wp-content/uploads/2023/06/seo-fundamentals.svg" alt="seo-fundamentals" />
                            </div>
                        </Link>
                        <div className={styles.index}>
                            <div className={styles.summary}>
                                <Text xxl>¿Qué aprenderás?</Text>
                                <Text>Aprenda los conceptos básicos de SEO en un solo lugar, incluido el rastreo, la indexación, las señales de clasificación del motor de búsqueda, la elección de palabras clave, la actualización del contenido, el texto de anclaje y más.</Text>
                            </div>
                            <div className={styles.indexItems}>
                                <Text xxl>8 Recursos</Text>
                                <ul>
                                    <li>¿Qué es SEO?</li>
                                    <li>Posicionamiento en buscadores</li>
                                    <li>SEO frente a SEM</li>
                                    <li>Factores de clasificación del motor de búsqueda</li>
                                    <li>Mejores prácticas de SEO</li>
                                    <li>Métricas SEO</li>
                                    <li>Diseño web amigable con SEO</li>
                                    <li>¿Qué son las SERP?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}