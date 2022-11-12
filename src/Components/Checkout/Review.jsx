import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';


function Review({ checkout }) {
    const { cart } = useSelector(state => state.shopping)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Resúmen de Orden
            </Typography>
            <List disablePadding>
                {cart.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.amount} />
                        <Typography variant="body2">${product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        $34.06
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Datos
                    </Typography>
                    <Typography gutterBottom>Nombre: {checkout.nameTitular}</Typography>
                    <Typography gutterBottom>Dirección: {checkout.address}</Typography>
                    <Typography gutterBottom>{checkout.contry}</Typography>
                    <Typography gutterBottom>{checkout.state} - {checkout.city}</Typography>
                    <Typography gutterBottom>Código Postal: {checkout.zip}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Detalle del pago
                    </Typography>
                    <Grid container>

                        <React.Fragment key={checkout.nameTitular}>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{checkout.numberCard}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{checkout.dataCaducidad}</Typography>
                            </Grid>
                        </React.Fragment>

                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Review;