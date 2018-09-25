import React, { Component } from 'react';
import './BMS.css';
import {Link} from 'react-router-dom';

class BMS extends Component {
    render() {
        return (
            <div>
                {/*bradcrumb */}
                <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">BMS</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="bms-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>BMS Services</h3>
                                    <p>It is a long established fact that a reader will be distracted by the</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>DDC controllers</li>
                    <li>VAV Boxes</li>
                    <li>VFD</li>
                    <li>3rd party integration- BACNET, Lonworks, Mod bus, M-bus</li>
                    <li>Fire Alarm System (Addressable / Conventional)</li>
                    <li>Public Address / Office Evacuation system</li>
                    <li>Access Control System (Stand Alone / Networkable)g</li>
                    <li>CCTV System</li>
                    <li>Data Centre Specialized Fire suppression system such as FM200 /NOVEC  1230 gas system.</li>
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

export default BMS;