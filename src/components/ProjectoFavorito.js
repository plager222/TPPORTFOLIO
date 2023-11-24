import React from 'react'
function ProyectoFavorito({projecto}) {
return (
    <tbody>
                <tr>
                <th scope="row" class="border-0">
                    <div class="p-2">
                    <img src={projecto.img} alt="" width="70" class="img-fluid rounded shadow-sm"/>
                    <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{projecto.titulo}</a></h5>
                    </div>
                    </div>
                </th>
                <td class="border-0 align-left"><strong>{projecto.date}</strong></td>
                <td class="border-0 align-middle"><strong> </strong></td>
                <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                </tr>
            </tbody>
)
}

export default ProyectoFavorito