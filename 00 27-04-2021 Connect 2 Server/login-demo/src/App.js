import { Component } from 'react';
import './App.css';

const apiUrl = 'http://localhost:61107/api/StudentsRWCustomDB/';
const apiUrlAbs = 'http://localhost:61107/';

export default class App extends Component {

  changeEmailTxt = (e) => {
    this.setState({ emailTxt: e.target.value });
  }

  btnLogin = async () => {

    const studentObj =  //pay attention case sensitive!!!! should be exactly as the prop in C#!
    {
      "ID": 0,
      "Name": null,
      "Grade": 0,
      "Email": this.state.emailTxt,
      "Password": this.state.passTxt
    };

    console.log(studentObj);
    console.log(studentObj.Grade);
    const studentObjStr = JSON.stringify(studentObj);
    console.log(studentObjStr);

    fetch(apiUrlAbs + 'login',
      {
        method: 'POST',
        body: studentObjStr,
        headers: new Headers({
          'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
          'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
        })
      })
      .then(response => {
        console.log('response=', response);
        //opt1
        // let j =  response.json();
        // return {
        //   js: j,
        //   status: response.status
        // };

        //opt2
        if (response.status === 200) {
          return response.json();
        }
        else if (response.status === 404) {
          console.log('wrong pass and email');
          return null;
        }
        else {
          console.log('some error');
          return null;
        }

      })
      .then(
        (result) => {
          //opt1
          // switch (result.status) {
          //   case 200:
          //     console.log(result.js);
          //     console.log(result.js.Grade);
          //     break;
          //   case 404:
          //     console.log('wrong pass and email');
          //     break;
          //   default:
          //     console.log('internal server error...');
          //     break;
          // }

          //opt2
          if (result !== null) {
            console.log("fetch POST= ", result);
            console.log(result.Grade);
            this.setState({message: 
              `ID=${result.ID} 
              Name=${result.Name}
              Grade=${result.Grade}
              Email=${result.Email}
              Pass=${result.Password}`});
          }
          else{
            this.setState({message: 'worng email or pass!'});
          }
        },
        (error) => {
          console.log("err post=", error);
        });


  }

  render() {

    console.log(this.state ? this.state.emailTxt : 'empty');
    console.log(this.state ? this.state.passTxt : 'empty');

    return (
      <div className="App">
        <header className="App-header">
          Email: <input type="text" onChange={this.changeEmailTxt} /> <br />
          Pass:  <input type="text" onChange={text => this.setState({ passTxt: text.target.value })} /> <br />
          <button onClick={this.btnLogin} >Login</button>
          <label>{this.state ? this.state.message: ''}</label>
        </header>
      </div>
    );
  }
}

