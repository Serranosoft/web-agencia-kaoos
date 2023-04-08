import { useEffect } from "react";

export default function Aos() {

    useEffect(() => {
        const opacityObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aos-opacity-off")
                } else {
                    entry.target.classList.remove("aos-opacity-off")
                }
            })
        }, { threshold: 0.9 })
    
        let aosOpacityElements = document.querySelectorAll(".aos-opacity-in");
        aosOpacityElements.forEach((el) => opacityObserver.observe(el));
    }, [])

    return (
        <></>
    )
}