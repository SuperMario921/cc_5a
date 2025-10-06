// Coding Challenge 5a

// added employee array
const employees = [
    { name: "Jillian", hourlyRate: 28, hoursWorked: 18 },
    { name: "Daniel", hourlyRate: 42, hoursWorked: 38 },
    { name: "Jonathan", hourlyRate: 38, hoursWorked: 22 },
    { name: "Peter", hourlyRate: 18, hoursWorked: 55 }
]

//added a base pay calculation function
function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

//added overtime pay calculation function
function calculateOvertimePay(rate, hours) {
    return Math.max(hours - 40, 0) * rate * 1.5;
}

//added tax calculation function
function calculateTaxes(grossPay) {
    return grossPay * 0.15; // 15% taxes
}

//added payroll processing function
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = grossPay - calculateTaxes(grossPay);

    //formatted output with toFixed
    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

//added payroll processing loop for each employee
for (const emp of employees) {
    console.log(processPayroll(emp));
}

