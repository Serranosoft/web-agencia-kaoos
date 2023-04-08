import { useEffect } from "react";

export default function Aos() {

    useEffect(() => {

        const aosEffect1Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector("aos-effect1-el") !== null) {
                        entry.target.querySelector("aos-effect1-el").classList.add("aos-effect1")
                    } else {
                        entry.target.classList.add("aos-effect1");
                    }
                } else {
                    if (entry.target.querySelector("aos-effect1-el") !== null) {
                        entry.target.querySelector("aos-effect1-el").classList.remove("aos-effect1")
                    } else {
                        entry.target.classList.remove("aos-effect1");
                    }
                }
            })
        }, { threshold: 0.25 })
    
        let aosEffect1Elements = document.querySelectorAll(".aos-effect1-observer");
        aosEffect1Elements.forEach((el) => aosEffect1Observer.observe(el));


        // -------------------------------------------------------------------- //


        const aosEffect2Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll(".aos-effect2-el").forEach((el) => el.classList.add("aos-effect2"))
                } else {
                    entry.target.querySelectorAll(".aos-effect2-el").forEach((el) => el.classList.remove("aos-effect2"))
                }   
            })
        }, { threshold: 0.25 })
    
        let aosEffect2Elements = document.querySelectorAll(".aos-effect2-observer");
        aosEffect2Elements.forEach((el) => aosEffect2Observer.observe(el));
    }, [])

    return (
        <></>
    )
}