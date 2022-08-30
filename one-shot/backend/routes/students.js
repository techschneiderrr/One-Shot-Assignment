const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const batch_year = Number(req.body.batch_year);
  const college_id = req.body.college_id;
  const skills = req.body.skills;

  const newStudent = new Student({
    name,
    batch_year,
    college_id,
    skills,
  });

  newStudent.save()
  .then(() => res.json('Student added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      student.name = req.body.name;
      student.batch_year = Number(req.body.batch_year);
      student.college_id = req.body.college_id;
      student.skills = req.body.skills;

      student.save()
        .then(() => res.json('Student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;