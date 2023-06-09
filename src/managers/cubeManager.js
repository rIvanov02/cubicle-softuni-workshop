const uniqueID = require("uniqid");

const cubes = [];

exports.getAll = (search,from,to) => { 
  const result = cubes.slice()

  if (search) { 
    result = result.filter(cube=>cube.name.toLowerCase().includes(search))
  }

  if (from) { 
    result = result.filter(cube=>cube.difficultyLevel>=Number(from))
  }
  if (to) { 
    result = result.filter(cube=>cube.difficultyLevel<=Number(to))
  }
  return result
} 
exports.getOne = (cubeId)=> cubes.find(x=> x.id == cubeId)
exports.create = (cubeData) => {
  const newCube = {
    id: uniqueID(),
    ...cubeData,
  };
  cubes.push(newCube);
  return newCube;
};
