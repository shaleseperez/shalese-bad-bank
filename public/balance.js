function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 


  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success!</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
    <br/>
    <br/>
      <Link to="../deposit">
      <button type="submit" className="btn btn-success">Make a Deposit</button>
      </Link><br/>
      <br/><Link to="../withdraw">
      <button type="submit" className="btn btn-danger">Make a Withdrawal</button>
      </Link>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]     = React.useState('');
  const [balance, setBalance] = React.useState(''); 
  const [name, setName]       = React.useState('');
  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            setBalance(data.balance);
            setName(data.name);
            props.setStatus(`Hello ${data.name}! Your Balance is: $${data.balance}`);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}