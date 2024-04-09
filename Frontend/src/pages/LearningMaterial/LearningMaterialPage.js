import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Card,
    CardContent,
    Divider,
    Link, TextField, ListItem,
} from '@mui/material';
import EmployerService from "../../services/EmployerService";
const LearningMaterial = () => {
    const [arr, setArr] = useState("");

    const data = [
        "1. [Frontend Mentor](https://www.frontendmentor.io/): Interactive coding challenges to build real-world projects.",
        "2. [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development/): Comprehensive curriculum covering HTML, CSS, JavaScript, and React.",
        "3. [The Odin Project](https://www.theodinproject.com/courses/web-development-101): Project-based curriculum with hands-on exercises and expert guidance.",
        "4. [Udemy](https://www.udemy.com/topic/front-end-development/): Short courses and tutorials on specific frontend technologies.",
        "5. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML): Official documentation for web standards, including HTML, CSS, and JavaScript.",
        "6. [Egghead](https://egghead.io/): Video lessons and tutorials on frontend development concepts.",
        "7. [Codecademy](https://www.codecademy.com/catalog/language/front-end-development): Interactive coding exercises and projects to build your frontend skills.",
        "8. [Scrimba](https://scrimba.com/learn/frontende): Interactive, project-based courses taught by experienced developers.",
        "9. [Vue Mastery](https://vuemastery.com/courses/): Video courses and tutorials on the Vue.js framework.",
        "10. [React Tutorial](https://reactjs.org/tutorial/tutorial.html): Official documentation and interactive tutorial for learning React.",
        ]
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployeeLearningData(8).then((result) => setArr(result.data.learning_data)).catch();
        employerService.getEmployeeLearningData(8).then((result) => console.log(result.data.learning_data)).catch();
        const lines = arr.split(/(?<=\))\s\d+\. \[/);
        setArr(lines.join('\n'));
        console.log("new arr " + arr)
        }, []);

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{p: 3, marginLeft: 30}}>
                Learning Material:
            </Typography>
            <Box sx={{ p: 2, marginLeft: 40 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2 }}>
                            <Divider />
                            <Typography variant="h6" sx={{mt: 2}}>Missing Skills</Typography>
                            <Typography>
                                {data.map((d) => (
                                    <ListItem>
                                        {d}
                                    </ListItem>

                                ))}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
};

export default LearningMaterial;
