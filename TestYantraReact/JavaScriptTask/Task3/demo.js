class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    
    login=()=>{
        return <h1>haii</h1>
        
    }
    account=()=>{
        console.log("gffg");
        
    }
    render() {
        
      const heder=  <div>
          {this.login}
            <button onClick={App.home} >Home</button>
            <button onClick={this.login}>Login</button>
            <button onClick={this.account}>Create Account</button>
        </div>

        return heder
    }

}
function Home(props) {

    return (<img src="image1.webp" width="1000px"></img>)
}
function Loging(props) {
    const footer = <footer >



        loging


    </footer>
    return footer
}
function Account(props) {
    const footer = <footer >



        Account


    </footer>
    return footer
}
function Footer(props) {
    const footer = <footer >



        footer


    </footer>
    return footer
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    home=()=>{
        
         <Home/>
    }



    render() {



        const home = <div><Home/></div>
        const Loging = <div><Loging/></div>
        const Account = <div><Account/></div>

        return <div>
            <Header />
            {home}
            <Footer />
            </div>
    }

}









ReactDOM.render(<App />, document.getElementById("react-container"))