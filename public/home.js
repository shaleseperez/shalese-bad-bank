const Link        = ReactRouterDOM.Link;


function Home(){
  const homePage = {
    background: `url(./banking-on-growth.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };


  return (
    <div style={homePage}>
      <Card 
        bgcolor="info"
        txtcolor="black"
        header="Bad Bank Home"
        title="Welcome to the Bank"
        text={<>
        <Link to="./createaccount/"
              style={{color: "black"}}
        >Create an account to get started. Happy Banking!</Link>
        </>}

        body={(<img src="bank.png" className="img-fluid" alt=" "/>)}
      />
     </div>    
  );  
}
