// <!-- UC-3 - Display person Details in Tabular Format usingTemplate Literals -->

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

const headerHtml =
    `<tr>
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
<tr>
<td>Swati badole</td>
<td>Homekar nagar</td>
<td>Maharstara</td>
<td> Maharashtra</td>
<td>403 001</td>
<td>91 8840044456</td>
<td>
<img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
<img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
</td>
</tr>
<tr>
<td>Akshar Hate</td>
<td>Mumbai</td>
<td>Maharastra</td>
<td> Tamil Nadu</td>
<td>600 057</td>
<td>91 8087844812</td>
<td>
<img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
<img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
</td>
<tr>
    
<td>Yogesh More</td>
<td>Panvel</td>
<td>Mumbai</td>
<td> Maharashtra</td>
<td>410 206</td>
<td>91 8850055197</td>
<td>
<img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
<img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
    </td>
</tr>
</td>
</tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}