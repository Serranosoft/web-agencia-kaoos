import Container from "@/components/content/container";
import styles from '@/styles/charts/seoCharts.module.scss'
import SeoChartElement from "@/components/charts/seo-chart-element";
import { chartInfo1, chartInfo2, chartInfo3 } from "@/data/seocharts-data";

export default function SeoCharts() {

    return (
        <Container>
            <div className={styles.root}>
                <div className={styles.columns}>
                    <SeoChartElement project={chartInfo1} />
                    <SeoChartElement project={chartInfo2} />
                    {/* <SeoChartElement project={chartInfo3} /> */}
                </div>
            </div>
        </Container>
    )
}