const { VITE_SCENARIO } = import.meta.env;

const URL =
  VITE_SCENARIO === "local_port"
    ? "https://eco-ltsh-be.onrender.com"
    : VITE_SCENARIO === "local"
    ? "http://127.0.0.1:2186"
    : "https://eco-ltsh-be.onrender.com"; // for now;

const baseUrl: string = `${URL}/eco-ltsh/api/admin`;

const guestUrl: string = `${URL}/eco-ltsh/api/guest`;

const url: string = `${URL}/eco-ltsh/api`;

const plantUrl: string = `${URL}/eco-ltsh/api/plant`;

export { baseUrl, guestUrl, url, plantUrl };
