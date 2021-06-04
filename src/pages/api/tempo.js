// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const dynamicDate = new Date();
  res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");

  res.json({ date: dynamicDate.toGMTString() });
};
