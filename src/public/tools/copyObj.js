//深度copy对象
export default obj => {
    return JSON.parse(JSON.stringify(obj));
};