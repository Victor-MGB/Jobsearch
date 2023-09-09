import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router';
import '../Styles/Edit.css'
function Edith() {
    const [form,setForm]=useState({
        name:"",
        position:"",
        level:"",
        record:[]
    });

    const params = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);

            if(!response.ok){
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record=await response.json();
            if(!record){
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            setForm(record)
        }
        fetchData();
        return;
    },[params.id,navigate]);

    function updateForm(value){
        return setForm((prev)=>{
            return{...prev, ...value};
        })
    }

    async function onSubmit(e){
        e.preventDefault();
        const editedPerson = {
            name:form.name,
            position:form.position,
            level:form.level
        }

        await fetch(`http://localhost:5050/record/${params.id}`,{
            method:"PATCH",
            body:JSON.stringify(editedPerson),
            headers:{
                'Content-Type':"application/json"
            }
        });

        navigate("/");
    }
  return (
    <main>
      <section>
        <h1>Create new record</h1>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              id="position"
              value={form.position}
              onChange={(e) => updateForm({ position: e.target.value })}
            />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="positionOption"
                id="positionIntern"
                value="intern"
                checked={form.level === "intern"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />
              <label htmlFor="positionIntern">Intern</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="positionOption"
                id="positionJunior"
                value="junior"
                checked={form.level === "junior"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />
              <label htmlFor="positionJunior">Junior</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="positionOption"
                id="positionSenior"
                value="senior"
                checked={form.level === "senior"}
                onChange={(e) => updateForm({ level: e.target.value })}
              />
              <label htmlFor="positionSenior">Senior</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="update record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Edith