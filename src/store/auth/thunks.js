import { chekingCredencials } from "./authSlice"

export const chekingAuthentication = ({email,password}) =>{
    return async(dispatch)=>{
        dispatch(chekingCredencials())
    }

}

export const startGoogleSingIn = ()=>{
     return async(dispatch)=>{
        dispatch(chekingCredencials())
    }
}