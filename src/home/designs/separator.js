import styles from '@/styles/home/designs/separator.module.scss'
import WindupElement from '@/components/misc/windupElement'
import { useEffect, useState } from 'react';
import Text from '@/components/content/text';
import { Pause } from 'windups';


export default function Separator() {

    const [showMsg1, setShowMsg1] = useState(false);
    const [showMsg2, setShowMsg2] = useState(false);

    function showUpWindupMessage() {
        const windupObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowMsg1(true);
                }
            })
        }, { threshold: 1, rootMargin: '100px 0px 100px 0px' })

        let windupObserverElement = document.querySelector(".designs-separator");
        windupObserver.observe(windupObserverElement);
    }

    useEffect(() => {
        showUpWindupMessage();
    }, [])

    return (
        <div className={`${styles.root} aos-effect3-observer designs-separator`}>
            <div>
                {showMsg1 &&
                    <WindupElement mode={"rotate"} onFinished={() => setShowMsg2(true)}>
                        <Pause ms={500} />
                        <Text xxl>Introducción a sección de diseños</Text>
                        <Pause ms={200} />
                    </WindupElement>
                }
                {
                    showMsg2 &&
                    <WindupElement isAnswer={true} mode={"rotate"}>
                        <Text>¿¿Segunda frase introductoria a sección de diseños??</Text>
                        <Pause ms={500} />
                    </WindupElement>
                }
            </div>
            <svg className="aos-effect3-el" xmlns="http://www.w3.org/2000/svg" width={141} height={96}>
                <g fill="none" fillRule="evenodd">
                    <path
                        fill="#D4D4D4"
                        d="M75.347 4.514c1.79 3.677 2.887 7.532 3.684 11.375.417 1.922.66 3.858.987 5.788.301 1.932.441 3.88.667 5.821.627 7.784.309 15.624-.871 23.358-1.196 7.73-3.217 15.37-6.165 22.73a110.886 110.886 0 0 1-11.241 21.15c-1.281 1.917-1.998 1.544-.783-.379a106.48 106.48 0 0 0 10.498-21.212c2.672-7.34 4.41-14.912 5.363-22.53a104.68 104.68 0 0 0 .316-22.917c-.255-1.897-.42-3.801-.736-5.69-.345-1.884-.6-3.782-1.021-5.65-.801-3.734-1.865-7.408-3.523-10.846C70.907 2.222 70.275.44 70.945.057c.584-.35 2.624.877 4.402 4.457"
                    />
                </g>
            </svg>
        </div>
    )
}