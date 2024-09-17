let data= [];

function formInputs(){

    let name= inputName.value;
    let email= inputEmail.value;
    let password= inputPassword.value;
    let phonenumber= inputPhoneNumber.value;
    let gender= inputGender.value

    let temp= {
        name,
        email,
        password,
        phonenumber,
        gender,
    }
    data.push(temp)
    renderTable()
}



function renderTable(){

let tableLayout= 
`<tr>
<th>Name</th>
<th>Email</th>
<th>Password</th>
<th>Phone Number</th>
<th>Gender</th>
</tr>`


for (let i=0; i<data.length; i++){
    tableLayout+= 
`<tr>
<td>${data[i].name}</td>
<td>${data[i].email}</td>
<td>${data[i].password}</td>
<td>${data[i].phonenumber}</td>
<td>${data[i].gender}</td>
</tr>`
}
formTable.innerHTML= tableLayout
}


