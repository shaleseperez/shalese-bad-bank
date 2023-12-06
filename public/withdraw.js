function Withdraw(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  
    return (
      <Card
        bgcolor="warning"
        header="Withdraw"
        status={status}
        body={show ? 
          <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
          <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
      />
    )
  }

function WithdrawMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-danger" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Withdraw again
      </button>
      <br/>
      <br/>
      <Link to="../deposit">
      <button type="submit" className="btn btn-success">Make A Deposit</button>
      </Link>
    </>);
  } 

function WithdrawForm(props){
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState('');

    function validateEmail(email) {
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return validEmail.test(email)
      }
      
    function handle(){
      if (!validateEmail(email)){
          alert('Error: Invalid email format')
          setTimeout(() => setStatus(''),3000);
          return false;
          }
        fetch(`/account/update/${email}/-${amount}`)
          .then(response => response.text())
          .then(text => {
            try {
              const data = JSON.parse(text);
              setAmount(data.value)
              const statusMessage = `Hello ${email}! You withdrew: $${amount}.`
              props.setStatus(
              <>
              {statusMessage}
               <br/>
              <Link to="../balance"
              style={{color: "black"}}
              >Check your new balance here</Link>
              </>);
            props.setShow(false);
            console.log('JSON:', data);
          } catch(err) {
          props.setStatus('Withdrawal failed')
          console.log('err:', text);
        }
      });  
    }
    return(<>
        Email<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter email" 
          value={email} 
          onChange={e => setEmail(e.currentTarget.value)}/><br/>
    
        Amount<br/>
        <input type="number" 
          className="form-control" 
          placeholder="Enter amount" 
          value={amount} 
          onChange={e => setAmount(e.currentTarget.value)}/><br/>
    
        <button type="submit" 
          className="btn btn-light" 
          onClick={handle}>
            Withdraw
        </button>
    
      </>);
}