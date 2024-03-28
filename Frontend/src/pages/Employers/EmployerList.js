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
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    console.log(employerService.getEmployers())
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
                <TableCell>Department</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Work Duration(year)</TableCell>
                <TableCell>Calendar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employers.map((employer) => (
                  <TableRow key={employer.employee_id}>
                    <TableCell>{employer.employee_id}</TableCell>
                    <TableCell>{employer.first_name + " " + employer.last_name}</TableCell>
                    <TableCell>{employer.phone}</TableCell>
                    <TableCell>{employer.email}</TableCell>
                    <TableCell>{employer.work_duration}</TableCell>
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