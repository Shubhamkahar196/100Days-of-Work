// const JWT_USER_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
// const JWT_ADMIN_PASSWORD = process.env.JWT_USER_PASSWORD;

// module.exports ={
//     JWT_ADMIN_PASSWORD,
//     JWT_USER_PASSWORD
// }

const config = {
    port: process.env.PORT,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  };
  
  export {config }
