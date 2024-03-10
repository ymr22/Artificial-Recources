import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Avatar, Grid, Box } from '@mui/material';

const ProfilePage = () => {
    const [user, setUser] = useState({
        firstName: "Ahmet",
        email: "ahmet@example.com",
        phone: "555-1234",
        department: "IT",
        workDuration: "2 yıl",
        employeeId: "12345"
    });

    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
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
