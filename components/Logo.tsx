import style from "../styles/Logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <a href="/" className={style.logo} itemProp="link">
      <figure itemScope itemProp="logo">
        <div className="logo--text" itemProp="text">
          in<span>days</span>.app
        </div>

        <span className="logo--backdrop" itemProp="shadow" />
      </figure>
    </a>
  );
};
