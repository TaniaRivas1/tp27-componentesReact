import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
function ContentRowTop(){
	let genres= ['Accion', 'Animacion', 'Aventura', 'Ciencia Ficcion', 'Comedia', 'Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical']
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<ContentRowMovies/>
					<div className="row">
						<LastMovieInDb
						movie= "Mandalorian"
						/>
						<GenresInDb 
						genres = {genres}/>
					</div>
				</div>

        </React.Fragment>
    )

}
export default ContentRowTop;