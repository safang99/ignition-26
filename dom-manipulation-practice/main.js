// Your code goes here!
let todo = ["Write some JavaScript", "Submit System Check", "Take a Break"]

let unorderedList = document.getElementById('todo-list')

todo.forEach((task) => {
  let listItem = document.createElement('li')
  let taskNode = document.createTextNode(task)
  listItem.appendChild(taskNode)
  unorderedList.appendChild(listItem)
})
