import { useEffect } from "react"
import styles from "@/styles/designs/designs.module.scss";
import Container from "@/components/content/container";
import Head from "next/head";
import H1 from "@/components/content/h1";
import Text from "@/components/content/text";
import Button from "@/home/button/button";

export default function Designs() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = document.querySelectorAll('.item')

            const expand = (item, i) => {
                items.forEach((it, ind) => {
                    if (i === ind) return
                    it.clicked = false
                })
                gsap.to(items, {
                    width: item.clicked ? '15vw' : '12vw',
                    borderRadius: "3vw",
                    duration: 2,
                    ease: 'elastic(1, .6)'
                })

                item.clicked = !item.clicked
                gsap.to(item, {
                    width: item.clicked ? '42vw' : '15vw',
                    borderRadius: item.clicked ? "0rem" : "3vw",
                    duration: 2.5,
                    ease: 'elastic(1, .3)'
                })
            }

            items.forEach((item, i) => {
                item.clicked = false
                item.addEventListener('click', () => expand(item, i))
            })

        }, [])

        return () => ctx.revert();
    }, [])


    return (
        <>
            <Head>
                <title>Portfolio de diseños y bocetos de Kaoos</title>
                <meta name="description" content="Portfolio de diseños de Kaoos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js"></script>
            </Head>
            <Container fullscreen className={styles.root}>
                <div className={styles.bg}></div>
                <div className={styles.header}>
                    <H1 title>Portfolio de diseños y bocetos</H1>
                    <Text xl>Clica en cada elemento para ver el diseño completo.</Text>
                </div>
                <div className={styles.group}>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section5.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section1.png)" }}></div>
                    <video className={`${styles.item} item`} src="https://api.kaoos.es/wp-content/uploads/2023/06/dragsa-2.mp4" autoPlay loop muted/>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section6.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section9.png)" }}></div>
                </div>

                <div className={styles.group}>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section8.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section7.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section11.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section4-2.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section12.png)" }}></div>
                </div>
                <div className={styles.cta}>
                    <Text xxl>¿Te gusta lo que ves?</Text>
                    <Text xl>En Kaoos nos encargamos del diseño de tu página web</Text>
                    <Button href={"https://lxb7f5dwsyt.typeform.com/to/e3ayzUDn"}>Ponerse en contacto</Button>
                </div>
                <div className={styles.group}>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section2.png)" }}></div>
                    <div className={`${styles.item} item`} style={{ backgroundImage: "url(https://api.kaoos.es/wp-content/uploads/2023/06/section3.png)" }}></div>
                </div>
            </Container>

        </>
    )
}