import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField
} from '@mui/material';

const data = [
    {
        id: 1,
        name: 'Ahmet Yılmaz',
        email: 'ahmet.yilmaz@example.com',
        position: 'Yazılım Geliştirici',
        aiScore: 78,
        status: 'Değerlendiriliyor',
    },
    {
        id: 2,
        name: 'Ayşe Öztürk',
        email: 'ayse.ozturk@example.com',
        position: 'Pazarlama Uzmanı',
        aiScore: 85,
        status: 'Mülakata Çağrıldı',
    },
    {
        id: 3,
        name: 'Mehmet Demir',
        email: 'mehmet.demir@example.com',
        position: 'Grafik Tasarımcı',
        aiScore: 65,
        status: 'Reddedildi',
    },
    {
        id: 4,
        name: 'Fatma Gül',
        email: 'fatma.gul@example.com',
        position: 'Müşteri Hizmetleri Temsilcisi',
        aiScore: 92,
        status: 'Değerlendiriliyor',
    },
    {
        id: 5,
        name: 'Cevdet Can',
        email: 'cevd.can@example.com',
        position: 'Satış Uzmanı',
        aiScore: 72,
        status: 'Değerlendiriliyor',
    },
];

const CVScan = () => {
    const [candidates, setCandidates] = useState(data);

    useEffect(() => {
        // Gerçek API'den başvuru verilerini ve AI taraması sonuçlarını alın (burada örnek veriler kullanılıyor)
    }, []);

    const handleInterviewDecision = (candidateId, decision) => {
        // Gerçek API ile mülakata çağırma/reddetme işlemini gerçekleştirin
        // Başarılıysa, adayın durumunu güncelleyin
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Applicant CVs:
            </Typography>
            <Box sx={{ p: 2, marginLeft: 40 }}>
                <Paper>
                    {candidates.map((candidate) => (
                        <Accordion key={candidate.id}>
                            <AccordionSummary>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography variant="h6">{candidate.name}</Typography>
                                    <Typography>E-posta: {candidate.email}</Typography>
                                    <Typography>Pozisyon: {candidate.position}</Typography>
                                    <Typography>AI Puanı: {candidate.aiScore}</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    multiline
                                    fullWidth
                                    rows={4}
                                    placeholder="Notlar..."
                                />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Paper>
            </Box>

        </div>
    );
};

export default CVScan;
