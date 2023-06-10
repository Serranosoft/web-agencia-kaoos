import Container from "@/components/content/container";
import Text from "@/components/content/text";
import styles from "@/styles/home/test/test.module.scss";
import { useLayoutEffect } from "react";

export default function Test() {


    useLayoutEffect(() => {

        // gsap.registerPlugin(ScrollTrigger);
        gsap.set(".banner3d-1", { perspectiveOrigin: "center -100vh" });
        gsap.set(".banner3d-2", { perspectiveOrigin: "center -100vh" });
        gsap.set(".banner3d-3", { perspectiveOrigin: "center -100vh" });
        gsap.set(".banner3d-4", { perspectiveOrigin: "left -100vh" });
    
        gsap.to(".banner3d-1", {
            scrollTrigger: {
                trigger: ".banner3d-1",
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            },
            perspectiveOrigin: "center 100vh",
            ease: "none"
        });
    
        gsap.to(".banner3d-2", {
            scrollTrigger: {
                trigger: ".banner3d-2",
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            },
            perspectiveOrigin: "center 100vh",
            ease: "none"
        });
    
        gsap.to(".banner3d-3", {
            scrollTrigger: {
                trigger: ".banner3d-3",
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            },
            perspectiveOrigin: "center 100vh",
            ease: "none"
        });
    
        gsap.to(".banner3d-4", {
            scrollTrigger: {
                trigger: ".banner3d-4",
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            },
            perspectiveOrigin: "left 100vh",
            ease: "none"
        });

        // gsap.to(".body", { scrollTrigger: {trigger: document.querySelector(".test-selector"), scrub: 0.5}, backgroundColor: "rgba(0, 0, 0, 1)" });

    }, [])

    return (
        <Container fullscreen className={`${styles.root} test-trigger`}>
            <div>
                <section className={styles.banner}>
                    <div className={`${styles.banner3d1} banner3d-1`}>
                        <div className={styles.banner3d1front}>
                            <Text xxl>Consigue una web profesional que marque la diferencia</Text>
                        </div>
                    </div>
                </section>

                <section className={styles.mini}></section>

                <section className={styles.banner}>
                    <div className={`${styles.banner3d2} banner3d-2`}>
                        <div className={styles.banner3d2front}>
                            <Text xxl>Cautiva y convierte a tus clientes</Text>
                        </div>
                    </div>
                </section>

                <section className={styles.half}><Text xxl>Desarrollo y diseño de primer nivel</Text></section>

                <section className={styles.banner}>
                    <div className={`${styles.banner3d3} banner3d-3`}>
                        <div className={styles.banner3d3front}>
                            <Text xxl>Se trata de perspectiva</Text>
                        </div>
                    </div>
                    <div className={styles.image}></div>
                </section>

                <section className={styles.half}>
                    <Text xxxl>Haz las cosas diferente</Text>
                    {/* <Text xxxl>Haz las cosas diferente</Text> */}
                </section>
            </div>

            {/* <section className={styles.banner}>
                <div className={styles.image2}></div>
                <div className={`${styles.banner3d4} banner3d-4`}>
                    <div className={styles.banner3d4front}>
                        <Text xxl>well that was cool but it's time to end the show...</Text>
                    </div>
                </div>
            </section> */}

        </Container>
    )
}