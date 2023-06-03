import Container from "../content/container";
import styles from "@/styles/info1/info1.module.scss";
import H2 from "../content/h2";
import { useEffect, useRef } from "react";
import * as basicScroll from 'basicscroll'
import { DM_Serif_Text } from "next/font/google";
import Text from "../content/text";

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
                }
            }
        })

        const colorInstance = basicScroll.create({
            elem: ref.current,
            from: "top-top",
            to: "middle-top",
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
                            <Text xxxl className={font.className}>¿Encabezado H2?</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae pharetra sapien. Suspendisse tellus elit, vehicula vel sapien sit amet, sollicitudin accumsan augue. </Text>
                        </div>
                        <div>
                            <Text xxxl className={font.className}>¿Encabezado H2?</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae pharetra sapien. Suspendisse tellus elit, vehicula vel sapien sit amet, sollicitudin accumsan augue. </Text>
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
            </div>

        </Container>
    )
}