import React, { useState } from 'react';
import { TextField, Button, Container, Box, Alert } from '@mui/material';

interface FormProps {
    handleSubmit: (firstName: string, lastName: string) => void;
}

const Form: React.FC<FormProps> = ({ handleSubmit }) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName === '' || lastName === '') {
            setError('Please fill out all fields');
        } else {
            setError('');
            handleSubmit(firstName, lastName);
            setFirstName('');
            setLastName('');
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
                    id="first-name"
                    name="first-name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    id="last-name"
                    name="last-name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
