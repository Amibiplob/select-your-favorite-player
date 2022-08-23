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
document.getElementById('calculate').addEventListener('click', function () {
    let perPlayerString = document.getElementById('perPlayer').value;
    let perPlayer = parseInt(perPlayerString);
    let count = document.getElementById('selected').innerText;
    let cost = perPlayer * count;
    let playerExpenses = document.getElementById('playerExpenses');
    playerExpenses.innerText = cost;
})


document.getElementById('calculateTotal').addEventListener('click', function () {
    let managerString = document.getElementById('manager').value;
    let manager = parseInt(managerString);

    let coachString = document.getElementById('coach').value;
    let coach = parseInt(coachString);

    let playerPrice = document.getElementById('playerExpenses').innerText;
    let playerExpenses = parseInt(playerPrice);
    let total = playerExpenses + manager +  coach;
    document.getElementById('total').innerText = total;;
})

