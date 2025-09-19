import { BACKEND_URL } from "./constants";

export const api = {
  async get<T = unknown>(url: string, accessToken?: string): Promise<T> {
    const endpoint = `${BACKEND_URL}/${url}`;
    try {
      // get data
      const res = await fetch(endpoint, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // data to js object
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("GET request failed:", error);
      throw error;
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post(url: string, body: any, accessToken?: string) {
    const endpoint = `${BACKEND_URL}/${url}`;
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("POST request failed:", error);
      throw error;
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async put(url: string, body: any, accessToken?: string) {
    const endpoint = `${BACKEND_URL}/${url}`;
    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("PUT request failed:", error);
      throw error;
    }
  },

  async delete(url: string, accessToken?: string) {
    const endpoint = `${BACKEND_URL}/${url}`;
    try {
      const res = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("DELETE request failed:", error);
      throw error;
    }
  },
};
