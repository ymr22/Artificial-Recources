import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField, Button
} from '@mui/material';
import axios from "axios";
import EmployerService from "../../services/EmployerService";

const CVScan = () => {
    const [candidates, setCandidates] = useState([]);
    const [response, setResponse] = useState("");

    useEffect( () => {
        let employerService = new EmployerService();
        employerService.getCvInfo(2).then((result) => setCandidates(result.data)).catch();
        employerService.getCvInfo(2).then((result) => console.log(result.data)).catch();
        handleInterviewDecision()
    }, []);

    const handleInterviewDecision = async () => {
        const data = await axios.get("http://localhost:8000//utils/cvscan/")
        setResponse(data.data);
        console.log(response)
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Applicant CVs:
            </Typography>

            <Box sx={{ p: 2, marginLeft: 40 }}>
                <Paper>
                    {candidates.map((candidate) => (
                        <Accordion key={candidate.id}  sx={{ mt: 3 }}>
                            <AccordionSummary>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography variant="h6">{candidate.name + " " + candidate.surname}</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ lineHeight: 3 }}>Pozisyon: {candidate.telephone}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>E-posta: {candidate.email}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>E-posta: {candidate.skills}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>E-posta: {candidate.experience}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>E-posta: {candidate.projects}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>Pozisyon: {candidate.interests}</Typography>
                                <Typography sx={{ lineHeight: 2 }}>AI Puanı: {response}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Paper>
            </Box>

        </div>
    );
};

export default CVScan;
