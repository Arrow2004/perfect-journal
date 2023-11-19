const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const uploadPDF = async (file)=>{
    return new Promise((res, rej) =>{
        const uploadPic = cloudinary.uploader.upload_stream(
            {
                folder: "perfect-journal-pdf",
                resource_type: "auto"
            },
            (error, result) => {
                    if (error) rej(error);
                    res(result.url)
            }
        )
        streamifier.createReadStream(file.buffer).pipe(uploadPic)
    })
}
const uploadImage = async (file)=>{
    return new Promise((res, rej) =>{
        const uploadPic = cloudinary.uploader.upload_stream(
            {
                folder: "perfect-journal-pictures"
            },
            (error, result) => {
                    if (error) rej(error);
                    res(result.url)
            }
        )
        streamifier.createReadStream(file.buffer).pipe(uploadPic)
    })
}

module.exports = {uploadImage,uploadPDF}