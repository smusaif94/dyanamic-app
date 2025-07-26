const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Static folder 'public' serve karega
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
