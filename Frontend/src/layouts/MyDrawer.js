import React, { useState } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItemButton, ListItemText, ListItemIcon, Container, Typography,
    // other imports
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import JobList from "../pages/Jobs/JobList";
import EmployerList from "../pages/Employers/EmployerList";
import ProfilePage from "../pages/Profiles/ProfilePage";

export default function MyDrawer() {

    const navigate = useNavigate();
    const [selectedComponent, setSelectedComponent] = useState(null);
    const handleListItemClick = (component) => {// Navigate based on chosen component
    };

    return (
        <div style={{ backgroundColor: 'white' }}>

            <Drawer anchor="left" open={true} variant="persistent">
                <Box sx={{ width: 240, p: 2 }}>
                    <List>
                        <ListItemButton
                            component={Link}
                            to="/"
                            selected={selectedComponent === null}
                            onClick={() => handleListItemClick(null)} // Handle Home click
                        >
                            <ListItemIcon>
                                {/* Add your home icon here */}
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/profile" // Assuming path for EmployerList
                            selected={selectedComponent === 'profile'}
                            onClick={() => handleListItemClick('profile')} // Handle Employees click
                        >
                            <ListItemIcon>
                                {/* Add your employees icon here */}
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/jobs"
                            selected={selectedComponent === 'jobs'}
                            onClick={() => handleListItemClick('jobs')} // Handle Jobs click
                        >
                            <ListItemIcon>
                                {/* Add your jobs icon here */}
                            </ListItemIcon>
                            <ListItemText primary="Jobs" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/employers" // Assuming path for EmployerList
                            selected={selectedComponent === 'employers'}
                            onClick={() => handleListItemClick('employers')} // Handle Employees click
                        >
                            <ListItemIcon>
                                {/* Add your employees icon here */}
                            </ListItemIcon>
                            <ListItemText primary="Employees" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
