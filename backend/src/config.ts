import 'dotenv/config'

const config = {
  JWT_PUBLIC: process.env.JWT_PUBLIC,
  JWT_PRIVATE: process.env.JWT_PRIVATE,
  FE_URL: process.env.FE_URL
}

export default config
