import React from "react";
import i18n from "./i18n";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

const Partners: React.FC = () => {
  const { locale } = useRouter();
  const strings = i18n(locale);

  return (
    <article itemScope itemProp="partners" className={styles.partners}>
      <div className="partners--content-container">
        <h3 itemProp="title" className="section-title">
          {strings.title}
        </h3>

        <ul itemScope itemType="https://schema.org/ItemList">
          <li itemProp="itemListElement">
            <Image
              layout="fill"
              itemProp="image"
              objectFit="contain"
              alt="Microsoft Partner"
              objectPosition="left"
              src="/assets/partners/microsoft.webp"
            />
          </li>

          <li itemProp="itemListElement">
            <Image
              layout="fill"
              itemProp="image"
              objectFit="contain"
              alt="Adobe Partner"
              objectPosition="left"
              src="/assets/partners/adobe.webp"
            />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Partners;
