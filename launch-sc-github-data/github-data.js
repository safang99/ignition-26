let data = require('./data')

// 1)
const numOfRepos = (array) => {
  return array.length
}
console.log('\n1) ' + numOfRepos(data))

// 2)
const largestRepo = (array) => {
  return array.sort(function(x, y) {return x.size - y.size})[array.length - 1].name
}
console.log('\n2) ' + largestRepo(data))

// 3)
const mostRecentRepo = (array) => {
  return array.sort(function(x, y) {return Date.parse(x.created_at) - Date.parse(y.created_at)})[array.length-1].name
  // return array.sort(function(a, b) {return a.created_at.localeCompare(b.created_at)})[array.length-1].name
}
console.log('\n3) ' + mostRecentRepo(data))

// 4)
const noGazers = (array) => {
  let count = 0
  array.forEach((repo) => {
    if (repo.stargazers_count === 0) {
      count += 1
    }
  })
  return count
}
console.log('\n4) ' + noGazers(data))

// 5)
const maxGazers = (array) => {
  return array.sort(function(x, y) {return x.stargazers_count - y.stargazers_count})[array.length - 1].name
}
console.log('\n5) ' + maxGazers(data))

// 6)
const hasDescriptions = (array) => {
  let repoDescrip = []
  array.forEach((repo) => {
    if (repo.description !== null) {
      repoDescrip.push(repo.name)
    }
  })
  return repoDescrip
}
console.log('\n6) ' + hasDescriptions(data))

//7)
const newDescriptionsArray = (array) => {
  let descripArray = array.map((repo) => {
    if (repo.description !== null) {
      return repo.description
    } else {
      return "No description given"
    }
  })
  return descripArray
}
console.log('\n7) ' +  newDescriptionsArray(data))

//8)
let keyInfo = (array) => {
  let keys = array.map((repo) => {
    if (typeof(repo.owner) !== "string") {
      return `\n\nRepo name is ${repo.name},\n${repo.watchers_count} watchers,\nthere is no owner`
    } else {
      return `\n\nRepo name is ${repo.name},\n${repo.watchers_count} watchers,\nowner is ${repo.owner}`
    }
  })
  return keys
}
console.log('\n8) ' +  keyInfo(data))

//9)
let monkeyKeys = (array) => {
  let keys = []
  array.forEach((repo) => {
    if (repo.name === "monkey_party") {
       keys = Object.keys(repo.license)
    }
  })
  return keys.join(" ")
}
console.log('\n9) ' + monkeyKeys(data))

//10)
let urlValue = (array) => {
  let urlAddy = ""
  array.forEach((repo) => {
    if (repo.name === "monkey_party") {
       urlAddy = repo.license.url
    }
  })
  return urlAddy
}
console.log('\n10) ' + urlValue(data))

module.exports = { numOfRepos, largestRepo, mostRecentRepo, noGazers, maxGazers, hasDescriptions, newDescriptionsArray, keyInfo, monkeyKeys, urlValue }
