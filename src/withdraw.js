import React from "react";
import Card from "./card";
import { UserContext} from "./context";

function Withdraw (){
    const [show, setShow]   = React.useState(true);
    const [status, setStatus]    = React.useState('');
    const [withdraw, setWithdraw]  = React.useState('');

    const ctx = React.useContext(UserContext);

    function validate(withdraw){
        if (!withdraw) {
          setStatus('Error: Please enter the amount you would like to deposit');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if (isNaN(withdraw)) {
          setStatus('Error: Please enter a valid number');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
    
        if (withdraw > ctx.users[0].balance){
          alert('Please lower the withdraw amount before proceeding')
          setStatus('Error: You can not withdraw more than the available balance.');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        return true;
    }
    

    function handleWithdraw (){
        console.log(withdraw);
        if (!validate(withdraw)) return;
        ctx.users[0].balance = Number(ctx.users[0].balance) - Number(withdraw);
        setShow(false);
      }    
    
      function clearForm(){
        setWithdraw('');
        setShow(true);
      }

      return (
        <Card
          bgcolor="danger"
          header={`Hello ${ctx.users.length > 0 ? ctx.users[ctx.users.length -1].name : 'Guest'}!  How much would you like to Withdraw today?`}
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
                  value={withdraw} 
                  onChange={e => {
                    setWithdraw(e.currentTarget.value);
                  }}
                  /><br/>
                  <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                  </>
                ):(
                  <>
                  <h5>Success</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
                  </>
                )}
        />
      )
}

export default Withdraw;