const bcrypt =require('bcrypt')
const gethash =(pwd)=>{
    return bcrypt.hash(pwd,1)
}

module.exports={gethash}