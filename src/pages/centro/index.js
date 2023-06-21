import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Centro() {


    const router = useRouter();

    useEffect(() => {
        router.push("/centro/seo");
    }, [])
    
    return (
        <>
        </>
    )
}