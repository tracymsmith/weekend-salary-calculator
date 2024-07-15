document.getElementById('employeeForm').addEventListener('submit', function(event){
    event.preventDefault();
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const idNumber = document.getElementById('id').value;
const jobTitle = document.getElementById('title').value;
const annualSalary = document.getElementById('annualSalary').value;
addEmployeeRow (firstName, lastName, idNumber, jobTitle, annualSalary);
});
function addEmployeeRow(firstName, lastName, idNumber, jobTitle, annualSalary){
    const tableBody = document.querySelector('#employeeTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteBtn"> Delete </button></td>`;
    row.querySelector('.deleteBtn').addEventListener('click', function(){
        deleteEmployeeRow(row); 
        
});

    tableBody.appendChild(row);
}
totalMonthlySalary = (annualSalary/12);

function TotalMonthlySalary() {
    totalMonthlySalary(totalAnnualSalary / 12);
    document.getElementById('totalMonthlySalary').textContent = totalMonthlySalary.toFixed(2);
}

// row.querySelector('.deleteBtn').addEventListener('click', function(){
//     deleteEmployeeRow(row);

function deleteEmployeeRow(row) {
    row.remove();
//     updateTotalSalary(-monthlySalary);
// }
// function updateMonthlySalary(change){

}
// document.getElementById('employeeForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const idNumber = document.getElementById('id').value;
//     const jobTitle = document.getElementById('title').value;
//     const annualSalary = document.getElementById('annualSalary').value;
//     addEmployeeRow(firstName, lastName, idNumber, jobTitle, annualSalary);
// });

// function addEmployeeRow(firstName, lastName, idNumber, jobTitle, annualSalary) {
//     const tableBody = document.querySelector('#employeeTable tbody');
//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${firstName}</td>
//         <td>${lastName}</td>
//         <td>${idNumber}</td>
//         <td>${jobTitle}</td>
//         <td>${annualSalary}</td>
//         <td><button class="deleteBtn">Delete</button></td>`;
    
//     row.querySelector('.deleteBtn').addEventListener('click', function() {
//         deleteEmployeeRow(row);
//     });
    
//     tableBody.appendChild(row);
// }

// function deleteEmployeeRow(row) {
//     row.remove();
// }