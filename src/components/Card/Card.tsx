import { Grid, Typography } from "@mui/material";
import styles from "./card.module.css";
import firstPic from "../../../public/Birthday03.png";

interface CardProps {
    isCardClicked: boolean;
    setIsCardClicked: (value: boolean) => void;
}

export const Card = ({ isCardClicked, setIsCardClicked }: CardProps) => {
    const handleOpenCard = () => {
        setIsCardClicked(true);
    }

    return (
        <Grid className={`${styles.card} ${styles.rootContainer}`}>
            <Grid className={`${styles.backSide} `}>
               <Typography className={` ${styles.textContentCard}`}>Честит рожден ден, Софи! Желаем ти безкрайна радост, здраве и много любов. Нека всеки ден бъде изпълнен с усмивки и щастливи моменти, а сърцето ти бъде топло от любов и подкрепа. Нека годината ти донесе всичко, което желаеш!</Typography>
            </Grid>
            <Grid onClick={handleOpenCard} className={`${styles.frontSide} ${isCardClicked ? styles.frontSideClicked : ""}`}>
                <Grid className={styles.contentContainer}>
                    <Typography className={`${styles.headerText} ${styles.textContent}`}>Happy Birthday Sofi</Typography>
                    <Typography className={styles.textContent}>Your first digital birthday card</Typography>
                    <Typography className={styles.textContent}>Hand coded by scratch</Typography>
                    <img className={styles.birthdayCakeImage} src={firstPic} alt="" />
                </Grid>
            </Grid>
        </Grid>
    );
};
