// api/swiggy.js
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  const { lat, lng, str } = req.query;
  
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat || '19.120842'}&lng=${lng || '72.9250169'}&str=${str || 'Mumbai'}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9',
          'Referer': 'https://www.swiggy.com/',
          'Origin': 'https://www.swiggy.com'
        }
      }
    );
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch data from Swiggy API' });
  }
}