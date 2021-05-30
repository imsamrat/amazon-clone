import React from 'react';

const BlogInfo = (props) => {
    const { title, description, author, search, date, img } = props.blog;
    return (
        <div className="card shadow-sm  col-md-4 mx-3">
            <div className="container card-body">
                <img class="card-img-top" src={img} alt="" style={{ width: '100%' }} />
                <h4 className='px-2 mt-3'>{title}</h4>
                <h6 className="text-secondary fst-italic px-2">{author}--{date}</h6>
                <h6 className="card-text text-muted mt-4 px-2">{description}</h6>
                {/* <button class="btn btn-outline-light" type="button" ><a href={`https://google.com/${search}`} target="blank">Explore More</a> </button> */}
                <button class="mt-3 btn btn-light" type="button" >Explore More</button>
            </div>

{/* 
            <div className="col-md-4 mt-2">
                <div className={`justify-content-center bg-${info.background}`}>
                    <img className="mt-4 px-3" src={info.icon} style={{ width: '50%' }} alt="..." />
                    <div >
                        <h5 class="card-title mt-4 px-4">{info.title}</h5>
                        <p class="card-text px-3">{info.description}</p>
                    </div>
                </div> */}

        </div>
    );
};

export default BlogInfo;