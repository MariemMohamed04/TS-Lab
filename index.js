// 1-	Create array that accept  number only 
let numbersArray = [1, 2, 3];
// ------------------------------------------------------------
// 2-	Create array that accept string and number only and print all items
let strNumArray = ["Mariem", 10];
strNumArray.forEach((i) => {
    console.log(i);
});
// ------------------------------------------------------------
// 3-	Create a variable that accept number and Boolean only 
let numOrBool;
numOrBool = 10;
numOrBool = true;
// ------------------------------------------------------------
// 4-	Create function with two parameter try to call it without any parameter “handling”
function printFullName(str1 = "Mariem", str2 = "Mohamed") {
    console.log(`Full Name is : ${str1} ${str2}`);
}
printFullName();
class Employee {
    constructor(empInfo) {
        this.id = empInfo.id;
        this.name = empInfo.name;
        this._username = empInfo.username;
        this.email = empInfo.email;
        this.address = empInfo.address;
    }
    get username() {
        return this._username;
    }
    Getaddress() {
        return this.address;
    }
}
const empInfo = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};
const emp = new Employee(empInfo);
console.log(emp);
// ------------------------------------------------------------
// 6-	Create class manager inherit from employee class and 
// Create a function to view employee address
class Manager extends Employee {
    constructor(empInfo) {
        super(empInfo);
    }
    viewAddress() {
        console.log(`Employee Address: ${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`);
    }
}
const manager = new Manager(empInfo);
manager.viewAddress();
class Account {
    constructor(Acc_no, Balance, Date_of_opening) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        console.log("Customer Added!!!");
    }
    removeCustomer() {
        console.log("Customer Removed!!!");
    }
}
class Saving_Account extends Account {
    constructor(Acc_no, Balance, min_balance, Date_of_opening) {
        super(Acc_no, Balance, Date_of_opening);
        this.min_balance = min_balance;
    }
    debitAmount() {
        return 1000;
    }
    CreditAmount() {
        return 2000;
    }
    getBalance() {
        return this.Balance;
    }
}
class Current_Account extends Account {
    constructor(Acc_no, Balance, Interest_rate, Date_of_opening) {
        super(Acc_no, Balance, Date_of_opening);
        this.Interest_rate = Interest_rate;
    }
    debitAmount() {
        return 1000;
    }
    CreditAmount() {
        return 2000;
    }
    getBalance() {
        return this.Balance;
    }
}
