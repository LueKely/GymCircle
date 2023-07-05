export default {
  storeInSessionStorage(key: string, value: any): void {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      console.error("Session storage is not supported.");
    }
  },

  checkSessionKeyExists(key: string): boolean {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage.getItem(key) !== null;
    } else {
      console.error("Session storage is not supported.");
      return false;
    }
  },
  getSessionKey(key: string): any {
    if (typeof sessionStorage !== "undefined") {
      const value = sessionStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } else {
      console.error("Session storage is not supported.");
    }
    return null;
  },
  deleteSessionKey(key: string) {
    if (typeof key === "string") {
      sessionStorage.removeItem(key);
      console.log(`Key '${key}' deleted from session.`);
    } else {
      console.error("Invalid key. Please provide a valid string key.");
    }
  },
};
