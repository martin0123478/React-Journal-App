import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
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