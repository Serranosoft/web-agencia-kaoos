import H1 from './h1'
import Text from './text'
import styles from '../styles/hero.module.scss'
import Muted from './muted'
import Container from './container'
import Button from './button'
import { Pause } from 'windups'
import Separator from './hero/separator'
import Cards from './hero/cards'
import ViewProjects from './hero/viewProjects'

export default function Hero() {



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
                        <Cards />                       
                        <ViewProjects />
                        <Separator />
                    </div>
                </div>
            </Container>
        </>
    )


}