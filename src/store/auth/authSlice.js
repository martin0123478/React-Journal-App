import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
       status:'not-authenticated',//cheking,not-authenticated,authenticated
       uid:null,
       email:null,
       displayName:null,
       photoURL:null,
       errorMessage:null


    },
    reducers: {
       login:(state,action)=>{

       },
       logout:(state,payload) =>{

       },
       chekingCredencials:(state) =>{
         state.status='cheking'
       }
    }
});


// Action creators are generated for each case reducer function
export const { login,logout,chekingCredencials } = authSlice.actions;
