const a = [0, false, 1, 2, 3, 4, 5];

const B = a.filter((elem) => elem);
const C = a.find((elem) => elem);
const D = a.map((elem) => elem);

console.log(`Default Array - ${a}`);
console.log(`Filter Array - ${B}`);
console.log(`Find Element - ${C}`);
console.log(`Map Array - ${D}`);
