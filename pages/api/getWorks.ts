import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Work } from "../../typings";

const query = groq`*[_type == 'work']{
  ...,
  skill[]->
}`;

type Data = {
  works: Work[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const works: Work[] = await sanityClient.fetch(query);
  res.status(200).json({ works });
}
