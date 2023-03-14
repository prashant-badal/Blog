import {heading} from '../style/homeStyle';
import {motion} from 'framer-motion';
 const Heading=()=> {
  return (
    <motion.h1 style={heading} 
     initial={{x:-200}} 
     animate={{x:0}} 
     transition={{duration:2}}
     >THE BLOG</motion.h1>
  )
}

export default Heading
