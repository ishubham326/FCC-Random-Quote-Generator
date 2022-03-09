import axios from "axios";

export const getQuotes = async () => {
  try {
    const data = await axios.get(
      "https://quotes15.p.rapidapi.com/quotes/random/",
      {
        headers: {
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_QUOTE_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
