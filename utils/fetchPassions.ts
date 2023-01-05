import { Passion } from "../typings";
export const fetchPassions = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPassions`
  );

  const data = await res.json();
  const passions: Passion[] = data.passions;

  return passions;
};
