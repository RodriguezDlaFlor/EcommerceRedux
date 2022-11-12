import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Swal from 'sweetalert2';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Seguir '}
            <Link color="inherit" href="/Products">
                Comprando
            </Link>{' '}

        </Typography>
    );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];


const theme = createTheme();

function Checkout({ checkout, setCheckout }) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if (checkout.length === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Debe completar todos los campos',
                icon: 'error',
            })
        } else {
            setActiveStep(activeStep + 1);
        }
        console.log(checkout)
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm checkout={checkout} setCheckout={setCheckout} />;
            case 1:
                return <PaymentForm checkout={checkout} setCheckout={setCheckout} />;
            case 2:
                return <Review checkout={checkout} />;
            default:
                throw new Error('Unknown step');
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Patitas Consentidas
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Gracias por tu orden.
                            </Typography>
                            <Typography variant="subtitle1">
                                Su número de orden es #2001539. Hemos enviado su pedido por correo electrónico para su
                                confirmación, y le enviaremos una actualización cuando su pedido haya sido
                                enviado.
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}

export default Checkout;