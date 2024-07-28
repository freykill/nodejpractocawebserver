import env from "dotenv";
env.config()
const envs = {
    PORT: (process.env.PORT),
    PUBLIC_PATH: (process.env.PUBLIC_PATH)
}


export   {
    envs
}