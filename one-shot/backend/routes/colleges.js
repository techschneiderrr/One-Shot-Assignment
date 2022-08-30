const router = require('express').Router();
let College = require('../models/college.model');

router.route('/').get((req, res) => {
  College.find()
    .then(colleges => res.json(colleges))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const founded = Number(req.body.founded);
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const no_of_students = Number(req.body.no_of_students);
  const courses = req.body.courses;

  const newCollege = new College({
    name,
    founded,
    city,
    state,
    country,
    no_of_students,
    courses
  });

  newCollege.save()
  .then(() => res.json('College added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  College.findById(req.params.id)
    .then(college => res.json(college))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  College.findByIdAndDelete(req.params.id)
    .then(() => res.json('College deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  College.findById(req.params.id)
    .then(college => {
      college.name = req.body.name;
      college.batch_year = Number(req.body.batch_year);
      college.college_id = Number(req.body.college_id);
      college.skills = req.body.skills;

      college.save()
        .then(() => res.json('College updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;