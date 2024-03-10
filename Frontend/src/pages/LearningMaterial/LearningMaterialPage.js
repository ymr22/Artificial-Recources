import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Card,
    CardContent,
    Divider,
    Link,
} from '@mui/material';

const data = {
    id: 1,
    name: 'Çalışan 1',
    role: 'Yazılım Geliştirici',
    completedTasks: 6,
    totalTasks: 12,
    missingSkills: ['React JS', 'Node.js'],
};

const LearningMaterial = () => {
    const [user] = useState(data);

    useEffect(() => {
        // Gerçek API'den kullanıcı ve tamamlanmış görev verilerini alın (burada örnek veriler kullanılıyor)
    }, []);

    const getMissingSkills = () => {
        const missingSkills = user.missingSkills.map((skill) => (
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h6">{skill}</Typography>
                    <Divider />
                    <Box sx={{ mt: 2 }}>
                        <Link href="#">
                            <Typography variant="body2">Eğitim Videosu</Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="body2">Sunum</Typography>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        ));
        return missingSkills;
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Learning Material:
            </Typography>
            <Box sx={{ p: 2, marginLeft: 40 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h5">
                                Completed Tasks: {user.completedTasks}/{user.totalTasks}
                            </Typography>
                            <Divider />
                            <Typography variant="h6" sx={{mt: 2}}>Missing Skills</Typography>
                            {getMissingSkills()}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
};

export default LearningMaterial;
