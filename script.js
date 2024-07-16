
// Event listener for form submission
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('id').value;
    const jobTitle = document.getElementById('title').value;
    const annualSalary = parseFloat(document.getElementById('annualSalary').value);
    
    addEmployeeRow(firstName, lastName, idNumber, jobTitle, annualSalary);
    calculateTotalMonthlySalary();
    this.reset(); // Reset the form after submission
});

// Function to add a new employee row
function addEmployeeRow(firstName, lastName, idNumber, jobTitle, annualSalary) {
    const tableBody = document.querySelector('#employeeTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td class="annualSalary">${annualSalary.toFixed(0)}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;
    
    row.querySelector('.deleteBtn').addEventListener('click', function() {
        deleteEmployeeRow(row);
    });
    
    tableBody.appendChild(row);
}

// Function to delete an employee row
function deleteEmployeeRow(row) {
    row.remove();
    calculateTotalMonthlySalary();
}

// Function to calculate and update total monthly salary
function calculateTotalMonthlySalary() {
    const salaryElements = document.querySelectorAll('.annualSalary');
    const totalMonthlySalary = Array.from(salaryElements)
        .reduce((sum, element) => sum + parseFloat(element.textContent) / 12, 0);

    
    document.getElementById('totalMonthlySalary').textContent = totalMonthlySalary.toFixed();

const budgetStatusElement = document.getElementById('budgetStatus');
if (totalMonthlySalary > 20000) {
    document.querySelector('footer').classList.add('over-budget');
    budgetStatusElement.textContent = "Over Budget!";
    console.log("Over Budget");
} else {
    document.querySelector('footer').classList.remove('over-budget');
    budgetStatusElement.textContent = "Meets Budget Goals";
}
}