// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/new-students-server'
      
  },

  production: {
    client: 'pg',
    connection: process.eventNames.DATABASE_URL
      
  }

};
