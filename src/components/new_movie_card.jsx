import styles from "../assets/css/new_movie_card.module.css"
export default (props) => {

   

    return (
        <>
            <div className={styles.new_movie_card}>
                <div className={styles.card_content}>
                    <div className={styles.overlay} style={{background: `linear-gradient(0deg, rgb(${props.rgb}), transparent)`}}></div>
                    <img className={styles.image} src={props.image} />
                    <div className={styles.movie_details}>
                        <div className={styles.img_container}>
                            <img src={props.title_image} />
                            {/* <span className={styles.movie_title}>{props.title}</span> */}
                        </div>
                        <div className={styles.description}>
                            {props.description}
                        </div>
                        <span className={styles.sub_description}> {props.genre}</span>
                    </div>
                    <div className={styles.movie_action}>
                        <button className={styles.action_button}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z" fill="white" />
                                <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}