let count = 0;

function playerAdd(element) {
    count++;
    let playerName = element.parentNode.children[0].innerText;

    let tableRow = document.getElementById('tableRow');

    if (count > 5) {
        alert("You can not add more player");
        return;
    }
    else {
        let selectedPlayer = document.getElementById('selected');
        selectedPlayer.innerText = count;
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <tr class="fs-4">
        <th>${count}.</th>
        <td>${playerName}</td>
        </tr>
        `;
        tableRow.appendChild(tr);
    }
}


