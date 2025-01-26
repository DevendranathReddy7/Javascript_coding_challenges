let str = 'JavaScript';
str[0] = 'j';
str = `j${str.slice(1)}`
console.log( str[0], str ); 
