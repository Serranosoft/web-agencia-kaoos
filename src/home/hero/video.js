import styles from "@/styles/home/hero/video.module.scss"
import { useEffect, useRef } from "react"

export default function Video() {

    const ref = useRef();

    useEffect(() => {
        setTimeout(() => {
            ref.current.play();
        }, 2000);
    }, [])

    return (
        <div className={styles.root}>
            <video ref={ref} width="100%" height="auto" loading="eager" muted preload="auto" playsInline="">
                <source src="video.webm" type="video/webm" />
            </video>
        </div>
    )
}