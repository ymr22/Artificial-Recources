import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    Grid,
    Paper,
    InputAdornment,
    IconButton,
    CheckCircleIcon,
    CancelIcon, Container,
} from '@mui/material';
import axios from 'axios';
import {blueGrey} from "@mui/material/colors";

export default function OffDay() {
    const [employers, setEmployers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [requestedDays, setRequestedDays] = useState('');
    const [permissionStatus, setPermissionStatus] = useState('');

    useEffect(() => {
        // Fetch employer data with permission details (replace with actual API call)
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/employers');
                const modifiedData = response.data.map((employer) => ({
                    ...employer,
                    remainingPermissionDays: Math.floor(Math.random() * 10), // Replace with actual calculation
                    usedPermissionDays: Math.floor(Math.random() * (employer.remainingPermissionDays + 1)), // Simulate used days (ensure less than or equal to remaining)
                }));
                setEmployers(modifiedData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleRequestPermission = () => {
        // Handle permission request logic here (e.g., call API or display confirmation)
        console.log(`Requesting ${requestedDays} permission days for employer ${selectedUser}`);
        setPermissionStatus('Pending'); // Simulate API response and update status
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Off-Day Request:
            </Typography>
            <Container component="main" maxWidth="sm" sx={{border:1, borderColor:'darkBlue'}}>
            <Box sx={{ p: 2, mb: 2, width: 400}}>
                    <Grid container spacing={3} sx={{ p: 2, mb: 2, width: 600}}>
                        <Typography variant="h5">
                            Kalan İzin Sayısı :
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 22, color:'blueGrey' }}>
                            {  2}
                            {selectedUser && employers.find((e) => e.id === selectedUser)?.remainingPermissionDays}
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} sx={{ p: 2, mb: 2, width: 600}}>
                        <Typography variant="h5">
                            Kullanılan İzin Sayısı: {selectedUser && employers.find((e) => e.id === selectedUser)?.usedPermissionDays}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 22, color:'blueGrey' }}>
                            {selectedUser && employers.find((e) => e.id === selectedUser)?.usedPermissionDays}
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
                        <Button variant="contained" color="primary" onClick={handleRequestPermission}>
                            İzin Talebini Gönder
                        </Button>
                        <Typography variant="h5" sx={{ lineHeight: 4 }}>
                            İzin Talep Durumu:
                        </Typography>
                        {permissionStatus && (
                            <Paper sx={{ mt: 2, p: 2, display: 'flex', alignItems: 'center', minWidth:150 }}>
                                {permissionStatus === 'Pending' ? (
                                    <h4>Pending...</h4>
                                ) : permissionStatus === 'Approved' ? (
                                    <>
                                        <Typography variant="body1">İzin Talebiniz Onaylandı!</Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="body1">İzin Talebiniz Reddedildi.</Typography>
                                    </>
                                )}
                            </Paper>)}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}
