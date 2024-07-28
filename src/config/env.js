require('dotenv').config();

const envs = {
    PORT: (process.env.PORT),
    PUBLIC_PATH: (process.env.PUBLIC_PATH)
}


module.exports = {
    envs
}