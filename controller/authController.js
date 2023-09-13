const { StatusCodes } = require("http-status-codes")

// register user
const register = async (req,res) => {
    try{
        res.json({ msg: "register" })
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// login user
const login = async (req,res) => {
    try{
        res.json({ msg: "login" })
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// logout user
const logout = async (req,res) => {
    try{
        res.json({ msg: "logout" })
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get login token
const getToken = async (req,res) => {
    try{
        res.json({ msg: "" })
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get current user
const getCurrentUser = async (req,res) => {
    try{
        res.json({ msg: "" })
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { register, login, logout, getToken, getCurrentUser }
