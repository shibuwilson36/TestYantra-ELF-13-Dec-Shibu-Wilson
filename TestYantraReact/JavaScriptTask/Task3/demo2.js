
function Home(props) {

    return (<img src="image1.webp" width="1000px"></img>)
}
function Login(props) {

    return <h1>Login</h1>
}


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    state={
        ishome:false,
        isLogin:false,
        isAccount:false
    }

    
    if(ishome){

    }if(isLogin){
        
    }

    render() {

        return <Home/>
            
    }

}
function Header(props) {
    const navbar= <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Tech Elevate</a>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li id="home-li" className="nav-item active">
                <a id="home" className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
            <li id="create-li" className="nav-item  ">
                <a id="create" className="nav-link">Create account <span className="sr-only">(current)</span></a>
            </li>
            <li id="show-li" className="nav-item  ">
                <a id="show" className="nav-link">Show account <span className="sr-only">(current)</span></a>
            </li>
        </ul>



    </div>
</nav>
    return navbar
}
ReactDOM.render(<App />, document.getElementById("react-container"))
