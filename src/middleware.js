import multer from "multer";

const multerTxt = multer({ dest: "upload/text" });

export const uploadTxt = multerTxt.single("txtFile");
