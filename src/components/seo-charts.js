import { useEffect, useRef, useState } from "react";
import Container from "./container";
import styles from '@/styles/seoCharts.module.scss'
import Chart from "./chart-views";
import Text from "./text";
import Muted from "./muted";
import { HiCursorClick, HiChartBar, HiFire } from "react-icons/hi";

const data = [
    { name: '09/2022', visitas: 34653 },
    { name: '10/2022', visitas: 49962 },
    { name: '11/2022', visitas: 60462 },
    { name: '12/2022', visitas: 70068 },
    { name: '01/2023', visitas: 84211 },
    { name: '02/2023', visitas: 67380 },
    { name: '03/2023', visitas: 63184 },
]

export default function SeoCharts() {

    const [renderChart, setRenderChart] = useState(false);
    const testRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRenderChart(true);
                }
            })
        }, { threshold: 1 })

        observer.observe(testRef.current)
    }, [])

    return (
        <Container>
            <div className={styles.root}>
                <div ref={testRef} className={`${styles.columns} aos-effect4-observer`}>
                    <div className={`${styles.chartWrapper} aos-effect4-el`}>
                        <div className={styles.dataWrapper}>
                            <Text xl={true}><strong>Página web de recetas</strong></Text>
                            <Muted>Datos actualizados desde Mayo de 2022 hasta Abril de 2024</Muted>
                            <Muted>Estos datos han sido extraidos de Google Analytics y Search Console</Muted>
                            <div className={styles.data}>
                                <div>
                                    <HiChartBar/>
                                    <Text>Páginas vistas: </Text>
                                </div>
                                <div>
                                    <HiFire />
                                    <Text>Impresiones totales: </Text>
                                </div>
                                <div>
                                    <HiCursorClick />
                                    <Text>Clics totales: </Text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chart}>
                            {renderChart ?
                                <Chart color={"#F5CD79"} data={data} />
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}