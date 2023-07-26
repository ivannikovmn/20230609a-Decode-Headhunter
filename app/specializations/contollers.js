const Specialization = require('./models/Specialization')
const SpecializationType = require('./models/SpecializationType')

const getSpecializations = async (req, res) => {

    const SpecializationTypes = await SpecializationType.findAll({
        include: {
            model: Specialization,
            as: "specializations"
        }
    })

    res.status(200).send(SpecializationTypes)
}

module.exports = {
    getSpecializations
}