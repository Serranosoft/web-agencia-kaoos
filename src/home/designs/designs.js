import { useLayoutEffect } from "react"
import styles from "@/styles/home/designs/designs.module.scss";
import H1 from "@/components/content/h1";
import Separator from "./separator";
import Container from "@/components/content/container";

export default function Designs() {


    useLayoutEffect(() => {
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
            gsap.to(".body", {scrollTrigger: {trigger: section, scrub: 0.5}, backgroundColor: "rgba(0, 0, 0, 1)" });
        });
    }, [])

    return (
        <Container fullscreen className={styles.root}>

            <Separator />



            <div className={styles.demoWrapper}>
                <section className={`${styles.demoGallery} designs-section`}>
                    <ul className={`${styles.wrapper} wrapper`}>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                    </ul>
                </section>
                <section className={`${styles.demoGallery} designs-section`}>
                    <ul className={`${styles.wrapper} wrapper`}>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                    </ul>
                </section>
                <section className={`${styles.demoGallery} designs-section`}>
                    <ul className={`${styles.wrapper} wrapper`}>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                        <li>
                            <img height="874px" src="https://source.unsplash.com/random/1240pxx874px?sig=<%= rand(0..206) %>" width="1240px" />
                        </li>
                    </ul>
                </section>
            </div>


        </Container>
    )
}