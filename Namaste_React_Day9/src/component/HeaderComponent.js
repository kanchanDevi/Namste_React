import {Link} from 'react-router-dom';

const HeaderComponent = () => {
    return (
      <>
        <div className="header_content">
        <h1 className="logo">Foodie</h1>
          <div className="nav">
            <ul className="list-items">
            <Link to= "/"><li className="nav-item">Home</li></Link>
              <Link to= "/about"> <li className="nav-item">About</li></Link>
              <Link to= "/instamart"> <li className="nav-item">Instamart</li></Link>

            </ul>
          </div>
        </div>
      </>
    );
  };
  export default HeaderComponent