import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about_section} id="about">
        <div className={styles.about_section_container}>
          <div className={styles.left}>
            <img src="/images/image-about-us.png" />
          </div>
          <div className={styles.right}>
            <h1> Qui sommes-nous ? </h1>
            <h3>
              {" "}
              Bienvenue chez Café Neko, l'endroit où le café et les chats se
              rencontrent pour créer une expérience unique en son genre.
            </h3>
            <p>
              {" "}
              Chez Café Neko, nous sommes passionnés par deux choses : le café
              de qualité et le bien-être des chats. Fondé par des amoureux des
              félins et des aficionados du café, Café Neko est bien plus qu'un
              simple café. C'est un refuge pour les amoureux des chats, un havre
              de paix où l'on peut savourer une bonne tasse de café tout en
              câlinant nos adorables résidents à quatre pattes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
