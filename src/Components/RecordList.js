import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/RecordList.css';

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>

    <td>
        <Link to={`/edit/${props.record._id}`}>Edith</Link> | <button onClick={()=>{
            props.deleteRecord(props.record._id);
        }}>Delete</button>
    </td>
  </tr>
);

function RecordList() {
    const [records,setRecords]=useState([]);

    useEffect(()=>{
        async function getRecords(){
            const response = await fetch(`http://localhost:5050/record`);

            if(!response.ok){
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records)
        }
        getRecords();
        return;
    },[records.length]);

    async function deleteRecord(id){
        await fetch(`http://localhost:5050/record/${id}`,{
            method:"DELETE"
        });

        const newRecords = records.filter((el)=>el._id !==id);
        setRecords(newRecords);
    }

    function recordList(){
        return records.map((record)=>{
            return(
                <Record record={record}
                deleteRecord={()=>deleteRecord(record._id)}
                key={record._id}/>
            )
        })
    }
  return (
    <main>
        <section>
            <div>
                <h1>Record List</h1>
                <table style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{recordList()}</tbody>
                </table>
            </div>
        </section>
    </main>
  )
}

export default RecordList