const employee = {
    name: "Sarah",
    streetAddress: {
        line1: "11 Peachtree",
        line2: "Road"
    }
}
function updateEmployeeWithKeyAndValue(employee, name, Mark) {
    const newPair = {...employee }
    newPair[name] = Mark
    return newPair
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Mark) {
    employee[name] = Mark
    return employee 
}
function deleteFromEmployeeByKey(employee, name) {
    const deletedEmployee = {...employee}
    delete deletedEmployee.name
    return deletedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}