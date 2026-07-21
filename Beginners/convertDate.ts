import { assertEqual } from "./util/assertEqual";
function convertDate(date: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(convertDate("01/01/2023"));

// These "asserts" are used for self-checking
assertEqual(convertDate("25/12/2021"), "2021-12-25");
assertEqual(convertDate("01/01/2000"), "2000-01-01");
assertEqual(convertDate("15/06/1995"), "1995-06-15");
assertEqual(convertDate("29/02/2020"), "2020-02-29");
assertEqual(convertDate("10/10/2010"), "2010-10-10");
assertEqual(convertDate("31/05/1985"), "1985-05-31");
assertEqual(convertDate("07/08/1960"), "1960-08-07");
assertEqual(convertDate("02/09/1999"), "1999-09-02");
assertEqual(convertDate("30/04/1975"), "1975-04-30");
assertEqual(convertDate("29/02/2019"), "Error: Invalid date.");
assertEqual(convertDate("30/04/1975/1"), "Error: Invalid date.");
