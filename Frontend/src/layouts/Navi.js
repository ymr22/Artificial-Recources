import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    InputBase,
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon as MUIListItemIcon, // Avoid naming conflict
    ListItemText as MUIListItemText, ListItemText, Container, ListItemIcon,
    // other imports
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import EmployerList from "../pages/Employers/EmployerList";
import JobList from "../pages/Jobs/JobList";
import ProfilePage from "../pages/Profiles/ProfilePage"; // Import your Jobs component

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleListItemClick = (component) => {
        setSelectedComponent(component);
        navigate(component === 'jobs' ? '/jobs' : '/'); // Navigate based on chosen component
    };
    const handleSignOut = () => {
        setIsAuthenticated(false);
    };

    const handleSignIn = () => {
        setIsAuthenticated(true);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            {/* Top Menu */}
            <AppBar position="static" color="default" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Your Logo
                    </Typography>
                    <InputBase
                        sx={{ mr: 2, flex: 1, display: { xs: 'none', md: 'flex' } }}
                        placeholder="Search..."
                    />
                </Toolbar>
            </AppBar>

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
            <Box sx={{ display: 'flex', flexGrow: 1, mt: 5 }}>
                <Container maxWidth="lg">
                    {selectedComponent === 'jobs' && <JobList />}
                    {selectedComponent === 'employers' && <EmployerList />}
                    {selectedComponent === 'profile' && <ProfilePage />}
                    {selectedComponent === null && (
                        <Typography variant="h5" component="div">
                            Welcome!
                        </Typography>
                    )}
                </Container>
            </Box>
        </div>
    );
}
