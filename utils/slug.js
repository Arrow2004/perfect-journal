module.exports.slug = (string)=>{
    date = new Date()
    string = `${string.replaceAll(" ","-").toLocaleLowerCase()}-${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    return string;
}