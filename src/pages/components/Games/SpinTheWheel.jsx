import React,{useState,createContext,useContext} from "react";
import SpinPython from "./SpinPython";

export const  StateContext= createContext();


const SpinTheWheel = () => {
  const initialvalues = {
    fullname: "",
    phone: "",
    email:""
  };
  const [state, setState]= useState(initialvalues);

  return(
  <StateContext.Provider value={{state,setState}}><SpinPython></SpinPython></StateContext.Provider>
  ) ;
};

export default SpinTheWheel;
