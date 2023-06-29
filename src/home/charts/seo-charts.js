import Container from "@/components/content/container";
import styles from '@/styles/home/charts/seoCharts.module.scss'
import SeoChartElement from "@/home/charts/seo-chart-element";
import { chartInfo1, chartInfo2 } from "@/data/seocharts-data";

export default function SeoCharts() {

    return (
        <Container className={styles.root}>
            <div>
                <div className={styles.columns}>
                    <SeoChartElement project={chartInfo1} />
                    <SeoChartElement project={chartInfo2} />
                </div>
            </div>
        </Container>
    )
}