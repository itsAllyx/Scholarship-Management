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
    color:"white"
}}>
<Typography sx={{
    fontStyle:"fanwood text",
    fontSize:"20px",
    color:"white",
    fontWeight:"200"
    }}>
 LOG IN TO YOUR ACCOUNT
</Typography>

      
        <TextField id="input-with-sx" label="Email:" variant="standard" sx={{
            width:"200px",
            marginLeft:"200px",
            color:"white"
        }} />
        <TextField id="input-with-sx" label="Password:" variant="standard" sx={{
            width:"200px",
            marginLeft:"200px"
        }} />
        
    
      
</Paper>

</Box>

   </Box>
  )
}

