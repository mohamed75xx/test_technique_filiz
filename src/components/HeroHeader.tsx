import { Button, Typography } from "@mui/material";
import styles from "../styles/HeroHeader.module.css";

export default function HeroHeader() {
  return (
    <>
      <section className={styles.hero_header_section}>
        <div className={styles.left}>
          <h1>
            Bienvenue <br /> chez Café Neko
          </h1>
          <h3>L'endroit où le café rencontre les ronronnements</h3>
          <p>
            Bienvenue dans notre univers où chaque tasse de café est accompagnée
            d'une dose d'amour félin.
          </p>
          <Button
            href="#reservez"
            variant="contained"
            sx={{
              width: "200px",
              height: "64px",
              borderRadius: "46px",
              boxShadow: "none",
              backgroundColor: "#71A894",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Nous contacter
            </Typography>
          </Button>
        </div>
        <div className={styles.right}>
          <img src="/images/cat-hero-section.png" />
        </div>
      </section>
    </>
  );
}
