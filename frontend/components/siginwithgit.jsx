import React, { useState,useEffect } from "react";
import { Auth,API } from "aws-amplify";
export default function Sigingit({setScreen,setUser}){
    const signin=async()=>
        Auth.federatedSignIn({
            provider:"Github"
        })
    const signOut=async()=>Auth.signOut();
}