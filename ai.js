const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Your Google Custom Search API details
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your API Key
const CX = 'YOUR_CUSTOM_SEARCH_ENGINE_ID'; // Replace with your Search Engine ID

// Middleware to parse JSON
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API Route to handle search queries
app.post('/search', async (req, res) => {
    const query = req.body.query;  // Get the search query from the frontend

    if (!query) {
        return res.status(400).json({ error: 'No query provided' });
    }

    try {
        // Make a request to Google Custom Search API
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
            params: {
                key: GOOGLE_API_KEY,
                cx: CX,
                q: query,
            }
        });

        // Send search results back to frontend
        res.json(response.data.items);  // Return the search results
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ error: 'Failed to fetch search results' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
