import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import Viber from "../Images/IMG_5508.PNG"
import  Avatar  from '@mui/material/Avatar';




function Footer() {
    return (
      <Box  style={{ marginTop: 20, display:"flex", justifyContent:"center"}}>
       <Link href="https://instagram.com/le.tori.photo?utm_medium=copy_link" ><InstagramIcon sx={{mr:5}} style={{height:24, width :22 , color:"black"}}/></Link>
       <Link href="" > <FacebookIcon sx={{mr:5}}  style={{height:24, width :22, color:"black"}} /></Link>
       <Link href=''> <Avatar variant="square" src={Viber} style={{height:24, width :22 , color:"black"}} ></Avatar></Link>
       
      </Box>
    );
  }
  
  export default Footer;