import React, { useState, useEffect } from 'react';
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
    Container, TableBody,
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

    const handleApprovePermission = async (employeeId) => {
        // Simulate API call
        console.log(`Approving permission for employee ${employeeId}`);
        setEmployers(
            employers.map((employer) =>
                employer.id === employeeId ? { ...employer, permissionStatus: 'Approved' } : employer
            )
        );
        setPermissionStatusUpdates([
            ...permissionStatusUpdates,
            {
                employeeId,
                status: 'Approved',
            },
        ]);
    };

    const handleReviewPermission = async (employeeId) => {
        // Simulate API call
        console.log(`Reviewing permission for employee ${employeeId}`);
        setEmployers(
            employers.map((employer) =>
                employer.id === employeeId ? { ...employer, permissionStatus: 'Reviewing' } : employer
            )
        );
        setPermissionStatusUpdates([
            ...permissionStatusUpdates,
            {
                employeeId,
                status: 'Reviewing',
            },
        ]);
    };

    const handleRejectPermission = async (employeeId) => {
        // Simulate API call
        console.log(`Rejecting permission for employee ${employeeId}`);
        setEmployers(
            employers.map((employer) =>
                employer.id === employeeId ? { ...employer, permissionStatus: 'Rejected' } : employer
            )
        );
        setPermissionStatusUpdates([
            ...permissionStatusUpdates,
            {
                employeeId,
                status: 'Rejected',
            },
        ]);
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
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>
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
                                        <TableCell>{statusText}</TableCell>
                                        <TableCell>
                                            {employer.permissionStatus === 'Pending' && (
                                                <>
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        size="small"
                                                        onClick={() => handleApprovePermission(employer.id)}
                                                    >
                                                        Approve
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="warning"
                                                    size="small"
                                                    onClick={() => handleReviewPermission(employer.id)}
                                                    >
                                                    Review
                                                </Button>
                                                <Button
                                                variant="contained"
                                                color="error"
                                                size="small"
                                                onClick={() => handleRejectPermission(employer.id)}
                                        >
                                            Reject
                                        </Button>
                                    </>
                                )}
                            {update && update.status !== 'Pending' && (
                                    <Typography variant="body2" sx={{ color: 'gray' }}>
                                        ({update.status})
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
}

