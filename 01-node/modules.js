//modules: Encapsulated code ,only share what we want to share ie minimum.Every file is a module in node.

//require names from firstModule.js
//getting name1 and name2 from the firstModule.js

const names=require('./firstModules.js')
console.log(names);

//importing function Hi() from the secondModule.js 
const sayHi=require ('./secondModule.js')

//importing names from the alternative-exportsLookups.js
const dataFromAlt=require('./alternative-exportsLookups.js')
console.log(dataFromAlt)

sayHi(dataFromAlt.singleName.name3)
sayHi(dataFromAlt.item[0])
sayHi(names.name1)
sayHi(names.name2)
sayHi('somash')
