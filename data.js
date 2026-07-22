// ここだけ書き換えれば表示内容を更新できます。
// 金額は田中貴金属 RE:TANAKA リサイクル価格を確認して、手入力してください。
window.SIGNAGE_DATA = {
  slideSeconds: 6,
  shopName: "あーるさいず",
  place: "YOKOHAMA HIYOSHI",

  prices: {
    updatedAt: "2026年7月22日 9:30発表",
    source: "田中貴金属 RE:TANAKA リサイクル価格参考",
    items: [
      { label: "K24", value: "21,509", unit: "円/g" },
      { label: "K18", value: "15,703", unit: "円/g" },
      { label: "Pt900", value: "6,837", unit: "円/g" },
      { label: "Pt850", value: "6,321", unit: "円/g" }
    ],
    disclaimer: "価格は更新時の買取価格です。手数料はかかりません。"
  },

  brands: [
    "RON HARMAN", "RALPH LAUREN", "ZARA", "Theory", "Deuxieme Classe", "TOM FORD", "DoCLASSE", "CHANEL", "HERMÈS", "ONWARD製品"
  ],

  season: {
    title: "夏物買取強化中",
    keywords: ["ワンピース", "リネン", "ブラウス", "サンダル", "カーディガン"]
  },

  closed: {
    text: "日曜日・祝日",
    hours: "営業時間 11:00 - 18:00"
  },

  campaign: {
    title: "査定無料",
    sub: "予約不要｜その場で現金買取｜お気軽にお持ちください"
  }
};
