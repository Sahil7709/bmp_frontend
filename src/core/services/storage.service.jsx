class StorageService {
  static setData(key, data) {
    localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
  }

  static getData(key) {
    const val = localStorage.getItem(key);
    if ((val != undefined && val != 'undefined') && (val != null && val != 'null')) {
      try {
        const parsed = JSON.parse(val);
        return parsed;
      } catch (e) {
        return val; // Return as string if not valid JSON
      }
    } else {
      return null;
    }
  }

  static clear() {
    localStorage.clear();
  }
}

export default StorageService;