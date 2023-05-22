import { useRouter } from "next/router"
import styles from "@/styles/components/breadcrumbs/breadcrumbs.module.scss";
import Link from "next/link";

export default function Breadcrumbs() {

    const router = useRouter();

    return (
        <div className={styles.root}>
            <span><Link href="/">Página principal</Link></span>
            <span>{">"}</span>
            <span><Link href={`/${router.pathname.split('/')[1]}`}>{router.pathname.split('/')[1]}</Link></span>
            <span>{">"}</span>
            <span><Link href={`${router.query.slug}`}>{router.query.slug.split("-").join(" ")}</Link></span>
        </div>
    )
}