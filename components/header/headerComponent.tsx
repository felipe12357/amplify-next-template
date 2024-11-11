import Image from 'next/image'
import logoCopaAmerica from '../../public/assets/logo-copa-america.png';
// import ButtonComponent from '../button/buttonComponent';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { Button, useAuthenticator } from '@aws-amplify/ui-react';

const HeaderComponent = ()=>{

    const [userName,setUserName] = useState<string>();
    const {signOut,user}  = useAuthenticator();

    const handleUser = async()=>{
        const userData = await fetchUserAttributes();
        if(userData.preferred_username)
            setUserName(userData?.preferred_username);
    }

    useEffect(()=>{
        if(user)
        handleUser();
    },[])

    return (
        <header className='flex justify-between font-bold py-4 px-2 tracking-wider bg-gradient-to-b from-blue-900 from-50% to-red-700 to-90%'>
            <div className='pl-5'>
                <Image priority={true} src={logoCopaAmerica} alt="CopaAmericaLogo" />
            </div>
            <div className='pr-5 pt-2 text-slate-100 text-lg '>
                   { 
                        (userName) && 
                        <div>
                            <span className='mr-5'>{`Bienvenido, ${userName}`}</span> 
                            <Button variation="primary" onClick={signOut}>Salir</Button>
                           {/*  <ButtonComponent execute={signOut} label='Salir'></ButtonComponent> */}
                        </div>
                    }
            </div>
        </header>
    )
}

export default HeaderComponent;