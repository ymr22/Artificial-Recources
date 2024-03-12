import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Button,
  List,
  ListItem,
  Divider,
  IconButton,
  Link,
} from '@mui/material';

import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Logo from '../../TOBB_ETÜ_logo.png';

const CardContainer = styled(Card)`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AvatarImage = styled(Avatar)`
  width: 100px;
  height: 100px;
`;

const ListContainer = styled(List)`
  padding: 0;
`;

const ListItemStyled = styled(ListItem)`
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #f5f5f5; /* Change background color on hover */
    color: #000000; /* Change text color on hover */
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    position: 'Yazılım Geliştirici',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  });

  const [company, setCompany] = useState({
    name: 'TOBB Economy and Technology University',
    logo: Logo,
    website: 'https://www.etu.edu.tr/tr',
  });

  const [team, setTeam] = useState([
    {
      name: 'Ayşe Öztürk',
      position: 'Pazarlama Uzmanı',
    },
    {
      name: 'Mehmet Demir',
      position: 'Grafik Tasarımcı',
    },
    {
      name: 'Fatma Gül',
      position: 'Müşteri Hizmetleri Temsilcisi',
    },
  ]);

  // Example data for messages (replace with actual message fetching logic)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Mehmet Demir',
      content: 'Hey Ahmet, can you help me with a design issue?',
      timestamp: '2024-03-10T10:00:00Z',
    },
    {
      id: 2,
      sender: 'Ayşe Öztürk',
      content: 'Quick meeting to discuss the marketing campaign at 2pm.',
      timestamp: '2024-03-09T15:30:00Z',
    },
  ]);

  return (
      <Box sx={{mt: 5, marginLeft: 35}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainer>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <AvatarImage src={user.avatar} sx={{width:100, height:100}}/>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body1">{user.position}</Typography>
                </Box>
              </CardContent>
            </CardContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardContainer>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={company.logo} alt="company logo" width="135" height="100" />
                  <Typography variant="body1" sx={{lineHeight:3, alignItems: 'center'}}>{company.name}</Typography>
                  <LinkStyled href={company.website} target="_blank">
                    {company.website}
                  </LinkStyled>
                </Box>
              </CardContent>
            </CardContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardContainer>
              <CardContent>
                <Typography variant="h6">Ekibim</Typography>
                <Divider />
                <ListContainer  sx={{lineHeight:3}} >
                  {team.map((member) => (
                      <ListItemStyled key={member.name}>
                        <Typography variant="body1">{member.name}:{ }</Typography>
                        <Typography variant="body2">{member.position}</Typography>
                      </ListItemStyled>
                  ))}
                </ListContainer>
              </CardContent>
            </CardContainer>
          </Grid>
          <Grid item xs={6} md={7}>
            <CardContainer>
              <CardContent>
                <Typography variant="h6">Mesajlar</Typography>
                <IconButton aria-label="Yeni mesaj">
                  {/* TODO: Yeni mesaj oluşturma ikonu ekleyin */}
                </IconButton>
                <ListContainer sx={{width:500}}>
                  {messages.map((message) => (
                      <ListItemStyled key={message.id} >
                        <Typography variant="body1">{message.sender}:</Typography>
                        <Typography variant="body2" sx={{lineHeight:3}}>{ message.content}</Typography>
                      </ListItemStyled>
                  ))}
                </ListContainer>
              </CardContent>
            </CardContainer>
          </Grid>
          <Grid item xs={6} md={4}>
            <CardContainer>
              <CardContent>
                <Typography variant="h6">Takvim</Typography>
                {/* Calendar Widget Suggestion */}
                <Calendar />
              </CardContent>
            </CardContainer>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Dashboard;
