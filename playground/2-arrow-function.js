//arrow function in nodeJs
// different arrow function

//1
// const square = function (x) {
//   return x * x;
// };

//2
// const square = (x) => {
//   return x * x;
// };

//3
// const square = (x) => x * x;

// console.log(square(3));

const event = {
  name: " Birhtday party",
  guestList: ["Mujeeb", "Aman", "Ahmed"],
  printGuestList() {
    const that = this; // we can used any variable like "that","mh"

    console.log("Guest list for" + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + "is attending" + that.name);
    });
  },
};
event.printGuestList();
