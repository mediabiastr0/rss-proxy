import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/rss", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: "URL gerekli" });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const text = await response.text();

    res.send(text);

  } catch (err) {
    res.status(500).json({ error: "RSS alınamadı" });
  }
});

app.listen(3000, () => {
  console.log("Server çalışıyor");
});
