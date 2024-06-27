const defaultTarget = 'https://api.igdb.com/v4';
module.exports = [
    {
       context: ['/games', '/genres', '/platforms'],
       target: defaultTarget,
       changeOrigin: true,
    }
    ]