import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider()


export const signWithGoogle = async () =>{
    try {
        const result = await signInWithPopup(FirebaseAuth,googleAuthProvider)
        const {displayName,email,photoURL,uid} = result.user
       return {
        ok:true,
        displayName,email,photoURL,uid
       }
        
    } catch (error) {
      // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
        return{
            ok:false,
            errorMessage

        }
    }
}

export const resgisterUserWithEmailAndPassword = async ({email,password,displayName}) =>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid,photoURL} = resp.user
        console.log(resp)
        return{
            ok:true,
            photoURL,
            uid,email,
            displayName
        }
    } catch (error) {
        console.log(error)
        return {ok:false,errorMessage:error.message}
    }
}