import React, {useEffect, useState} from 'react';
import { Container, Typography, TextField, Button, Avatar, Grid, Box } from '@mui/material';
import EmployerService from "../../services/EmployerService";
import axios from "axios";

const ProfilePage = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        console.log(employerService.getEmployerById(8))
        employerService.getEmployerById(8).then((result) => setUser(result.data)).catch();
    }, []);

    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
    };


    const handleSubmit = async (event) => {
        const data = {
            data: {
                department: user.department,
                email: user.email,
                employee_id: user.employee_id,
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                work_duration: user.work_duration
            }
        }
        console.log(data)
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.post(
                'http://localhost:8000/employee/update-profile/8', data, { headers }
            );
            console.log('Response from backend:', response);

            alert('Başvurunuz başarıyla gönderildi!');
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Başvuru gönderilirken bir hata oluştu!');
        }
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Profile Page:
            </Typography>
            <Container component="main" maxWidth="sm">
                <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
                        {/* Kullanıcı profil resmi buraya eklenebilir */}
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ margin: (theme) => theme.spacing(1) }}>
                        Profil Bilgileri
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {Object.keys(user).map((key, index) => (
                                <Grid item xs={12} key={index}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id={key}
                                        label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                        name={key}
                                        autoComplete={key}
                                        value={user[key]}
                                        onChange={handleChange(key)}
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                borderRadius: 4,
                                                backgroundColor: 'background.paper',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                transition: theme => theme.transitions.create(['border-color', 'box-shadow']),
                                                '&:focus': {
                                                    boxShadow: `${theme => theme.palette.secondary.main} 0 0 0 0.2rem`,
                                                },
                                            },
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1rem' }}
                            onClick={handleSubmit}
                        >
                            Bilgileri Güncelle
                        </Button>
                    </Box>
                </Box>
            </Container>

        </div>
    );
}

export default ProfilePage;
