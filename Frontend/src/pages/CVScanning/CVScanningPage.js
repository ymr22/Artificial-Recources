import React, {useState, useEffect, useRef} from 'react';
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
    const response = useRef([]);

    useEffect(  async () => {
        await handleInterviewDecision()
        let employerService = new EmployerService();
        employerService.getCvInfo().then((result) => setCandidates(result.data)).catch();
    }, []);

    const handleInterviewDecision = async () => {
        const data = await axios.get("http://localhost:8000//utils/cvscan/")
        response.current = data.data
        console.log(response.current[0])
        console.log("data is: "  + data.data[0] + "\n\n" + data.data[1])
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Applicant CVs:
            </Typography>

            <Box sx={{ p: 2, marginLeft: 40 }}>
                <Paper>
                    {candidates.map((candidate, index) => (
                        <Accordion key={index} sx={{ mt: 3 }}>
                            <AccordionSummary>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography variant="h6">{candidate.name + " " + candidate.surname}</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ lineHeight: 3 }}>Pozisyon: Backend Developer</Typography>
                                <Typography sx={{ lineHeight: 3 }}>Telefon: {candidate.telephone}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>E-posta: {candidate.email}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>Yetenekler: {candidate.skills}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>Deneyimler: {candidate.experience}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>Projeler: {candidate.projects}</Typography>
                                <Typography sx={{ lineHeight: 3 }}>İlgi Alanları: {candidate.interests}</Typography>
                                <Typography sx={{ lineHeight: 2 }}>AI Yorumu: {response.current[index]}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Paper>
            </Box>

        </div>
    );
};

export default CVScan;
