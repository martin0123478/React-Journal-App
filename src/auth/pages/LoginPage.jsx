import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import React, { useMemo } from 'react'
import { AuthLayouth } from '../layout/AuthLayouth'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { chekingCredencials } from '../../store/auth/authSlice'
import { startGoogleSingIn } from '../../store/auth/thunks'
export const LoginPage = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { email, pasword, onInputChange } = useForm({
    email: 'martin@outlook.es',
    pasword: '12434'
  })

  const isAuthenticating = useMemo(() => status === 'cheking', [status])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ email, pasword })
    dispatch(chekingCredencials(email, pasword))
  }
  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn')
    dispatch(startGoogleSingIn())
  }
  return (

    <AuthLayouth titulo='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Correo' type='email' placeholder='correo@google.com' fullWidth
              name='email' onChange={onInputChange}
              value={email} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Contraseña' type='password' placeholder='contraseña' fullWidth
              name='contraseña' onChange={onInputChange} value={pasword}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='contained' fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>

            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth onClick={onGoogleSingIn}
                disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>

            </Grid>


          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>

          </Grid>
        </Grid>
      </form>
    </AuthLayouth>



  )
}
