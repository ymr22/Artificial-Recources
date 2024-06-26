import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Divider,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText, makeStyles, Container, Grid, InputAdornment,
} from '@mui/material';
import './ApplyForm.css';
import axios from "axios";
const ApplyJob = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        birthDate: '',
        education: [],
        previousJobs: [],
        experience: [],
        skills: [],
        projects: [],
        interests: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.post(
                'http://localhost:8000/utils/cvcommit/', formData, { headers }
            );
            console.log('Response from backend:', response);

            alert('Başvurunuz başarıyla gönderildi!');
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Başvuru gönderilirken bir hata oluştu!');
        }
    };


    const addEducation = () => {
        setFormData({
            ...formData,
            education: [...formData.education, { id: Math.random(), schoolName: '', department: '', graduationDate: '' }],
        });
    };

    const addPreviousJob = () => {
        setFormData({
            ...formData,
            previousJobs: [...formData.previousJobs, { id: Math.random(), companyName: '', position: '', startDate: '', endDate: '' }],
        });
    };

    const addExperience = () => {
        setFormData({
            ...formData,
            experience: [...formData.experience, { id: Math.random(), title: '', description: '' }],
        });
    };

    const addSkill = () => {
        setFormData({
            ...formData,
            skills: [...formData.skills, ''],
        });
    };

    const addProject = () => {
        setFormData({
            ...formData,
            projects: [...formData.projects, { id: Math.random(), title: '', description: '', url: '' }],
        });
    };

    const addInterest = () => {
        setFormData({
            ...formData,
            interests: [...formData.interests, ''],
        });
    };

    const removeEducation = (id) => {
        setFormData({
            ...formData,
            education: formData.education.filter((education) => education.id !== id),
        });
    };

    const removePreviousJob = (id) => {
        setFormData({
            ...formData,
            previousJobs: formData.previousJobs.filter((job) => job.id !== id),
        });
    };

    const removeExperience = (id) => {
        setFormData({
            ...formData,
            experience: formData.experience.filter((experience) => experience.id !== id),
        });
    };

    const removeSkill = (index) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter((skill, i) => i !== index),
        });
    };

    const removeProject = (id) => {
        setFormData({
            ...formData,
            projects: formData.projects.filter((project) => project.id !== id),
        });
    };

    const removeInterest = (index) => {
        setFormData({
            ...formData,
            interests: formData.interests.filter((interest, i) => i !== index),
        });
    };

    return (
        <div className="container">
            <Container className="paper">
                <Typography variant="h5">İş Başvurusu</Typography>
                <Divider />
                <Box sx={{ padding: '20px' }}>
                    <form className="form" onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '50px'}}>
                            <TextField
                                label="Ad"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Soyad"
                                name="surname"
                                value={formData.surname}
                                onChange={handleInputChange}
                                margin="normal"
                                required
                            />
                        </Box>
                        <TextField
                            label="E-posta"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            margin="normal"
                            required
                            type="email"
                            sx={{
                                '&:-webkit-box-shadow': {
                                    backgroundColor: '#5c2d91', // istediğiniz rengi seçin
                                },
                            }}
                        />
                        <TextField
                            label="Telefon Numarası"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Doğum Tarihi"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                            margin="normal"
                            required
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Box sx={{ mt: 3, lineHeight:3 }}>
                            <Typography variant="h6">Eğitim Bilgileri</Typography>
                            <Divider />
                            {formData.education.map((education) => (
                                <Box key={education.id + 1} sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '30px'}}>
                                    <TextField
                                        label="Okul Adı"
                                        value={formData.education.schoolName}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Bölüm"
                                        value={formData.education.department}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Mezuniyet Tarihi"
                                        value={formData.education.graduationDate}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button variant="outlined" color="error" size="small" onClick={() => removeEducation(education.id)}>
                                        Sil
                                    </Button>
                                </Box>
                            ))}
                            <Button variant="outlined" onClick={addEducation}>Eğitim Bilgisi Ekle</Button>
                        </Box>

                        <Box sx={{ mt: 3, lineHeight:3 }}>
                            <Typography variant="h6">Önceki İş Yerleri</Typography>
                            <Divider />
                            {formData.previousJobs.map((job) => (
                                <Box key={job.id} sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '30px'}}>
                                    <TextField
                                        label="Şirket Adı"
                                        value={formData.previousJobs.companyName}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Pozisyon"
                                        value={formData.previousJobs.position}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Başlangıç Tarihi"
                                        value={formData.previousJobs.startDate}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        label="Bitiş Tarihi"
                                        value={formData.previousJobs.endDate}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button variant="outlined" color="error" size="small" onClick={() => removePreviousJob(job.id)}>
                                        Sil
                                    </Button>
                                </Box>
                            ))}
                            <Button variant="outlined" onClick={addPreviousJob}>Önceki İş Yeri Ekle</Button>
                        </Box>

                        <Box sx={{ mt: 3, lineHeight:3 }}>
                            <Typography variant="h6">Deneyimler</Typography>
                            <Divider />
                            {formData.experience.map((experience) => (
                                <Box key={experience.id} sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '30px'}}>
                                    <TextField
                                        label="Deneyim Başlığı"
                                        value={formData.experience.title}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Deneyim Açıklaması"
                                        value={formData.experience.description}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        multiline
                                        rows={4}
                                    />
                                    <Button variant="outlined" color="error" size="small" onClick={() => removeExperience(experience.id)}>
                                        Sil
                                    </Button>
                                </Box>
                            ))}
                            <Button variant="outlined" onClick={addExperience}>Deneyim Ekle</Button>
                        </Box>

                        <Box sx={{ mt: 3, lineHeight:3 }}>
                            <Typography variant="h6">Yetenekler</Typography>
                            <Divider />
                            {formData.skills.map((skill) => (
                            <Box key={skill.id} sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '30px'}}>
                                <TextField
                                    label="Yetenek"
                                    value={formData.skills.id}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                                <Button variant="outlined" color="error" size="small" onClick={() => removeSkill(skill.id)}>
                                    Sil
                                </Button>
                            </Box>
                            ))}
                            <Button variant="outlined" onClick={addSkill}>Yetenek Ekle</Button>
                        </Box>

                        <Box sx={{ mt: 3, lineHeight:3 }}>
                            <Typography variant="h6">Projeler</Typography>
                            <Divider />
                            {formData.projects.map((project) => (
                                <Box key={project.id} sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '30px'}}>
                                    <TextField
                                        label="Proje Başlığı"
                                        value={formData.projects.title}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Proje Açıklaması"
                                        value={formData.projects.description}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        multiline
                                        rows={4}
                                    />
                                    <TextField
                                        label="Proje URL'si"
                                        value={formData.projects.url}
                                        onChange={handleInputChange}
                                        margin="normal"
                                    />
                                    <Button variant="outlined" color="error" size="small" onClick={() => removeProject(project.id)}>
                                        Sil
                                    </Button>
                                </Box>
                            ))}
                            <Button variant="outlined" onClick={addProject}>Proje Ekle</Button>
                        </Box>

                        <Box sx={{ mt: 3 , lineHeight:3}}>
                            <Typography variant="h6">İlgi Alanları</Typography>
                            <Divider />
                            {formData.interests.map((interest) => (
                            <Box key={interest.id} sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-start', gap: '30px'}}>
                                <TextField
                                    label="İlgi Alanı"
                                    value={formData.interests.id}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                                <Button variant="outlined" color="error" size="small" onClick={() => removeInterest(interest.id)}>
                                    Sil
                                </Button>
                            </Box>
                            ))}
                            <Button variant="outlined" onClick={addInterest}>İlgi Alanı Ekle</Button>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                            <Button variant="contained" type="submit" className="button">Başvur</Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default ApplyJob;
