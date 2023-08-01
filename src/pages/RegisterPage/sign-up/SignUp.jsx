import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword ,getAuth} from 'firebase/auth'
import app from '../../../firebase'
const SignUp = () => {
  const navigate =useNavigate();
  const [firebaseError , setFirebaseError] =useState("")

  const handleSignupAndLogin =(email, pass) =>{
    const auth =getAuth(app);
    createUserWithEmailAndPassword(auth , email , pass)
    .then((userCredential) =>{
      navigate("/")
    })
    .catch((error) =>{
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })

  }
  return (
   <Form
    title= {"가입하기"}
    getDataForm ={handleSignupAndLogin}
    firebaseError= {firebaseError}
    />
  )
}
export default SignUp