import React from 'react';
import "./app.scss";
import "./style.scss";

function App() {
  return (
   <>
  
  <nav className="navbar navbar-expand-lg navbar-light bg">
  
  <a className="navbar-brand HippoLogo" href="#">
    <img src="hippo_print.jpg"alt="" ></img>
  </a>
   <a className="navbar-brand" href="#">Hippo Print</a>
    
   <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
        className="fas fa-bars fa-1x"></i></span></button>

<div className="collapse navbar-collapse" id="navbarSupportedContent1">
    
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Pricing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Newsroom</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contact</a>
    </li>
    <li><button type="submit" className="btn navbar-btn btn-info" name="my-acc" id="my-acc"  value="My Account">My Account</button></li>
    <li><button type="submit" className="btn navbar-btn btn-info" name="sign-up" id="sign-up"  value="Sign up">Sign Up</button></li>
  </ul>
</div>
  </nav>
 

<h1>Europe’s Digital Manufacturing Community Making Medical Manufacturing Local Again</h1>

<div className="container" id = "ideaContainer">
<div className="row">
            <div className="col-2" id ="idea">
                <div className="idea1" color= "white">Health Providers</div>
                </div> 
    
                <div className="col-2" id="manufacturer">
                  <div className="data1"> Manufacturers</div>
                </div>
    
                <div className="col-2" id="funding">
                  <div className="funding1">Design Collections</div>
            
                </div>
                
                <div className="col-2" id="database">
                  <div className="funding1">Covid-19 Collection</div>
            
                </div>                        
</div>  
</div>

<div className="container" id = "homeContainer">

<div className="row">

  <div className="col-md-4">
  <h2 id="builtformedical">Built for Medical Innovators</h2>
  <p id="hippo-print-landingpage">HIPPO PRINT is a collaborative community in digital manufacturing. 
  We accelerate the adoption of open source digital manufacturing technologies that focus on optimizing the medical supply chain and increase efficiency and agility, while lowering the carbon footprint and price. 
  </p></div>

  <div className="col-md-8">
  
  <div className="col-sm-4 mx-auto">
   <div className="header-title">
		<h2 className="wv-heading--title">
		   Check out — it’s free!
		</h2>
	 </div>
  </div>

  <div className="col-md-8 mx-auto">
		<div className="myform form ">
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
     
    <div className="row">
        
        <div className="rolig col-6">
        Rolighedsvej, 1b, 8450 Hammel, Denmark
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
    
        <div className="copyright col-12">
        @EUvsVirus Team HippoPrint
    </div>
    
    </div>




	 </div>
   </div>


  </div>
  
  </>
  
  );
}

export default App;
