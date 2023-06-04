import { useEffect } from "react"

export default function Aos3() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect3-el") !== null) {
                        entry.target.querySelector(".aos-effect3-el").classList.add("aos-effect3")
                    } else {
                        entry.target.classList.add("aos-effect3");
                    }
                }
            })
        }, { threshold: 0.25 })

        let elements = document.querySelectorAll(".aos-effect3-observer");
        elements.forEach((el) => observer.observe(el));
    }, [])

    return (
        <></>
    )
}