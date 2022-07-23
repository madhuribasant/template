import { useTransform, useViewportScroll ,motion } from "framer-motion";
import styles from "../../styles/Home.module.css";

export const Grid1 = () => {
  
  return (
    <motion.div className={styles.grid1}>
      <motion.div className={styles.grid_item}  ></motion.div>
      <motion.div className={styles.grid_item}  ></motion.div>
      <motion.div className={styles.grid_item}  ></motion.div>
      <motion.div className={styles.grid_item}  ></motion.div>
    </motion.div>
  );
}