// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
// Joshua was here
app.use(cors());
app.use(express.json());

// Hard-coded initial data based on SRS Wireframe 3
const mockOpportunities = [
  {
    id: 1,
    title: "Food Bank Helper",
    organization: "Community Food Center",
    date: "June 15, 2026",
    time: "10:00am - 2:00pm",
    location: "Omaha, NE",
    helpersWanted: 5,
    spotsRemaining: 3,
    description: "Volunteers will help sort donated food, organize shelves, and prepare food boxes for families.",
    requirements: [
      "Must be able to stand for 2 hours",
      "Closed-toe shoes required",
      "No prior experience required"
    ]
  }
];

// API endpoint to fetch opportunities
app.get('/api/opportunities', (req, res) => {
  res.json(mockOpportunities);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});