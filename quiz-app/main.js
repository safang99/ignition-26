// your code, here
rami = 88
natoya = 92
max = 68
lynn = 100
let justJavaScript = [rami, natoya, max, lynn]
let team1Sum = (rami + natoya + max + lynn)
let team1Avg = (team1Sum / justJavaScript.length)
sasha = 82
mohammed = 98
jennifer = 94
denise = 92
let weAreRuby = [sasha, mohammed, jennifer, denise]
let team2Sum = (sasha + mohammed + jennifer + denise)
let team2Avg = (team2Sum / weAreRuby.length)
let bothTeams = justJavaScript.concat(weAreRuby)
let bothAvg = (team1Sum + team2Sum) / bothTeams.length


above70 = 0
bothTeams.forEach((grade) => {
  if (grade >= 70) {
    above70 ++
  }
})

console.log(`Team justJavaScript has an average score of ${Math.round(team1Avg)}.`)
console.log(`Team weAreRuby has an average score of ${Math.round(team2Avg)}.`)
console.log(`Both teams combined have an average score of ${Math.round(bothAvg)}.`)
console.log(`There were ${above70} students with a score of 70 or better.`)
