import { Grid, Typography } from "@mui/material"
import styles from "./card.module.css";

export const Card = () => {
    return (
        <Grid className={styles.card}>
            <Grid className={styles.backSide}></Grid>
            <Grid className={styles.frontSide}></Grid>
            <Grid className={styles.contentContainer}>
                <Typography className={`${styles.headerText} ${styles.textContent}`}>Happy Birthday Sofi</Typography>
                <Typography className={styles.textContent}>Your first digital birthday card</Typography>
                <Typography className={styles.textContent}>Hand coded by scratch</Typography>
            </Grid>
        </Grid>
    )
}