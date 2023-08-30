import React from "react";
import Card from "./card";
import { UserContext} from "./context";


function Deposit(){
    const [show, setShow]   = React.useState(true);
    const [status, setStatus]    = React.useState('');
    const [deposit, setDeposit]  = React.useState('');

    const ctx = React.useContext(UserContext);

    function validate(deposit){
        if (!deposit) {
          setStatus('Error: Please enter the amount you would like to deposit');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if (isNaN(deposit)) {
          setStatus('Error: Please enter a valid number');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }

    function handleDeposit (){
        console.log(deposit);
        if (!validate(deposit)) return;
        ctx.users[0].balance = Number(ctx.users[0].balance) + Number(deposit);
        setShow(false);
      }    
    
      function clearForm(){
        setDeposit('');
        setShow(true);
      }

      return (
        <Card
          bgcolor="success"
          header={`Hello ${ctx.users.length > 0 ? ctx.users[ctx.users.length -1].name : 'Guest'}!  How much would you like to Deposit today?`}
          status={status}
          title="Balance"
          text={`$${ctx.users[0].balance}`}
          body={show ? (  
                  <>
                  Deposit<br/>
                  <input type="number" 
                  className="form-control" 
                  id="number" 
                  placeholder="Enter value" 
                  value={deposit} 
                  onChange={e => {
                    setDeposit(e.currentTarget.value);
                  }}
                  /><br/>
                  <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                  </>
                ):(
                  <>
                  <h5>Success</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
                  </>
                )}
        />
      )
}
export default Deposit;