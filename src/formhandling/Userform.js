import React, { Component } from 'react'

export class Userform extends Component {

    constructor(){
        super()
        this.state={
            username:" ",
            comments:" "

        }
    }
    getcomments(){
        this.setState({
            comments:event.target.value
        })
    }
  render() {
    return (
        <React.Fragment>
        <h1> User form</h1>
        <form>
<div>
<label>Comments: </label>
   <textarea value={this.state.comments} onChange={(event)=> this.getcomments(event)}></textarea> 
</div>
        </form>
  
      </React.Fragment>
    )
  }
}

