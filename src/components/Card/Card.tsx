import { Grid, Typography } from "@mui/material";
import styles from "./card.module.css";
import 'animate.css';
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Wormhole from "../Wormhole/Wormhole";

interface CardProps {
    isCardClicked: boolean;
    setIsCardClicked: (value: boolean) => void;
}

export const Card = ({ isCardClicked, setIsCardClicked }: CardProps) => {
    const [showWormhole, setShowWormhole] = useState(false);
    const bg1 = useRef(null);
    const bg2 = useRef(null);

    const handleOpenCard = () => {
        setIsCardClicked(true);
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const pinAnim = gsap.timeline({ paused: true })
                .to(bg1.current, { transform: "scale(3.05)", duration: 3, ease: "power2.out" });

            if (isCardClicked) {
                pinAnim.play();

                setTimeout(() => {
                    setShowWormhole(true);
                }, 600);
            } else {
                pinAnim.reverse();
                setShowWormhole(false);
            }
        });

        return () => ctx.revert();
    }, [isCardClicked]);

    return (
        <>
            <Typography className={styles.neonText}>Keep calm and click me</Typography>
            <Grid ref={bg1} className={`${styles.card} ${styles.rootContainer} perspective animate__animated animate__zoomIn`}>
                <Grid ref={bg2} className={`${styles.backSide} ${isCardClicked ? styles.backSideClicked : ""}`}>
                </Grid>
                <Grid onClick={handleOpenCard} className={`${styles.frontSide} ${isCardClicked ? styles.frontSideClicked : ""}`}>
                    <Grid className={styles.contentContainer}>
                        <Typography className={`${styles.headerText} ${styles.textContent}`}>Happy Birthday </Typography>
                        <Typography className={styles.textContent}>Your first digital birthday card</Typography>
                        <Typography className={styles.textContent}>Hand coded by scratch</Typography>
                    </Grid>
                </Grid>
            </Grid>
                    {showWormhole && (
                        <div className={styles.wormholeContainer}>
                            <Wormhole />
                        </div>
                    )}
        </>
    );
};
