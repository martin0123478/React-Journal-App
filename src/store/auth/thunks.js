import { signWithGoogle,resgisterUserWithEmailAndPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
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
   const {ok,uid,photoURL,errorMessage}= await   resgisterUserWithEmailAndPassword({email,password,disPlayName})
   if(!ok) return dispatch(logout({errorMessage}))
     dispatch(login({uid,email,disPlayName,photoURL}))


        
    }
}

export const startLoginWithEmailAndPassword = ({email,password}) =>{
    return async (dispatch) =>{
        dispatch(chekingCredencials())
        const result = await loginWithEmailPassword({email,password})
        console.log(result)
     if(!result.ok)  dispatch(logout(result.errorMessage))
           
    }
}

export const startLogout = () =>{
    return async(dispatch) =>{
       await logoutFirebase()
       dispatch(logout({}))
    }
}