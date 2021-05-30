import React from 'react';

const HeaderBodyInfo = ({ info }) => {
    return (
            <div className="col-md-4 mt-2">
                <div className={`justify-content-center bg-${info.background}`}>
                    <img className="mt-4 px-3" src={info.icon} style={{ width: '50%' }} alt="..." />
                    <div >
                        <h5 class="card-title mt-4 px-4">{info.title}</h5>
                        <p class="card-text px-3">{info.description}</p>
                    </div>
                </div>




            {/* <div class="card mb-4" style={{ maxWidth: '140px' }}>
                <div class="row g-0">
                <div>
                    <div class="col-md-4">
                    <div>
                        <img src={info.icon} alt="..." style={{ width: '30%' }} />
                    </div>
                    <div class="col-md-8">
                    <div>
                        <div class="card-body">
                            <h5 class="card-title">{info.title}</h5>
                            <p class="card-text">{info.description}</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HeaderBodyInfo;