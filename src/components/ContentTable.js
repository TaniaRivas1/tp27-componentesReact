import React from 'react';
import TableRow from './TableRow';

const ContentTable = () => {
    const data = [
        {
            title: "Billy Eliot",
            length: 123,
            rating: 5,
            genres:['Drama', 'Comedia'],
            awards:2,
        },
        {
            title: "Alicia en el Pais de las maravillas",
            length: 142,
            rating: 4.8,
            genres:['Drama', 'Comedia', 'Accion'],
            awards:3,
        }
    ]
    return (
        <div className="container-fluid">
            <div className='card shadow'>
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Duracion</th>
      <th scope="col">Rating</th>
      <th scope="col">Generos</th>
      <th scope="col">Premios</th>
    </tr>
  </thead>
  {
    data.map((movie, index)=> <TableRow
    movie= {movie}
    key = {movie.title + index}
    />)
  }

</table>
            </div>
        </div>
    );
}

export default ContentTable;

