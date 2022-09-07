import React from 'react';

const TableRow = ({movie}) => {
    return (
        <tbody>
        <tr>
          <th scope="row">{movie.title}</th>
          <td>{movie.length}</td>
          <td>{movie.rating}</td>
          <td><ul>{
            movie.genres.map((genre, index)=> <li key={genre+index}>
            {genre}
        </li>)
}</ul></td>
          <td>{movie.awards}</td>
        </tr>
      </tbody>
    );
}

export default TableRow;
