import TopNav from "./top-nav";

function Header() {
    return(
        <header id="header" className="header">
            <h1 className="logo">
                <a href="/">JE<span className="version">v1.0.0</span></a>
            </h1>
            <TopNav />
        </header>
    );
}

export default Header;