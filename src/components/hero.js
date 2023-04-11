import H1 from './h1'
import Text from './text'
import styles from '../styles/hero.module.scss'
import Muted from './muted'
import { useEffect, useRef, useState } from 'react'
import Container from './container'
import Button from './button'
import Tilt from 'react-parallax-tilt';
import { HiChartBar, HiLightningBolt, HiTrendingUp, HiUserAdd } from "react-icons/hi";
import Test from './windupElement'
import { Pause } from 'windups'

export default function Hero() {

    const cards = useRef(null);
    const timeOut = useRef(null);
    const [cardActive, setCardActive] = useState(2);

    const [showMsg1, setShowMsg1] = useState(false);
    const [showMsg2, setShowMsg2] = useState(false);

    useEffect(() => {
        cards.current.querySelector(`.parallax:nth-child(1) .card .active`).style.opacity = "1";

        cards.current.querySelectorAll(`.parallax .card`).forEach((card) => card.addEventListener("mouseover", () => {
            window.clearTimeout(timeOut.current);
            clearAllActives();
            card.querySelector(".active").style.opacity = "1";
        }));

        showUpWindupMessage();
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

    function showUpWindupMessage() {
        const windupObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                   setShowMsg1(true);
                }
            })
        }, { threshold: 1 })
    
        let windupObserverElement = document.querySelectorAll(".separator");
        windupObserverElement.forEach((el) => windupObserver.observe(el));
    }

    return (
        <>
            <div className={styles.rootDecoration}>
                <svg className={styles.decoration} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800">
                    <defs>
                        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="hsl(206, 75%, 49%)" />
                            <stop offset="100%" stopColor="hsl(331, 90%, 56%)" />
                        </linearGradient>
                    </defs>
                    <g fill="none" stroke="url(#a)" strokeLinecap="round">
                        <path
                            strokeDasharray="50 45"
                            d="M0 780q355.5-380 711-380t711 380"
                            opacity={0.89}
                        />
                        <path
                            strokeDasharray="68 5"
                            d="M0 760q355.5-360 711-360t711 360"
                            opacity={0.72}
                        />
                        <path
                            strokeDasharray="17 55"
                            d="M0 740q355.5-340 711-340t711 340"
                            opacity={0.74}
                        />
                        <path
                            strokeDasharray="76 39"
                            d="M0 720q355.5-320 711-320t711 320"
                            opacity={0.51}
                        />
                        <path
                            strokeDasharray="70 31"
                            d="M0 700q355.5-300 711-300t711 300"
                            opacity={0.42}
                        />
                        <path
                            strokeDasharray="14 74"
                            d="M0 680q355.5-280 711-280t711 280"
                            opacity={0.37}
                        />
                        <path
                            strokeDasharray="76 50"
                            d="M0 660q355.5-260 711-260t711 260"
                            opacity={0.24}
                        />
                        <path
                            strokeDasharray="54 24"
                            d="M0 640q355.5-240 711-240t711 240"
                            opacity={0.91}
                        />
                        <path
                            strokeDasharray="53 8"
                            d="M0 620q355.5-220 711-220t711 220"
                            opacity={0.98}
                        />
                        <path
                            strokeDasharray="40 14"
                            d="M0 600q355.5-200 711-200t711 200"
                            opacity={0.6}
                        />
                        <path
                            strokeDasharray="62 62"
                            d="M0 580q355.5-180 711-180t711 180"
                            opacity={0.15}
                        />
                        <path
                            strokeDasharray="57 27"
                            d="M0 560q355.5-160 711-160t711 160"
                            opacity={0.78}
                        />
                        <path
                            strokeDasharray="44 25"
                            d="M0 540q355.5-140 711-140t711 140"
                            opacity={0.67}
                        />
                        <path
                            strokeDasharray="11 4"
                            d="M0 520q355.5-120 711-120t711 120"
                            opacity={0.49}
                        />
                        <path
                            strokeDasharray="70 52"
                            d="M0 500q355.5-100 711-100t711 100"
                            opacity={0.44}
                        />
                        <path
                            strokeDasharray="69 76"
                            d="M0 480q355.5-80 711-80t711 80"
                            opacity={0.46}
                        />
                        <path
                            strokeDasharray="28 16"
                            d="M0 460q355.5-60 711-60t711 60"
                            opacity={0.57}
                        />
                        <path
                            strokeDasharray="54 32"
                            d="M0 440q355.5-40 711-40t711 40"
                            opacity={0.82}
                        />
                        <path
                            strokeDasharray="6 9"
                            d="M0 420q355.5-20 711-20t711 20"
                            opacity={0.75}
                        />
                        <path strokeDasharray="46 14" d="M0 400h1422" opacity={0.72} />
                        <path
                            strokeDasharray="16 63"
                            d="M0 380q355.5 20 711 20t711-20"
                            opacity={0.77}
                        />
                        <path
                            strokeDasharray="47 12"
                            d="M0 360q355.5 40 711 40t711-40"
                            opacity={0.74}
                        />
                        <path
                            strokeDasharray="36 5"
                            d="M0 340q355.5 60 711 60t711-60"
                            opacity={0.56}
                        />
                        <path
                            strokeDasharray="2 69"
                            d="M0 320q355.5 80 711 80t711-80"
                            opacity={0.64}
                        />
                        <path
                            strokeDasharray="21 3"
                            d="M0 300q355.5 100 711 100t711-100"
                            opacity={0.61}
                        />
                        <path
                            strokeDasharray="47 73"
                            d="M0 280q355.5 120 711 120t711-120"
                            opacity={0.81}
                        />
                        <path
                            strokeDasharray="9 49"
                            d="M0 260q355.5 140 711 140t711-140"
                            opacity={0.47}
                        />
                        <path
                            strokeDasharray="35 18"
                            d="M0 240q355.5 160 711 160t711-160"
                            opacity={0.92}
                        />
                        <path
                            strokeDasharray="63 75"
                            d="M0 220q355.5 180 711 180t711-180"
                            opacity={0.7}
                        />
                        <path
                            strokeDasharray="50 61"
                            d="M0 200q355.5 200 711 200t711-200"
                            opacity={0.52}
                        />
                        <path
                            strokeDasharray="20 40"
                            d="M0 180q355.5 220 711 220t711-220"
                            opacity={0.2}
                        />
                        <path
                            strokeDasharray="72 5"
                            d="M0 160q355.5 240 711 240t711-240"
                            opacity={0.77}
                        />
                        <path
                            strokeDasharray="39 70"
                            d="M0 140q355.5 260 711 260t711-260"
                            opacity={0.1}
                        />
                        <path
                            strokeDasharray="34 27"
                            d="M0 120q355.5 280 711 280t711-280"
                            opacity={0.66}
                        />
                        <path
                            strokeDasharray="38 14"
                            d="M0 100q355.5 300 711 300t711-300"
                            opacity={0.54}
                        />
                        <path
                            strokeDasharray="58 34"
                            d="M0 80q355.5 320 711 320t711-320"
                            opacity={0.49}
                        />
                        <path
                            strokeDasharray="64 53"
                            d="M0 60q355.5 340 711 340t711-340"
                            opacity={0.18}
                        />
                        <path
                            strokeDasharray="27 44"
                            d="M0 40q355.5 360 711 360t711-360"
                            opacity={0.86}
                        />
                    </g>
                </svg>
            </div>
            <Container large={true}>
                <div className={styles.root}>
                    <div>
                        <H1>Diseñamos y posicionamos la web de tus sueños</H1>
                        <div ref={cards} className={styles.columns}>

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
                        <div className={`${styles.viewProjects} aos-effect2-observer`}>
                            <Button style={`${styles.viewProjectsBtn} aos-effect2-el`} displaySvg={true}>Ver diseños web</Button>
                            <Button style={`${styles.viewProjectsBtn} aos-effect2-el`} displaySvg={true}>Ver proyectos SEO</Button>
                        </div>

                        <div className={`${styles.separator} aos-effect3-observer separator`}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                {showMsg1 &&
                                    <Test mode={"rotate"} onFinished={() => setShowMsg2(true)}>
                                        <Pause ms={500} />
                                        <Text xxl={true}>Así es como hacemos crecer nuestros proyectos</Text>
                                        <Pause ms={200} />
                                    </Test>
                                }
                                {
                                    showMsg2 &&
                                    <Test isAnswer={true} mode={"rotate"}>
                                        <Text>Todos los datos son extraidos de Search Console y Google Analytics <HiChartBar color={"orange"} /></Text>
                                        <Pause ms={500} />
                                    </Test>

                                }
                            </div>
                            {/* <Text style={"aos-effect3-el"} xxl={true}>Observa como hacemos crecer nuestros proyectos</Text> */}
                            <svg className={"aos-effect3-el"} xmlns="http://www.w3.org/2000/svg" width={141} height={96}>
                                <g fill="none" fillRule="evenodd">
                                    <path
                                        fill="#D4D4D4"
                                        d="M75.347 4.514c1.79 3.677 2.887 7.532 3.684 11.375.417 1.922.66 3.858.987 5.788.301 1.932.441 3.88.667 5.821.627 7.784.309 15.624-.871 23.358-1.196 7.73-3.217 15.37-6.165 22.73a110.886 110.886 0 0 1-11.241 21.15c-1.281 1.917-1.998 1.544-.783-.379a106.48 106.48 0 0 0 10.498-21.212c2.672-7.34 4.41-14.912 5.363-22.53a104.68 104.68 0 0 0 .316-22.917c-.255-1.897-.42-3.801-.736-5.69-.345-1.884-.6-3.782-1.021-5.65-.801-3.734-1.865-7.408-3.523-10.846C70.907 2.222 70.275.44 70.945.057c.584-.35 2.624.877 4.402 4.457"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )


}