// let dev = ['http://localhost:3000'];

// let dev = ['https://noxussj.top:3000'];

let build = ['https://noxussj.top:3000'];

export default process.env.NODE_ENV === 'development' ? dev : build;
