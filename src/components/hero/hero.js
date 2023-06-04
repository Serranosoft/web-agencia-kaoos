import H1 from '@/components/content/h1'
import styles from '@/styles/hero/hero.module.scss'
import Container from '@/components/content/container'
import Separator from '@/components/hero/separator'
import Cards from '@/components/hero/cards'
import SubHeading from '../content/subheading'
import HorizontalCard from '@/components/hero/horizontalCard'
import Video from './video'

export default function Hero() {





    return (
        <>
            <Container large={true}>
                <div className={styles.root}>
                    {/* <Video /> */}
                    <div className="aos-effect2-observer">
                        <div className={`${styles.heading} aos-effect3-observer`}>
                            <H1 className={"aos-effect3-el"}>Diseñamos y posicionamos tu web</H1>
                            <SubHeading className={"aos-effect3-el"}>(sin magia ni milagros)</SubHeading>
                        </div>
                        <Cards />
                        <HorizontalCard />
                        <Separator />
                    </div>
                </div>
            </Container>
        </>
    )


}