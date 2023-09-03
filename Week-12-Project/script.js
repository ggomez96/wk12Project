const endPoint = 'https://localhost:3000/townRoster' /*API*/




/*displaying the info (GET)*/
$.get(endPoint).then(data => {/*iterating over array data, then for every town, we want to append to the table body*/
    data.map(town => {
        $('tbody').append(
            $(`
            <tr>
                <td>${town.id}</td>
                <td>${town.townName}</td>
                <td>${town.resident}</td>
                <td>
                    <button onclick="deleteTown(${town.id})">🗑</button>
                </td>
            </tr>`)
        )

    });
})



/*POSTING NEW TOWN AND RESIDENT TO THE TABLE//CLICK NOT WORKING!!!*/
$('#new-town-btn').click(function () {

    $.post(endPoint, {
        townName: $('#new-town-name').val(), /*getting value from input boxes*/
        resident: $('#new-resident').val(),
    });
})


/*DELETING*/
function deleteTown(id) {
    $.ajax(`${endPoint}/${id}`, {
        method: 'DELETE'
    });
}


/*UPDATING*/

function updateTown() {
    let id = $('#updateId').val()

    $.ajax(`${endPoint}/${id}`, { /*targeting specific town based off id, PUT method updates data*/
        method: 'PUT',
        data: {
            townName: $('#updateTownName').val(),
            resident: $('#updateResident').val()
        }
    });
}

$('#updateBtn').click(updateTown);