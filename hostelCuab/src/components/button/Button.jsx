const Button = ({value, className =" ", ...rest})=>{
    
    return(
        
        <button className={`bg-sky-400 h-10 w-32 cursor-pointer rounded text-white ${className}`} 
        {...rest}>
            {value}
        </button>
    )
}

export default Button