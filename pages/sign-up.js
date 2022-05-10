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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"50px",
            paddingTop:"80px"
          }}>
            
            <TextField
              id="outlined-basic"
              label="Surname"
              variant="filled"
              required
              sx={{
                
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="First Name"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Middle Name"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Age"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TextField
              id="outlined-basic"
              label="Place of Birth"
              variant="filled"
              required
              sx={{
                
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Birthdate"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Citizenship"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
                
              }}
            />

            <TextField
              id="outlined-basic"
              label="Civil Status"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TextField
              id="outlined-basic"
              label="Contact Number"
              variant="filled"
              required
              sx={{
                
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="House/Block/Number"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Barangay"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Municipality/City"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TextField
              id="outlined-basic"
              label="Province"
              variant="filled"
              required
              sx={{
                
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Student Number"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="College"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Current Year"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TextField
              id="outlined-basic"
              label="Full Course Description"
              variant="filled"
              required
              sx={{
                
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Total Units Enrolled (1st Sem)"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Applicants"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

            <TextField
              id="outlined-basic"
              label="Signature"
              variant="filled"
              required
              sx={{
                marginLeft: "40px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            />

          </Box>

          <Box>

          <Button variant="contained" sx= {{
            marginLeft: "850px",
            marginTop: "90px",
            width: "200px",
            height: "50px"
          }}>Next</Button>

          </Box>

        </Paper>
      </Paper>
    </Box>
  );
}
