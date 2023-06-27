import { useRouter } from "next/router"
import styles from "@/styles/components/breadcrumbs/breadcrumbs.module.scss";
import Link from "next/link";

export default function Breadcrumbs() {

    const router = useRouter();

    return (
        <div className={styles.root}>
            <span><Link href="/">Página principal</Link></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-1l4dv01"><path d="M15 10l-9 5V5l9 5z"></path></svg>
            <span><Link href={`/${router.pathname.split('/')[1]}`}>{router.pathname.split('/')[1]}</Link></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="css-1l4dv01"><path d="M15 10l-9 5V5l9 5z"></path></svg>
            <span><Link href={`${router.query.slug}`}>{router.query.slug.split("-").join(" ")}</Link></span>
        </div>
    )
}