import Image from 'next/image'
import logoCopaAmerica from '../../public/assets/logo-copa-america.png';
import { Button, useAuthenticator } from '@aws-amplify/ui-react';
import ButtonComponent from '../button/buttonComponent';

const HeaderComponent = ()=>{
    const  {signOut,user}  = useAuthenticator();
    console.log(user);
    const displayName = user?.signInDetails?.loginId?.split('@')[0];

    return (
        <header className='flex justify-between font-bold py-4 px-2 tracking-wider bg-gradient-to-b from-blue-900 from-50% to-red-700 to-90%'>
            <div className='pl-5'>
                <Image src={logoCopaAmerica} alt="CopaAmericaLogo" />
            </div>
            <div className='pr-5 pt-2 text-slate-100 text-lg '>
                   { 
                        (user) && 
                        <div>
                            <span className='mr-5'>{`Bienvenido, ${displayName}`}</span> 
                            {/* <Button variation="primary" onClick={signOut}>Salir</Button> */}
                            <ButtonComponent execute={signOut} label='Salir'></ButtonComponent>
                        </div>
                    }
            </div>
        </header>
    )
}

export default HeaderComponent;