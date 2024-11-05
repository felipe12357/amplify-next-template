interface ButtonComponentProps<T,S> {
    execute: (param1?:T,param2?:S)=>void;
    label:string;
}
  
const ButtonComponent = <T,S>({execute,label}: ButtonComponentProps<T,S>)=>{
    return( 
        <button className="bg-gray-600 px-2 py-1 rounded text-default" onClick={()=>{ execute()}}>
            {label}
        </button>
    )
}
export default ButtonComponent