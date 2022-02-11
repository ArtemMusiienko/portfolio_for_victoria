import { Container, Typography, Box } from "@mui/material";
import mainPicture from "../Images/mainPicture.JPG"
import  Avatar  from '@mui/material/Avatar';

function Home() {
    return (
     <Box sx={{ mt:10, display: { md: 'flex' , xs:"block"  } }} >
       <Box sx={{ml:8, flex:"50%", height:600 } }>
<Typography variant="h4" sx={{fontFamily:"Open Sans Condensed", lineHeight:3, textAlign:'center'}}>
Привіт! Мене звати Вікторія і я фотограф з Києва!
</Typography >
<Typography variant="h8" sx={{fontFamily:"Open Sans Condensed", lineHeight:2, fontSize:20}}>
Для мене фотографія - це найкращий спосіб закарбувати найважливіші моменти життя. <br/> Кожна мить, посмішка, погляд та дотик, які я спіймаю на фото, залишаться з вами назавжди. Цінність фотографії приходить з часом, адже роки йдуть, а зроблені мною знімки, нагадуватимуть вам всі деталі того прекрасного дня навіть тоді, коли ви й самі вже забули.
 <br/>Я обожнюю зйомку у стилі life style, де є справжній щирий сміх, ніжні обійми та палкі поцілунки.<br/> Зі мною ви можете забути про позування! Просто будьте собою, насолоджуйтеся моментом, кайфуйте від коханої людини поруч, бавтеся з дітьми, а я збережу вашу історію в знімках.
<br/>Фотосесія - це командна робота і я, так само як і ви, зацікавлена у тому, щоб зробити зйомку максимально красивою та гармонійною, тому я завжди на зв'язку і з радістю допомагаю підібрати локацію, одяг та реквізит.
 <br/>Дякую за інтерес до моєї творчості і до зустрічі на зйомці ♥
</Typography>
</Box>
<Box sx={{ ml:8, mr:8 ,flex:"50%" , height:600 }} >
<Avatar  variant="rounded" src={mainPicture} sx={{height:"100%", width:"100%"}} />
</Box>
       
     </Box>
    );
  }
  
  export default Home;