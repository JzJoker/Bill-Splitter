const express = require('express');
const mongoose = require('mongoose');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/examples', exampleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
