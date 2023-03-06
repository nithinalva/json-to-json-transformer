const transform = require("./lib/transform");

var myFn = function (input) {
  return "xxxxxx " + input + " yyyyyyy";
};

var inputObj = {
  foo: {
    bar1: "hello",
    bar2: "world",
    date: "2017-04-04",
    msg: "Hello bob",
  },
  arr: [
    {
      city: "London",
    },
    {
      name: "Chris",
      city: "Oxford",
    },
  ],
};

var templateObj = {
  a: "{{foo.bar1}}",
  zz: "{{sas}}",
  b: {
    c: "{{foo.bar2}}",
    d: "literal text",
    e: "=> myFn(foo.bar2)",
    f: '=> either(foo.msg, "foobar3!")',
    now: "=> getDate()",
    time: "=> getTime(foo.date)",
  },
  people: [
    "{{arr}}",
    {
      firstName: '=> either(name, "Roasab")',
    },
  ],
};

var newObj = transform(templateObj, inputObj, { myFn });

console.log(newObj);
