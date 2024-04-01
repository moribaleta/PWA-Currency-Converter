const STORAGE_KEY = 'Cache';

export const CachingManager = {
  storage: new Map<string, any>(),
  saveToLocalStorage: () => {
    const storage = JSON.stringify(Object.fromEntries(CachingManager.storage));
    console.log('@saveToLocalStorage', storage);
    localStorage.setItem(STORAGE_KEY, storage);
  },
  loadFromLocal: () => {
    const cached = localStorage.getItem(STORAGE_KEY) ?? '[]';
    console.log('@loadFromLocal', cached);
    CachingManager.storage = new Map(Object.entries(JSON.parse(cached)));
  },
  setCache: (key: string, value: any) => {
    CachingManager.storage.set(key, JSON.stringify(value));
    CachingManager.saveToLocalStorage();
  },
  getCache: (key: string) => {
    const cached = CachingManager.storage.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
  },
};

CachingManager.loadFromLocal();
