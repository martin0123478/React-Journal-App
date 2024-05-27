import { signWithGoogle,resgisterUserWithEmailAndPassword } from "../../firebase/providers"
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

export const startCreatingUserWithEmailAndPassword=({email,password,disPlayName}) =>{
    return async (dispatch)=>{
        dispatch(chekingCredencials())
   const resp= await   resgisterUserWithEmailAndPassword({email,password,disPlayName})
   console.log(resp)

        
    }
}