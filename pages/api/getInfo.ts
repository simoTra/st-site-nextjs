import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Info } from "../../typings";

const query = groq`*[_type == 'info']`;

type Data = {
  info: Info;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const info: Info = await sanityClient.fetch(query);
  res.status(200).json({ info });
}
