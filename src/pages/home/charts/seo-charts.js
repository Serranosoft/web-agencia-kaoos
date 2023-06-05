import Container from "@/components/content/container";
import styles from '@/styles/home/charts/seoCharts.module.scss'
import SeoChartElement from "@/pages/home/charts/seo-chart-element";
import { chartInfo1, chartInfo2, chartInfo3 } from "@/data/seocharts-data";
import Separator from "../hero/separator";

export default function SeoCharts() {

    return (
        <Container className={styles.root}>
            <Separator />
            <div>
                <div className={styles.columns}>
                    <SeoChartElement project={chartInfo1} />
                    <SeoChartElement project={chartInfo2} />
                    {/* <SeoChartElement project={chartInfo3} /> */}
                </div>
            </div>
        </Container>
    )
}