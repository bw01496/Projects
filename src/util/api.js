const WEB = "https://strangers-things.herokuapp.com/api/2108-ECE-RM-WEB-PT";

export const callApi = async ({ url, method, body, token }) => {
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (token) options.headers["Authorization"] = `Bearer ${token}`;
    const response = await fetch(`${WEB}${url}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
