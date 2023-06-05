import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import styles from '@/styles/home/web-design/web-design.module.scss'
import Container from '@/components/content/container';
import Separator from './separator';
import { useEffect, useRef, useState } from 'react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import { HiCurrencyDollar, HiOutlineCake, HiOutlinePencilAlt, HiOutlineSearchCircle, HiOutlineTemplate, HiShoppingCart } from 'react-icons/hi';

export default function WebDesigns() {

    const [showMsg1, setShowMsg1] = useState(false);
    const gallery = useRef(null);
    const timeout = useRef(null);
    const [elIndex, setElIndex] = useState(1);

    const onInit = () => {
        setShowMsg1(true)  
    };

    useEffect(() => {
        gallery.current.querySelectorAll("a").forEach(el => el.addEventListener("click", () => {
            el.classList.remove(styles.animate);
            clearTimeout(timeout.current);
        }))
    }, [])

    useEffect(() => {
        timeout.current = setTimeout(() => {
            gallery.current.querySelectorAll(`a`).forEach(el => el.classList.remove(styles.animate));
            gallery.current.querySelector(`a:nth-child(${elIndex})`).classList.add(styles.animate);
            if (elIndex === 6) {
                setElIndex(1);
            } else {
                setElIndex((elIndex) => elIndex + 1);
            }
        }, 3000);

        return () => {
            clearTimeout(timeout.current);
        }
    }, [elIndex])

    return (
        <Container style={styles.root}>
            <div>
                <Separator showMsg1={showMsg1} />
                <div ref={gallery}>
                    <LightGallery
                        onInit={onInit}
                        speed={1000}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames={styles.gallery}
                    >
                        <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design4.png">
                            <div className={styles.overlay}>
                                <HiShoppingCart size={60} />
                            </div>
                            <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design4.png"} />
                        </a>
                        <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design1.png">
                            <div className={styles.overlay}>
                                <HiOutlinePencilAlt size={60} />
                            </div>
                            <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design1.png"} />
                        </a>
                        <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design2-1.png">
                            <div className={styles.overlay}>
                                <HiOutlineCake size={60} />
                            </div>
                            <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design2-1.png"} />
                        </a>
                        <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design3.png">
                            <div className={styles.overlay}>
                                <HiOutlineTemplate size={60} />
                            </div>
                            <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design3.png"} />
                        </a>

                        <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design5.png">
                            <div className={styles.overlay}>
                                <HiCurrencyDollar size={60} />
                            </div>
                            <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design5.png"} />
                        </a>
                        <a className={styles.image} data-src="https://api.kaoos.es/wp-content/uploads/2023/04/design6.png">
                            <div className={styles.overlay}>
                                <HiOutlineSearchCircle size={60} />
                            </div>
                            <img src={"https://api.kaoos.es/wp-content/uploads/2023/04/design6.png"} />
                        </a>
                    </LightGallery>                
                </div>
            </div>
        </Container>
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