import "dotenv/config";
import express from "express";
import cors from "cors";
import router from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/vacancies', router)

app.listen(PORT, () => {
  console.log(`App starting on port ${PORT}`);
});
