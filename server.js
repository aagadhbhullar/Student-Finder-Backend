const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const getStudents = () => {
  const data = fs.readFileSync('./students.json');
  return JSON.parse(data);
};

app.get('/api/students/search', (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : '';
  
  if (query.length < 3) {
    return res.json([]);
  }

  const students = getStudents();
  
  const results = students
    .filter(student => {
      // Updated to use lowercase 'name' to match your file
      return student.name && student.name.toLowerCase().includes(query);
    })
    .slice(0, 5);

  res.json(results);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));