import React from 'react';
import { Container, Typography } from '@mui/material';
import './App.css';

import Form from './components/Form';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const handleSubmit = (username: string, email: string) => {
        console.log(`User Name: ${username}, Email: ${email}`);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Login Form
            </Typography>
            <Form handleSubmit={handleSubmit} />
        </Container>
    );
};

export default App;
