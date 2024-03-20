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
    const [employers, setEmployers] = useState(EXAMPLE_EMPLOYEES);
    const [permissionStatusUpdates, setPermissionStatusUpdates] = useState([]);
    const selectedActionRef = useRef('');

    const handlePermissionAction = async (employeeId, action) => {
        // Simulate API call
        console.log(`Taking action "${action}" for employee ${employeeId}`);
        setEmployers(
            employers.map((employer) =>
                employer.id === employeeId ? { ...employer, permissionStatus: action } : employer
            )
        );
        setPermissionStatusUpdates([
            ...permissionStatusUpdates,
            {
                employeeId,
                status: action,
            },
        ]);
        selectedActionRef.current = action;
    };

    useEffect(() => {
        // `selectedActionRef`'in güncel değerini kullanarak render işlemini tetikle
        const selectedAction = selectedActionRef.current;
        if (selectedAction !== '') {
            // ...
        }
    }, [selectedActionRef]);

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
                                <TableCell>Actions</TableCell>
                                <TableCell>Selected Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employers.map((employer) => {
                                const update = permissionStatusUpdates.find((u) => u.employeeId === employer.id);
                                const statusText = update ? update.status : employer.permissionStatus;

                                return (
                                    <TableRow key={employer.id}>
                                        <TableCell>{employer.name}</TableCell>
                                        <TableCell>{employer.remainingPermissionDays}</TableCell>
                                        <TableCell>{employer.usedPermissionDays}</TableCell>
                                        <TableCell>{employer.requestedDays}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                size="small"
                                                onClick={() => handlePermissionAction(employer.id, 'Approved')}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="warning"
                                                size="small"
                                                onClick={() => handlePermissionAction(employer.id, 'Reviewing')}
                                            >
                                                Review
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                size="small"
                                                onClick={() => handlePermissionAction(employer.id, 'Rejected')}
                                            >
                                                Reject
                                            </Button>
                                            </TableCell>
                                            <TableCell>
                                                {employer.permissionStatus !== 'Pending' && (
                                                    <Typography variant="body2" sx={{ color: 'white' }}>
                                                        {employer.permissionStatus}
                                                    </Typography>
                                                )}
                                            </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};
