import { Component } from "react";
import TeamScore from "./TeamScore";
import './Scoreboard.css';

export default class Scoreboard extends Component {

    state = {
        scoreboardList: [null]
    }


    doCreateNewGame=() => {

        let newTeamName1 = '', newTeamName2 = ''

            // Get the first team name            
            newTeamName1 = this.getNewTeamName('team 1')
            newTeamName2 = this.getNewTeamName('team 2')

            this.setState({
                scoreboardList: this.state.scoreboardList.concat([{newTeamName1, newTeamName2}])
            })
    }

    getNewTeamName(newTeamNameSt) {
        
        let newTeamName = null
        
        let message = "Please enter a new name for " + newTeamNameSt + " :"

        //  Loop until the new team name is not empty and null
        do {
            newTeamName = prompt(message)            

        } while ((newTeamName === '') || (newTeamName === null))
        
        return newTeamName;
    }

    render() {
        return (
         <div>
            <h1>National Games - Score Board</h1>
            <button onClick={this.doCreateNewGame}>New Game</button>                
            <div className="main_scoreboard">
                { this.state.scoreboardList.length > 1 &&
                    this.state.scoreboardList.map((scoreboardItem,index) => 
                        index !==0 && <div key={index} className="scoreboard"><TeamScore teamName={scoreboardItem.newTeamName1}/><TeamScore teamName={scoreboardItem.newTeamName2}/></div>)}
          </div>
          </div>
        )
    }
}