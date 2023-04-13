import styles from '../../styles/web-design/web-design.module.scss'

// import 'pure-react-carousel/dist/react-carousel.es.css';
import Text from '../text';
import Container from '../container';
import Separator from './separator';
import { useState } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

export default function WebDesigns() {

    const [showMsg1, setShowMsg1] = useState(false);


    const onInit = () => {
        setShowMsg1(true)
    };

    return (
        <>
            <Separator showMsg1={showMsg1} />
            <Container style={styles.root}>
                <LightGallery
                    onInit={onInit}
                    speed={1000}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames={styles.gallery}
                >
                    <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design4.png">
                        <div className={styles.overlay}>
                            <Text xxl={true}>Diseño #1</Text>
                        </div>
                        <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design4.png"} />
                    </a>
                    <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design1.png">
                        <div className={styles.overlay}>
                            <Text xxl={true}>Diseño #2</Text>
                        </div>
                        <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design1.png"} />
                    </a>
                    <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design2-1.png">
                        <div className={styles.overlay}>
                            <Text xxl={true}>Diseño #3</Text>
                        </div>
                        <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design2-1.png"} />
                    </a>
                    <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design3.png">
                        <div className={styles.overlay}>
                            <Text xxl={true}>Diseño #4</Text>
                        </div>
                        <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design3.png"} />
                    </a>

                    <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design5.png">
                        <div className={styles.overlay}>
                            <Text xxl={true}>Diseño #5</Text>
                        </div>
                        <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design5.png"} />
                    </a>
                    <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design6.png">
                        <div className={styles.overlay}>
                            <Text xxl={true}>Diseño #6</Text>
                        </div>
                        <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design6.png"} />
                    </a>
                </LightGallery>





                
            </Container>
        </>
    )
}



{/* <CarouselProvider naturalSlideWidth={450} naturalSlideHeight={1080} totalSlides={1} hasMasterSpinner={true}>
                <Slider className={styles.slider}>
                    <Slide index={0}>
                        <ImageWithZoom className={styles.img} src="https://api.kaoos.es/wp-content/uploads/2023/04/design1.png" />
                    </Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider> */}