import  { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Firebase.config';
const provider = new GoogleAuthProvider();
export const AuthContext=createContext(null)


const MainContex = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const [datas,setDatas]=useState([])
    useEffect(() => {

        fetch('http://localhost:5000/alljobs')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);  // Log the response data
                setDatas(data);  // Set the fetched data
                  // Set loading to false when data is fetched
            })
            .catch(error => {
                console.log("Error fetching data:", error);  // Log any fetch errors
                  // Set loading to false even if there's an error
            });
    }, []); 
    const [questions,setQuiz]=useState([])
    useEffect(() => {
  
      fetch('http://localhost:5000/quizs')
          .then(res => res.json())
          .then(data => {
              setQuiz(data)
          })
          .catch(error => {
              console.log("Error fetching data:", error);  
              
          });
  }, []); 
     // register 
     const handelSignup=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const handelSignin=(email,pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,currentUser=>{  
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
       })
        return()=>{
            unsub();
        }
    },[])
    const logout=()=>{
        return signOut(auth)
    }
    const handelUpdateUser=(name,url)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }
    // gogle login 
    const googleSign =()=>{
        return signInWithPopup(auth,provider)
    }

   
    const data={
        datas,
        handelSignup,
        handelSignin,
        user,
        setDatas,
        logout,
        googleSign,
        handelUpdateUser,
        loading,
        questions
    }
    
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default MainContex;