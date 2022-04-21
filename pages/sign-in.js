import { Box, Paper, Button, TextField, Typography, Checkbox, AccountCircle } from '@mui/material'
import { borderRadius, fontSize, fontWeight, margin } from '@mui/system'
import React from 'react'
import Image from "next/image";



export default function SignIn() {
  return (
   <Box sx={{
       height:"100vh",
       width:"100vw",
       backgroundColor:"blue",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
       
   }}>
<Box sx={{
    height:"650px",
    width:"1400px",
    backgroundColor:"white",
    display:"flex",
    alignItems:"center"
   
}}>
    <Box sx={{
        position:"absolute",
        marginBottom:"490px",
        marginLeft:"10px"
    }} >
        <Image src="/pictures/bsu-logo.png" height={150} width={150} />
    </Box>
    <Typography sx={{
        fontFamily:"Fraunces",
        fontSize:"30px",
        color:"black",
        marginLeft:"150px",
        marginBottom:"100px"
    }}>
SCHOLARSHIP INFORMATION
<br></br> MANAGEMENT SYSTEM AND
<br></br>ONLINE APPLICATION WEB-BASED<br></br> SYSTEM
FOR BULACAN STATE<br></br> UNIVERSITY BUSTOS CAMPUS      
    </Typography>
    <Box sx={{
        position:"absolute",
        marginTop:"355px",
        display:"flex",
        flexDirection:"row"
    }} >
        <Image src="/pictures/scholar.png" height={300} width={800} />
        <Image src="/pictures/scholar.png" height={300} width={600} />
    </Box>
<Paper elevation={3} sx={{
    height:"600px",
    width:"500px",
    backgroundColor:"blue",
    position:"absolute",
    marginLeft:"800px",
    borderRadius:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
    
}}>
    <Box sx={{
        width:"100px",
        height:"100px",
        backgroundColor:"#D1D1D1",
        borderRadius:"50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        marginTop:"-580px",
        marginLeft:"200px",
        border:"3px solid white"
    }} >
        <Image src="/svg/user.svg"  width={40} height={40}/>
    </Box>
<Typography sx={{
    fontFamily:"fanwood text",
    fontSize:"25px",
    color:"white",
    marginTop:"100px",
    marginBottom:"50px"
    }}>
 LOG IN TO YOUR ACCOUNT
</Typography>

<Box sx={{
    display:"flex",
    flexDirection:"row",
    marginLeft:"60px"
}} >
     <Box sx={{
         width:"60px",
         marginTop:"10px"
     }} >
        <Image src="/svg/email.svg"  height={40} width={40} />
     </Box>

<TextField id="filled-basic" label="Email:" type="email" required variant="standard" sx={{
    width:"300px"
}} />
</Box>
<Box sx={{
    display:"flex",
    flexDirection:"row",
    marginLeft:"60px",
    marginTop:"10px"
}} >
     <Box sx={{
         width:"60px",
         marginTop:"10px"
     }} >
        <Image src="/svg/password.svg"  height={40} width={40} />
     </Box>

<TextField id="filled-basic" label="Password:" type="password" required variant="standard" sx={{
    width:"300px"
}} />
</Box>
<Box sx={{
    height:"50vh",
    width:"50vw",
    display:"flex",
    flexDirection:"row",
    marginTop:"20px"
}}>
    <Typography sx={{
        fontFamily:"fanwood text",
        fontSize:"15px",
        color:"white",
        marginLeft:"30px"
    }}>
        <Checkbox label="Remember me" />
Remember me
    </Typography>
    <Typography sx={{
        fontFamily:"fanwood text",
        fontSize:"15px",
        color:"white",
        marginLeft:"160px",
        marginTop:"10px"
    }}>
Forgot Password?
    </Typography>
</Box>
<Button variant="contained" sx={{
    marginBottom:"100px",
    marginLeft:"180px",
    height:"100px",
    width:"150px",
    backgroundColor:"white",
    color:"black",
    fontFamily:"fanwood text",
    fontWeight:"bold",
    borderRadius:"20px"
}} >Log In</Button>
      
</Paper>

</Box>

   </Box>
  )
}

