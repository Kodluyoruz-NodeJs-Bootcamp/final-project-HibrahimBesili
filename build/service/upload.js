var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../upload/posts');
    },
    filename: function (req, file, cb) {
        cb(null, req.name + "" + path.extname(file.originalname));
    }
});
var fileFilter = function (req, file, cb) {
    if (file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png") {
        cb(null, true);
    }
    else {
        cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
    }
};
var uploadPhoto = multer({ storage: storage, fileFilter: fileFilter });
module.exports = uploadPhoto;
//# sourceMappingURL=upload.js.map