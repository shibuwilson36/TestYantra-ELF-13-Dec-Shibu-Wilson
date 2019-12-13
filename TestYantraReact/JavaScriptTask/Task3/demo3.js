function Header(props) {
    console.log(App);
    
    const navbar= <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Tech Elevate</a>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li id="home-li" className="nav-item active">
                <a id="home" onClick={} className="nav-link">Home <span className="sr-only">(current)</span></a>
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





class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ishome: true,
            isLogin: false,
            isAccount: false
        }
    }
    

    home = () => {

        this.setState({
            ishome: true,
            isLogin: false,
            isAccount: false


        })
    }
    login = () => {

        this.setState({
            isLogin: true,
            ishome: false,
            isAccount: false
        })
    }
    account = () => {

        this.setState({
            isAccount: true,
            isLogin: false,
            ishome: false
        })
    }

    render() {
        const home = <div>
            <img src="image1.webp" width="100%"></img>
        </div>
        const login = <form>
            <div className="form-group col-md-4 offset-4">
                <label for="">Name</label>
                <input className="form-control" type="text"></input>
                <label for="">Password</label>
                <input className="form-control" type="text"></input>
                <button className="btn btn-outline-info offest-4 " id="login" type="button">login</button>

            </div>


        </form>
        const account = <form>
            <div className="form-group col-md-4 offset-4">
                <label for="">Name</label>
                <input className="form-control" type="text"></input>
                <label for="">Email</label>
                <input className="form-control" type="text"></input>
                <label for="">Mobile</label>
                <input className="form-control" type="text"></input>
                <label for="">Password</label>
                <input className="form-control" type="text"></input>
                <button className="btn btn-outline-info  offset-4" id="login" type="submit">Create Account</button>
            </div>



        </form>



        return <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Tech Elevate</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li id="home-li" className="nav-item active">
                            <a id="home" onClick={this.home} className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li id="create-li" className="nav-item  ">
                            <a id="create" onClick={this.login} className="nav-link">Create account <span className="sr-only">(current)</span></a>
                        </li>
                        <li id="show-li" className="nav-item  ">
                            <a id="show" onClick={this.account} className="nav-link">Create Account <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>



                </div>
            </nav>
            
           
            {this.state.ishome ? home : ""}
            {this.state.isLogin ? login : ""}
            {this.state.isAccount ? account : ""}
            <Footer />

        </div>

    }

}
function Footer(props) {
    const footer = <footer className="page-footer font-small bg-dark">
        <div className="container ">
            <div className="row">
                <div className="col-md-12 py-5">
                    <div className="mb-5 flex-center ">
                        <a className="fb-ic offset-4 ">
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>

                        <a className="tw-ic">
                            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>

                        <a className="gplus-ic">
                            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>

                        <a className="li-ic">
                            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>

                        <a className="ins-ic">
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>

                        <a className="pin-ic">
                            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                        </a>
                    </div>
                </div>


            </div>


        </div>

        <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>

        </div>


    </footer>
    return footer
}
ReactDOM.render(<App />, document.getElementById("react-container"))
