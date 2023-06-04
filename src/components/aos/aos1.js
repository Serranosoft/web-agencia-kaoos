import { useEffect } from "react"

export default function Aos1() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect1-el") !== null) {
                        entry.target.querySelector(".aos-effect1-el").classList.add("aos-effect1")
                    } else {
                        entry.target.classList.add("aos-effect1");
                    }
                }
            })
        }, { threshold: 0.25 })

        let elements = document.querySelectorAll(".aos-effect1-observer");
        elements.forEach((el) => observer.observe(el));
    }, [])

    return (
        <></>
    )
}