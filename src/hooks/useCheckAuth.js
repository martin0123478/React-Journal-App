import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/auth/authSlice"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout())
      const { uid, displayName, photoURL } = user
      dispatch(login({ uid, displayName, photoURL }))

    })
  }, [])


  

  return{
    status
  }
}
