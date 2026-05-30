export type FAQ = { question: string; answer: string };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "tra-duong-nhan" | "review-tra-duong-nhan" | "routine-dep-da" | "thanh-loc-co-the" | "kien-thuc-duong-nhan";
  productId?: string;
  relatedSlugs?: string[];
  intro: string;
  toc: string[];
  quickSummary?: string[];
  bestFor?: string[];
  notFor?: string[];
  sections: { heading: string; points: string[] }[];
  faqs: FAQ[];
};

export type Product = {
  id: string;
  name: string;
  image: string;
  priceOriginal: number;
  priceSale: number;
  shortDesc: string;
  benefits: string[];
  ingredients: string;
  whoFor: string;
  howToBrew: string;
  experience: string;
  caution: string;
  affiliateUrl: string;
};

export const categories = [
  { slug: "tra-duong-nhan", name: "TrÃ  dÆ°á»¡ng nhan", desc: "Gá»£i Ã½ trÃ  dÆ°á»¡ng nhan dá»… báº¯t Ä‘áº§u, dá»… duy trÃ¬ má»—i ngÃ y." },
  { slug: "review-tra-duong-nhan", name: "Review trÃ  dÆ°á»¡ng nhan", desc: "ÄÃ¡nh giÃ¡ thá»±c táº¿ sáº£n pháº©m trÃ  dÆ°á»¡ng nhan theo nhu cáº§u da vÃ  cÆ¡ Ä‘á»‹a." },
  { slug: "routine-dep-da", name: "Routine Ä‘áº¹p da", desc: "Routine uá»‘ng trÃ  vÃ  chÄƒm sÃ³c da Ä‘Æ¡n giáº£n cho ngÆ°á»i báº­n rá»™n." },
  { slug: "thanh-loc-co-the", name: "Thanh lá»c cÆ¡ thá»ƒ", desc: "CÃ¡ch dÃ¹ng trÃ  tháº£o má»™c há»— trá»£ thanh lá»c nháº¹ nhÃ ng, an toÃ n." },
  { slug: "kien-thuc-duong-nhan", name: "Kiáº¿n thá»©c dÆ°á»¡ng nhan", desc: "Kiáº¿n thá»©c ná»n vá» thÃ nh pháº§n, cÃ¡ch uá»‘ng vÃ  lÆ°u Ã½ khi dÃ¹ng trÃ  dÆ°á»¡ng nhan." }
] as const;

export const categoryLabelMap: Record<BlogPost["category"], string> = {
  "tra-duong-nhan": "TrÃ  dÆ°á»¡ng nhan",
  "review-tra-duong-nhan": "Review trÃ  dÆ°á»¡ng nhan",
  "routine-dep-da": "Routine Ä‘áº¹p da",
  "thanh-loc-co-the": "Thanh lá»c cÆ¡ thá»ƒ",
  "kien-thuc-duong-nhan": "Kiáº¿n thá»©c dÆ°á»¡ng nhan"
};

