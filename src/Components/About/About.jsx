import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css'

class About extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            {/* <div id="scroll-animate">
  <div id="scroll-animate-main">
    <div className="wrapper-parallax">
      <header>
        <h1>About Us</h1>
      </header> */}
      <div id="header">
            <div id="header__background">
                <div id="header__centered">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>

      <section className="content">
        {/* <h1>Content</h1> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mission-container text-center">
                        <h2> - Our Mission - </h2>
                        <p>To Bring Our Clients A Unique Combination Of Technologically Advanced And Comfort Solution</p>
                        <br />
                        <h2>About Us</h2>
                        <p>Nikhil Comforts is a multi-disciplinary engineering contracting organization.Operating in India since 1991, the organization is located in Mulund, Mumbai.Our business has been built on unwavering commitment to deliver quality projects, on time and within allotted budgets.We offer our clients the latest in technologies and methodologies, as well as flexible approach to contracting structures.</p>
                        <br />
                        <p>We are backed by highly experienced and qualified Project Managers, engineers and supervisors.We offer integrated suite of services right from the concept to commissioning.</p>
                    </div>
                </div>

                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mission-container text-center">
                        <h2> Our History </h2>
                        <p>Started off as HVAC contractor in 1991 (dealer for Carrier Aircon).1st year did a business of INR 20 lakh.Attained an height of 1 Crore annual turnover in the year 1995 and by the year 2000 the annual turnover soared to Crores.In order to be one- stop solution provider, Nikhil Comforts started Electrical contracting in the year 2008.Since inception, Nikhil Comforts has won numerous awards for its sales and services. Nikhil Comforts boasts of being amongst the Elite Carrier Willis Group.Currently Nikhil Comforts is operating as a multi-disciplinary contracting firm.Executing HVAC, Electrical, Plumbing, Fire-fighting, Interiors projects. The current turnover is around INR 50 Crores.</p>
                    </div>
                </div>

                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mission-container">
                        <h2 className="text-center">Quality Policy</h2>
                        <ul className="about-list">
                        <li>Quality Management is central to all the activities carried out by us.</li>
                        <li>We endeavor to provide our clients with a truly professional  approach to project delivery. </li>
                        <li>It is our policy to provide superior service to our clients by  understanding and responding to their needs and expectations.</li>
                        <li>We systematically manage our projects to maximise value for all  stakeholders.</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* <footer>
        <h1>Footer</h1>
      </footer> */}
    {/* </div>
  </div>
</div> */}
                
            </div>
            </React.Fragment>
        );
    }
}

export default About;