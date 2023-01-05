import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Passion } from "../../typings";

const query = groq`*[_type == 'passion']{
  ...,
  skill[]->
}`;

type Data = {
  passions: Passion[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const passions: Passion[] = await sanityClient.fetch(query);
  res.status(200).json({ passions });
}
