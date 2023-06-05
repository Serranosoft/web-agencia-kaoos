import { HiChartBar, HiCursorClick, HiFire } from 'react-icons/hi'
import styles from '@/styles/home/charts/seoChartElement.module.scss'
import Chart from '@/pages/home/charts/chart-views'
import Text from '@/components/content/text'
import { useEffect, useRef, useState } from 'react'


export default function SeoChartElement({ project }) {

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
                    <Text>{project.subtitle}</Text>
                    <Text>{project.description}</Text>
                    <div className={styles.data}>
                        <div>
                            <HiChartBar size={25} />
                            <Text>Visitas</Text>
                            <Text>{project.total_views}</Text>
                        </div>
                        <div>
                            <HiFire size={25} />
                            <Text>Impresiones</Text>
                            <Text>{project.total_impressions}</Text>
                        </div>
                        <div>
                            <HiCursorClick size={25} />
                            <Text>Clics</Text>
                            <Text>{project.total_clicks}</Text>
                        </div>
                    </div>
                </div>
                {renderChart ?
                    <Chart color={project.color} data={project.data} />
                    :
                    <></>
                }
            </div>
        </div>
    )
}