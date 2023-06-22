import { Component } from "react";
import "./TeamScore.css";

export default class TeamScore extends Component {    
    state = {
        runs: 0,
        wickets: 0,
        teamName: this.props.teamName
    }
    doOneRun=() => {
        this.setState({
            runs: this.state.runs + 1            
        })                
    }
    doFourRuns=() => {
        this.setState({
            runs: this.state.runs + 4
        })
    }
    doSixRuns=() => {
        this.setState({
            runs: this.state.runs + 6
        })
    }

    doWickets=() => {
        if (this.state.wickets < 10) {
            this.setState({
                wickets: this.state.wickets + 1
            })    
        }
    }

    doChangeTeamName=()=>{
        let newTeamName = ''
        // Make sure the new team name is not empty
        newTeamName = this.getNewTeamName();
        this.setState({
            teamName: newTeamName
        })

    }

    getNewTeamName() {
        
        let newTeamName = null

        //  Loop until the new team name is not empty and null
        do {
             newTeamName = prompt("Please enter a new name:")
            console.log(newTeamName)

        } while ((newTeamName === '') || (newTeamName === null))

        return newTeamName
    }
    render() {
        console.log("Team name: ", this.props.teamName)
        return (
            <div className="team_score">
                <div className="team_name">                    
                    {this.state.teamName !== null && <label>{this.state.teamName}</label>}
                </div>
                <div className="num_of_runs"> <div>Number of runs: </div><div className="score_right"> {this.state.runs}</div></div>
                <div className="num_of_wickets"> Number of wickets: <span className="score_right"> {this.state.wickets}</span></div>
                {this.state.wickets >= 10 && <label className="wickets_all_out">All out</label>}
                {this.state.wickets < 10 && <button className="one_run" onClick={this.doOneRun}>1 Run</button>}
                {this.state.wickets < 10 && <button className="four_runs" onClick={this.doFourRuns}>4 Runs</button>}
                {this.state.wickets < 10 && <button className="six_runs" onClick={this.doSixRuns}>6 Runs</button>}
                {this.state.wickets < 10 && <button className="wickets" onClick={this.doWickets}>Wicket</button>}
                {this.state.wickets < 10 && <button className="change_team_name" onClick={this.doChangeTeamName}>Change Team Name</button>}
            </div>
        )
    }
}