import H1 from '@/components/content/h1'
import styles from '@/styles/home/hero/hero.module.scss'
import Container from '@/components/content/container'
import Separator from '@/home/hero/separator'
import Cards from '@/home/hero/cards'
import SubHeading from '@/components/content/subheading'
import HorizontalCard from '@/home/hero/horizontalCard'
import Video from './video'

export default function Hero() {





    return (
        <>
            <Container large={true}>
                <div className={styles.root}>
                    {/* <Video /> */}
                    <div className="aos-effect2-observer">
                        <div className={`${styles.heading} aos-effect3-observer`}>
                            <H1 className={"aos-effect3-el"}>Ordenamos tu Kaoos y lo convertimos en un éxito</H1>
                            <SubHeading className={"aos-effect3-el"}>(Agencia de marketing digital)</SubHeading>
                        </div>
                        <Cards />
                        <HorizontalCard />
                        {/* <Separator /> */}
                    </div>
                </div>
            </Container>
        </>
    )


}