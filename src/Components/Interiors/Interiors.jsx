import React, { Component } from 'react';
import './Interiors.css';
import {Link} from 'react-router-dom';

class Interiors extends Component {
    render() {
        return (
            <div>
                {/*bradcrumb */}
                <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Interiors</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="interiors-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>Interiors Services</h3>
                                    <p>It is a long established fact that a reader will be distracted by the</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>Civil Work includes Brick / Siporex Wall & Plastering</li>
                    <li>PCC Screeding and Tiling & Dado work</li>
                    <li>Granite / Marble counter work</li>
                    <li>Plaster of Paris finishing and Painting</li>
                    <li>False Ceiling (Gypsum / Modular Type)</li>
                    <li>Partitions (Glass / Solid / Gypsum)</li>
                    <li>ACP Cladding and Glass Façade</li>
                    <li>Fire rated doors for critical IT / Server rooms</li>
                    <li>Laminate / Veneer Paneling, Storage, Trapdoors, Tables</li>
                    <li>Modular Workstations / Cubical</li>
                    <li>Curtains, Wallpapers and Blind</li>
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

export default Interiors;