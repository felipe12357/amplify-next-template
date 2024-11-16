'use client';

import { Schema } from "@/amplify/data/resource";
//import { Input, SelectField } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
//import { useEffect, useState } from "react";

//const client = generateClient<Schema>();
const AdminPage = () =>{
/*     const [matchList, setMatchList] = useState<Array<Schema["Match"]["type"]>>([]);
    
  
    function listMatchList() {
      client.models.Match.observeQuery().subscribe({
        next: (data) => {
            console.log(data);
            setMatchList([...data.items])},
      });
    }
  
    useEffect(() => {
      listMatchList();
    }, []); */
    //const [matchList, setMatch] = useState<Array<Schema["match"]>>([]);
   // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
/*     const countryList = [
        {name:'Argentina'},
        {name:'Bolivia'},
        {name:'Brasil'},
        {name:'Canadá'},
        {name:'Chile'},
        {name:'Colombia'},
        {name:'Costa Rica'},
        {name:'Ecuador'},
        {name:'Estados Unidos'},
        {name:'Jamaica'},
        {name:'México'},
        {name:'Panamá'},
        {name:'Paraguay'},
        {name:'Perú'},
        {name:'Uruguay'},
        {name:'Venezuela'},
    ]

    const handleForm =(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)
        const team1= formData.get('team_1') as string;
        const team2 =formData.get('team_2') as string;
        const team1_score= formData.get('score_1') as string;
        const team2_score =formData.get('score_2') as string;
        const dates =formData.get('date') as string;
      
        client.models.match.create({
            team1,
            team2, 
            team1_score:parseInt(team1_score),
            team2_score:parseInt(team2_score),
          //  date: new Date(dates)
        })
       // client.models.Match.create({content:input_ref.current?.value,done:false})
    
    } */

    return (<>
    hola
      {/*   {matchList.map((todo) => (
          <li key={todo.id}>
            {todo.team1}
          </li>     
        ))} */}
       {/*  {matchList.map((match,i) => <span key={i}>aca</span>)} */}
        {/* <form onSubmit={handleForm} className="mx-auto w-3/5">
                <h2> Enter Match</h2>
                <div className="flex justify-between">
                    <SelectField  label="" name='team_1'> { countryList.map( (country,i) => <option key={i}>{country.name}</option> )} </SelectField>
                    <Input type="number" name='score_1' placeholder="score_1"></Input>
                    <SelectField label="" name='team_2'> { countryList.map( (country,i) => <option key={i}>{country.name}</option> )} </SelectField>
                    <Input type="number" name='score_2' placeholder="score_2"></Input>
                    <Input name='date' type="date"></Input>
                </div>
                <button>Guardar</button>
            </form> */}
    </>)

}

export default AdminPage;