import { Paper, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React from "react";

export default function SignUp() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#7FB5FF",
        position: "absolute",
      }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Paper
        elevation={3}
        sx={{
          height: "680px",
          width: "1460px",
          backgroundColor: "white",
          marginLeft: "40px",
          marginTop: "40px",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            marginTop: "40px",
            marginLeft: "70px",
          }}
        >
          <img
            src="/pictures/bsu-logo.png"
            height={150}
            width={150}
            sx={{ position: "absolute" }}
          />
          <Typography
            sx={{
              width: "260px",
              marginLeft: "-30px",
              marginTop: "50px",
              fontSize: "50px",
              fontFamily: "Amatic Sc",
              fontWeight:"bold",
              color:"#001D6E"
            }}
          >
            WELCOME TO OUR &nbsp; &nbsp; &nbsp; &nbsp; WEBSITE
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "440px",
            position: "absolute",
          }}
        >
          <img src="/pictures/grad.png" height={250} width={330} />
        </Box>
        <Paper
          elevation={8}
          sx={{
            height: "630px",
            width: "1120px",
            backgroundColor: "#7FB5FF",
            marginTop: "30px",
            marginLeft: "300px",
          }}
        >
          <Typography
            sx={{
              color: "#001D6E",
              fontSize: "30px",
              marginLeft: "440px",
              fontWeight:"bold",
              position:"absolute",
              marginTop:"20px"
            }}
          >
            PLEASE SIGN UP
          </Typography>
          
         <Box sx={{
             height:"250px",
             width:"200px",
             border:"2px solid #001D6E",
             position:"absolute",
             marginTop:"100px",
             marginLeft:"20px"
         }} >
         </Box>
         <Button sx={{ position:"absolute", marginTop:"350px", marginLeft:"70px" }} variant="text">Attach File</Button>
         <Box sx={{
             height:"250px",
             width:"200px",
             border:"2px solid #001D6E",
             position:"absolute",
             marginTop:"100px",
             marginLeft:"240px"
         }} >
         </Box>
         <Button sx={{ position:"absolute", marginTop:"350px", marginLeft:"280px" }} variant="text">Attach File</Button>
         <Box sx={{
             height:"250px",
             width:"200px",
             border:"2px solid #001D6E",
             position:"absolute",
             marginTop:"100px",
             marginLeft:"460px",
         }} >
         </Box>
         <Button sx={{ position:"absolute", marginTop:"350px", marginLeft:"500px" }} variant="text">Attach File</Button>
         <Box sx={{
             height:"250px",
             width:"200px",
             border:"2px solid #001D6E",
             position:"absolute",
             marginTop:"100px",
             marginLeft:"680px"
         }} >

         </Box>
         <Button sx={{ position:"absolute", marginTop:"350px", marginLeft:"720px" }} variant="text">Attach File</Button>
         <Box sx={{
             height:"250px",
             width:"200px",
             border:"2px solid #001D6E",
             position:"absolute",
             marginTop:"100px",
             marginLeft:"900px"
         }} >

         </Box>
         <Button sx={{ position:"absolute", marginTop:"350px", marginLeft:"940px" }} variant="text">Attach File</Button>
          <Box>
          <Button variant="contained" sx= {{
            marginLeft: "450px",
            marginTop: "500px",
            width: "200px",
            height: "50px",
            borderRadius:"20px"
          }}>
              SUBMIT
          </Button>
          </Box>

        </Paper>
      </Paper>
    </Box>
  );
}
