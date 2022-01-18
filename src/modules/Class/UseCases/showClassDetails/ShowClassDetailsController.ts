import { Request, Response } from 'express';
import { ShowClassDetailsUseCases } from './ShowClassDetailsUseCases';

export class ShowClassDetailsController {
  async handle(request: Request, response: Response) {
    const param = request.params.id;
    const name = param.toString();
    const showClassDetailsUseCases = new ShowClassDetailsUseCases();

    const result = await showClassDetailsUseCases.execute({ name });
    if (result === 'Not found class') {
      return response.status(400).json({ ok: false, why: result });
    }

    return response.json(result);
  }
}
