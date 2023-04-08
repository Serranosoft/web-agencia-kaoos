import H1 from './h1'
import Text from './text'
import styles from '@/styles/Hero.module.scss'
import Muted from './muted'
import { useEffect, useRef, useState } from 'react'
import Container from './container'
import Button from './button'
import Tilt from 'react-parallax-tilt';
import { HiChartBar, HiLightningBolt, HiTrendingUp, HiUserAdd } from "react-icons/hi";

export default function Hero() {

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
        <>
            <section className={styles.root}>
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

                <Container large={true}>
                    {/* <H1>Supercharge your websites with the speed of Framer.</H1> */}
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
                                    <Text xl={true}><strong>Static to wow in minutes.</strong></Text>
                                    <Text>Get a fully featured interactive design canvas that’s optimized for designing sites. Or start in Figma and copy to Framer later.</Text>
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
                                    <HiChartBar size={50}/>
                                    <Text xl={true}><strong>Static to wow in minutes.</strong></Text>
                                    <Text>Get a fully featured interactive design canvas that’s optimized for designing sites. Or start in Figma and copy to Framer later.</Text>
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
                                    <HiTrendingUp size={50}/>
                                    <Text xl={true}><strong>Static to wow in minutes.</strong></Text>
                                    <Text>Get a fully featured interactive design canvas that’s optimized for designing sites. Or start in Figma and copy to Framer later.</Text>
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
                                    <Text xl={true}><strong>Static to wow in minutes.</strong></Text>
                                    <Text>Get a fully featured interactive design canvas that’s optimized for designing sites. Or start in Figma and copy to Framer later.</Text>
                                    <Muted>Designers typically make site mockups in:</Muted>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className={`${styles.viewProjects} aos-effect2-observer`}>
                        <Button style={`${styles.viewProjectsBtn} aos-effect2-el`} displaySvg={true}>Ver diseños web</Button>
                        <Button style={`${styles.viewProjectsBtn} aos-effect2-el`} displaySvg={true}>Ver proyectos SEO</Button>
                    </div>

                    <div className={styles.separator}>
                        <Text xxl={true}>Observa como hacemos crecer nuestros proyectos</Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width={141} height={96}>
                            <g fill="none" fillRule="evenodd">
                                <path
                                    fill="#FCD34D"
                                    d="m131.878 67.621-.024.323a11.377 11.377 0 0 0 .37 3.633l.052.182-.107.114c-.405.423-.842.814-1.31 1.168l-.283.208a11.164 11.164 0 0 1-3.61 1.697 10.73 10.73 0 0 1 2.153 3.297c.404.961.66 1.974.772 2.997l.01.115-.098.102a10.732 10.732 0 0 0-2.376 3.938l-.447-.12a8.813 8.813 0 0 0-.611-5.756c-.84-1.772-2.301-3.213-4.05-4.064a1.817 1.817 0 0 1-.881-.885 1.848 1.848 0 0 1-.127-1.012l.018-.09.025-.102.04-.124c.121-.323.341-.616.618-.82.32-.226.712-.353 1.2-.314 1.935.16 3.935-.285 5.63-1.348a9.186 9.186 0 0 0 3.024-3.117l.012-.022Zm2.187 1.61-.008.152a9.262 9.262 0 0 0 .818 4.103 9.445 9.445 0 0 0 5.287 4.962c.24.091.364.27.384.447l.002.062-.005.062-.011.047-.013.038a.496.496 0 0 1-.565.312 8.94 8.94 0 0 0-6.436 1.377 8.806 8.806 0 0 0-3.596 4.95l-.077.3-.448-.12a10.99 10.99 0 0 0 .526-4.342l-.022-.226.13-.132a10.468 10.468 0 0 1 2.309-1.74l.281-.15a10.495 10.495 0 0 1 4.521-1.182 11.014 11.014 0 0 1-3.77-3.841 10.832 10.832 0 0 1-1.058-2.414l-.038-.137.132-.143a11.586 11.586 0 0 0 1.609-2.291l.048-.094Zm.956-2.507c-.196.789-.48 1.558-.844 2.29l-.112.217.007-.166a9.08 9.08 0 0 1 .503-2.46l.446.119Zm-2.417-.648c-.159.44-.35.864-.568 1.268l-.158.277.001-.011c.04-.445.107-.888.202-1.326l.076-.327.447.12ZM5.286 49.018l.19.263c.73.986 1.62 1.848 2.618 2.545l.157.106-.008.156a11.127 11.127 0 0 1-.253 1.736l-.084.342a11.164 11.164 0 0 1-1.674 3.62A10.74 10.74 0 0 1 10 58.928a10.792 10.792 0 0 1 2.518 1.8l.082.082-.01.14c-.09 1.52.139 3.082.712 4.545l-.42.196a8.813 8.813 0 0 0-4.168-4.017c-1.783-.818-3.828-.983-5.714-.511a1.817 1.817 0 0 1-1.244-.11 1.848 1.848 0 0 1-.748-.695l-.044-.08-.046-.094-.049-.122a1.826 1.826 0 0 1-.055-1.025c.101-.378.319-.727.718-1.012 1.585-1.12 2.831-2.747 3.446-4.65a9.167 9.167 0 0 0 .367-3.965l-.059-.392Zm2.71-.173.092.122a9.262 9.262 0 0 0 3.264 2.617 9.445 9.445 0 0 0 7.24.403c.243-.085.452-.027.58.096l.062.072.038.067.015.038c.073.2.014.455-.232.602a8.94 8.94 0 0 0-4.046 5.192 8.806 8.806 0 0 0 .422 6.09l.14.293-.42.196a10.99 10.99 0 0 0-2.39-3.664l-.16-.16.014-.184a10.43 10.43 0 0 1 .65-2.817l.119-.296a10.49 10.49 0 0 1 2.704-3.811 11.014 11.014 0 0 1-5.358-.52 10.832 10.832 0 0 1-2.361-1.169l-.118-.08.01-.195a11.586 11.586 0 0 0-.241-2.789l-.024-.103Zm-.878-2.535c.356.73.632 1.503.825 2.297l.053.238-.1-.132a9.08 9.08 0 0 1-1.197-2.207l.419-.196ZM4.85 47.368c.16.439.287.886.379 1.336l.057.314-.006-.01a10.922 10.922 0 0 1-.697-1.145l-.153-.3.42-.195Z"
                                />
                                <path
                                    fill="#FDE68A"
                                    d="m108.356 21.734.18.226a7.283 7.283 0 0 0 2.553 1.962l.04.018-.049.294-.066.304a7.124 7.124 0 0 1-.578 1.584c.522.13 1.027.32 1.5.57.362.188.704.409 1.023.656l.177.144-.023.103a6.735 6.735 0 0 0 .272 3.707l-.416.203a4.767 4.767 0 0 0-2.27-2.043 4.717 4.717 0 0 0-3-.221c-.358.087-.777-.21-1.12-.67l-.092-.13a1.927 1.927 0 0 1-.155-.24l-.073-.148a1.9 1.9 0 0 1-.103-.241l-.04-.126c-.2-.612-.202-1.198.118-1.44 1.304-.923 2.187-2.558 2.132-4.327l-.01-.185Zm2.738-.187.08.086c.377.39.822.73 1.325.993a5.454 5.454 0 0 0 4.287.345.304.304 0 0 1 .24.025l.072.047.058.051.064.08.053.088.01.021c.096.201.11.443-.028.536a4.948 4.948 0 0 0-2.078 2.974 4.793 4.793 0 0 0 .343 3.193l.114.22-.416.202a6.973 6.973 0 0 0-2.025-2.87l-.057-.046.04-.17c.07-.272.156-.536.258-.791l.107-.253a6.466 6.466 0 0 1 1.139-1.742 6.977 6.977 0 0 1-2.776-.302 6.703 6.703 0 0 1-.547-.196l-.227-.098.003-.013a7.396 7.396 0 0 0-.002-2.168l-.037-.212Zm-.72-2.127c.332.634.57 1.323.705 2.033l.015.094-.104-.113a5.188 5.188 0 0 1-1.033-1.811l.416-.203Zm-2.25 1.097c.125.391.2.783.23 1.17l.002.047a7.152 7.152 0 0 1-.503-.752l-.145-.262.416-.203Z"
                                />
                                <path
                                    fill="#D4D4D4"
                                    d="M75.347 4.514c1.79 3.677 2.887 7.532 3.684 11.375.417 1.922.66 3.858.987 5.788.301 1.932.441 3.88.667 5.821.627 7.784.309 15.624-.871 23.358-1.196 7.73-3.217 15.37-6.165 22.73a110.886 110.886 0 0 1-11.241 21.15c-1.281 1.917-1.998 1.544-.783-.379a106.48 106.48 0 0 0 10.498-21.212c2.672-7.34 4.41-14.912 5.363-22.53a104.68 104.68 0 0 0 .316-22.917c-.255-1.897-.42-3.801-.736-5.69-.345-1.884-.6-3.782-1.021-5.65-.801-3.734-1.865-7.408-3.523-10.846C70.907 2.222 70.275.44 70.945.057c.584-.35 2.624.877 4.402 4.457"
                                />
                            </g>
                        </svg>
                    </div>
                </Container>
            </section>
        </>
    )


}