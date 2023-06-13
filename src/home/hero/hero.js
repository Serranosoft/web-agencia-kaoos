import H1 from '@/components/content/h1'
import styles from '@/styles/home/hero/hero.module.scss'
import Container from '@/components/content/container'
import Cards from '@/home/hero/cards'
import SubHeading from '@/components/content/subheading'
import HorizontalCard from '@/home/hero/horizontalCard'

export default function Hero() {

    return (
        <>
            <Container large={true}>
                <div className={styles.root}>
                    <div className="aos-effect2-observer">
                        <div className={`${styles.heading} aos-effect3-observer`}>
                            <H1 title className={"aos-effect3-el"}>Ordenamos tu Kaoos y lo convertimos en un éxito</H1>
                            <SubHeading className={"aos-effect3-el"}>(Agencia de marketing digital)</SubHeading>
                        </div>
                        <Cards />
                        <HorizontalCard />
                    </div>
                </div>
            </Container>
        </>
    )


}