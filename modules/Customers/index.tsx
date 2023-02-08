import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Customers.module.scss";
import { useSectionsScroll } from "../../hooks/pageScroll";

const Customers: React.FC = () => {
  const { strings } = useLocale("home");

  return (
    <section itemScope className={styles.customers}>
      <div className="customers--content-container">
        <h2 itemProp="title">{strings.blocks.customers.title}</h2>
        <p itemProp="description">{strings.blocks.customers.subtitle}</p>
      </div>
    </section>
  );
};

export default Customers;
