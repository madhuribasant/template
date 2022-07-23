import {
  useViewportScroll,
  useTransform,
  motion,
} from "framer-motion";


export const Layout = ({ children }) => {
  
  const { scrollY } = useViewportScroll();
  const bgcolor = useTransform(
    scrollY,
    [0, 300, 600, 1000 ,1400],
    ["rgb(31,31,31)", "rgb(38 , 38 ,38)", "rgb(71, 120 , 148)" , "rgb(83,126, 111)" , "rgb(176 , 75 ,107)"]
  );

 
  return (
    <>
      <motion.main
        className={`m-0 min-h-full relative`}
        style={{ backgroundColor: bgcolor }}
      >
        {children}
      </motion.main>
    </>
  );
};
