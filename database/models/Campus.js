/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"
const campus_image_url='https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?_gl=1*1ltgmlh*_ga*ODEzMjI4NDg5LjE3NjQxOTg4MjU.*_ga_8JE65Q40S6*czE3NjQxOTg4MjUkbzEkZzEkdDE3NjQxOTk5NzgkajQwJGwwJGgw';

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Campus name cannot be empty"
      }
    }
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Campus address cannot be empty"
      }
    }
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: campus_image_url,
    allowNull: true
  }
});

// Export the campus model
module.exports = Campus;