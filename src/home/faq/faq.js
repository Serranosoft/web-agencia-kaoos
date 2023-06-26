import Container from "@/components/content/container";
import Text from "@/components/content/text";
import styles from "@/styles/home/faq/faq.module.scss"
import Link from "next/link";
import { useEffect } from "react";
export default function Faq() {

    useEffect(() => {
        document.querySelectorAll(".question").forEach(el => {
            el.addEventListener("click", (e) => {
                e.currentTarget.classList.toggle(styles.show);
                setTimeout(() => {
                    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' })
                }, 100);
            })
        })
    }, [])


    return (
        <Container id="preguntas-frecuentes" className={styles.root}>
            <Text xxxl>Preguntas frecuentes</Text>
            <div className={`${styles.questionWrapper} question`}>
                <div className={styles.question}>
                    <Text xxl>¿Cuáles son vuestros precios?</Text>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg>
                </div>
                <div className={`${styles.answer} answer`}>
                    <Text></Text>
                </div>
            </div>
            <div className={`${styles.questionWrapper} question`}>
                <div className={styles.question}>
                    <Text xxl>¿Dónde puedo ver ejemplos de vuestro trabajo?</Text>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="css-15d17o1"><path d="M15 10l-9 5V5l9 5z"></path></svg>
                </div>
                <div className={`${styles.answer} answer`}>
                    <Text>Aquí. <Link href="/bocetos">Ejemplos de nuestros diseños</Link></Text>
                </div>
            </div>

        </Container>
    )
}