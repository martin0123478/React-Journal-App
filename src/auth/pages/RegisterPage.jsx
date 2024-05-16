import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import React from 'react'
import { AuthLayouth } from '../layout/AuthLayouth'
import { useForm } from '../../hooks/useForm'

const formData = {
    email: 'martin@gmail.com',
    password: 123456,
    displayName: 'martin'
}
const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}
export const RegisterPage = () => {
    const { displayName, email, pasword, formState, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations)

    console.log(displayNameValid)
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }
    return (

        <AuthLayouth titulo='Crear cuenta'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Nombre completo' type='text' placeholder='Tu nombre' fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!displayNameValid}
                            helperText={displayNameValid} />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Correo' type='email' placeholder='correo@google.com'
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Contrasela' type='password' placeholder='contraseña' fullWidth
                            name='password'
                            value={pasword}
                            onChange={onInputChange} />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth
                                type='submit'>
                                Crear cuenta
                            </Button>

                        </Grid>




                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            Ingresar
                        </Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayouth>



    )
}
