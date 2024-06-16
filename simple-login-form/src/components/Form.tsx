import React, { useState } from 'react';
import { TextField, Button, Container, Box, Alert } from '@mui/material';

interface FormProps {
    handleSubmit: (username: string, email: string) => void;
}

const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const Form: React.FC<FormProps> = ({ handleSubmit }) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !email) {
            setError('Please fill out all fields');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
            handleSubmit(username, email);
            setUsername('');
            setEmail('');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mt: 4
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="username"
                    name="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                    <Alert severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                )}
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Form;
