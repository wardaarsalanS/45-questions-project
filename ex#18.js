//Array place to visit
let placeToVisit = ["china", "malishiya", "srilanka", "japan", "tokyo"];
//print Array in original order
console.log("original Order:", placeToVisit);
// Print your array in alphabetical order without modifying the actual list
console.log("Alphabatical Order:", [...placeToVisit].sort());
//Show that your array is still in its original order by printing it.
console.log("original order:", placeToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", [...placeToVisit].reverse());
//Show that your array is still in its original order by printing it again
console.log("OriginalOrder:", placeToVisit);
export {};
