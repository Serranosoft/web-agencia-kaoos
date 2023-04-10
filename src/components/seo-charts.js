import Container from "./container";
import styles from '../styles/seoCharts.module.scss'
import SeoChartElement from "./seo-chart-element";
import { chartInfo1 } from "@/data/seocharts-data";

export default function SeoCharts() {

    return (
        <Container>
            <div className={styles.root}>
                <div className={styles.columns}>
                    <SeoChartElement project={chartInfo1} />
                    <SeoChartElement project={chartInfo1} />
                    <SeoChartElement project={chartInfo1} />
                </div>
            </div>
        </Container>
    )
}