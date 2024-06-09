import config from "./utils/config";

const register = async (username: string, password: string) => {
  try {
    let url: string = `${config.lapaAuthenticationProtocol}://${config.lapaAuthenticationIp}:${config.lapaAuthenticationPort}/register_username?username=${username}&password=${password}`;
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to register: ${response}`);
    }
  } catch (exc) {
    throw exc;
  }
};

const login = async (username: string, password: string) => {
  try {
    let url: string = `${config.lapaAuthenticationProtocol}://${config.lapaAuthenticationIp}:${config.lapaAuthenticationPort}/login_username/?username=${username}&password=${password}`;
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to login: ${response}`);
    }
  } catch (exc) {
    throw exc;
  }
};

const generateAccessToken = async (userId: string, refreshToken: string) => {
  try {
    let url: string = `${config.lapaAuthenticationProtocol}://${config.lapaAuthenticationIp}:${config.lapaAuthenticationPort}/generate_access_token/?user_id=${userId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "refresh-token": refreshToken,
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to generate access token : ${response}`);
    }
  } catch (exc) {
    throw exc;
  }
};

const logout = async (
  userId: string,
  accessToken: string,
  refreshToken: string
) => {
  try {
    let url: string = `${config.lapaAuthenticationProtocol}://${config.lapaAuthenticationIp}:${config.lapaAuthenticationPort}/logout/?user_id=${userId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "access-token": accessToken,
        "refresh-token": refreshToken,
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to authenticate user on logout : ${response}`);
    }
  } catch (exc) {
    throw exc;
  }
};

export { register, login, generateAccessToken, logout };
