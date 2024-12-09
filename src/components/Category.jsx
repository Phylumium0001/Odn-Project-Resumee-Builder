import React,{useState} from "react";
import InputField from "./InputFields";

export default function Category({state}){

    return <>
    <section className="category">
            <div className="cat-title">
                <p>Personal Information</p>
                <img className="icon" src="./src/assets/arrow-down-3101(1).svg"/>
            </div>
            <div className="forms" id="personal_info_cont">
                {<InputField setState={state["setFullName"]} label="Full Name" type='text' name="f_name"/>}
                {<InputField setState={state['setEmail']} label="Email" type='text' name="email"/>}
                {<InputField setState={state['setPNumber']} label="Phone Number" type='text' name="pNumber"/>}
                {<InputField setState={state['setAddress']} label="Address" type='text' name="address"/>}
            </div>
        </section>

    <section className="category">
        <div className="cat-title">
            <p>Education</p>
            <img className="icon" src="./src/assets/arrow-down-3101(1).svg"/>
        </div>
        <div className="forms" id="education_info_cont"> 
            <InputField setState={state['setSchoolName']} label="Name of Institution" type='text' name="s_name"/>
            <InputField setState={state['setSchoolLocation']} label="Location" type='text' name="s_location"/>
            <InputField setState={state['setCertificate']} label="Certificate" type='text' name="certificate"/>
            <InputField setState={state['setSchoolStartDate']} label="Start Date" type='date' name="e_s_date"/>
            <InputField setState={state['setSchoolEndDate']} label="End Date" type='date' name="e_e_date"/>
        </div>
    </section>

    <section className="category">
        <div className="cat-title">
            <p>Experience</p>
            <img className="icon" src="./src/assets/arrow-down-3101(1).svg"/>
        </div>
        <div className="forms" id="experience_info_cont"> 
            <InputField setState={state['setWorkName']} label="Name of Company" type='text' name="c_name"/>
            <InputField setState={state['setWorkLocation']} label="Location" type='text' name="c_location"/>
            <InputField setState={state['setRole']} label="Role" type='text' name="role"/>
            <InputField setState={state['setWorkStartDate']} label="Start Date" type='date' name="w_s_date"/>
            <InputField setState={state['setWorkEndDate']} label="End Date" type='date' name="w_e_date"/>
            <InputField setState={state["setDescription"]} label="Description" type='textarea' name="w_desc"/>
        </div>
    </section>
    </>
}