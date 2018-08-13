import React, {Component} from 'react';



 export default class About extends Component {
     constructor(props){
         super(props);
         this.state = {
             age: this.props.initialAge,
             status: 0
         }
     }

    increaseAge(){
        this.setState({
            age: this.state.age + 1
        });

    }
  render() {
      var vp = {
          name: "Joe Biden"
        };
    return (
        <div>
            <p>Hello there, old pal. It has been awhile since we have been together, don't you say. Long as we shall see. </p>
            <img src= "https://picsum.photos/200" alt="god knows"></img>
            <hr />
            {this.props.children}
            <h2>
                I am endorsing {this.props.name} at {this.state.age} years of age because he likes to 
                {this.props.hobbies.map((h,i)=>
                  <h2 key={i} >{h} , </h2>
                )}
                 and I do that too. 
            </h2>
            <button onClick={this.increaseAge.bind(this)}>Increase Age</button>
            <hr />
            <p>Paid for by to foundation to elect {vp.name}</p>
        </div>
    );
  }

}

