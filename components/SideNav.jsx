import styles from "../styles/Home.module.css";


export const SideNav = () => {
  return (
    <>
      <section className={styles.sidelinks}>
        <ul>
          <li className="group">
            <a>Contact</a>
            <div className="-translate-x-20 border-t scale-x-0 opacity-[5%]  group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:
            transition ease duration-300 "></div>
          </li>
          <li className=" border-t w-10 mt-5">
          </li>
          <li className="group">
            <a>Vision</a>
            <div className="-translate-x-20 border-t scale-x-0 opacity-[5%]  group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:
            transition ease duration-300 "></div>
          </li>
        </ul>
      </section>
    </>
  );
};
