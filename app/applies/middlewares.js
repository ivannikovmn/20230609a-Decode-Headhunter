const Apply = require('./Apply')
const Resume = require('../resume/models/Resume')
const validateApply = (req, res, next) => {
    let errors = {};
    
    if(!req.body.resumeId || req.body.resumeId.length == 0)
        errors.resumeId = "Поле Резюме обязательное"

    if(!req.body.vacancyid || req.body.vacancyid.length == 0)
        errors.vacancyid = "Поле Вакансия обязательное"         

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfApply = async (req, res, next) => {
    try {
        const id = req.params.id

        const apply = await Apply.findByPk(id)

        if(!apply) res.status(400).send({message: "apply with that id is not exist"})
        else {
            const resumes = await Resume.findAll({
                where: {
                    userId: req.user.id
                }
            })
        
            const ids = resumes.map(item => item.id)
            // console.log(ids, id, ids.includes(id*1));
            if(ids.includes(id*1)){
                next()
            } else{
                res.status(403).send({message: "Access Forbiden"})
            }
        }
    } catch(error){
        res.status(500).send(error)
    }      
}

const isApplyExists = async (req, res, next) => {
    try {    
        const apply = await Apply.findByPk(req.body.applyId)

        if(!apply) res.status(400).send({message: "apply with that id is not exist"})
        req.body.id = apply.vacancyid
        // console.log(req.body);
        next()
    } catch(error){
        res.status(500).send(error)
    }     
}

module.exports = {
    validateApply,
    isAuthorOfApply,
    isApplyExists
}