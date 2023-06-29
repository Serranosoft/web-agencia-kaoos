import Container from "@/components/content/container";
import H2 from "@/components/content/h2";
import Muted from "@/components/content/muted";
import Text from "@/components/content/text";
import styles from "@/styles/home/design-guide/design-guide.module.scss";
import Button from "../button/button";
import SubHeading from "@/components/content/subheading";

export default function DesignGuide() {


    return (
        <Container fullscreen className={styles.root}>
            <div>
                <H2 title>¿Qué negocio quieres posicionar?</H2>
                <SubHeading>Trabajamos con estrategias adaptadas para cada tipo de proyecto</SubHeading>

                <div className={styles.grid}>
                    <div className={styles.box}>
                        <img src="/1.svg" />
                        <div className={styles.info}>
                            <Text xl>Pymes y Startups</Text>
                            <Muted>Si estás construyendo una empresa, hacemos que tu proyecto tenga presencia digital para competir en el mercado</Muted>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="/5.svg" />
                        <div className={styles.info}>
                            <Text xl>Noticias</Text>
                            <Muted>Un portal de noticias, sin curación de contenido y sin una estrategia SEO, no conseguirá escalar en los resultados</Muted>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="/4.svg" />
                        <div className={styles.info}>
                            <Text xl>Ecommerce</Text>
                            <Muted>Hacemos que tu tienda destaque entre las marcas y aumentamos la cantidad y calidad de tus clientes</Muted>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="/3.svg" />
                        <div className={styles.info}>
                            <Text xl>Productos y servicios</Text>
                            <Muted>Cualquier funcionalidad que necesites, nosotros la hacemos posible programando cada detalle</Muted>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="/2.svg" />
                        <div className={styles.info}>
                            <Text xl>Negocios locales</Text>
                            <Muted>Sé el mejor negocio de tu zona en presencia, nosotros lo hacemos por ti de manera digital</Muted>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="/6.svg" />
                        <div className={styles.info}>
                            <Text xl>Empresas</Text>
                            <Muted>Si tu empresa no tiene una gran presencia en internet, nosotros te impulsamos para alcanzar el éxito</Muted>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="/7.svg" />
                        <div className={styles.info}>
                            <Text xl>Pymes y Startups</Text>
                            <Muted>Si estás construyendo una empresa, hacemos que tu proyecto tenga presencia digital para competir en el mercado</Muted>
                        </div>
                    </div>
                </div>
            </div>
            <Button href={"https://lxb7f5dwsyt.typeform.com/to/e3ayzUDn"}>Solicitar un presupuesto</Button>

        </Container>
    )
}