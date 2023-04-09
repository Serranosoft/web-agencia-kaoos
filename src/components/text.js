import styles from '../styles/components/text.module.scss'

export default function Text({children, xl, xxl}) {


    return (
        <>
            <p 
            className={
                `
                    ${styles.root} 
                    ${xl === true ? styles.xl : ''}
                    ${xxl === true ? styles.xxl : ''}

                
                `}>{children}</p>
        </>
    )
}