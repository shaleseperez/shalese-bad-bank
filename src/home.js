import Card from "./card"
import bank from "./bank.png"
import  { Link }  from "react-router-dom"


const Home = () => {
    return (
      <Card 
        bgcolor="info"
        txtcolor="black"
        header="Bad Bank Home"
        title="Welcome to the Bank"
        text={<>
        <Link to="./createaccount"
              style={{color: "black"}}
        >Create an account to get started. Happy Banking!</Link>
        </>}

        body={(<img src={bank} className="img-fluid" alt=" "/>)}
      />    
    );  
  }
  export default Home;
