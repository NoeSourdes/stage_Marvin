const assert = require("assert");

function dayDifference(firstDay, secondDay) {
  return Math.trunc(Math.abs(secondDay - firstDay) / 86400000);
}
// console.log(
//   dayDifference(
//     new Date("2022-07-21T12:52:18.765Z"),
//     new Date("2022-07-11T02:52:18.765Z")
//   )
// );
assert(
  dayDifference(
    new Date("2022-07-11T12:52:18.765Z"),
    new Date("2022-07-21T12:52:18.765Z")
  ) === 10,
  "il y a 10 jours d'écart"
);
assert(
  dayDifference(
    new Date("2022-07-11T09:52:18.765Z"),
    new Date("2022-07-21T12:52:18.765Z")
  ) === 10,
  "il y a 10 jours d'écart"
);
assert(
  dayDifference(
    new Date("2022-07-21T12:52:18.765Z"),
    new Date("2022-07-11T12:52:18.765Z")
  ) === 10,
  "il y a 10 jours d'écart"
);
assert(
  dayDifference(
    new Date("2022-07-21T12:52:18.765Z"),
    new Date("2022-07-11T02:52:18.765Z")
  ) === 10,
  "il y a 10 jours d'écart"
);
