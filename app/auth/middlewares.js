
const Role = require('./Role')
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

module.exports = {
    // isAuth,
    isEmployee,
    isManager
}