export const products: Product[] = [
  {
    id: "goji-tao-do-hoa-cuc",
    name: "Chè Dưỡng Nhan 14 Vị 500gr Có Hoa Mộc [Mua Gói Lớn 500gr]",
    image: "/images/products/01.jpg",
    priceOriginal: 105000,
    priceSale: 83000,
    shortDesc: "Giá bán: 83.000đ (giá gốc 105.000đ). Bộ chè dưỡng nhan 14 vị, dễ nấu và dễ dùng hằng ngày.",
    benefits: ["Công thức 14 vị dưỡng nhan", "Phù hợp nấu tại nhà", "Giá tốt cho người mới bắt đầu"],
    ingredients: "Set chè dưỡng nhan 14 vị (theo mô tả nhà bán).",
    whoFor: "Người muốn bắt đầu routine dưỡng nhan tại nhà với set lớn 500gr.",
    howToBrew: "Nấu theo hướng dẫn của shop; điều chỉnh đậm nhạt theo khẩu vị.",
    experience: "Hương thảo mộc dịu, phù hợp dùng đều trong tuần.",
    caution: "Kiểm tra thành phần chi tiết trên trang bán trước khi dùng.",
    affiliateUrl: "https://s.shopee.vn/gNJfaVqBY"
  },
  {
    id: "hoa-hong-lai-kho",
    name: "Chè dưỡng nhan tuyết yến ONICI SET 20-30 Gói Trà Thảo Mộc Dưỡng Nhan",
    image: "/images/products/02.jpg",
    priceOriginal: 78000,
    priceSale: 78000,
    shortDesc: "Giá bán: 78.000đ (giá gốc 78.000đ). Set túi/gói tiện lợi cho người bận rộn.",
    benefits: ["Dạng set nhiều gói tiện dùng", "Phù hợp dân văn phòng", "Giữ thói quen uống đều"],
    ingredients: "Tuyết yến và thảo mộc dưỡng nhan (theo mô tả nhà bán).",
    whoFor: "Người muốn giải pháp nhanh, ít chuẩn bị.",
    howToBrew: "Pha hoặc nấu theo hướng dẫn từ shop.",
    experience: "Tiện mang theo, dễ duy trì 1-2 lần/ngày.",
    caution: "Theo dõi phản ứng cá nhân khi dùng lần đầu.",
    affiliateUrl: "https://s.shopee.vn/2BC7SrZXw6"
  },
  {
    id: "gao-lut-hoa-hong",
    name: "Giảm Cân, Trà Hỗ Trợ Làm Đẹp Da Mát Gan Ngủ Ngon Đen Tóc",
    image: "/images/products/03.jpg",
    priceOriginal: 85000,
    priceSale: 85000,
    shortDesc: "Giá bán: 85.000đ (giá gốc 85.000đ). Dòng trà thảo mộc đa công dụng theo mô tả shop.",
    benefits: ["Hỗ trợ routine làm đẹp", "Dễ dùng mỗi ngày", "Mức giá ổn định"],
    ingredients: "Thành phần theo công bố của nhà bán trên Shopee.",
    whoFor: "Người tìm dòng trà dưỡng nhan kết hợp thư giãn nhẹ.",
    howToBrew: "Dùng theo liều lượng và hướng dẫn của shop.",
    experience: "Vị thảo mộc dễ chịu khi pha đúng cách.",
    caution: "Không thay thế tư vấn y tế hoặc chế độ điều trị.",
    affiliateUrl: "https://s.shopee.vn/110A5HGE2M"
  },
  {
    id: "cam-thao-hoa-cuc",
    name: "Combo 4kg nguyên liệu chè dưỡng nhan (5 set 800g) 14 vị thượng hạng, set nấu chè dưỡng nhan",
    image: "/images/products/04.jpg",
    priceOriginal: 525000,
    priceSale: 439000,
    shortDesc: "Giá bán: 439.000đ (giá gốc 525.000đ). Combo dung lượng lớn phù hợp dùng lâu dài.",
    benefits: ["Khối lượng lớn 4kg", "Phù hợp gia đình dùng chung", "Tiết kiệm theo set"],
    ingredients: "Set nguyên liệu 14 vị theo mô tả nhà bán.",
    whoFor: "Người muốn mua combo lớn để dùng dài hạn.",
    howToBrew: "Nấu theo hướng dẫn chi tiết của nhà bán.",
    experience: "Tiện chuẩn bị sẵn nhiều mẻ dùng trong tuần.",
    caution: "Bảo quản kín, khô ráo để giữ chất lượng.",
    affiliateUrl: "https://s.shopee.vn/4qCseh5Tlq"
  },
  {
    id: "nhai-goji-tam-sen",
    name: "Chè dưỡng nhan Quảng Đông, set thất bạch ẩm, nguyên liệu dưỡng nhan tự nhiên, dễ nấu",
    image: "/images/products/05.jpg",
    priceOriginal: 80000,
    priceSale: 70000,
    shortDesc: "Giá bán: 70.000đ (giá gốc 80.000đ). Set dưỡng nhan tự nhiên, hướng đến người mới.",
    benefits: ["Giá mềm, dễ tiếp cận", "Nguyên liệu tự nhiên", "Dễ nấu tại nhà"],
    ingredients: "Set thất bạch ẩm và nguyên liệu dưỡng nhan theo shop.",
    whoFor: "Người muốn thử trà dưỡng nhan ngân sách thấp.",
    howToBrew: "Pha/nấu theo hướng dẫn từ trang sản phẩm.",
    experience: "Dễ kết hợp vào routine sáng hoặc chiều.",
    caution: "Kiểm tra dị ứng thành phần trước khi dùng.",
    affiliateUrl: "https://s.shopee.vn/9pbYcH89uz"
  },
  {
    id: "tra-tui-loc-duong-nhan",
    name: "Combo 2 set chè dưỡng nhan 15 vị 500g Phương Nguyên - Tặng 6 quà (2 tuyết yến, 2 đông trùng, 2 hạt chia)",
    image: "/images/products/06.jpg",
    priceOriginal: 150000,
    priceSale: 105000,
    shortDesc: "Giá bán: 105.000đ (giá gốc 150.000đ). Combo quà tặng kèm, phù hợp mua dùng hoặc biếu.",
    benefits: ["Combo 2 set 500g", "Có quà tặng kèm", "Mức giảm giá tốt"],
    ingredients: "Set 15 vị dưỡng nhan + quà tặng theo mô tả nhà bán.",
    whoFor: "Người muốn combo đủ dùng nhiều ngày với chi phí tốt.",
    howToBrew: "Nấu theo hướng dẫn của shop để đạt vị phù hợp.",
    experience: "Tiện lên kế hoạch dùng dài ngày.",
    caution: "Xem kỹ hướng dẫn bảo quản và hạn dùng.",
    affiliateUrl: "https://s.shopee.vn/AAEP17McAc"
  }
];

