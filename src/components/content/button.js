import styles from '@/styles/components/button.module.scss'

export default function Button({ children, displaySvg, style }) {


    return (
        <>

            <button className={`${styles.button} ${style && style}`}>
                {displaySvg ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="sparkle"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.187 8.096 15 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09L15 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L8.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09l.001-.001ZM6 14.25l-.259 1.035a3.375 3.375 0 0 1-2.456 2.456L2.25 18l1.035.259a3.375 3.375 0 0 1 2.456 2.456L6 21.75l.259-1.035a3.375 3.375 0 0 1 2.455-2.456L9.75 18l-1.036-.259a3.375 3.375 0 0 1-2.455-2.456L6 14.25ZM6.5 4l-.197.591a1.125 1.125 0 0 1-.712.712L5 5.5l.591.197a1.125 1.125 0 0 1 .712.712L6.5 7l.197-.591a1.125 1.125 0 0 1 .712-.712L8 5.5l-.591-.197a1.125 1.125 0 0 1-.712-.712L6.5 4Z"
                        />
                    </svg>
                    :
                    <></>

                }
                <span>{children}</span>
            </button>
        </>
    )
}