const fs = require('fs');

///open a file
////read write append
///close

function writeData (){

    //fs.openSync('data.txt','w')
    //fs.writeFileSync('./filehandling/data.txt',"hello from node.....")
    fs.appendFileSync('./filehandling/data.txt',"hi.......")
    
}
module.exports = {writeData}

module.exports.readData = () =>{

    const data = fs.readFileSync('./filehandling/data.txt')
    console.log(data.toString())
}
module.exports.deleteFile= ()=>{

    if(fs.existsSync('./filehandling/data.txt')){
        fs.unlinkSync('./filehandling/data.txt')
    }
    else{
        console.log("file not found")
    }
}
module.exports.createFolder = ()=>{

    if(!fs.existsSync('./filehandling/assets')){
        fs.mkdirSync('./filehandling/assets')
    }
    else{
        console.log("folder already exists")
    }
}



module.exports.copyFile = () =>{

    fs.copyFileSync('./filehandling/data.txt','./filehandling/assets/data.txt')
}

module.exports.addJoson = ()=>{

    var users = [
        {
            name:"ram",
            age:23

        },
        {
            name:"shyam",
            age:24
        },
        {
            name:"hari",
            age:25
        }
    ]

    fs.writeFileSync('./filehandling/users.json',JSON.stringify(users))
}

module.exports.readJson = ()=>{

    var strData = fs.readFileSync('./filehandling/users.json')
    var data = JSON.parse(strData)
    console.log(data)
    console.log(data[0].name)

}
//rename

