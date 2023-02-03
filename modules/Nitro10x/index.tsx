import React from "react";
import Image from "next/image";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Nitro10x.module.scss";

const Nitro10x: React.FC = () => {
  const { strings } = useLocale("nitro10x");
  const renderCards = () => strings.cards.map(renderCard);

  const renderCard = (card: any) => {
    const { title, icon } = card;

    return (
      <div key={title} className="card">
        <div className="card-container">
          <Image width={48} height={48} quality={100} itemProp="icon" alt={icon} src={`/assets/cards/${icon}.webp`} />
          <h3>{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <article className={styles.nitro10x}>
        <div className="nitro10x--content-container">
          <h1 itemProp="title">{strings.title}</h1>
        </div>
      </article>

      <div className={styles.nitro10xFadeOut}>
        <div className="fadeout--content-container">
          <hr className="section-divider" />
          <h1>{strings.presentation.title}</h1>

          <div className="fadeout--contact">
            <a href="https://wa.me/5519997494445?text=Ol%C3%A1!" target="_blank" rel="noreferrer">
              <Image
                width={24}
                height={24}
                quality={100}
                itemProp="icon"
                alt={"Whatsapp"}
                src={`/assets/whatsapp.webp`}
              />

              {strings.presentation.contact}
            </a>
          </div>

          <h2>{strings.presentation.subtitle}</h2>

          <div className="fadeout--cards">
            <div className="cards--inner">{renderCards()}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nitro10x;
