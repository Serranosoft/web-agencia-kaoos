import { useEffect } from "react"

export default function Aos4() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect4-el") !== null) {
                        entry.target.querySelector(".aos-effect4-el").classList.add("aos-effect4")
                    } else {
                        entry.target.classList.add("aos-effect4");
                    }
                }
            })
        }, { threshold: 0.5 })

        let elements = document.querySelectorAll(".aos-effect4-observer");
        elements.forEach((el) => observer.observe(el));
    }, [])

    return (
        <></>
    )
}