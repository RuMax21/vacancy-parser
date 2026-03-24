import { Router, Request, Response } from 'express';
import { SearchParams } from '../types';
import { getVacancies } from '../services';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const params: SearchParams = {
      text: req.query.text as string,
      page: parseInt(req.query.page as string) || 0,
      per_page: parseInt(req.query.per_page as string) || 20
    };
    const result = await getVacancies(params);
    
    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Error loading vacancies' });
  }
})

export default router;
