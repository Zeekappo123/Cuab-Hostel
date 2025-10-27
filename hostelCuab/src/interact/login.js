import { useState } from "react";


function SignUp(){


   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirm, setConfirm] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [confirmError, setConfirmError] = useState("");

     // Password validation on typing
  const validatePassword = (value) => {
    setPassword(value);
    if (value.length === 0) {
      setPasswordError("");
    } else if (value.length < 8 || !/[!@#$%^&*()]/.test(value)) {
      setPasswordError("Password must be at least 8 characters and include a special character");
    } else {
      setPasswordError("");
    }
  };

    return(
        <div>


               
        </div>
    )
}

 

export default SignUp;