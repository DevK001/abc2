import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './logo.svg'
import logo from '../../Assets/logo.jpeg'
import { MDBBtn } from 'mdb-react-ui-kit';



function NavBar() {

  const navigate = useNavigate();

  const nav0 = () =>{
    navigate('/')
  }

  const nav1 = () => {
    navigate('/ourProd')
  }

  const nav2 = () => {
    navigate('/healthyLine')
  }

  const nav3 = () => {
    navigate('/exoticLine')
  }

  const nav4 = () => {
    navigate('/hampers')
  }
  const nav5 = () => {
    navigate('/orderAndDelivery')
  }
  const nav6 = () => {
    navigate('/orderUs')
  }
  const nav7 = () => {
    navigate('/whyUs')
  }

  const nav8 = () => {
    navigate('/aboutUs')
  }

  const nav9 = () => {
    navigate('/contectUs')
  }

  return ( 
    // <!-- Navbar -->
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary" style={{ backgroundColor: 'lightgrey', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a class="navbar-brand mt-2 mt-lg-0" onClick={() => nav0()}>
            <img
              src={logo}
              height="60px"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* <!-- Left links --> */}
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav1()}>Our products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav2()}>Healthy line</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav3()}>Exotic line</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav4()}>Hampers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav5()}>Ordering and Delivery</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav7()}>Why us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav8()}>About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => nav9()}>Contact us</a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
    
        {/* <!-- Right elements --> */}
        <div class="d-flex align-items-center">
          {/* <!-- Icon --> */}
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a>
    
          {/* <!-- Notifications --> */}
          
          {/* <!-- Avatar --> */}
         
        </div>
        {/* <!-- Right elements --> */}
        <form class="d-flex input-group w-auto"  style={{width : '15%', marginRight : '10%'}}>
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search products"
        aria-label="Search"
        aria-describedby="search-addon"
       
      />
      <MDBBtn style={{marginLeft: '10px'}}>Search</MDBBtn>
    </form>
    
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    </div>
    
    // <!-- Navbar -->
  // <button onClick={() => nav()}>about</button>
  );
}

export default NavBar;