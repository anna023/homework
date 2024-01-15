let array = ["apple", "orange", "banana"];
console.log(typeof array)
/////////////////////////////////////////////////

const denom = 5 % 2
console.log(denom);
/////////////////////////////////////////////////

for (let i = 0; i <= 10; i ++) {
    console.log(i)
}
/////////////////////////////////////////////////

function grid() {
const repeat = (str, count) => {
    let num = "";
  
    for (let i = 0; i < count; i++) {
      num = num + str;
    }
  
    return num;
  };
  
  const result = repeat("#", 5);

  console.log(result)
}
grid()