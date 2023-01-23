import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  
  const bots = props.bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} botFunction={props.removeBot}/>
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          
          {bots}
          
          {bots.length === 0 ? <h1>Bots Army</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;