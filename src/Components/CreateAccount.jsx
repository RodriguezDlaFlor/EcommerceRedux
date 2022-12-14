import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from "../Firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Swal from 'sweetalert2';
const auth = getAuth(app)



function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


function Account() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            Swal.fire({
                text: 'Debe ingresar un email y una contraseña',
                icon: 'ok',
            })
        } else {
            createUserWithEmailAndPassword(auth, email, password).then((app) => {
                console.log(app)
                if (app) {
                    Swal.fire({
                        text: 'Cuenta creada con éxito!',
                        icon: 'ok',
                    })
                    navigate('/')
                }
            }).catch(() => {
                Swal.fire({
                    text: 'El email ingresado ya existe.',
                    icon: 'ok',
                })
            })
        }

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">

                <CssBaseline />
                <h2 clasName="text-center " component="h1" variant="h5">
                    Crear Cuenta
                </h2>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <br />

                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="displayName"
                                    required
                                    minLength='3'
                                    fullWidth
                                    id="displaytName"
                                    label="First Name"
                                    autoFocus


                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Ya tienes una cuenta? Iniciar sesión
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>

        </ThemeProvider >
    );
}
export default Account;