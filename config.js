module.exports = {
  //server port or localhost
  port: process.env.PORT || 3001,
  database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/carCollections'
}