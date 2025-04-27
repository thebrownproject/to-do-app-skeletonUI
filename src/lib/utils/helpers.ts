/**
 * Storage functions
 */
export function saveToLocalStorage(key: String, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to local storage", error);
  }
}

export function getFromLocalStorage(key: string): null {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error retrievinf from localStorage", error);
    return null;
  }
}
