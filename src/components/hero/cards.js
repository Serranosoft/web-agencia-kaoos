import Tilt from 'react-parallax-tilt';
import { HiChartBar, HiLightningBolt, HiTrendingUp, HiUserAdd } from "react-icons/hi";
import Text from '../text';
import Muted from '../muted';
import styles from '@/styles/hero/cards.module.scss'
import { useEffect, useRef, useState } from 'react'


export default function Cards() {

    const cards = useRef(null);
    const timeOut = useRef(null);
    const [cardActive, setCardActive] = useState(2);

    useEffect(() => {
        cards.current.querySelector(`.parallax:nth-child(1) .card .active`).style.opacity = "1";

        cards.current.querySelectorAll(`.parallax .card`).forEach((card) => card.addEventListener("mouseover", () => {
            window.clearTimeout(timeOut.current);
            clearAllActives();
            card.querySelector(".active").style.opacity = "1";
        }));
    }, [])

    useEffect(() => {
        if (cardActive > 0) {
            timeOut.current = setTimeout(() => {
                clearAllActives();
                cards.current.querySelector(`.parallax:nth-child(${cardActive}) .card .active`).style.opacity = "1";
                if (cardActive < 4) {
                    setCardActive(cardActive + 1);
                } else {
                    setCardActive(1);
                }
            }, 3000)
        } else {
            setCardActive(1);
        }

        return () => {
            clearTimeout(timeOut.current);
        }
    }, [cardActive])

    function clearAllActives() {
        cards.current.querySelectorAll(`.parallax .card`).forEach((card) => card.querySelector(".active").style.opacity = "0");
    }

    return (
        <div ref={cards} className={styles.root}>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiLightningBolt size={50} />
                        <Text xl={true}><strong>Lorem ipsum dolor sit amet.</strong></Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et sem posuere, tincidunt dolor vel, tempus sapien.</Text>
                        <Muted>Designers typically make site mockups in:</Muted>
                    </div>
                </div>
            </Tilt>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiChartBar size={50} />
                        <Text xl={true}><strong>Lorem ipsum dolor sit amet.</strong></Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et sem posuere, tincidunt dolor vel, tempus sapien.</Text>
                        <Muted>Designers typically make site mockups in:</Muted>
                    </div>
                </div>
            </Tilt>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiTrendingUp size={50} />
                        <Text xl={true}><strong>Lorem ipsum dolor sit amet.</strong></Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et sem posuere, tincidunt dolor vel, tempus sapien.</Text>
                        <Muted>Designers typically make site mockups in:</Muted>
                    </div>
                </div>
            </Tilt>
            <Tilt
                className={`${styles.parallaxGlare} parallax`}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className={`${styles.card} card aos-effect1-observer aos-effect1-el`}>
                    <div className={styles.cardInactive}></div>
                    <div className={`${styles.cardActive} active`}></div>
                    <div className={styles.cardContent}>
                        <HiUserAdd size={50} />
                        <Text xl={true}><strong>Lorem ipsum dolor sit amet.</strong></Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et sem posuere, tincidunt dolor vel, tempus sapien.</Text>
                        <Muted>Designers typically make site mockups in:</Muted>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}