export const posts: BlogPost[] = [
  {
    slug: "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau",
    title: "TrÃ  dÆ°á»¡ng nhan cho ngÆ°á»i má»›i: nÃªn báº¯t Ä‘áº§u tá»« Ä‘Ã¢u?",
    description: "HÆ°á»›ng dáº«n chá»n trÃ  dÆ°á»¡ng nhan cho ngÆ°á»i má»›i, tá»« thÃ nh pháº§n Ä‘áº¿n cÃ¡ch uá»‘ng Ä‘á»ƒ dá»… duy trÃ¬.",
    category: "tra-duong-nhan",
    relatedSlugs: ["6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay", "uong-tra-duong-nhan-luc-nao-la-tot-nhat", "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam"],
    intro: "Náº¿u báº¡n má»›i tÃ¬m hiá»ƒu trÃ  dÆ°á»¡ng nhan, Ä‘iá»u quan trá»ng nháº¥t lÃ  báº¯t Ä‘áº§u Ä‘Æ¡n giáº£n: chá»n vá»‹ dá»… uá»‘ng, lá»‹ch uá»‘ng cá»‘ Ä‘á»‹nh vÃ  theo dÃµi cÆ¡ thá»ƒ trong 2-3 tuáº§n.",
    toc: ["Chá»n trÃ  dÆ°á»¡ng nhan theo má»¥c tiÃªu", "ThÃ nh pháº§n nÃªn Æ°u tiÃªn", "Lá»‹ch uá»‘ng cho ngÆ°á»i má»›i"],
    quickSummary: ["Báº¯t Ä‘áº§u tá»« trÃ  vá»‹ dá»‹u, Ã­t thÃ nh pháº§n.", "Uá»‘ng Ä‘á»u 1-2 ly má»—i ngÃ y.", "Theo dÃµi pháº£n á»©ng da vÃ  giáº¥c ngá»§."],
    bestFor: ["NgÆ°á»i má»›i báº¯t Ä‘áº§u vá»›i trÃ  dÆ°á»¡ng nhan.", "NgÆ°á»i cáº§n routine dá»… duy trÃ¬."],
    notFor: ["NgÆ°á»i muá»‘n hiá»‡u quáº£ tá»©c thÃ¬ sau 1-2 ngÃ y.", "NgÆ°á»i cÃ³ bá»‡nh ná»n cáº§n chá»‰ Ä‘á»‹nh chuyÃªn mÃ´n."],
    sections: [
      { heading: "Chá»n trÃ  theo má»¥c tiÃªu chÃ­nh", points: ["Muá»‘n Ä‘áº¹p da: Æ°u tiÃªn tÃ¡o Ä‘á», ká»· tá»­, hoa cÃºc", "Muá»‘n thÆ° giÃ£n: cÃ³ thá»ƒ thÃªm nhÃ i hoáº·c tÃ¢m sen", "Muá»‘n tiá»‡n lá»£i: chá»n dáº¡ng tÃºi lá»c"] },
      { heading: "ThÃ nh pháº§n nÃªn Æ°u tiÃªn", points: ["NhÃ£n rÃµ rÃ ng, nguá»“n gá»‘c minh báº¡ch", "Ãt hÆ°Æ¡ng liá»‡u tá»•ng há»£p", "Ãt Ä‘Æ°á»ng hoáº·c khÃ´ng thÃªm Ä‘Æ°á»ng"] },
      { heading: "Lá»‹ch uá»‘ng dá»… duy trÃ¬", points: ["1 ly sÃ¡ng sau Äƒn nháº¹", "1 ly chiá»u trÆ°á»›c 17h", "Duy trÃ¬ tá»‘i thiá»ƒu 14 ngÃ y"] }
    ],
    faqs: [
      { question: "NgÆ°á»i má»›i nÃªn uá»‘ng máº¥y ly má»—i ngÃ y?", answer: "ThÆ°á»ng 1-2 ly lÃ  má»©c dá»… duy trÃ¬ vÃ  dá»… theo dÃµi pháº£n á»©ng cÆ¡ thá»ƒ." },
      { question: "Uá»‘ng trÃ  dÆ°á»¡ng nhan cÃ³ cáº§n kiÃªng gÃ¬ khÃ´ng?", answer: "NÃªn háº¡n cháº¿ uá»‘ng quÃ¡ ngá»t vÃ  giá»¯ lá»‹ch sinh hoáº¡t á»•n Ä‘á»‹nh Ä‘á»ƒ tháº¥y khÃ¡c biá»‡t rÃµ hÆ¡n." },
      { question: "Bao lÃ¢u thÃ¬ tháº¥y phÃ¹ há»£p?", answer: "Nhiá»u ngÆ°á»i báº¯t Ä‘áº§u cáº£m nháº­n sau 2-3 tuáº§n duy trÃ¬ Ä‘á»u." }
    ]
  },
  {
    slug: "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay",
    title: "6 cÃ´ng thá»©c trÃ  dÆ°á»¡ng nhan dá»… uá»‘ng má»—i ngÃ y",
    description: "Tá»•ng há»£p 6 cÃ´ng thá»©c trÃ  dÆ°á»¡ng nhan Ä‘Æ¡n giáº£n, dá»… pha vÃ  phÃ¹ há»£p ngÆ°á»i báº­n rá»™n.",
    category: "tra-duong-nhan",
    relatedSlugs: ["tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang"],
    intro: "Báº¡n khÃ´ng cáº§n cÃ´ng thá»©c cáº§u ká»³ Ä‘á»ƒ báº¯t Ä‘áº§u uá»‘ng trÃ  dÆ°á»¡ng nhan. 6 gá»£i Ã½ dÆ°á»›i Ä‘Ã¢y Æ°u tiÃªn dá»… pha, dá»… uá»‘ng vÃ  tiáº¿t kiá»‡m thá»i gian.",
    toc: ["TiÃªu chÃ­ chá»n cÃ´ng thá»©c", "Top 6 cÃ´ng thá»©c", "Máº¹o chuáº©n bá»‹ nhanh"],
    sections: [
      { heading: "TiÃªu chÃ­ chá»n cÃ´ng thá»©c", points: ["Vá»‹ thanh dá»… uá»‘ng", "NguyÃªn liá»‡u dá»… mua", "Pha nhanh dÆ°á»›i 10 phÃºt"] },
      { heading: "Top 6 cÃ´ng thá»©c gá»£i Ã½", points: ["Ká»· tá»­ tÃ¡o Ä‘á» hoa cÃºc", "Hoa há»“ng tÃ¡o Ä‘á»", "Gáº¡o lá»©t hoa há»“ng", "Cam tháº£o hoa cÃºc", "NhÃ i ká»· tá»­ tÃ¢m sen", "TÃºi lá»c dÆ°á»¡ng nhan tá»•ng há»£p"] },
      { heading: "Máº¹o chuáº©n bá»‹ nhanh", points: ["Chia sáºµn nguyÃªn liá»‡u theo tuáº§n", "DÃ¹ng bÃ¬nh giá»¯ nhiá»‡t nhá»", "Giá»¯ lá»‹ch uá»‘ng cá»‘ Ä‘á»‹nh"] }
    ],
    faqs: [
      { question: "CÃ³ cáº§n thay cÃ´ng thá»©c má»—i ngÃ y khÃ´ng?", answer: "KhÃ´ng báº¯t buá»™c, báº¡n cÃ³ thá»ƒ giá»¯ 1-2 cÃ´ng thá»©c há»£p kháº©u vá»‹ Ä‘á»ƒ duy trÃ¬ lÃ¢u dÃ i." },
      { question: "Uá»‘ng láº¡nh Ä‘Æ°á»£c khÃ´ng?", answer: "CÃ³ thá»ƒ, nhÆ°ng báº£n áº¥m thÆ°á»ng dá»… uá»‘ng vÃ  phÃ¹ há»£p routine thÆ° giÃ£n hÆ¡n." },
      { question: "NgÆ°á»i báº­n rá»™n nÃªn chá»n loáº¡i nÃ o?", answer: "TÃºi lá»c dÆ°á»¡ng nhan hoáº·c mix tÃ¡o Ä‘á»-ká»· tá»­ lÃ  lá»±a chá»n nhanh vÃ  á»•n Ä‘á»‹nh." }
    ]
  },
  {
    slug: "uong-tra-duong-nhan-luc-nao-la-tot-nhat",
    title: "Uá»‘ng trÃ  dÆ°á»¡ng nhan lÃºc nÃ o lÃ  tá»‘t nháº¥t?",
    description: "Khung giá» uá»‘ng trÃ  dÆ°á»¡ng nhan theo má»¥c tiÃªu: Ä‘áº¹p da, thanh lá»c vÃ  thÆ° giÃ£n.",
    category: "kien-thuc-duong-nhan",
    relatedSlugs: ["lich-uong-tra-duong-nhan-sang-trua-toi", "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang"],
    intro: "Uá»‘ng Ä‘Ãºng giá» giÃºp trÃ  dÆ°á»¡ng nhan phÃ¡t huy vai trÃ² há»— trá»£ tá»‘t hÆ¡n. Quan trá»ng lÃ  lá»‹ch uá»‘ng Ä‘á»u vÃ  khÃ´ng quÃ¡ sÃ¡t giá» ngá»§.",
    toc: ["Khung giá» sÃ¡ng", "Khung giá» chiá»u", "Khung giá» tá»‘i"],
    sections: [
      { heading: "Buá»•i sÃ¡ng", points: ["Uá»‘ng sau Äƒn nháº¹", "Æ¯u tiÃªn trÃ  vá»‹ thanh", "KhÃ´ng uá»‘ng quÃ¡ Ä‘áº­m"] },
      { heading: "Buá»•i chiá»u", points: ["Uá»‘ng trÆ°á»›c 17h", "Há»— trá»£ giáº£m thÃ¨m Ä‘á»“ ngá»t", "Giá»¯ Ä‘á»§ nÆ°á»›c trong ngÃ y"] },
      { heading: "Buá»•i tá»‘i", points: ["Chá»n loáº¡i dá»‹u nháº¹", "TrÃ¡nh uá»‘ng sÃ¡t giá» ngá»§", "Duy trÃ¬ lÆ°á»£ng vá»«a pháº£i"] }
    ],
    faqs: [
      { question: "CÃ³ nÃªn uá»‘ng khi bá»¥ng Ä‘Ã³i?", answer: "KhÃ´ng nÃªn, báº¡n nÃªn uá»‘ng sau Äƒn nháº¹ Ä‘á»ƒ cÆ¡ thá»ƒ dá»… chá»‹u hÆ¡n." },
      { question: "Tá»‘i muá»™n cÃ³ nÃªn uá»‘ng khÃ´ng?", answer: "NÃªn trÃ¡nh uá»‘ng quÃ¡ sÃ¡t giá» ngá»§ Ä‘á»ƒ háº¡n cháº¿ Ä‘i tiá»ƒu Ä‘Ãªm." },
      { question: "Má»—i ngÃ y uá»‘ng bao nhiÃªu lÃ  Ä‘á»§?", answer: "Má»©c 1-2 ly/ngÃ y thÆ°á»ng phÃ¹ há»£p vá»›i ngÆ°á»i má»›i." }
    ]
  },
  {
    slug: "kien-thuc-tra-duong-nhan-thanh-phan-va-luu-y",
    title: "Kiáº¿n thá»©c trÃ  dÆ°á»¡ng nhan: thÃ nh pháº§n vÃ  lÆ°u Ã½ quan trá»ng",
    description: "Tá»•ng há»£p kiáº¿n thá»©c cáº§n biáº¿t vá» thÃ nh pháº§n trÃ  dÆ°á»¡ng nhan vÃ  cÃ¡c lÆ°u Ã½ an toÃ n khi dÃ¹ng.",
    category: "kien-thuc-duong-nhan",
    relatedSlugs: ["uong-tra-duong-nhan-luc-nao-la-tot-nhat", "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "review-tra-hoa-hong-lai-kho-co-thuc-su-dep-da"],
    intro: "Hiá»ƒu Ä‘Ãºng thÃ nh pháº§n giÃºp báº¡n chá»n trÃ  dÆ°á»¡ng nhan phÃ¹ há»£p hÆ¡n vá»›i cÆ¡ Ä‘á»‹a vÃ  má»¥c tiÃªu chÄƒm sÃ³c da.",
    toc: ["NhÃ³m thÃ nh pháº§n phá»• biáº¿n", "CÃ¡ch Ä‘á»c nhÃ£n", "LÆ°u Ã½ an toÃ n"],
    sections: [
      { heading: "NhÃ³m thÃ nh pháº§n phá»• biáº¿n", points: ["TÃ¡o Ä‘á», ká»· tá»­", "Hoa cÃºc, hoa há»“ng", "Gáº¡o lá»©t rang, cam tháº£o"] },
      { heading: "CÃ¡ch Ä‘á»c nhÃ£n sáº£n pháº©m", points: ["Æ¯u tiÃªn báº£ng thÃ nh pháº§n rÃµ", "Háº¡n cháº¿ phá»¥ gia quÃ¡ nhiá»u", "Xem khuyáº¿n nghá»‹ dÃ¹ng tá»« nhÃ  sáº£n xuáº¥t"] },
      { heading: "LÆ°u Ã½ an toÃ n", points: ["KhÃ´ng dÃ¹ng thay thuá»‘c", "DÃ¹ng lÆ°á»£ng vá»«a pháº£i", "Theo dÃµi pháº£n á»©ng cÃ¡ nhÃ¢n"] }
    ],
    faqs: [
      { question: "TrÃ  dÆ°á»¡ng nhan cÃ³ thay tháº¿ skincare khÃ´ng?", answer: "KhÃ´ng, trÃ  dÆ°á»¡ng nhan chá»‰ há»— trá»£ tá»« bÃªn trong vÃ  cáº§n káº¿t há»£p chÄƒm sÃ³c da tá»•ng thá»ƒ." },
      { question: "CÃ³ pháº£i ai cÅ©ng há»£p cÃ¹ng má»™t loáº¡i trÃ ?", answer: "KhÃ´ng, kháº©u vá»‹ vÃ  cÆ¡ Ä‘á»‹a khÃ¡c nhau nÃªn cáº§n thá»­ lÆ°á»£ng nhá» trÆ°á»›c." },
      { question: "NÃªn mua theo tiÃªu chÃ­ nÃ o?", answer: "Æ¯u tiÃªn nguá»“n gá»‘c rÃµ rÃ ng, thÃ nh pháº§n minh báº¡ch vÃ  Ä‘Ã¡nh giÃ¡ thá»±c táº¿." }
    ]
  },
  {
    slug: "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang",
    title: "Routine uá»‘ng trÃ  dÆ°á»¡ng nhan 21 ngÃ y cho da sÃ¡ng khá»e",
    description: "Lá»™ trÃ¬nh 21 ngÃ y káº¿t há»£p uá»‘ng trÃ  dÆ°á»¡ng nhan vÃ  thÃ³i quen sinh hoáº¡t giÃºp da khá»e hÆ¡n.",
    category: "routine-dep-da",
    relatedSlugs: ["lich-uong-tra-duong-nhan-sang-trua-toi", "thuc-don-nhe-khi-dung-tra-duong-nhan", "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay"],
    intro: "Thay vÃ¬ ká»³ vá»ng nhanh, routine 21 ngÃ y giÃºp báº¡n táº¡o ná»n táº£ng: uá»‘ng Ä‘á»§ nÆ°á»›c, uá»‘ng trÃ  Ä‘á»u vÃ  ngá»§ Ä‘Ãºng giá».",
    toc: ["Tuáº§n 1: lÃ m quen", "Tuáº§n 2: á»•n Ä‘á»‹nh", "Tuáº§n 3: tá»‘i Æ°u duy trÃ¬"],
    sections: [
      { heading: "Tuáº§n 1", points: ["Báº¯t Ä‘áº§u 1 ly/ngÃ y", "Chá»n 1 cÃ´ng thá»©c dá»… uá»‘ng", "Theo dÃµi da vÃ  giáº¥c ngá»§"] },
      { heading: "Tuáº§n 2", points: ["TÄƒng lÃªn 2 ly/ngÃ y náº¿u phÃ¹ há»£p", "Giáº£m Ä‘á»“ uá»‘ng nhiá»u Ä‘Æ°á»ng", "Giá»¯ giá» ngá»§ á»•n Ä‘á»‹nh"] },
      { heading: "Tuáº§n 3", points: ["Tinh chá»‰nh cÃ´ng thá»©c há»£p nháº¥t", "Duy trÃ¬ Ä‘á»u 5-6 ngÃ y/tuáº§n", "Káº¿t há»£p váº­n Ä‘á»™ng nháº¹"] }
    ],
    faqs: [
      { question: "CÃ³ cáº§n uá»‘ng Ä‘Ãºng 21 ngÃ y liÃªn tá»¥c?", answer: "Báº¡n nÃªn duy trÃ¬ Ä‘á»u, náº¿u bá» 1 ngÃ y thÃ¬ quay láº¡i lá»‹ch ngay hÃ´m sau." },
      { question: "CÃ³ cáº§n thay Ä‘á»•i loáº¡i trÃ  má»—i tuáº§n khÃ´ng?", answer: "KhÃ´ng báº¯t buá»™c, chá»‰ cáº§n giá»¯ loáº¡i há»£p cÆ¡ thá»ƒ vÃ  dá»… uá»‘ng." },
      { question: "Routine nÃ y phÃ¹ há»£p ngÆ°á»i báº­n rá»™n khÃ´ng?", answer: "CÃ³, vÃ¬ má»—i láº§n pha chá»‰ cáº§n 3-8 phÃºt." }
    ]
  },
  {
    slug: "lich-uong-tra-duong-nhan-sang-trua-toi",
    title: "Lá»‹ch uá»‘ng trÃ  dÆ°á»¡ng nhan sÃ¡ng - trÆ°a - tá»‘i dá»… Ã¡p dá»¥ng",
    description: "Gá»£i Ã½ lá»‹ch uá»‘ng trÃ  dÆ°á»¡ng nhan theo tá»«ng khung giá» cho ngÆ°á»i báº­n rá»™n.",
    category: "routine-dep-da",
    relatedSlugs: ["uong-tra-duong-nhan-luc-nao-la-tot-nhat", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang", "thanh-loc-co-the-bang-tra-thao-moc-7-ngay"],
    intro: "Lá»‹ch uá»‘ng rÃµ rÃ ng giÃºp báº¡n giá»¯ thÃ³i quen bá»n hÆ¡n, trÃ¡nh uá»‘ng quÃ¡ dá»“n vÃ o má»™t khung giá».",
    toc: ["Khung sÃ¡ng", "Khung trÆ°a", "Khung tá»‘i"],
    sections: [
      { heading: "Khung sÃ¡ng", points: ["Uá»‘ng sau bá»¯a sÃ¡ng", "Æ¯u tiÃªn cÃ´ng thá»©c nháº¹", "KhÃ´ng pha quÃ¡ Ä‘áº­m"] },
      { heading: "Khung trÆ°a", points: ["Uá»‘ng sau Äƒn trÆ°a 30-60 phÃºt", "Bá»• sung nÆ°á»›c Ä‘á»§", "TrÃ¡nh thay tháº¿ nÆ°á»›c lá»c hoÃ n toÃ n"] },
      { heading: "Khung tá»‘i", points: ["Uá»‘ng tá»‘i sá»›m", "Æ¯u tiÃªn trÃ  dá»‹u", "TrÃ¡nh uá»‘ng quÃ¡ sÃ¡t giá» ngá»§"] }
    ],
    faqs: [
      { question: "CÃ³ thá»ƒ chá»‰ uá»‘ng buá»•i tá»‘i khÃ´ng?", answer: "CÃ³, nhÆ°ng lá»‹ch 1 sÃ¡ng + 1 chiá»u thÆ°á»ng dá»… á»•n Ä‘á»‹nh hÆ¡n." },
      { question: "CÃ³ nÃªn uá»‘ng thay nÆ°á»›c lá»c?", answer: "KhÃ´ng, váº«n cáº§n uá»‘ng Ä‘á»§ nÆ°á»›c lá»c trong ngÃ y." },
      { question: "NÃªn báº¯t Ä‘áº§u tá»« khung nÃ o?", answer: "Khung sÃ¡ng sau Äƒn nháº¹ thÆ°á»ng dá»… báº¯t Ä‘áº§u nháº¥t." }
    ]
  },
  {
    slug: "thuc-don-nhe-khi-dung-tra-duong-nhan",
    title: "Thá»±c Ä‘Æ¡n nháº¹ khi dÃ¹ng trÃ  dÆ°á»¡ng nhan Ä‘á»ƒ tá»‘i Æ°u routine",
    description: "Gá»£i Ã½ thá»±c Ä‘Æ¡n nháº¹ káº¿t há»£p trÃ  dÆ°á»¡ng nhan giÃºp routine Ä‘áº¹p da bá»n vá»¯ng hÆ¡n.",
    category: "routine-dep-da",
    relatedSlugs: ["routine-uong-tra-duong-nhan-21-ngay-cho-da-sang", "uong-tra-duong-nhan-luc-nao-la-tot-nhat", "thanh-loc-co-the-bang-tra-thao-moc-7-ngay"],
    intro: "TrÃ  dÆ°á»¡ng nhan hiá»‡u quáº£ hÆ¡n khi Ä‘i kÃ¨m thÃ³i quen Äƒn uá»‘ng cÃ¢n báº±ng: Ã­t Ä‘Æ°á»ng, Ä‘á»§ Ä‘áº¡m, Ä‘á»§ cháº¥t xÆ¡.",
    toc: ["NguyÃªn táº¯c Äƒn nháº¹", "Gá»£i Ã½ theo bá»¯a", "Máº¹o duy trÃ¬"],
    sections: [
      { heading: "NguyÃªn táº¯c Äƒn nháº¹", points: ["Giáº£m Ä‘á»“ ngá»t", "Æ¯u tiÃªn rau vÃ  Ä‘áº¡m náº¡c", "Uá»‘ng Ä‘á»§ nÆ°á»›c"] },
      { heading: "Gá»£i Ã½ theo bá»¯a", points: ["SÃ¡ng: yáº¿n máº¡ch + trÃ¡i cÃ¢y", "TrÆ°a: cÆ¡m vá»«a Ä‘á»§ + rau", "Tá»‘i: bá»¯a nháº¹, Ã­t dáº§u má»¡"] },
      { heading: "Máº¹o duy trÃ¬", points: ["Chuáº©n bá»‹ trÆ°á»›c 2-3 bá»¯a", "Giá»¯ thá»±c Ä‘Æ¡n Ä‘Æ¡n giáº£n", "Theo dÃµi 1 tuáº§n/láº§n"] }
    ],
    faqs: [
      { question: "CÃ³ cáº§n kiÃªng tinh bá»™t hoÃ n toÃ n?", answer: "KhÃ´ng, báº¡n chá»‰ cáº§n cÃ¢n báº±ng kháº©u pháº§n vÃ  Æ°u tiÃªn tinh bá»™t tá»‘t." },
      { question: "CÃ³ thá»ƒ uá»‘ng trÃ  ngay sau Äƒn no khÃ´ng?", answer: "NÃªn chá» 20-30 phÃºt Ä‘á»ƒ cÆ¡ thá»ƒ dá»… chá»‹u hÆ¡n." },
      { question: "Má»¥c tiÃªu chÃ­nh cá»§a thá»±c Ä‘Æ¡n nháº¹ lÃ  gÃ¬?", answer: "GiÃºp routine dá»… duy trÃ¬ vÃ  há»— trá»£ cÆ¡ thá»ƒ cÃ¢n báº±ng hÆ¡n." }
    ]
  },
  {
    slug: "thanh-loc-co-the-bang-tra-thao-moc-7-ngay",
    title: "Thanh lá»c cÆ¡ thá»ƒ báº±ng trÃ  tháº£o má»™c 7 ngÃ y: lá»™ trÃ¬nh an toÃ n",
    description: "Lá»™ trÃ¬nh 7 ngÃ y thanh lá»c nháº¹ vá»›i trÃ  tháº£o má»™c, phÃ¹ há»£p ngÆ°á»i má»›i báº¯t Ä‘áº§u.",
    category: "thanh-loc-co-the",
    relatedSlugs: ["uong-tra-duong-nhan-luc-nao-la-tot-nhat", "review-tra-gao-lut-hoa-hong-co-hop-thanh-loc", "thuc-don-nhe-khi-dung-tra-duong-nhan"],
    intro: "Thanh lá»c cÆ¡ thá»ƒ khÃ´ng cáº§n cá»±c Ä‘oan. Káº¿ hoáº¡ch 7 ngÃ y Æ°u tiÃªn uá»‘ng Ä‘á»u, Äƒn nháº¹ vÃ  ngá»§ Ä‘Ãºng giá».",
    toc: ["Má»¥c tiÃªu 7 ngÃ y", "Lá»‹ch uá»‘ng máº«u", "Nhá»¯ng Ä‘iá»u cáº§n trÃ¡nh"],
    sections: [
      { heading: "Má»¥c tiÃªu 7 ngÃ y", points: ["Giáº£m Ä‘á»“ uá»‘ng nhiá»u Ä‘Æ°á»ng", "Giá»¯ nhá»‹p uá»‘ng nÆ°á»›c á»•n Ä‘á»‹nh", "Quan sÃ¡t nÄƒng lÆ°á»£ng má»—i ngÃ y"] },
      { heading: "Lá»‹ch uá»‘ng máº«u", points: ["SÃ¡ng: trÃ  nháº¹ sau Äƒn", "Chiá»u: 1 ly trÆ°á»›c 17h", "Tá»‘i: cÃ¢n nháº¯c loáº¡i dá»‹u"] },
      { heading: "Nhá»¯ng Ä‘iá»u cáº§n trÃ¡nh", points: ["Nhá»‹n Äƒn quÃ¡ má»©c", "Uá»‘ng trÃ  quÃ¡ Ä‘áº·c", "Ká»³ vá»ng káº¿t quáº£ tá»©c thÃ¬"] }
    ],
    faqs: [
      { question: "7 ngÃ y cÃ³ Ä‘á»§ Ä‘á»ƒ tháº¥y khÃ¡c biá»‡t khÃ´ng?", answer: "Báº¡n cÃ³ thá»ƒ tháº¥y sá»± khÃ¡c biá»‡t nháº¹ vá» thÃ³i quen vÃ  cáº£m giÃ¡c cÆ¡ thá»ƒ." },
      { question: "CÃ³ cáº§n táº­p thá»ƒ dá»¥c trong 7 ngÃ y khÃ´ng?", answer: "NÃªn káº¿t há»£p váº­n Ä‘á»™ng nháº¹ Ä‘á»ƒ routine hiá»‡u quáº£ vÃ  bá»n hÆ¡n." },
      { question: "CÃ³ nÃªn uá»‘ng 3-4 ly má»—i ngÃ y?", answer: "KhÃ´ng cáº§n, 1-2 ly/ngÃ y thÆ°á»ng Ä‘Ã£ phÃ¹ há»£p vá»›i ngÆ°á»i má»›i." }
    ]
  },
  {
    slug: "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam",
    title: "Review trÃ  ká»· tá»­ tÃ¡o Ä‘á» hoa cÃºc: cÃ³ há»£p da xáº¡m, ngá»§ muá»™n?",
    description: "ÄÃ¡nh giÃ¡ thá»±c táº¿ trÃ  ká»· tá»­ tÃ¡o Ä‘á» hoa cÃºc: hÆ°Æ¡ng vá»‹, cÃ¡ch dÃ¹ng vÃ  Ä‘á»‘i tÆ°á»£ng phÃ¹ há»£p.",
    category: "review-tra-duong-nhan",
    productId: "goji-tao-do-hoa-cuc",
    relatedSlugs: ["tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay", "uong-tra-duong-nhan-luc-nao-la-tot-nhat"],
    intro: "ÄÃ¢y lÃ  má»™t trong cÃ¡c combo dÆ°á»¡ng nhan phá»• biáº¿n vÃ¬ dá»… uá»‘ng vÃ  dá»… duy trÃ¬. BÃ i review táº­p trung tráº£i nghiá»‡m thá»±c táº¿ cho ngÆ°á»i ngá»§ muá»™n vÃ  da xáº¡m nháº¹.",
    toc: ["HÆ°Æ¡ng vá»‹ thá»±c táº¿", "Ai nÃªn thá»­", "CÃ¡ch dÃ¹ng gá»£i Ã½"],
    quickSummary: ["Vá»‹ thanh, ngá»t nháº¹.", "Dá»… há»£p ngÆ°á»i má»›i.", "PhÃ¹ há»£p uá»‘ng sÃ¡ng hoáº·c chiá»u."],
    bestFor: ["NgÆ°á»i má»›i báº¯t Ä‘áº§u uá»‘ng trÃ  dÆ°á»¡ng nhan.", "NgÆ°á»i cáº§n loáº¡i dá»… uá»‘ng, dá»… duy trÃ¬."],
    notFor: ["NgÆ°á»i khÃ´ng há»£p vá»‹ ngá»t tá»± nhiÃªn.", "NgÆ°á»i muá»‘n hiá»‡u quáº£ tá»©c thÃ¬."],
    sections: [
      { heading: "HÆ°Æ¡ng vá»‹ thá»±c táº¿", points: ["MÃ¹i cÃºc dá»‹u", "Vá»‹ tÃ¡o Ä‘á» nháº¹", "Háº­u vá»‹ dá»… chá»‹u"] },
      { heading: "Ai nÃªn thá»­", points: ["NgÆ°á»i ngá»§ muá»™n nháº¹", "NgÆ°á»i uá»‘ng trÃ  láº§n Ä‘áº§u", "NgÆ°á»i cáº§n routine Ä‘Æ¡n giáº£n"] },
      { heading: "CÃ¡ch dÃ¹ng gá»£i Ã½", points: ["1-2 ly má»—i ngÃ y", "Æ¯u tiÃªn uá»‘ng sau Äƒn", "Duy trÃ¬ 2-3 tuáº§n"] }
    ],
    faqs: [
      { question: "Loáº¡i nÃ y cÃ³ khÃ³ uá»‘ng khÃ´ng?", answer: "ThÆ°á»ng khÃ¡ dá»… uá»‘ng, nháº¥t lÃ  vá»›i ngÆ°á»i má»›i báº¯t Ä‘áº§u." },
      { question: "NÃªn uá»‘ng lÃºc nÃ o?", answer: "Buá»•i sÃ¡ng hoáº·c chiá»u lÃ  khung giá» dá»… duy trÃ¬ nháº¥t." },
      { question: "CÃ³ thá»ƒ thÃªm máº­t ong khÃ´ng?", answer: "CÃ³ thá»ƒ, nhÆ°ng nÃªn dÃ¹ng lÆ°á»£ng Ã­t Ä‘á»ƒ trÃ¡nh quÃ¡ ngá»t." }
    ]
  },
  {
    slug: "review-tra-hoa-hong-lai-kho-co-thuc-su-dep-da",
    title: "Review trÃ  hoa há»“ng lai khÃ´: cÃ³ thá»±c sá»± há»— trá»£ Ä‘áº¹p da?",
    description: "Review trÃ  hoa há»“ng lai khÃ´: cáº£m nháº­n hÆ°Æ¡ng vá»‹, cÃ¡ch pha vÃ  lÆ°u Ã½ cho ngÆ°á»i má»›i.",
    category: "review-tra-duong-nhan",
    productId: "hoa-hong-lai-kho",
    relatedSlugs: ["kien-thuc-tra-duong-nhan-thanh-phan-va-luu-y", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang", "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau"],
    intro: "TrÃ  hoa há»“ng lai khÃ´ Ä‘Æ°á»£c nhiá»u ngÆ°á»i chá»n vÃ¬ mÃ¹i hÆ°Æ¡ng dá»… chá»‹u vÃ  cáº£m giÃ¡c thÆ° giÃ£n. NhÆ°ng cÃ³ há»£p báº¡n khÃ´ng cÃ²n tÃ¹y kháº©u vá»‹ vÃ  lá»‹ch sinh hoáº¡t.",
    toc: ["Äiá»ƒm máº¡nh", "Äiá»ƒm cáº§n cÃ¢n nháº¯c", "CÃ¡ch uá»‘ng thá»±c táº¿"],
    quickSummary: ["HÆ°Æ¡ng hoa rÃµ.", "Há»£p routine tá»‘i.", "NÃªn pha nháº¡t náº¿u má»›i báº¯t Ä‘áº§u."],
    bestFor: ["NgÆ°á»i thÃ­ch hÆ°Æ¡ng hoa.", "NgÆ°á»i cáº§n ritual tá»‘i thÆ° giÃ£n."],
    notFor: ["NgÆ°á»i nháº¡y vá»›i mÃ¹i floral.", "NgÆ°á»i thÃ­ch trÃ  vá»‹ Ä‘áº­m máº¡nh."],
    sections: [
      { heading: "Äiá»ƒm máº¡nh", points: ["MÃ¹i thÆ¡m dá»… nháº­n biáº¿t", "Dá»… táº¡o thÃ³i quen uá»‘ng", "PhÃ¹ há»£p uá»‘ng cháº­m buá»•i tá»‘i"] },
      { heading: "Äiá»ƒm cáº§n cÃ¢n nháº¯c", points: ["MÃ¹i hoa cÃ³ thá»ƒ kÃ©n ngÆ°á»i", "Pha quÃ¡ Ä‘áº­m sáº½ gáº¯t", "KhÃ´ng thay tháº¿ chÄƒm sÃ³c da tá»•ng thá»ƒ"] },
      { heading: "CÃ¡ch uá»‘ng thá»±c táº¿", points: ["Pha 3g vá»›i 220ml nÆ°á»›c nÃ³ng", "á»¦ 4-6 phÃºt", "Uá»‘ng tá»‘i sá»›m thay Ä‘á»“ ngá»t"] }
    ],
    faqs: [
      { question: "Uá»‘ng háº±ng ngÃ y cÃ³ Ä‘Æ°á»£c khÃ´ng?", answer: "CÃ³ thá»ƒ, vá»›i lÆ°á»£ng vá»«a pháº£i vÃ  theo dÃµi pháº£n á»©ng cÃ¡ nhÃ¢n." },
      { question: "Loáº¡i nÃ y cÃ³ giÃºp ngá»§ ngon khÃ´ng?", answer: "Má»™t sá»‘ ngÆ°á»i tháº¥y thÆ° giÃ£n hÆ¡n, nhÆ°ng khÃ´ng pháº£i thuá»‘c ngá»§." },
      { question: "CÃ³ nÃªn uá»‘ng trÆ°á»›c ngá»§ sÃ¡t giá»?", answer: "NÃªn trÃ¡nh quÃ¡ sÃ¡t giá» ngá»§ Ä‘á»ƒ háº¡n cháº¿ thá»©c giáº¥c giá»¯a Ä‘Ãªm." }
    ]
  },
  {
    slug: "review-tra-gao-lut-hoa-hong-co-hop-thanh-loc",
    title: "Review trÃ  gáº¡o lá»©t hoa há»“ng: cÃ³ há»£p thanh lá»c vÃ  giá»¯ dÃ¡ng?",
    description: "ÄÃ¡nh giÃ¡ trÃ  gáº¡o lá»©t hoa há»“ng cho ngÆ°á»i muá»‘n thanh lá»c nháº¹ vÃ  giáº£m Ä‘á»“ uá»‘ng ngá»t.",
    category: "review-tra-duong-nhan",
    productId: "gao-lut-hoa-hong",
    relatedSlugs: ["thanh-loc-co-the-bang-tra-thao-moc-7-ngay", "thuc-don-nhe-khi-dung-tra-duong-nhan", "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay"],
    intro: "Náº¿u báº¡n muá»‘n má»™t loáº¡i trÃ  dá»… uá»‘ng ban ngÃ y vÃ  cÃ³ vá»‹ bÃ¹i nháº¹, trÃ  gáº¡o lá»©t hoa há»“ng lÃ  lá»±a chá»n Ä‘Ã¡ng cÃ¢n nháº¯c.",
    toc: ["Cáº£m nháº­n vá»‹ trÃ ", "Äá»‘i tÆ°á»£ng phÃ¹ há»£p", "Checklist trÆ°á»›c khi mua"],
    quickSummary: ["Vá»‹ bÃ¹i nháº¹, dá»… uá»‘ng.", "Há»£p thay Ä‘á»“ uá»‘ng ngá»t.", "Pha nhanh, tiá»‡n mang Ä‘i lÃ m."],
    bestFor: ["NgÆ°á»i muá»‘n giáº£m nÆ°á»›c ngá»t.", "NgÆ°á»i thÃ­ch vá»‹ rang dá»‹u nháº¹."],
    notFor: ["NgÆ°á»i ká»³ vá»ng hiá»‡u quáº£ giáº£m cÃ¢n tá»©c thÃ¬.", "NgÆ°á»i khÃ´ng há»£p mÃ¹i gáº¡o rang."],
    sections: [
      { heading: "Cáº£m nháº­n vá»‹ trÃ ", points: ["MÃ¹i rang thÆ¡m", "Háº­u vá»‹ nháº¹", "Ãt gáº¯t khi pha Ä‘Ãºng"] },
      { heading: "Äá»‘i tÆ°á»£ng phÃ¹ há»£p", points: ["DÃ¢n vÄƒn phÃ²ng báº­n rá»™n", "NgÆ°á»i cáº§n trÃ  uá»‘ng ban ngÃ y", "NgÆ°á»i má»›i báº¯t Ä‘áº§u thanh lá»c nháº¹"] },
      { heading: "Checklist trÆ°á»›c khi mua", points: ["Kiá»ƒm tra thÃ nh pháº§n", "Xem pháº£n há»“i ngÆ°á»i dÃ¹ng", "Báº¯t Ä‘áº§u gÃ³i nhá» trÆ°á»›c"] }
    ],
    faqs: [
      { question: "CÃ³ thá»ƒ dÃ¹ng buá»•i tá»‘i khÃ´ng?", answer: "CÃ³ thá»ƒ dÃ¹ng tá»‘i sá»›m, trÃ¡nh uá»‘ng quÃ¡ sÃ¡t giá» ngá»§." },
      { question: "Pha bÃ¬nh lá»›n trong ngÃ y Ä‘Æ°á»£c khÃ´ng?", answer: "ÄÆ°á»£c, nÃªn dÃ¹ng trong ngÃ y Ä‘á»ƒ giá»¯ hÆ°Æ¡ng vá»‹ á»•n Ä‘á»‹nh." },
      { question: "Loáº¡i nÃ y cÃ³ Ä‘áº¯ng khÃ´ng?", answer: "ThÆ°á»ng khÃ´ng Ä‘áº¯ng rÃµ, thiÃªn vá»‹ bÃ¹i nháº¹." }
    ]
  }
];


