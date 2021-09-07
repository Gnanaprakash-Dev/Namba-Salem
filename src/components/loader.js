import React from 'react';

function Loader(){
	return(
            <div className="preloader" id="preloader">
                <div className="spinner-grow text-secondary" role="status">
                    <div className="sr-only">Loading...</div>
                </div>
            </div>
         );
}

export default Loader;
