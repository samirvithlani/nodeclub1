
// const sum  = require('./calc')
// const name = require('./calc')
// console.log(sum(1,2))
// console.log(name)
const http = require('http')
const calc = require('./calc')
const file = require('./filehandling/File1')

// console.log(calc.sum(1,2))
// console.log(calc.name)
// console.log(calc.user.name)
// console.log(calc.add(1,2,3))
// console.log(calc.employee)
//file.writeData()
//file.readData()
//file.deleteFile()
//file.createFolder()
//file.copyFile()
//file.addJoson()
file.readJson()

const PORT = 3000
const server  = http.createServer()
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})



