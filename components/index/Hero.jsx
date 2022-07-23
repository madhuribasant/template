import styles from "../../styles/Home.module.css";
import { useGlobalContext } from "../Context";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const imageRotate = useTransform(scrollY , [0 ,100  ,150 ,200] , ['0deg' ,'30deg' ,'-30deg' , '0deg'])
  const imageTranslate = useTransform(scrollY , [0 ,100  ,150 ,200] , ['-50px' , '-100px ', '-150px', '-200px'] )
  return (
    <section className={styles.hero}>
      <div className="flex w-1/2 h-96">
        <motion.div transition={{duration:1}} style={{rotate:imageRotate ,translateX:imageTranslate}} className="absolute w-80 h-80 z-20 right-96 bottom-20">
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/image1.jpg"
            alt="image1"
            
          />
        </motion.div>
        <div className="absolute bottom-10 right-0 w-96 h-96 z-30">
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/image2.jpg"
            alt="image2"
          />
        </div>
        <div className="absolute w-96 h-96 top-20">
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/image3.jpg"
            alt="image3"
          />
        </div>
        <div className="absolute w-96 h-96 right-2 top-5">
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/image4.jpg"
            alt="image4"
          />
        </div>
      </div>
    </section>
  );
};
