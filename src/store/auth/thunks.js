import { signWithGoogle } from "../../firebase/providers"
import { chekingCredencials, login, logout } from "./authSlice"

export const chekingAuthentication = ({email,password}) =>{
    return async(dispatch)=>{
        dispatch(chekingCredencials())
    }

}

export const startGoogleSingIn = ()=>{
     return async(dispatch)=>{
        dispatch(chekingCredencials())
     const result =  await signWithGoogle()
     if(!result.ok) return dispatch(logout(result.errorMessage))
     dispatch(login(result))
    }
}