import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Grid,
    Paper,
    InputAdornment, Container, TableContainer,
} from '@mui/material';
import axios from 'axios';
import EmployerService from "../../services/EmployerService";

export default function OffDay() {
    const [employee, setEmployee] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [requestedDays, setRequestedDays] = useState('');
    const [remainedDays, setRemainedDays] = useState(0);
    const [requestedDayReason, setRequestedDayReason] = useState("");
    const [permissionStatus, setPermissionStatus] = useState("");

    useEffect(() => {
        let employerService = new EmployerService();
        console.log(employerService.getEmployerOffDayById(8))
        employerService.getEmployerOffDayById(8).then((result) => setEmployee(result.data)).catch();
        employerService.getEmployerOffDayById(8).then((result) => setRemainedDays(result.data.current_request.allowed_off_days- result.data.used_off_days)).catch();
        console.log(remainedDays)
    }, []);

    const handleRequestPermission = async () => {
        let employerService = new EmployerService();
        // Handle permission request logic here (e.g., call API or display confirmation)
        console.log(`Requesting ${requestedDays} permission days for employer ${selectedUser}`);
        const response = await axios.get("http://localhost:8000//utils/offday/");
        console.log(response)
        setPermissionStatus(response.data)
    };

    return (
        <div>
            <form>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Off-Day Request:
            </Typography>
            <TableContainer component={Paper} maxWidth="sm" sx={{marginLeft: 40, maxWidth:600}}>
            <Box sx={{ p: 2, mb: 2, width: 400}}>
                    <Grid container spacing={3} sx={{ p: 2, mb: 2, width: 600}}>
                        <Typography variant="h5">
                            Kalan İzin Sayısı : {remainedDays}
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} sx={{ p: 2, mb: 2, width: 600}}>
                        <Typography variant="h5">
                            Kullanılan İzin Sayısı: {employee.used_off_days}
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} sx={{ p: 2, mb: 2, width: 300}}>
                        <Typography variant="h5">
                            İzin Talebi:
                        </Typography>
                        <TextField
                            label="İstenilen İzin Sayısı"
                            type="number"
                            variant="outlined"
                            value={requestedDays}
                            onChange={(e) => setRequestedDays(e.target.value)}
                            sx={{ mb: 2, width: '100%', mt:2 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        Gün
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="İzin Mazereti"
                            type="text"
                            variant="outlined"
                            value={requestedDayReason}
                            sx={{ mb: 2, width: '100%', mt:2 }}
                            onChange={(e) => setRequestedDayReason(e.target.value)}
                        />
                        <Button variant="contained" color="primary" onClick={handleRequestPermission}>
                            İzin Talebini Gönder
                        </Button>
                        <Typography variant="h5" sx={{ lineHeight: 4 }}>
                            İzin Talep Durumu:
                        </Typography>
                        {permissionStatus}
                    </Grid>
                </Box>
            </TableContainer>
            </form>
        </div>
    );
}
