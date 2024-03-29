import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    Container,
    TableBody,
} from '@mui/material';
import EmployerService from "../../services/EmployerService";
import axios from "axios";

const EXAMPLE_EMPLOYEES = [
    {
        id: 1,
        name: 'John Doe',
        remainingPermissionDays: 10,
        usedPermissionDays: 2,
        requestedDays: 3,
        permissionStatus: 'Pending',
    },
    {
        id: 2,
        name: 'Jane Doe',
        remainingPermissionDays: 8,
        usedPermissionDays: 4,
        requestedDays: 2,
        permissionStatus: 'Pending',
    },
    {
        id: 3,
        name: 'Peter Smith',
        remainingPermissionDays: 5,
        usedPermissionDays: 5,
        requestedDays: 1,
        permissionStatus: 'Pending',
    },
];

export default function ApproveOffDayRequests() {
    const [requests, setRequests] = useState([]);
    const [used_days, setUsedDays] = useState();
    const [employee, setEmployee] = useState([]);
    const [permissionStatusUpdates, setPermissionStatusUpdates] = useState([]);
    const selectedActionRef = useRef('');
    const [permissionStatus, setPermissionStatus] = useState("");
    const [selected, setSelected] = useState("");

    useEffect(async () => {
        let employerService = new EmployerService();
        employerService.getOffDayReq().then((result) => console.log(result.data)).catch();
        employerService.getOffDayReq().then((result) => setRequests(result.data.current_request)).catch();
        employerService.getOffDayReq().then((result) => setUsedDays(result.data.used_off_days)).catch();
        employerService.getEmployerById(2).then((result) => setEmployee(result.data)).catch();
        employerService.getEmployerById(2).then((result) => console.log(result.data)).catch();
        const response = await axios.get("http://localhost:8000//utils/offday/");
        console.log(response)
        setPermissionStatus(response.data)
    }, []);

    const handlePermissionAction = async (employeeId, action) => {


        // Simulate API call
        console.log(`Taking action "${action}" for employee ${employeeId}`);

        setSelected(action);
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ p: 3, marginLeft: 30 }}>
                Off-Day Approval:
            </Typography>
            <Container maxWidth="md">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Employee Name</TableCell>
                                <TableCell>Remaining Permission Days</TableCell>
                                <TableCell>Used Permission Days</TableCell>
                                <TableCell>Requested Days</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Ai Response</TableCell>
                                <TableCell>Actions</TableCell>
                                <TableCell>Selected Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={requests.id}>
                                <TableCell>{employee.name + " " +  employee.surname}</TableCell>
                                <TableCell>{requests.allowed_off_days}</TableCell>
                                <TableCell>{used_days}</TableCell>
                                <TableCell>{requests.duration}</TableCell>
                                <TableCell>{requests.reason}</TableCell>
                                <TableCell>{permissionStatus}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        onClick={() => handlePermissionAction(requests.id, 'Approved')}
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        size="small"
                                        onClick={() => handlePermissionAction(requests.id, 'Reviewing')}
                                    >
                                        Review
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => handlePermissionAction(requests.id, 'Rejected')}
                                    >
                                        Reject
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" sx={{ color: 'white' }}>
                                        {selected}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};
