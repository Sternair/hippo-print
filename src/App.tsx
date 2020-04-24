import React from 'react';
import "./app.scss";
import "./style.scss";

function App() {
  return (
   <>
  
<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
          <img src="hippo_print.jpg" alt=""></img>
        </a>
    <a className="navbar-brand" href="#">Hippo Print</a>
    
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" href="#">Covid-19</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Membership</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Engage</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">New</a>
    </li>
    <li><button type="submit" className="btn navbar-btn btn-info" name="my-acc" id="my-acc"  value="My Account">My Account</button></li>
    <li><button type="submit" className="btn navbar-btn btn-info" name="sign-up" id="sign-up"  value="Sign up">Sign Up</button></li>
  </ul>
  </div>
</nav>          

            
<div className="container">
    <div className="row">
        <div className="col-6" id="assistance">
            <div className="ass">Built for Medical Innovators</div>
    
            <div className="prof">Europe’s Digital Manufacturing Community Making Medical Manufacturing Local Again</div>
    
            <div className="chance">HIPPO PRINT is a collaborative community in digital manufacturing. We accelerate the adoption of open source digital manufacturing technologies that focus on optimizing the medical supply chain and increase efficiency and agility, while lowering the carbon footprint and price.</div> 
       
    <div className="signup form " id="signupform">
		   <form action="" method="post" name="login">
			  <div className="form-group">
				 <input type="text" name="name"  className="form-control my-input" id="name" placeholder="Name"></input>
			  </div>
			  <div className="form-group">
				 <input type="email" name="email"  className="form-control my-input" id="email" placeholder="Email"></input>
			  </div>
			  <div className="form-group">
				 <input type="password" min="0" name="password" id="password"  className="form-control my-input" placeholder="Password"></input>
			  </div>
			  <div className="text-center ">
				 <button type="submit" className=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
			  </div>
			  <div className="col-md-12 ">
				 <div className="login-or">
					<hr className="hr-or"></hr>
					<span className="span-or">or</span>
				 </div>
			  </div>
			  <div className="form-group">
				 <a className="btn btn-block g-button" href="#">
				 <i className="fa fa-google"></i> Sign up with Google
				 </a>
			  </div>
			  <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" className="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
			  </p>
		   </form>
		</div>
       
       
       
        </div>
    
        
        <div className="col-6">
            
                <div className="col-12-sm" id ="idea"> <div className="idea1">Health Providers</div>
                <div className="idea2">Get your project evaluated, and get an overview of your funding opportunities</div>
                </div>
    
                <div className="col-12-sm" id="database"><div className="data1"> OVID-19 Collection</div>
                <div className="data2">Access our funds database, and start searching for funds matching your criteria</div>
                </div>
    
                <div className="col-12-sm" id="funding"><div className="funding1">Design Collections</div>
                <div className="funding2">Get help writing your applications, and make sure you arent missing anything</div>
                </div>
                
                <div className="col-12-sm" id="manufacturers" > <div className="manufacturers1">Manufacturers</div>
                <div className="manufacturers2">Get help writing your applications, and make sure you arent missing anything</div>
                </div>
    </div>

</div>
  
<div className="container">

    
    <div className="row">
        
        <div className="rolig col-6">
        Europe
        </div>
        
        <div className="col-6">
        <div className="languagepicker">
        
        <select className="selectpicker" data-width="fit">
        <option data-content='<span class="flag-icon flag-icon-us"> </span> English'>English</option>
        <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
        </select>
        
        </div>
        </div>
    
    </div> 

    <div className="row">
    
        <div className="copyright col-12" id="copyright">
        @Copyright HippoPrint EUvsVirus
    </div>
    
    </div>
        
    </div>        
  </div> 
  </>
  
  );
}

export default App;
