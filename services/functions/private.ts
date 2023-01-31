// import { handler } from './token' 
import fetch from 'node-fetch'
import jwt_decode from "jwt-decode";
import * as dotenv from 'dotenv';
import * as cognito from "aws-cdk-lib/aws-cognito";
import { CognitoJwtVerifier } from "aws-jwt-verify";
dotenv.config()
export async function handler(event) {
    // const token =await fetch(`https://e3zki2aof5.execute-api.us-east-1.amazonaws.com/token`)
    // .then(res=>res.json())
    // const session:UseSession()
    // var token=jwt_decode(event.headers.Authorization)
    const verifier = CognitoJwtVerifier.create({
        userPoolId: "us-east-1_MJqHLcqi8",
        tokenUse: "access",
        clientId: "1vledm35k4ompqogs2ef6nh9me",
      });
      try {
        const payload = await verifier.verify(event.headers.authorization);
        return({
            statusCode:200,
            body:`Token is valid `
        })
      } catch {
        return({
            statusCode:500,
            body:`Token is invalid`
        })
      }
    
    
  }