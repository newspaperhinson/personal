const root = ReactDOM.createRoot(document.getElementById("root"));

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   ComponentWillUnMount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({date: new Date()});
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// root.render(<Clock/>);

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         //This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn? "ON": "OFF"}
//             </button>
//         );
//     }
// }
// root.render(<Toggle/>);

// function LoginButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Login
//       </button>
//     );
//   }
  
// function LogoutButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Logout
//       </button>
//     );
// }
// class LoginControl extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleLoginClick = this.handleLoginClick.bind(this);
//       this.handleLogoutClick = this.handleLogoutClick.bind(this);
//       this.state = {isLoggedIn: false};
//     }
  
//     handleLoginClick() {
//       this.setState({isLoggedIn: true});
//     }
  
//     handleLogoutClick() {
//       this.setState({isLoggedIn: false});
//     }
  
//     render() {
//       const isLoggedIn = this.state.isLoggedIn;
//       let button;
//       if (isLoggedIn) {
//         button = <LogoutButton onClick={this.handleLogoutClick} />;
//       } else {
//         button = <LoginButton onClick={this.handleLoginClick} />;
//       }
  
//       return (
//         <div>
//           <Greeting isLoggedIn={isLoggedIn} />
//           {button}
//         </div>
//       );
//     }
// }
  
// root.render(<LoginControl />);

function WarningBanner(props) {
    if(!props.warn)
        return null;
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => ({showWarning: !state.showWarning}));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning? "Hide": "Show"}
                </button>
            </div>
        );
    }
}

root.render(<Page/>);