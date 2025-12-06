import { Request, Response } from 'express';
import { generateAffirmation } from '../services/gemini.js';
import { CategoryListResponse, AffirmationResponse } from '../models/types.js';

export const getRandomAffirmation = async (req: Request, res: Response) => {
    const affirmation = await generateAffirmation();
    const response: AffirmationResponse = { affirmation };
    res.json(response);
};

export const getCategories = (req: Request, res: Response) => {
    const categories = [
        'Love',
        'Success',
        'Health',
        'Confidence',
        'Gratitude',
        'Peace',
        'Creativity'
    ];
    const response: CategoryListResponse = { categories };
    res.json(response);
};

export const getAffirmation = async (req: Request, res: Response) => {
    const category = req.query.category as string;

    if (!category) {
        const affirmation = await generateAffirmation();
        const response: AffirmationResponse = { affirmation };
        return res.json(response);
    }

    const affirmation = await generateAffirmation(category);
    const response: AffirmationResponse = { affirmation, category };
    res.json(response);
};
