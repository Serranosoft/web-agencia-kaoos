import { useEffect } from "react"
import styles from "@/styles/home/designs/designs.module.scss";
import Container from "@/components/content/container";

export default function Designs() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
            gsap.utils.toArray('.designs-section').forEach((section, index) => {
                const w = section.querySelector('.wrapper');
                const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
                gsap.fromTo(w, { x }, {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 0.5
                    }
                });
            });

            return () => ctx.revert();
            
        })
    }, [])

    return (
        <Container fullscreen className={styles.root}>

            <div className={styles.demoWrapper}>
                <section className={`${styles.demoGallery} designs-section`}>
                    <ul className={`${styles.wrapper} wrapper`}>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section3.png" />
                        </li>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section1.png" />
                        </li>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section5.png" />
                        </li>
                    </ul>
                </section>
                <section className={`${styles.demoGallery} designs-section`}>
                    <ul className={`${styles.wrapper} wrapper`}>
                        <li>
                            <video src="https://api.kaoos.es/wp-content/uploads/2023/06/dragsa-2.mp4" autoPlay loop muted/>
                        </li>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section6.png" />
                        </li>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section2.png" />
                        </li>
                    </ul>
                </section>
                <section className={`${styles.demoGallery} designs-section`}>
                    <ul className={`${styles.wrapper} wrapper`}>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section9.png" />
                        </li>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section8.png" />
                        </li>
                        <li>
                            <img src="https://api.kaoos.es/wp-content/uploads/2023/06/section7.png" />
                        </li>
                    </ul>
                </section>
            </div>


        </Container>
    )
}