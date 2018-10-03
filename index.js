const Sentiment = require('sentiment')
const fs = require('fs')

const sentiment = new Sentiment()

function analyzeString(text, file) {
  const result = sentiment.analyze(text)

  console.log(``)
  if (file) console.log(file)
  if (!file) console.log(`"${text.substring(0, 30)}..."`)
  console.dir(result.comparative)
}

function analyzeFile(file) {
  const text = fs.readFileSync(file, 'utf-8')
  analyzeString(text, file)
}

analyzeFile('jfk-speech.txt')
analyzeFile('mlk-speech.txt')

analyzeString('Very great fantastic wonderful amazing happy fun!')
analyzeString('A painful, horrible and tragic disaster made worse!')
