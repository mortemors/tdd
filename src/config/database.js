module.exports = {
  host: process.env.DB_HOST,
  username: 'postgres',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};