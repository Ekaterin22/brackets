module.exports = function check(str, bracketsConfig) {
   
  let staple = bracketsConfig.join('').replace(/,/g, '');
      let mass = [];
  for (let bracket of str) {
          let stapleIndex = staple.indexOf(bracket)

          if (stapleIndex % 2 === 0) {
              
              if (bracket === staple[stapleIndex + 1] && mass[mass.length - 1] === stapleIndex){
                mass.pop();
              } else if (bracket === staple[stapleIndex + 1] && mass[mass.length - 1] !== stapleIndex) {
                mass.push(stapleIndex)
              }
              else{
                mass.push(stapleIndex)
              }
          } 
          else {
              if (mass.pop() !== stapleIndex-1){
                  return false;
              }
          }
          
      }
      return mass.length === 0
  
}
