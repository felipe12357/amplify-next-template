'use client'
import { Schema } from '@/amplify/data/resource';
import { countryList } from '@/utils/countryList';
import { findFlagUrlByIso2Code } from 'country-flags-svg';
import { MdDelete } from "react-icons/md";
import Image from 'next/image';
import { deleteMatchAction } from '@/app/actions/match.actions';
import { toast } from 'react-toastify';

type MatchListComponentProps = {
    matchList: Array<Schema["Match"]["type"]>; 
}

const MatchListComponent:React.FC<MatchListComponentProps>  = ({matchList}) => {

    const handleDelete =async(id:string)=>{
        const response = await deleteMatchAction(id); 
        toast.success('Match Eliminado');
    }

    return (<><h2> Match List</h2>
        

        {matchList.map((match) =>{
           let codeTeam1 =  countryList.find(country => country.name == match.team1)!.iso_code;
           let codeTeam2 =  countryList.find(country => country.name === match.team2)!.iso_code;
           let flagTeam1 = findFlagUrlByIso2Code(codeTeam1) ;
           let flagTeam2 = findFlagUrlByIso2Code(codeTeam2);

          return <div key={match.id} className="grid grid-cols-6 justify-items-center items-center mb-5"> 
            <span className="text-center"> 
                <div className="relative w-20 h-12 bg-slate-500">
                    <Image priority={true} src={flagTeam1} alt='logo' fill  style={{objectFit:"cover"}}></Image>
                </div>
                {match.team1}
            </span>
            <span className="font-bold">Vs</span>
            <span className="flex flex-col items-center"> 
                <div className="relative w-20 h-12">
                    <Image priority={true} src={flagTeam2} alt='logo' fill  style={{objectFit:"cover"}}></Image>
                </div>
                {match.team2}
            </span>
            <span>{match.team1_score} - {match.team2_score}</span>
            <span>{match.date}</span>
            <MdDelete className='text-red-700 text-2xl cursor-pointer' onClick={()=>handleDelete(match.id)} />
          </div>     
        })}
    </>);
}

export default MatchListComponent;

