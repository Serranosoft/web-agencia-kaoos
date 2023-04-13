import { useEffect } from "react";

export default function Aos() {

    useEffect(() => {

        const aosEffect1Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect1-el") !== null) {
                        entry.target.querySelector(".aos-effect1-el").classList.add("aos-effect1")
                    } else {
                        entry.target.classList.add("aos-effect1");
                    }
                } else {
                    if (entry.target.querySelector(".aos-effect1-el") !== null) {
                        entry.target.querySelector(".aos-effect1-el").classList.remove("aos-effect1")
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



        // -------------------------------------------------------------------- //
    
        const aosEffect3Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect3-el") !== null) {
                        entry.target.querySelectorAll(".aos-effect3-el").forEach((el) => el.classList.add("aos-effect3"))
                    } else {
                        entry.target.classList.add("aos-effect3")
                    }
                }/*  else {
                    if (entry.target.querySelector(".aos-effect3-el") !== null) {
                        entry.target.querySelectorAll(".aos-effect3-el").forEach((el) => el.classList.remove("aos-effect3"))
                    } else {
                        entry.target.classList.remove("aos-effect3")
                    }
                } */
            })
        }, { threshold: 0.25 })
    
        let aosEffect3Elements = document.querySelectorAll(".aos-effect3-observer");
        aosEffect3Elements.forEach((el) => aosEffect3Observer.observe(el));

        // -------------------------------------------------------------------- //
    
        const aosEffect4Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect4-el") !== null) {
                        entry.target.querySelectorAll(".aos-effect4-el").forEach((el) => el.classList.add("aos-effect4"))
                    } else {
                        entry.target.classList.add("aos-effect4")
                    }
                } else {
                    if (entry.target.querySelector(".aos-effect4-el") !== null) {
                        entry.target.querySelectorAll(".aos-effect4-el").forEach((el) => el.classList.remove("aos-effect4"))
                    } else {
                        entry.target.classList.remove("aos-effect4")
                    }
                }
            })
        }, { threshold: 0.25 })
    
        let aosEffect4Elements = document.querySelectorAll(".aos-effect4-observer");
        aosEffect4Elements.forEach((el) => aosEffect4Observer.observe(el));

    }, [])



    return (
        <></>
    )
}