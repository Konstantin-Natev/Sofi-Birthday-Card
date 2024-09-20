import { Grid, Typography } from "@mui/material"
import styles from "./card.module.css";
import 'animate.css';
import { useEffect, useState } from "react";

interface CardProps {
    isCardClicked: boolean;
    setIsCardClicked: (value: boolean) => void;
}

export const Card = ({isCardClicked, setIsCardClicked}: CardProps) => {
    const [displayNone, setDisplayNone] = useState(false);
   const handleOpenCard = () => {
    setIsCardClicked(true);
   }

     useEffect(() => {
    if (isCardClicked) {
      const timer = setTimeout(() => {
        setDisplayNone(true);
      }, 2000); // 2-second delay before showing the ZoomingScreen

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [isCardClicked]);

    return (
        <Grid  className={`${styles.card} animate__animated animate__zoomIn ${displayNone ? styles.hideTheCardAnimation : ""}`}>
            <Grid className={`${styles.backSide} ${isCardClicked ? styles.backSideClicked : ""}`}></Grid>
            <Grid onClick={handleOpenCard} className={`${styles.frontSide}  ${isCardClicked ? styles.frontSideClicked : ""}`}>
                <Grid className={styles.contentContainer}>
                    <Typography className={`${styles.headerText} ${styles.textContent}`}>Happy Birthday Sofi</Typography>
                    <Typography className={styles.textContent}>Your first digital birthday card</Typography>
                    <Typography className={styles.textContent}>Hand coded by scratch</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}