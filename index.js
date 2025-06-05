function saturdayFun(whatToDo = "roller-skate"){
return(`This Saturday, I want to ${whatToDo}!`)
}
function mondayWork(mondayErrands = "go to the office"){
    return(`This Monday, I will ${mondayErrands}.`)
}
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
