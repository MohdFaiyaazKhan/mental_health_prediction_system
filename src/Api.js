// API_KEY = 'sk-proj-MNrdQPPZ1UaQMVV5Lt4zT3BlbkFJWSxRs5JyT2hktyvZRhOc';

import axios from 'axios';


async function fetchData() {
    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/chatgpt',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: 'hello'
          }
        ],
        web_access: false
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the function to fetch data
  fetchData();
  