/*
------->npm: node package manager: 
->global command, comers with node 
->can be local dependencies(use it only in this particular project) or global dependencies(can be used in anyy projects)

->package.json- manifest file(stores imp info abt project/package).three ways to create package.json: 
1. manual approach: cerate package.json in the root,create properties ets
2: npm init: step by step,press to skip
3: npm init -y: everything default

devDependencies: testings,used while deveploping. npm i package_name --save-dev or simply npm i package_name -D

npx: globally halna parni package haru nahali use garunxa eg for frontend frameworks react,gatsby 

-> package-lock.js: versions of dependencies lock hunxan ani deploy garni bela tyei version ko package use hunxa
*/

const _=require('lodash')

const items=[1,[2,[3,[4]]]]
console.log(items)
const newItem=_.flattenDeep(items)//eutai array banaidinxa
console.log(newItem)
console.log("hello world")