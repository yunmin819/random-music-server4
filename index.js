const express = require('express');
const app = express();
const port = 3000;

const musicList = [
  "https://www.youtube.com/watch?v=PEnJbjBuxnw",
  "https://www.youtube.com/watch?v=7Kuwwta_Mms",
  "https://www.youtube.com/watch?v=p1noRCUvsrM",
  "https://www.youtube.com/watch?v=vFimC3To0MU",
  "https://www.youtube.com/watch?v=AsO-6XuIi98",
  "https://www.youtube.com/watch?v=JnxBSPBlzyE",
  "https://www.youtube.com/watch?v=mBXBOLG06Wc",
  "https://www.youtube.com/watch?v=J5juKw-mnGw",
  "https://www.youtube.com/watch?v=AKg_9dn_VmA",
  "https://www.youtube.com/watch?v=Jy-QS27q7lA",
  "https://www.youtube.com/watch?v=x2rvSf0STBM",
  "https://www.youtube.com/watch?v=c_yCRwh97M8",
  "https://www.youtube.com/watch?v=fLi0EJfi_vg",
  "https://www.youtube.com/watch?v=Y2V6yjjPbX0",
  "https://www.youtube.com/watch?v=fWNaR-rxAic",
  "https://www.youtube.com/watch?v=fLexgOxsZu0",
  "https://www.youtube.com/watch?v=GhH4rTap48M",
  "https://www.youtube.com/watch?v=dvgZkm1xWPE",
  "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  "https://www.youtube.com/watch?v=NyVYXRD1Ans&list=PLX3cI5NYkjAg4Wgrq8cF05MqdVYoZESHT&index=4",
  "https://www.youtube.com/watch?v=Wk008ADh4iY&list=PLX3cI5NYkjAg4Wgrq8cF05MqdVYoZESHT&index=8"
];

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * musicList.length);
  const randomSong = musicList[randomIndex];
  res.redirect(randomSong);
});

app.listen(port, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${port}`);
});
