import React, { Component } from 'react';
import './Hvac.css';
import {Link} from 'react-router-dom';

class Hvac extends Component {
    render() {
        return (
            <div>
                {/*bradcrumb */}
                    <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Hvac</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="hvac-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>HVAC Services</h3>
                                    <p>It is a long established fact that a reader will be distracted by the</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>Air Distribution system</li>
                    <li>Chilled Water System (air cooled/water cooled)</li>
                    <li>DX splits</li>
                    <li>VRV/VRF</li>
                    <li>Heating</li>
                    <li>Ventilation</li>
                    <li>Precision Air conditioning</li>
                    <li>Insulation Work</li>
                    </ul>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*end content*/}
                
            </div>
        );
    }
}

export default Hvac;