import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), 'data', 'used-payments.json');
export const CACHE_EXPIRATION_MINUTES = 2;

const ensureDataDirectory = () => {
  const dataDir = path.dirname(CACHE_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

const readCache = () => {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(CACHE_FILE)) {
      return {};
    }
    const data = fs.readFileSync(CACHE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading payment cache:', error);
    return {};
  }
};

const writeCache = (cache) => {
  try {
    ensureDataDirectory();
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch (error) {
    console.error('Error writing payment cache:', error);
  }
};

const cleanExpiredPayments = (cache) => {
  const now = new Date().getTime();
  const cleanedCache = {};
  
  Object.keys(cache).forEach(paymentId => {
    const paymentData = cache[paymentId];
    const timeDifferenceMs = now - new Date(paymentData.timestamp).getTime();
    const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);
    
    if (timeDifferenceMinutes <= CACHE_EXPIRATION_MINUTES) {
      cleanedCache[paymentId] = paymentData;
    } else {
      console.log(`[CACHE] Removing expired payment ID: ${paymentId} (${timeDifferenceMinutes.toFixed(2)} minutes old)`);
    }
  });
  
  return cleanedCache;
};

export const isPaymentIdUsed = (paymentId) => {
  const cache = readCache();
  const cleanedCache = cleanExpiredPayments(cache);

  writeCache(cleanedCache);
  
  return cleanedCache.hasOwnProperty(paymentId);
};

export const markPaymentIdAsUsed = (paymentId, additionalData = {}) => {
  const cache = readCache();
  const cleanedCache = cleanExpiredPayments(cache);
  
  cleanedCache[paymentId] = {
    timestamp: new Date().toISOString(),
    usedAt: new Date().toISOString(),
    ...additionalData
  };
  
  writeCache(cleanedCache);
  console.log(`[CACHE] Payment ID marked as used: ${paymentId}`);
};