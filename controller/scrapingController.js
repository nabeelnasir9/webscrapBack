// const axios = require('axios');

// exports.getScrapedData = async (req, res) => {
//     const query = req.body.query;
//     try {
//         const response = await axios.get(`https://serpapi.com/search?q=${query}&api_key=16281ef4dfa3b3fbfa9a84414f1a9f30401a3031d28b47c896d8ccad3d3c48ea`);
        
//         // Extract data from response, depending on the structure of the data returned from SERP API
//         // For example: 
//         const emails = response.data.emails; // This is just hypothetical
//         const phoneNumbers = response.data.phoneNumbers;

//         res.json({
//             emails,
//             phoneNumbers
//         });
//         console.log(response.data);  // Log data received from serpapi

//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch data" });
//     }
// };

const axios = require('axios');

exports.getScrapedData = async (req, res) => {
    const query = req.body.query;
    console.log(`Received query: ${query}`);  // Log received query

    try {
        const response = await axios.get(`https://serpapi.com/search?q=${query}&api_key=16281ef4dfa3b3fbfa9a84414f1a9f30401a3031d28b47c896d8ccad3d3c48ea`);
        
        console.log("Data received from serpapi:", response.data);  // Log data received from serpapi

        res.json(response.data); // Send the entire data directly to frontend
        
    } catch (error) {
        console.error("Error fetching data from serpapi:", error.message);  // Log the error
        res.status(500).json({ error: "Failed to fetch data" });
    }
};

