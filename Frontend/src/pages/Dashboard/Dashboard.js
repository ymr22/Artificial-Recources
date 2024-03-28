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
import EmployerService from "../../services/EmployerService";

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
  const [user, setUser] = useState([]);
  const [team, setTeam] = useState([]);
  const [messages, setMessages] = useState([]);

  let employerService = new EmployerService();
  useEffect(() => {
    employerService.getEmployerDashboard(2).then((result) => console.log(result.data)).catch();
    employerService.getEmployerDashboard(2).then((result) => setUser(result.data.employee)).catch();
    employerService.getEmployerDashboard(2).then((result) => setTeam(result.data.team_members)).catch();
    employerService.getEmployerDashboard(2).then((result) => setMessages(result.data.messages)).catch();
  }, []);

  const [company, setCompany] = useState({
    name: 'TOBB Economy and Technology University',
    logo: Logo,
    website: 'https://www.etu.edu.tr/tr',
  });


  return (
      <Box sx={{mt: 5, marginLeft: 35}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainer>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h6">{user.first_name}</Typography>
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="body1">{user.department}</Typography>
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
          <Grid item xs={12} md={4.5}>
            <CardContainer>
              <CardContent>
                <Typography variant="h6">Ekibim</Typography>
                <Divider />
                <ListContainer  sx={{lineHeight:3}} >
                  {team.map((member) => (
                      <ListItemStyled key={member.first_name}>
                        <Typography variant="body1">{member.first_name + " " + member.last_name + "-->"}</Typography>
                        <Typography variant="body1">{member.email}:{ }</Typography>
                        <Typography variant="body1">{member.work_duration + " year(s)"}</Typography>
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
                        <Typography variant="body1">
                          {() => {
                            employerService.getEmployerById(message.from_user)
                                .then((result) => {
                                  console.log(result.data);
                                  return result.data.first_name; // Assuming "name" is in result.data
                                })
                                .catch((error) => {
                                  console.error("Error fetching employer data:", error);
                                });
                          }}
                        </Typography>
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
