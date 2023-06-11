import Container from "@/components/content/container";
import Text from "@/components/content/text";
import styles from "@/styles/home/comparison/comparison.module.scss";
import { useEffect } from "react";
export default function Comparison() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".comparisonSection").forEach(section => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        end: "+=680",
                        scrub: true,
                    },
                    defaults: { ease: "none" },
                });
                tl
                .fromTo(section.querySelector(".afterImage"), { xPercent: -100, x: 0 }, { xPercent: 0, duration: 1 })
                .fromTo(section.querySelector(".afterImage img"), { xPercent: 100, x: 0 }, { xPercent: 0, duration: 1 }, 0);
            });

            return () => ctx.revert();
            
        })
    }, [])

    return (
        <Container fullscreen className={`${styles.root} comparisonSection`}>
            <div className={styles.wrapper}>
                <Text xxxl>Templates created by the leading experts to help you deliver a powerful story</Text>
                <div className={styles.perspectiveWrapper}>
                    <div className={styles.perspective}>

                        <div className={`${styles.comparison}`}>
                            <div className={styles.before}>
                                <img src="https://api.kaoos.es/wp-content/uploads/2023/06/before.jpg" />
                            </div>
                            <div className={`${styles.after} afterImage`}>
                                <img src="https://api.kaoos.es/wp-content/uploads/2023/06/after.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}