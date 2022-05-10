import { AppBar, Divider, Drawer, IconButton, Link, Paper, TextField, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import Image from "next/image";
import React from 'react'
import Head from "next/head";
import { useState } from "react";

export default function dashboard() {

  const [open, setOpen] = useState(false);

  const setDrawerOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"#7FB5FF"
    }} >

<AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#C4DDFF",
          }}
        >
          <IconButton onClick={setDrawerOpen}>
            <Image src="/svg/bars.svg" alt="bars" width={30} height={30} />
          </IconButton>

          <Typography variant="h5" sx={{ 
          marginLeft: "550px ",
          color: "#001D6E" }}>
            SCHOLARSHIP PROGRAMS
          </Typography>
          
        </Toolbar>
      </AppBar>

  <Drawer anchor="left" open={open} onClose={handleClose}>
            <Box sx={{ 
            minWidth: "200px",
            display: "flex",
            flexDirection: "column",
          }}>

            <List sx={{
              marginTop: "55px"
            }}>

                <Divider/>
                <ListItem button>
                  <ListItemIcon>
                      <Image src="/svg/home.svg" alt="users" width="20" height={20}/>
                  </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                      <Image src="/svg/user.svg" alt="market" width="20" height={20}/>
                  </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                      <Image src="/svg/announcements.svg" alt="notification" width="20" height={20}/>
                  </ListItemIcon>
                    <ListItemText primary="Announcements"/>
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                      <Image src="/svg/notif.svg" alt="favorites" width="20" height={20}/>
                  </ListItemIcon>
                    <ListItemText primary="Notification"/>
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                      <Image src="/svg/chat.svg" alt="about" width="20" height={20}/>
                  </ListItemIcon>
                    <ListItemText primary="Chat Support"/>
                </ListItem>

                <Divider/>
                <ListItem button>
                  <ListItemIcon>
                      <Image src="/svg/settings.svg" alt="settings" width="20" height={20}/>
                  </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItem>
            </List>         
            </Box>
      </Drawer>

        
    </Box>
  )
}
