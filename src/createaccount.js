import React, {useContext} from "react";
import Card from "./card";
import {UserContext} from "./context";

function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);  
    const { users } = useContext(UserContext);
    const currentUser = users[users.length -1];

    function validate(field, label){
    
      if (!name.trim()) {
        setStatus('Error: Please enter your name');
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      if (label == 'email' && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(field) || email.length === 0) {
        alert('Error: Invalid email format')
        setStatus('Error: Invalid email format')
        setTimeout(() => setStatus(''),3000);
        return false;
        
      }

         if (label == 'password' && field.length < 8 || password.length === 0){
          alert('Password must be 8 characters or more')
          setStatus('Error: Password must be at least 8 characters')
          setTimeout(() => setStatus(''), 3000);
          return false;
         }

        return true;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,  'Please enter a name')) return;
      if (!validate(email,  'Invalid email format')) return;
      if (!validate(password, 'Password must be at least 8 characters'))return;

      ctx.users.push({name,email,password,balance:currentUser.balance});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="info"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
  }
  export default CreateAccount;