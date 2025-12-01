/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models
const student_image_url='https://images.pexels.com/photos/20230197/pexels-photo-20230197.jpeg?_gl=1*hdwxx6*_ga*ODEzMjI4NDg5LjE3NjQxOTg4MjU.*_ga_8JE65Q40S6*czE3NjQxOTg4MjUkbzEkZzEkdDE3NjQxOTg5MTIkajM2JGwwJGgw';
const campus_image_url='https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?_gl=1*1ltgmlh*_ga*ODEzMjI4NDg5LjE3NjQxOTg4MjU.*_ga_8JE65Q40S6*czE3NjQxOTg4MjUkbzEkZzEkdDE3NjQxOTk5NzgkajQwJGwwJGgw';

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageURL: campus_image_url
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageURL: campus_image_url
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageURL: campus_image_url
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      lastname: "Smith",
	  email: "joe.smith@example.com",
	  imageUrl: student_image_url,
	  gpa: 3.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      lastname: "Johnson",
	  email: "mary.johnson@example.com",
	  imageUrl: student_image_url,
	  gpa: 3.8
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	try{
		await Student.create({
			firstname: "Fail",
			lastname: "Williams",
			email: "fail.williams@example.com",
			//imageUrl: student_image_url,
			gpa: 5.0
		});
		console.log("Created student with invalid GPA");
	} catch (error) {
		if(error.name === 'SequelizeValidationError') {
			console.log("Success: Passed validation and did not create student with invalid GPA");
		}
		else{
			throw error;
		}
	}
}

// Export the database seeding function
module.exports = seedDB;