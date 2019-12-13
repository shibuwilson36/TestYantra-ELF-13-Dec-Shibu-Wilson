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
function Content(props) {
return(<img src="image1.webp" width="1000px"></img>) 
}
function Footer(props) {
    const footer=<footer className="page-footer font-small bg-dark">
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



console.log(<Header/>);




ReactDOM.render(<div><Header/><Content name="Shibu" /><Footer/></div>,document.getElementById("react-container"))