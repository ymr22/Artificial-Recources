import React from 'react';
import { Typography, ButtonGroup, Button } from '@mui/material';

export default function ChoosingSignInMethod() {
    return (
        <div>
            <Typography variant="h5" align="center" sx={{ color: 'white' }}>
                Sign In As a ...
            </Typography>
            <ButtonGroup fullWidth spacing={2}>
                <Button variant="contained">Job Seeker</Button>
                <Button variant="contained">Employer</Button>
                <Button variant="contained">System User</Button>
            </ButtonGroup>
        </div>
    );
}
