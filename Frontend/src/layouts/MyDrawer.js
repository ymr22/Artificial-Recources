import React, {useEffect, useState} from 'react';
import {
    Box,
    Drawer,
    List,
    ListItemButton, ListItemText, ListItemIcon
    // other imports
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import EmployerService from "../services/EmployerService";

export default function MyDrawer() {

    const [isSupervisor, setIsSupervisor] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState();

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployerById(8).then((result) => setIsSupervisor(result.data.is_supervisor)).catch();
    }, []);
    const handleListItemClick = (component) => {// Navigate based on chosen component
        setSelectedComponent(component)
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Drawer anchor="left" open={true} variant="persistent">
                <Box sx={{ width: 240, p: 2 }}>
                    <List>
                        <ListItemButton
                            component={Link}
                            to="/dashboard"
                            selected={selectedComponent === 'dashboard'}
                            onClick={() => handleListItemClick('dashboard')} // Handle Home click
                        >
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/profile" // Assuming path for EmployerList
                            selected={selectedComponent === 'profile'}
                            onClick={() => handleListItemClick('profile')} // Handle Employees click
                        >
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/employers" // Assuming path for EmployerList
                            selected={selectedComponent === 'employers'}
                            onClick={() => handleListItemClick('employers')} // Handle Employees click
                        >
                            <ListItemText primary="Employees" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/offDay" // Assuming path for EmployerList
                            selected={selectedComponent === 'offDay'}
                            onClick={() => handleListItemClick('offDay')} // Handle Employees click
                        >
                            <ListItemText primary="Off-Day Request" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/learning" // Assuming path for EmployerList
                            selected={selectedComponent === 'learningMaterial'}
                            onClick={() => handleListItemClick('learningMaterial')} // Handle Employees click
                        >
                            <ListItemText primary="Learning Material" />
                        </ListItemButton>

                        {isSupervisor && (
                            <>
                                <ListItemButton
                                    component={Link}
                                    to="/cvscan" // Assuming path for EmployerList
                                    selected={selectedComponent === 'CVScanning'}
                                    onClick={() => handleListItemClick('CVScanning')} // Handle Employees click
                                >
                                    <ListItemIcon>
                                        {/* Add your employees icon here */}
                                    </ListItemIcon>
                                    <ListItemText primary="CV Scan" />
                                </ListItemButton>
                                <ListItemButton
                                    component={Link}
                                    to="/offDayConfirm" // Assuming path for EmployerList
                                    selected={selectedComponent === 'OffDayConfirmation'}
                                    onClick={() => handleListItemClick('OffDayConfirmation')} // Handle Employees click
                                >
                                    <ListItemIcon>
                                        {/* Add your employees icon here */}
                                    </ListItemIcon>
                                    <ListItemText primary="Off-Day Approval" />
                                </ListItemButton>
                            </>
                        )}
                        <ListItemButton
                            component={Link}
                            to="/login" // Assuming path for EmployerList
                            selected={selectedComponent === 'Logout'}
                            onClick={() => handleListItemClick('Logout')} // Handle Employees click
                        >
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
