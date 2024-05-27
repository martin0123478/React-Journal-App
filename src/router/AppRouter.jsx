import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { ChekingAuth } from '../ui/components/chekingAuth'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth/authSlice'



export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()


  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout())
      const { uid, displayName, photoURL } = user
      dispatch(login({ uid, displayName, photoURL }))

    })
  }, [])


  if (status === 'cheking') {
    return <ChekingAuth />
  }
  return (
    <Routes>


      {
        (status === 'athenticated')
          ? < Route path='/*' element={<JournalRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
      }
      <Route path='*' element={<Navigate to='/auth/login' />} />

      <Route />

    </Routes>
  )
}
