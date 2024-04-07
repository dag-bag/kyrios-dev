var stringObject = {
  a: "343",
  c: "444",
  d: "344",
};
var unpredictable = {
  a: 22,
  c: {
    xcd: {
      ddffd: {
        xyz: [
          {
            a: "343",
            c: "444",
            d: "344",
          },
          {
            x: "7889",
            c: "blabla",
            d: "344",
          },
        ],
      },
    },
  },
};
function resolveXYZArray(checkObject, unpredictable) {
  console.log(checkObject, unpredictable);
  if (Array.isArray(unpredictable)) {
    console.log("there is an in object");
  }
  return null;
}
resolveXYZArray(stringObject, unpredictable);
