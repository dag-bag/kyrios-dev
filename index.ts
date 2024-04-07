type StringObject = { [key: string]: string };
type UnpredictableObject = any;
const stringObject: StringObject = {
  a: "343",
  c: "444",
  d: "344",
};

const unpredictable: UnpredictableObject = {
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
function resolveXYZArray(
  checkObject: StringObject,
  unpredictable: UnpredictableObject
): Array<StringObject> | null {
  console.log(checkObject, unpredictable);
  if (Array.isArray(unpredictable)) {
    console.log("there is an in object");
  }
  return null;
}

resolveXYZArray(stringObject, unpredictable);
