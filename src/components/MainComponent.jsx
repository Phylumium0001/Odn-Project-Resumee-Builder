import React,{useState} from "react";
import Category from "./Category";
import ResumeeArea from "./ResumeArea";

export default function MainComponent() {
    const [fullName,setFullName] = useState("Full Name")
    const [email,setEmail] = useState("Email")
    const [pNumber,setPNumber] = useState("Phone Number")
    const [address,setAddress] = useState("Address")

    const [schoolName,setSchoolName] = useState("University")
    const [schoolLocation,setSchoolLocation] = useState("Location")
    const [certificate,setCertificate] = useState("Certification")
    const [schoolStartDate,setSchoolStartDate] =useState("Start")
    const [schoolEndtDate,setSchoolEndDate] =useState("End")

    const [workName,setWorkName] =useState("Company")
    const [workLocation,setWorkLocation] =useState("Location")
    const [role,setRole] =useState("Role")
    const [workStartDate,setWorkStartDate] =useState("Start")
    const [workEndDate,setWorkEndDate] =useState("End")
    const [description,setDescription] =useState("Description")
    

    const setStates = {
        'setFullName':setFullName,
        'setAddress':setAddress,
        'setEmail':setEmail,
        'setPNumber':setPNumber,
        'setSchoolName':setSchoolName,
        'setSchoolLocation':setSchoolLocation,
        'setCertificate':setCertificate,
        'setSchoolStartDate':setSchoolStartDate,
        'setSchoolEndDate':setSchoolEndDate,
        'setWorkName':setWorkName,
        'setWorkLocation':setWorkLocation,
        'setRole':setRole,
        'setWorkStartDate':setWorkStartDate,
        'setWorkEndDate':setWorkEndDate,
        "setDescription":setDescription

    }
    const stateDictionary = {
        'fullName': fullName,
        'email': email,
        'pNumber': pNumber,
        'address': address,
        
        'schoolName': schoolName,
        'schoolLocation': schoolLocation,
        'certificate': certificate,
        'schoolStartDate': schoolStartDate,
        'schoolEndDate': schoolEndtDate,
        
        'workName': workName,
        'workLocation': workLocation,
        'role': role,
        'workStartDate': workStartDate,
        'workEndDate': workEndDate,
        "description":description
    };
    
    return(
    <>
    <section id="form-area">
        <Category state={setStates}/>
    </section>
    <section className="resumee-area">
        <ResumeeArea state={stateDictionary}/>
    </section>
    
    </>
    )   
}