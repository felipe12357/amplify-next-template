'use client';
import { createMatchAction } from "@/app/actions/match.actions";
import { CreationMatch } from "@/app/actions/models";
import { countryList } from "@/utils/countryList";
import { SelectField, Input, Button } from "@aws-amplify/ui-react";
import { toast } from "react-toastify";

const CreateMatchComponet =()=>{
    const handleForm =async(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)
        const team1= formData.get('team_1') as string;
        const team2 =formData.get('team_2') as string;
        const date =formData.get('date') as string;
        const match:CreationMatch = {team1,team2,date}
        const response = await createMatchAction(match); 

        if(response.errors){
            toast.error('Hubo un error en la creacion: La fecha es obligatoria');
            console.log('aca',response.errors[0].message);
        }
        else
            toast.success('Match Creado');
    }

    return (<form onSubmit={handleForm} >
        <h2> Enter Match</h2>
        <div className="flex justify-between items-end">
            <SelectField  label="" name='team_1'> { countryList.map( (country,i) => <option key={i}>{country.name}</option> )} </SelectField>
            <SelectField label="" name='team_2'> { countryList.map( (country,i) => <option key={i}>{country.name}</option> )} </SelectField>
            <Input name='date' type="date"></Input>
            <Button variation="primary" type="submit">Guardar</Button>
        </div>
    </form>);
}
export default CreateMatchComponet;