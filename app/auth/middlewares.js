
const Role = require('./Role')
const User = require('./User')
// <Лишние>
// const isAuth = (req, res, next) => {
//     if(req.user) next()
//     else res.status(403).send ({message: "Unauthorized"})
// }
// </Лишние>

const isEmployee = async (req, res, next) => {
    if(req.user ) {
        const role = await Role.findByPk(req.user.roleId)

        if(role.name === "employee" ) next()
        else res.status(403).send({message: "Access deinided"})
    }
    else res.status(403).send ({message: "Unauthorized"})
}

const isManager = async (req, res, next) => {
    if(req.user ) {
        const role = await Role.findByPk(req.user.roleId)

        if(role.name === "manager" ) next()
        else res.status(403).send({message: "Access deinided"})
    }
    else res.status(403).send ({message: "Unauthorized"})
}

const validateSignUp = async (req, res, next) => {
    let errors = {}

    if(!req.body.email || req.body.email.length === 0){
        errors.email = "Поле Email обязательное"
    }
    if(!req.body.full_name || req.body.full_name.length === 0){
        errors.full_name = "Поле Имя и Фамилия обязательное"
    }
    if(!req.body.company_name || req.body.company_name.length === 0){
    // if(!req.body.company.name || req.body.company.name.length === 0){
        errors.company_name = "Поле Имя компании обязательное"
        // errors.company.name = "Поле Имя компании обязательное"
    }
    if(!req.body.password || req.body.password.length === 0){
        errors.password = "Поле Пароль обязательное"
    }
    if(!req.body.password2 || req.body.password2.length === 0){
        errors.password2 = "Поле Подтвердить пароль обязательное"
    }    
    if(req.body.password !== req.body.password2){
        errors.password2 = "Пароли не совпадают"
    }

    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(user){
        errors.email = "Пользователь с таким email уже зарегистрирован"
    }

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

module.exports = {
    // isAuth,
    isEmployee,
    isManager,
    validateSignUp
}