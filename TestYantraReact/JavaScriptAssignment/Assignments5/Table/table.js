let table = `   <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>

                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Date of Birth</th>
            </tr>
        </thead>
        <tbody>
            <tr>

                <td>Nidhin</td>
                <td>21</td>
                <td>Kerala</td>
                <td>23/6/98</td>
            </tr>
            <tr>

                <td>Nidhin</td>
                <td>21</td>
                <td>Kerala</td>
                <td>23/6/98</td>
            </tr>
            <tr>

                <td>Nidhin</td>
                <td>21</td>
                <td>Kerala</td>
                <td>23/6/98</td>
            </tr>
            <tr>

                <td>Nidhin</td>
                <td>21</td>
                <td>Kerala</td>
                <td>23/6/98</td>
            </tr>
        </tbody>
    </table>
`
let dElement = document.getElementById("div1");
dElement.innerHTML = table

let tableElement=document.createElement("table")
tableElement.classList="table table-bordered table-hover table-striped"
document.body.appendChild(olElement)