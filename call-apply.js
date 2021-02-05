const normalPeople = {
    firstname: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        console.log(this.firstname, this.lastName);
    },
    chargeBill:function(amount,tax,tips){
        console.log(this);
        this.salary= this.salary -  amount -tax -tips;
        return this.salary;
    }
}
//console.log(normalPeople.firstname);
// normalPeople.chargeBill(150);
// console.log(normalPeople.salary);

const heroPerson= {
    firstname: 'hero',
    lastName: 'alam',
    salary: 2500
}
// const heroPersonBill = normalPeople.chargeBill.bind(heroPerson);
// heroPersonBill(200);
// console.log(heroPerson.salary);

// normalPeople.chargeBill.call(heroPerson, 500,10,30);
// console.log(heroPerson.salary);

normalPeople.chargeBill.apply(heroPerson, [500,10,30]);
console.log(heroPerson.salary);
