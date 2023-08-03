class StorageTools {
  get = (key: string): any => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  };

  set = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };
}

const appStorage = new StorageTools();

export default appStorage;
