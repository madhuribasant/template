import { Grid1 } from './Grid1'
import { useViewportScroll , motion, useTransform } from 'framer-motion'

export const ParallaxGrid = () => {
  const {scrollY} = useViewportScroll()
  const  transY = useTransform(scrollY , [0 , 1100] , ["0vh", "-100vh"])
  return (
    <motion.section className={`text-white z-10 `} style={{translateY:transY}}>
        <div className='perspective '>
            <Grid1/>
            <Grid1/>
            <Grid1/>
            <Grid1/>
           
        </div>
    </motion.section>
  )
}
