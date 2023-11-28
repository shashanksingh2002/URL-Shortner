const { VALIDATION } = require('../constants/errorMessage')
const { isValidForCreate } = require('../validators/userAuthenticate.validator')
const userAuthenticateService = require('../services/userAuthenticate.service')

const create = async (req, res) => {
    try {
        const validatedData = await isValidForCreate(req.body)
        if(validatedData){
            const createUser = await userAuthenticateService.create(validatedData)
            return res.json(createUser)
        }
        else{
            res.json(VALIDATION)
        }
    }
    catch(err){
        throw err
    }
}

module.exports = {
    create,
}