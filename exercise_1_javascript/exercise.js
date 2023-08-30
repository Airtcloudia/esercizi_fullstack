// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

//creao una funzione ed uso lo switch
function calculateSalary(role) {
  switch (role){
    case 'ceo':
      return 2200;
      case 'manager':
        return 1800;
        case 'cto':
          return 1800;
          case 'developer':
            return 1500;
            case 'other': //default: return 1000
              return 1000;
              

  }
}

console.log(ceoSalary); //output 2200
console.log(managerSalary); // 1800
console.log(ctoSalary); //output 1800
console.log(developerSalary); //output 1500
console.log(otherSalary); //output 1000