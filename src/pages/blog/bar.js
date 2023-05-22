import Button from "@/components/content/button";
import Muted from "@/components/content/muted";
import Text from "@/components/content/text";
import styles from "@/styles/blog/bar.module.scss";

export default function Bar() {


    return (
        <div className={styles.root}>
            <div className={styles.brand}>
                <img src="/favicon.svg" />
                <div>
                    <Text>KAOOS</Text>
                    <Muted>Agencia de diseño y posicionamiento web</Muted>
                </div>
            </div>
            <div className={styles.actions}>
                <Button>Ver Diseños</Button>
                <Button highlight={true}>Ver Proyectos</Button>
            </div>
        </div>
    )
}