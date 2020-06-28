let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]

//List all the teachers with an even index number (including 0)

let evenIndex = () => {
let evenTeachers = []
i = 0
  while (i < teachers.length ){
    if (i % 2 === 0) {
      evenTeachers.push(teachers[i])
    }
    i ++
  }
  console.log(evenTeachers)
}

evenIndex()

//List all of the teachers with the letter i in their name

let iInName = () => {
  let namesWithI = teachers.filter(teacher =>
  teacher.includes("i"))
  console.log(namesWithI)
}

iInName()

//Return the number of teachers

let teacherCount = () => {
  return teachers.length
}

console.log(teacherCount())

//Return the number of rooms of students

let roomCount = () => {
  return rooms.length
}

console.log(roomCount())

//Return the number of students in all the rooms

let studentCount = () => {
let count = 0
  rooms.forEach((room) => {
    count += room.length
  })
  return count
}

console.log(studentCount())

//Return the students who have an i in their names

let whichStudents = () => {
  let newStudent = []
  rooms.forEach((room) => {
    room.forEach((student) => {
      if (student.includes("i")) {
        newStudent.push(student)
      }
    })
  })
  return newStudent
}

console.log(`The students who have an 'i' in their name are  ${whichStudents()}.`)

//Return the teacher who has the given student in their room

let whichTeacher = (student) => {
  let foundTeacher
  rooms.forEach((room) => {
    if (room.includes(student)) {
      let idx = rooms.indexOf(room)
      foundTeacher = teachers[idx]
    }
  })
  return foundTeacher
}

console.log(`The teacher who has Jorge is ${whichTeacher("Jorge")}.`)
console.log(`The teacher who has Alexa is ${whichTeacher("Alexa")}.`)
