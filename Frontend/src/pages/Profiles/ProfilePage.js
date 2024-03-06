import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import {
    Alert,
    Snackbar,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material';

const styles = {
    alertSucces: { backgroundColor: '#4CAF50', color: '#FFFFFF' },
    alertError: { backgroundColor: '#E84C4C', color: '#FFFFFF' },
};

export default function ProfilPage (){
    const [customer, setCustomer] = useState({
        id: 'c1739ca9-9676-43e6-b08e-14e44e66a7f2',
        lastName: '',
        name: '',
        email: '',
        tel: '',
        status: 'Actif',
        skils: [{ id: 0, profession: 'Développeur', ability: [] }],
    });

    const [alert, setAlert] = useState({
        isOpen: false,
        message: 'success',
        error: false,
    });

    const theme = useTheme();

    let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const alertClose = () => {
        setAlert({
            isOpen: false,
            message: '',
            error: false,
        });
    };

    const alertOpen = alertObj => {
        setAlert({
            isOpen: true,
            message: alertObj?.message,
            error: alertObj?.error,
        });
    };

    return (
        <Stack
            sx={{
                gap: '16px',
                padding: '32px 24px',
                backgroundColor: '#f1f4f6',
                width: '100%',
                minHeight: '100vh',
                marginLeft: 15
            }}
        >
            <Stack>
                <Typography
                    component={'h2'}
                    sx={{
                        fontFamily: 'RedHatBold',
                        fontSize: '34px',
                        lineHeight: 1.17,
                        letterSpacing: '-0.2px',
                        color: '#060506',
                    }}
                >
                    Profil
                </Typography>
                <Stack direction={!isMobile ? 'row' : 'column'}>
                    <Typography
                        color={'rgba(0, 0, 0, 0.38)'}
                        component={'p'}
                        fontFamily={'RedHatText'}
                    >{`Employee Id :`}</Typography>
                    <Typography fontFamily={'RedHatText'}>{customer.id}</Typography>
                    <Typography
                        color={'rgba(0, 0, 0, 0.38)'}
                        component={'p'}
                        fontFamily={'RedHatText'}
                    >{`Employee Department :`}</Typography>
                    <Typography fontFamily={'RedHatText'}>{customer.id}</Typography>
                </Stack>
            </Stack>
            {alert?.isOpen && (
                <Snackbar
                    open={alert.isOpen}
                    autoHideDuration={2000}
                    onClose={alertClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Alert
                        onClose={alertClose}
                        icon={false}
                        // severity="success"
                        sx={!alert.error ? styles.alertSucces : styles.alertError}
                    >
                        {alert.message}
                    </Alert>
                </Snackbar>
            )}
            <Outlet />
        </Stack>
    );
};