import H1 from '@/components/content/h1'
import styles from '@/styles/home/hero/hero.module.scss'
import Container from '@/components/content/container'
import Separator from '@/pages/home/hero/separator'
import Cards from '@/pages/home/hero/cards'
import SubHeading from '@/components/content/subheading'
import HorizontalCard from '@/pages/home/hero/horizontalCard'
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
                        {/* <Separator /> */}
                    </div>
                </div>
            </Container>
        </>
    )


}