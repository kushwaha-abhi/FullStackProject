import express from 'express';
import { addFood, listFood , removeFood, searchFoods} from '../controllers/foodController.js'; // Ensure the correct file extension
import multer from 'multer';
import path from 'path';
const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);
foodRouter.get('/search', searchFoods);

export default foodRouter;