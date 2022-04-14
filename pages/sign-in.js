import { Box, Paper, TextField, Typography,AccountCircle } from '@mui/material'
import { borderRadius, fontSize, fontWeight, margin } from '@mui/system'
import React from 'react'

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
    <Typography sx={{
        fontFamily:"Fraunces",
        fontSize:"30px",
        color:"black",
        marginLeft:"150px"
    }}>
SCHOLARSHIP INFORMATION
<br></br> MANAGEMENT SYSTEM AND
<br></br>ONLINE APPLICATION WEB-BASED<br></br> SYSTEM
FOR BULACAN STATE<br></br> UNIVERSITY BUSTOS CAMPUS      
    </Typography>
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
<Typography sx={{
    fontFamily:"fanwood text",
    fontSize:"25px",
    color:"white",
    marginTop:"100px"
    }}>
 LOG IN TO YOUR ACCOUNT
</Typography>

      
        <TextField id="input-with-sx" label="Email:" variant="standard" sx={{
            width:"200px",
            marginLeft:"200px",
            
        }} />
        <TextField id="input-with-sx" label="Password:" variant="standard" sx={{
            width:"200px",
            marginLeft:"200px"
        }} />
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
        marginLeft:"60px"
    }}>
Remember me
    </Typography>
    <Typography sx={{
        fontFamily:"fanwood text",
        fontSize:"15px",
        color:"white",
        marginLeft:"160px"
    }}>
Forgot Password?
    </Typography>
</Box>
 
      
</Paper>

</Box>

   </Box>
  )
}

