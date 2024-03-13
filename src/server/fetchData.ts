let dataUrl =
  'https://file.notion.so/f/f/cde8212e-b06b-4ad3-82d7-d131736faea7/05f37d42-34c1-432c-9be8-c2361fe57103/answers.json?id=fab8c536-5aff-42fb-849f-30d2622086e4&table=block&spaceId=cde8212e-b06b-4ad3-82d7-d131736faea7&expirationTimestamp=1710345600000&signature=jAX_tMqZ6THgUQpu2Szpp_D1BFNFfhfEldSGSH-Y7G8&downloadName=answers.json';
const ageGender = async () => {
  const res = await fetch(dataUrl);
  const data = await res.json();
  return data;
};
export const DataFetchingService = {
  ageGender
};
