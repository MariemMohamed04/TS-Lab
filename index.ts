// 1-	Create array that accept  number only 
let numbersArray: Array<number> = [1, 2, 3];

// ------------------------------------------------------------
// 2-	Create array that accept string and number only and print all items
let strNumArray: Array<string | number> = ["Mariem", 10];
strNumArray.forEach((i) => {
  console.log(i);
});

// ------------------------------------------------------------
// 3-	Create a variable that accept number and Boolean only 
let numOrBool: number | boolean;
numOrBool = 10;
numOrBool = true;

// ------------------------------------------------------------
// 4-	Create function with two parameter try to call it without any parameter “handling”
function printFullName(str1: string = "Mariem", str2: string = "Mohamed") {
  console.log(`Full Name is : ${str1} ${str2}`);
}

printFullName();

// ------------------------------------------------------------
// 5-	Create class Employee implement IEmployee using this object as implementation
interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

class Employee implements IEmployee {
  id: number;
  name: string;
  email: string;
  public address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

  private _username: string;

  constructor(empInfo: IEmployee) {
    this.id = empInfo.id;
    this.name = empInfo.name;
    this._username = empInfo.username;
    this.email = empInfo.email;
    this.address = empInfo.address;
  }

  get username(): string {
    return this._username;
  }

  Getaddress() {
    return this.address;
  }
}

const empInfo: IEmployee = {
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
  constructor(empInfo: IEmployee) {
    super(empInfo);
  }

  viewAddress(): void {
    console.log(`Employee Address: ${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`);
  }
}

const manager = new Manager(empInfo);
manager.viewAddress();

// ------------------------------------------------------------
// 7-	Implement the following diagram 
interface IAccount {
  Date_of_opening: String;
  addCustomer: () => void;
  removeCustomer: () => void;
}

abstract class Account implements IAccount {
  Acc_no: number;
  Balance: number;
  Date_of_opening: String;

  constructor(Acc_no: number, Balance: number, Date_of_opening: string) {
    this.Acc_no = Acc_no;
    this.Balance = Balance;
    this.Date_of_opening = Date_of_opening;
  }

  addCustomer(): void {
    console.log("Customer Added!!!");
  }

  removeCustomer(): void {
    console.log("Customer Removed!!!");
  }

  abstract debitAmount(): number;
  abstract CreditAmount(): number;
  abstract getBalance(): number;
}

class Saving_Account extends Account {
  min_balance: number;
  constructor(Acc_no: number, Balance: number, min_balance: number, Date_of_opening: string) {
    super(Acc_no, Balance, Date_of_opening);
    this.min_balance = min_balance;
  }

  debitAmount(): number {
    return 1000;
  }

  CreditAmount(): number {
    return 2000;
  }

  getBalance(): number {
    return this.Balance;
  }
}
class Current_Account extends Account {
  min_balance: number;
  Interest_rate: number;

  constructor(Acc_no: number, Balance: number, Interest_rate: number, Date_of_opening: string) {
    super(Acc_no, Balance, Date_of_opening);
    this.Interest_rate = Interest_rate;
  }

  debitAmount(): number {
    return 1000;
  }

  CreditAmount(): number {
    return 2000;
  }

  getBalance(): number {
    return this.Balance;
  }
}