import { Work } from "../typings";
export const fetchWorks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getWorks`);

  const data = await res.json();
  const works: Work[] = data.works;

  return works;
};
