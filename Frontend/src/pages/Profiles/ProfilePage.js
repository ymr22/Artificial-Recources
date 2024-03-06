import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Avatar, Grid } from '@mui/material';

const ProfilePage = () => {
    // Kullanıcı bilgilerini state'de tutma
    const [user, setUser] = useState({
        firstName: "Ahmet",
        email: "ahmet@example.com",
        phone: "555-1234",
        department: "IT",
        workDuration: "2 yıl",
        employeeId: "12345"
    });

    // Form alanlarında değişiklik olduğunda user state'ini güncelle
    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
    };

    return (
        <Container component="main" maxWidth="sm">
            <Typography component="h1" variant="h5">
                Profil Bilgileri
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                {/* Kullanıcı profil resmi buraya eklenebilir */}
            </Avatar>
            <form>
                <Grid container spacing={2}>
                    {Object.keys(user).map((key, index) => (
                        <Grid item xs={12} key={index}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()} // Convert camelCase to Regular Case
                                name={key}
                                autoComplete={key}
                                value={user[key]}
                                onChange={handleChange(key)}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Bilgileri Güncelle
                </Button>
            </form>
        </Container>
    );
}

export default ProfilePage;
