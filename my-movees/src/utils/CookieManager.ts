export default class CookieManager {
  /**
   * Set a cookie
   * @param name Name of the cookie
   * @param value Value to store
   * @param days Number of days until expiration
   */
  static set(name: string, value: string, path: string = '/', days: number = 7): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires: string = "expires=" + date.toUTCString();

    // Using encodeURIComponent to handle special characters
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=${path};SameSite=Strict`;
  }

  /**
   * Get a cookie value by name
   */
  static get(name: string): string | null {
    const nameEQ: string = name + "=";
    const ca: string[] = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c: string = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }

  /**
   * Remove a cookie
   */
  static remove(name: string): void {
    this.set(name, "", -1);
  }
}
