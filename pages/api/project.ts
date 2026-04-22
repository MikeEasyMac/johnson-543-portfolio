import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/library/db';
import Project, { ProjectModelType } from '@/models/project';

type ResponseData = {
  message?: string;
  data?: ProjectModelType[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();
  const { method } = req;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache');

  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find({});
        res.status(200).json({ message: 'Projects Found', data: projects });
        break;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        res.status(400).json({ message: errorMessage });
        break;
      }
    default:
      res.status(400).json({ message: 'Method not allowed' });
      break;
  }
}