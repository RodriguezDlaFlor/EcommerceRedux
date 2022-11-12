import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function AddressForm({ checkout, setCheckout }) {


    const inputChange = (e) => {
        setCheckout({
            ...checkout,
            [e.target.name]: e.target.value
        })

    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Dirección de envío.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        minLength="4"
                        id="firstName"
                        name="firstName"
                        label="Nombre"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={checkout.firstName}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        minLength="4"
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={checkout.lastName}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address"
                        label="Direccion"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={checkout.address}
                        onChange={inputChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Ciudad"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        value={checkout.city}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="Provincia"
                        fullWidth
                        variant="standard"
                        value={checkout.state}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Código Postal"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        value={checkout.zip}
                        onChange={inputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="País"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        value={checkout.country}
                        onChange={inputChange}
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}

export default AddressForm;