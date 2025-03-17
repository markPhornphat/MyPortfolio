import { Request, Response } from "express";
//This is for validate the endpoint
export function getExample(req: Request, res: Response) {
  res.send("This is get Example");
}
