/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"
const student_image_url='https://images.pexels.com/photos/20230197/pexels-photo-20230197.jpeg?_gl=1*hdwxx6*_ga*ODEzMjI4NDg5LjE3NjQxOTg4MjU.*_ga_8JE65Q40S6*czE3NjQxOTg4MjUkbzEkZzEkdDE3NjQxOTg5MTIkajM2JGwwJGgw';

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: student_image_url,
    allowNull: true
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;