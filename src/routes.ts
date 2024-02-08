import config from "./utils/config";

const register = async (
  email: string,
  password: string,
  registrationType: string
) => {
  try {
    let url: string = `${config.lapaAuthenticationProtocol}://${config.lapaAuthenticationIp}:${config.lapaAuthenticationPort}/register`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        registration_type: registrationType,
      }),
    });
    console.log(response);

    if (response.status === 201) {
      const result = await response.json();
      console.log(`User registered successfully. ${result}`);
      return result;
    } else {
      console.error(`Failed to register: ${response}`);
      throw new Error(`Failed to register: ${response}`);
    }
  } catch (exc) {
    throw exc;
  }
};

export { register };
