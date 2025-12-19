const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// set folder Public sebagai static
app.use(express.static(path.join(__dirname, 'Public')));

// route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

// route untuk /journals tanpa .html
app.get('/journals', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'journals.html'));
});

app.get('/overview-we-serve', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'overviewWeServe.html'));
});
app.get('/researchers', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'researchers.html'));
});
app.get('/authors', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'authors.html'));
});
app.get('/reviewers', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'reviewers.html'));
});

app.get('/overview-we-are', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'overviewWeAre.html'));
});
app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'aboutUs.html'));
});
app.get('/open-access', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'openAccess.html'));
});

app.get('/publish-with-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'publishWithUs.html'));
});

app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'contactUs.html'));
});

app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'newsDetail.html'));
});


app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
