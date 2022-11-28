import { useRef, useEffect, useState } from "react";
import { faCheck, faTime } from "@fortawesome/fontawesome-svg-core";
import { FontawesomeIcon } from "@fortawesome/fontawesome-svg-core";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PSW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = useRef(); //  this is for the user input and that allow us to focus on the user input component loads
  const errRef = useRef(); //when we get an error, we need to put focus on that so it can be announced by the screenreader for accessibility
  
  const [use, setUser] = useState(""); //
  const [validName, setValidName] = useState(false); //check usesr name validates or not
  const [userFocus, setUserFocus] = useState(false); //check focused        
  
  const [pwd,setPwd]=useState("")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    or not
  const [validPWd, setValidPwd] = useState(false); //check usesr name validates or not
  const [pwdFocus, setPwdFocus] = useState(false); //check focused        
  
  const [matchPwd,setMatchPwd]=useState("")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    or not
  const [validMatch, setValidMatch] = useState(false); //check usesr name validates or not
  const [pwdMatchFocus, setMatchFocus] = useState(false); //check focused        
  
  
  
  const [errMsg,setErrMsg]=useState("")
  const [success,setSuccess]=useState("")


// setting focus when the components loads

useEffect(()=>{
    userRef.currrent.focus();
},[])
// any time when it changes it will check the validation of that field
useEffect(()=>{
  // testing agains the user regex
    const result=USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result)
},[user])

useEffect(()=>{
  const result =PSW_REGEX.test(pwd);
  console.log(result);
  console.log(pwd);
  setValidPwd(result);
  const match=pwd===matchPwd;
  setValidMatch(match)
},[pwd,matchPwd])


// for error  message 
useEffect(()=>{
  userRef.current.focus()
},[user,pwd,matchPwd])



  return <section>
    <p ref={errRef} className={errMsg?"errmsg":"offscreen" }aria-live="assertive">{errMsg}</p> 
   <h1>register</h1>
   <form >
    <label htmlFor="username">
      UserName:
    </label>
    <input type="text" 
    id="username"
    ref={useRef}
    autoComplete="off"
    onChange={(e)=>setUser(e.target.value)}
    required
    aria-invalid={validName?"false":"true"}
    aria-describedby="uidnote"
    onFocus={()=>setUserFocus(true)}
    onBlur={()=>setUserFocus(false)}    />
    <label htmlFor="password"></label>
    <label htmlFor="username"></label>
   </form>
     </section>;
}

export default Register;
