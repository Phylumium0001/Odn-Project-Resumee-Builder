import React,{useState} from "react";

export default function ResumeeArea({state}) {
    return <>
        <section>
          <div className="card">
            <div><img src="./public/vite.svg" alt=""/></div>
            <div>
              <p className="full_name">{state["fullName"]}</p>
              <p className="email">{state["email"]}</p>
              <p className="pNumber">{state["pNumber"]}</p>
              <p className="address">{state["address"]}</p>
            </div>
          </div>
        </section>
        
        <section>
          <p className="resumeTitle">Education</p>
          <div className="card" id="special_card">
            <div className="edu_item">
              <div className="item1">
                <p>{state["schoolStartDate"]} - {state["schoolEndDate"]}</p>
                <p>{state["schoolLocation"]}</p>
              </div>
              <div className="item2">
                <strong>{state["schoolName"]}</strong>
                <p>{state["certificate"]}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="resumeTitle">Professional Experience</p>
          <div className="card" id="special_card">
            <div className="exp_item">
              <div className="item1">
                <p>{state["workStartDate"]} - {state["workEndDate"]}</p>
                <p>{state["workLocation"]}</p>
              </div>
              <div className="item2">
                <strong>{state["workName"]}</strong>
                <p>{state["role"]}</p>
                <p>{state["description"]}</p>
              </div>
            </div>
          </div>
        </section>
    </>
}