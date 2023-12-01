function Deposit(){
  const [show, setShow]       = React.useState(true);
  const [status, setStatus]   = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success!</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
    <br/>
    <br/>
    <Link to="../withdraw">
      <button type="submit" className="btn btn-warning">Make a Withdrawal</button>
      </Link>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function validateEmail(email) {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validEmail.test(email)
  }
  function validateDeposit(amount){
    return parseFloat(amount) > 0;
  }

  function handle(){
    if (!validateEmail(email)){
      alert('Error: Invalid email format')
        setTimeout(() => setStatus(''),3000);
        return false;
    }

    if (!validateDeposit(amount)) {
      alert('Please enter a number larger number to make a deposit.')
      setTimeout(() => setStatus(''),3000);
      return false;
    }


    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            setAmount(data.value)
            const statusMessage = `Hello ${email}! You deposited: $${amount}.`
            props.setStatus(
              <>
                {statusMessage}
                <br/>
                <Link to="../balance"
                      style={{color: "black"}}
                      >Check your new balance here</Link>
              </>
            );
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}