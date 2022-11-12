import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function PaymentForm({ checkout, setCheckout }) {

    const inputChange = (e) => {
        setCheckout({
            ...checkout,
            [e.target.name]: e.target.value
        })

    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Método de Pago.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Nombre del titular"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        name='nameTitular'
                        value={checkout.nameTitular}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Número de tarjeta"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                        name='numberCard'
                        value={checkout.numbersCard}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Fecha de expiración"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                        name='dataCaducidad'
                        value={checkout.dataCaducidad}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Últimos 3 dígitos de la tarjeta"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                        name='cvv'
                        value={checkout.cvv}
                        onChange={inputChange}
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}

export default PaymentForm;