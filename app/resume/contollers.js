const Resume = require('./models/Resume')
const WorkingHistory = require('./models/WorkingHistory')
const Education = require('./models/Education')
const ForeignLanguage = require('./models/ForeignLanguage')
const ResumeEmploymentType = require('./models/ResumeEmploymentType')

const createResume = async (req, res) => {
    // console.log(req.body, req.user);
    // console.log(req.body);

    const resume = await Resume.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        position: req.body.position,
        cityId: req.body.cityId,
        citizenship: req.body.citizenship,
        about: req.body.about,
        birthday: req.body.birthday,
        gender: req.body.gender,
        salary_type: req.body.salary_type,
        main_language: req.body.main_language,
        skills: req.body.skills,
        salary: req.body.salary,
        salary: req.body.salary,
        userId: req.user.id
    })

    if(req.body.workingHistories && req.body.workingHistories.length > 0){
        // resume.workingHistories = []; // не работает
        req.body.workingHistories.forEach(async history => {
            // const newHistory = await WorkingHistory.create({ // не работает
             await WorkingHistory.create({
                resumeId: resume.id,
                company_name: history.company_name, 
                company_description: history.company_description, 
                responsibilities: history.responsibilities,    
                start_date: history.start_date, 
                end_date: history.end_date               
            })
            // resume.workingHistories.push(newHistory)// не работает
        })
    } 

    if(req.body.educations && req.body.educations.length > 0){
        req.body.educations.forEach(async edu => {        
             await Education.create({
                resumeId: resume.id,
                level: edu.level, 
                university_name: edu.university_name, 
                faculty: edu.faculty,    
                major: edu.major, 
                end_date: edu.end_date               
            })        
        })
    }    

    if(req.body.foreignLanguage && req.body.foreignLanguage.length > 0){
        req.body.foreignLanguage.forEach(async ln => {        
             await ForeignLanguage.create({
                resumeId: resume.id,
                level: ln.level, 
                name: ln.name              
            })        
        })
    }     

    if(req.body.employmentTypes && req.body.employmentTypes.length > 0){
        req.body.employmentTypes.forEach(async employmentTypeId => {        
             await ResumeEmploymentType.create({
                resumeId: resume.id,
                employmentTypeId: employmentTypeId
            })        
        })
    }        

    res.status(200).send(resume);
}

module.exports = {
    createResume
}