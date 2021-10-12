const Header = (props) => {
  return (
    <header className="centered-top-container" role="banner">
      <div className="centered-top">
        <div className="hamburger-menu-container">
          {/* <svg className="svg-icon-24 touch-icon hamburger-menu"> */}
            <button onClick={props.toggleAside}>hamburger</button>
          {/* </svg> */}
        </div>
        <div className="blog-name">
          <div className="section" id="header" name="Header"> {
            props.foundationHeader ? (
              <div>
                <h1>
                  FIRST LIGHT FOUNDATION
                </h1>
                <p>
                  “Our future is only as strong as the foundation it’s built upon”
                </p>
              </div>
            ) : (
              <div>
                <h1>
                  FIRST LIGHT FUN
                </h1>
                <p>
                  "A new era of education has begun &amp; it all starts with First Light Fun"
                </p>  
              </div>
            )
          }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;