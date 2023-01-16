const bcrypt = require('bcrypt');
const saltRounds = 10;


// const hashPassword=(password) =>{

//     return bcrypt.hashSync(password, saltRounds);    
// }
// const matchPassword = (password,hashPassword) =>{
//     return bcrypt.compareSync(password, hashPassword);
// }

// console.log(hashPassword('raj'));
// console.log(matchPassword('raj','$2b$10$Msn7E7cGR6itdEbtyRAlouOX11ViYfDJRXtpoGTA0gTygxZTno7Lq'));


const hashPassword1  = async (password) =>{


        const hash = await bcrypt.hash(password, saltRounds);

        return hash;

}


const comparePassword1 = async (password,hashPassword) =>{

    const result = await bcrypt.compare(password, hashPassword);
    return result;
}



module.exports = {hashPassword1,comparePassword1};