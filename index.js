exports = module.exports = detect;

function isServer() {
  if (typeof window === 'undefined') return true;
  return false;
}