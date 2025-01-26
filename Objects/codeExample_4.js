let codes = {
  '+91': "India",
  '+61': "Australia",
  'name':'Dev',
  '+64': "New Zealand",
  '+1': "USA" 
}; 

for (let code in codes) {
console.log(`${code}-${codes[code]}`);
}