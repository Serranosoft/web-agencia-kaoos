import { HiChartBar, HiCursorClick, HiFire } from 'react-icons/hi'
import styles from '@/styles/components/seoChartElement.module.scss'
import Chart from './chart-views'
import Muted from './muted'
import Text from './text'
import { useEffect, useRef, useState } from 'react'


export default function SeoChartElement({project}) {

    const [renderChart, setRenderChart] = useState(false);
    const testRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRenderChart(true);
                }
            })
        }, { threshold: 0.87 })

        observer.observe(testRef.current)
    }, [])

    return (
        <div className={"aos-effect4-observer"}>
            <div ref={testRef} className={`${styles.root} aos-effect4-el`}>
                <div className={styles.blurDecoration1}></div>
                <div className={styles.blurDecoration2}></div>
                <div className={styles.blurDecoration3}></div>
                <div className={styles.dataWrapper}>
                    <Text xxl={true}><strong>{project.title}</strong></Text>
                    <Muted>{project.subtitle}</Muted>
                    <Muted>Estos datos han sido extraidos de Google Analytics y Search Console</Muted>
                    <div className={styles.data}>
                        <div>
                            <HiChartBar />
                            <Text>Páginas vistas: {project.total_views}</Text>
                        </div>
                        <div>
                            <HiFire />
                            <Text>Impresiones totales: {project.total_impressions}</Text>
                        </div>
                        <div>
                            <HiCursorClick />
                            <Text>Clics totales: {project.total_clicks}</Text>
                        </div>
                    </div>
                </div>
                <div className={styles.chart}>
                    {renderChart ?
                        <Chart color={project.color} data={project.data} />
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}