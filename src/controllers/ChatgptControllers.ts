import { Request, Response, NextFunction } from 'express'
import ChatgptService from '~/services/ChatgptService'

const gettext = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render('index',{
        listtext: null
      });
  } catch (error) {
    next(error)
  }
};
const posttext = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let _text = req.body.keyword as string;
      const data = await ChatgptService.arrychat(_text);
      res.render('index',{
          listtext: data
        });
    } catch (error) {
      next(error)
    }
  }
export default {
    gettext,
    posttext
}
