const uniqueID = require('uniqid')

const cubes = [];

exports.getAll = () => cubes.slice()
exports.create = (cubeData) => { 
    
    const newCube=({
        id: uniqueID(),
        ...cubeData,
    })
    cubes.push(newCube); 
    return newCube;
}