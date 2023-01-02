function Header() {
  return (
    <header id="header" className="header fixed-top">
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div className="site-logo">
              <a className="scrollto" href="#hero-block">
                <img
                  className="logo-icon"
                  src="http://mayaoem.com.br/wp-content/uploads/2022/11/0001-01-01-1.png"
                  alt="logo"
                />
              </a>
            </div>

            {/* <div className="navbar-btn order-lg-2">
              <a
                className="btn btn-secondary"
                target="_blank"
              >
                Tickets
              </a>
            </div> */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navigation"
              className="navbar-collapse collapse  justify-content-lg-end me-lg-3"
            >
              <ul className="nav navbar-nav">
                {[
                  "Home",
                  "Serviços",
                  "Como funciona",
                  "Antes e Depois",
                  "Perguntas Frequentes",
                  "Contato",
                ].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link scrollto" href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
