
export const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 156) + 100; // Generating a random value between 100 and 255
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};



