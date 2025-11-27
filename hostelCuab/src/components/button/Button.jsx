const Button = ({value, className =" ", ...rest})=>{
    
    return(
        
        <button className={`bg-sky-400 h-8 w-16 rounded text-white ${className}`} 
        {...rest}>
            {value}
        </button>
    )
}

export default Button