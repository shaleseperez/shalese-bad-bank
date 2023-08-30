import React, { useContext} from "react";
import { UserContext } from "./context";
import Card from "./card"

function Balance(){
  const { users } = useContext(UserContext);
  const currentUser = users[users.length -1];
  
  const ctx = React.useContext(UserContext); 

  if (!currentUser) {
    return (
      <h1>No Data Available</h1>
    );
  }

  return (
   <Card
    bgcolor="info"
    header="Balance"
    body={
      <>
      Account Holder: {currentUser.name}
      <br/>
      Account Balance: ${ctx.users[0].balance}
      </>
    }
   
  />
  );
}
export default Balance;