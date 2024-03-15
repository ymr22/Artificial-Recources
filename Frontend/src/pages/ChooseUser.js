import React from 'react';
import {
    Typography,
    Button,
    Stack,
    Paper,
    Divider,
} from '@mui/material';


const styles = {
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c2828',
    },
    paper: {
        padding: '100px',
        maxWidth: '700px',
        textAlign: 'center',
    },
    button: {
        width: '700px',
        margin: '30px 25px',
        fontSize: '18px',
    },
    companyButton: {
        width: '200px',
        height: '100px',
        margin: '30px 25px',
        backgroundColor: '#7f43bd',
        color: 'white',
    },
    guestButton: {
        width: '200px',
        height: '100px',
        margin: '30px 25px',
        backgroundColor: '#a086c7',
        color: 'white',
    },
};

const ChooseUser = () => {
    return (
        <div style={styles.root}>
            <Paper style={styles.paper}>
                <Typography variant="h5">Hoş Geldiniz!</Typography>
                <Divider />
                <Stack direction="row" spacing={3} justifyContent="center">
                    <Button variant="contained" style={styles.companyButton} href="/login">
                        Şirket Girişi
                    </Button>
                    <Button variant="contained" style={styles.guestButton} href="/apply-login">
                        Misafir Girişi
                    </Button>
                </Stack>
            </Paper>
        </div>
    );
};

export default ChooseUser;
