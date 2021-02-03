const student= [
    { name: "biplob", id: 21},
    { name: "bip", id: 22},
     { name: "moni", id: 18}
 ]
 const names = student.map(s => s.name);
 const ids = student.map(i =>i.id);
 console.log(names);
 console.log(ids);

 const big = student.filter(s=>s.id>20);
 console.log(big);

 const bigger = student.find(s => s.id>20);
 console.log(bigger);