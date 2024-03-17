import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Button,
  Link as MLink,
  // other imports
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmployerService from '../../services/EmployerService';
import axios from 'axios';

export default function EmployerList() {
  const [message, setMessage] = useState('');





  const [employers, setEmployers] = useState([{employee_id: "aaa", user:{'email': "kflsjdlkfj"}, first_name:"", middle_name:"", surname:""}]);

  useEffect(() => {
    let employerService = new EmployerService();

    employerService.getEmployers().then((result) => setEmployers(result.data)).catch();
  }, []);

  const navigate = useNavigate();

  const handleGoToInfos = (employerId) => {
    navigate(`/employers/${employerId}`);
  };

  return (
      <div>

        <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
          Employer List:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 700, maxWidth: 1250, marginLeft: 35}}>
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Joined Date</TableCell>
                <TableCell>Calendar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employers.map((employer) => (
                  <TableRow key={employer.employee_id}>
                    <TableCell>
                      <Typography variant="body1" component="p">
                        {employer.companyName}
                      </Typography>
                    </TableCell>
                    <TableCell>{employer.first_name}</TableCell>
                    <TableCell>{employer.middle_name}</TableCell>
                    <TableCell>{employer.surname}</TableCell>
                    <TableCell>
                      <Button
                          variant="outlined"
                          color="primary"
                          component={MLink}
                          to={`/employers/${employer.id}`}
                          onClick={() => handleGoToInfos(employer.id)}
                      >
                        Go to infos
                      </Button>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}