import axios from 'axios';


async function fetchData() {
    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/chatgpt',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd557b3c892msh229a6379e3a805ep15c210jsnb938b7f28495',
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
  