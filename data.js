// ここだけ書き換えれば表示内容を更新できます。
// 金額は田中貴金属 RE:TANAKA リサイクル価格を確認して、手入力してください。
window.SIGNAGE_DATA = {
  slideSeconds: 6,
  shopName: "あーるさいず",
  place: "YOKOHAMA HIYOSHI",

  prices: {
    updatedAt: "2026年8月31日 9:30発表",
    source: "田中貴金属 RE:TANAKA リサイクル価格参考",
    items: [
      { label: "K24", value: "22,992", unit: "円/g" },
      { label: "K18", value: "16,789", unit: "円/g" },
      { label: "Pt900", value: "7,524", unit: "円/g" },
      { label: "Pt850", value: "6,955", unit: "円/g" }
    ],
    disclaimer: "上記は買取価格です。重さ×上記価格でお支払い。手数料無料。"
  },

  brands: [
    "RON HARMAN", "RALPH LAUREN", "ZARA", "Theory", "Deuxieme Classe", "TOM FORD", "DoCLASSE", "CHANEL", "HERMÈS", "ONWARD製品"
  ],

  season: {
    title: "バーバリー買取強化",
    keywords: ["トレンチコート・バッグ・ワンピース"]
  },

  closed: {
    text: "日曜日・祝日",
    hours: "営業時間 11:00 - 18:00"
  },

  campaign: {
    title: "査定無料",
    sub: "予約不要｜お気軽にお持ちください"
  }
};
