import {icons} from '../style/global';
import {navbar,logo,links,icon ,signs} from '../style/homeStyle';
import { Link } from 'react-router-dom';
import {colors} from '../style/global';
import {motion} from "framer-motion";
const NavBar=()=>{
    return (
<motion.nav style={navbar}
 initial={{y:-50, opacity:0}}
animate={{y:0, opacity:1}}
transition={{duration:1}}>

<motion.div style={logo} whileHover={{scale:1.2}} drag
dragConstraints={{top:-50,
left:-50,
right:50,
bottom:50,
}}>
<h1>D</h1>
</motion.div>


<motion.div style={links}  
initial={{y:-50, opacity:0}}
animate={{y:0, opacity:1}}
transition={{duration:2 ,delay:2}}
>
<Link to ="/" style={{color:colors.text ,textDecoration:"none"}}><span className="link">Home </span>
</Link>

<Link to="/create" style={{color:colors.text ,textDecoration:"none"}}> <span className="link">Create a new Blog </span></Link>


</motion.div>


<motion.div style={signs}
 initial={{y:-50, opacity:0}}
animate={{y:0, opacity:1}}
transition={{duration:2, delay:1}}>

<span style={icon}>{icons.twitter}</span>
<span style={icon}>{icons.insta}</span>
<span style={icon}>{icons.blogIcon}</span>


</motion.div>

</motion.nav>

    )
}
export default NavBar