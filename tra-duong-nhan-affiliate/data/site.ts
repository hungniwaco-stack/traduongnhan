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
  { slug: "tra-duong-nhan", name: "Trà dưỡng nhan", desc: "Gợi ý trà dưỡng nhan dễ bắt đầu, dễ duy trì mỗi ngày." },
  { slug: "review-tra-duong-nhan", name: "Review trà dưỡng nhan", desc: "Đánh giá thực tế sản phẩm trà dưỡng nhan theo nhu cầu da và cơ địa." },
  { slug: "routine-dep-da", name: "Routine đẹp da", desc: "Routine uống trà và chăm sóc da đơn giản cho người bận rộn." },
  { slug: "thanh-loc-co-the", name: "Thanh lọc cơ thể", desc: "Cách dùng trà thảo mộc hỗ trợ thanh lọc nhẹ nhàng, an toàn." },
  { slug: "kien-thuc-duong-nhan", name: "Kiến thức dưỡng nhan", desc: "Kiến thức nền về thành phần, cách uống và lưu ý khi dùng trà dưỡng nhan." }
] as const;

export const categoryLabelMap: Record<BlogPost["category"], string> = {
  "tra-duong-nhan": "Trà dưỡng nhan",
  "review-tra-duong-nhan": "Review trà dưỡng nhan",
  "routine-dep-da": "Routine đẹp da",
  "thanh-loc-co-the": "Thanh lọc cơ thể",
  "kien-thuc-duong-nhan": "Kiến thức dưỡng nhan"
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
    whoFor: "Ngu?i t�m d�ng tr� du?ng nhan k?t h?p thu gi�n nh?.",
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
    title: "Trà dưỡng nhan cho người mới: nên bắt đầu từ đâu?",
    description: "Hướng dẫn chọn trà dưỡng nhan cho người mới, từ thành phần đến cách uống để dễ duy trì.",
    category: "tra-duong-nhan",
    relatedSlugs: ["6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay", "uong-tra-duong-nhan-luc-nao-la-tot-nhat", "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam"],
    intro: "Nếu bạn mới tìm hiểu trà dưỡng nhan, điều quan trọng nhất là bắt đầu đơn giản: chọn vị dễ uống, lịch uống cố định và theo dõi cơ thể trong 2-3 tuần.",
    toc: ["Chọn trà dưỡng nhan theo mục tiêu", "Thành phần nên ưu tiên", "Lịch uống cho người mới"],
    quickSummary: ["Bắt đầu từ trà vị dịu, ít thành phần.", "Uống đều 1-2 ly mỗi ngày.", "Theo dõi phản ứng da và giấc ngủ."],
    bestFor: ["Người mới bắt đầu với trà dưỡng nhan.", "Người cần routine dễ duy trì."],
    notFor: ["Người muốn hiệu quả tức thì sau 1-2 ngày.", "Người có bệnh nền cần chỉ định chuyên môn."],
    sections: [
      { heading: "Chọn trà theo mục tiêu chính", points: ["Muốn đẹp da: ưu tiên táo đỏ, kỷ tử, hoa cúc", "Muốn thư giãn: có thể thêm nhài hoặc tâm sen", "Muốn tiện lợi: chọn dạng túi lọc"] },
      { heading: "Thành phần nên ưu tiên", points: ["Nhãn rõ ràng, nguồn gốc minh bạch", "Ít hương liệu tổng hợp", "Ít đường hoặc không thêm đường"] },
      { heading: "Lịch uống dễ duy trì", points: ["1 ly sáng sau ăn nhẹ", "1 ly chiều trước 17h", "Duy trì tối thiểu 14 ngày"] }
    ],
    faqs: [
      { question: "Người mới nên uống mấy ly mỗi ngày?", answer: "Thường 1-2 ly là mức dễ duy trì và dễ theo dõi phản ứng cơ thể." },
      { question: "Uống trà dưỡng nhan có cần kiêng gì không?", answer: "Nên hạn chế uống quá ngọt và giữ lịch sinh hoạt ổn định để thấy khác biệt rõ hơn." },
      { question: "Bao lâu thì thấy phù hợp?", answer: "Nhiều người bắt đầu cảm nhận sau 2-3 tuần duy trì đều." }
    ]
  },
  {
    slug: "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay",
    title: "6 công thức trà dưỡng nhan dễ uống mỗi ngày",
    description: "Tổng hợp 6 công thức trà dưỡng nhan đơn giản, dễ pha và phù hợp người bận rộn.",
    category: "tra-duong-nhan",
    relatedSlugs: ["tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang"],
    intro: "Bạn không cần công thức cầu kỳ để bắt đầu uống trà dưỡng nhan. 6 gợi ý dưới đây ưu tiên dễ pha, dễ uống và tiết kiệm thời gian.",
    toc: ["Tiêu chí chọn công thức", "Top 6 công thức", "Mẹo chuẩn bị nhanh"],
    sections: [
      { heading: "Tiêu chí chọn công thức", points: ["Vị thanh dễ uống", "Nguyên liệu dễ mua", "Pha nhanh dưới 10 phút"] },
      { heading: "Top 6 công thức gợi ý", points: ["Kỷ tử táo đỏ hoa cúc", "Hoa hồng táo đỏ", "Gạo lứt hoa hồng", "Cam thảo hoa cúc", "Nhài kỷ tử tâm sen", "Túi lọc dưỡng nhan tổng hợp"] },
      { heading: "Mẹo chuẩn bị nhanh", points: ["Chia sẵn nguyên liệu theo tuần", "Dùng bình giữ nhiệt nhỏ", "Giữ lịch uống cố định"] }
    ],
    faqs: [
      { question: "Có cần thay công thức mỗi ngày không?", answer: "Không bắt buộc, bạn có thể giữ 1-2 công thức hợp khẩu vị để duy trì lâu dài." },
      { question: "Uống lạnh được không?", answer: "Có thể, nhưng bản ấm thường dễ uống và phù hợp routine thư giãn hơn." },
      { question: "Người bận rộn nên chọn loại nào?", answer: "Túi lọc dưỡng nhan hoặc mix táo đỏ-kỷ tử là lựa chọn nhanh và ổn định." }
    ]
  },
  {
    slug: "uong-tra-duong-nhan-luc-nao-la-tot-nhat",
    title: "Uống trà dưỡng nhan lúc nào là tốt nhất?",
    description: "Khung giờ uống trà dưỡng nhan theo mục tiêu: đẹp da, thanh lọc và thư giãn.",
    category: "kien-thuc-duong-nhan",
    relatedSlugs: ["lich-uong-tra-duong-nhan-sang-trua-toi", "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang"],
    intro: "Uống đúng giờ giúp trà dưỡng nhan phát huy vai trò hỗ trợ tốt hơn. Quan trọng là lịch uống đều và không quá sát giờ ngủ.",
    toc: ["Khung giờ sáng", "Khung giờ chiều", "Khung giờ tối"],
    sections: [
      { heading: "Buổi sáng", points: ["Uống sau ăn nhẹ", "Ưu tiên trà vị thanh", "Không uống quá đậm"] },
      { heading: "Buổi chiều", points: ["Uống trước 17h", "Hỗ trợ giảm thèm đồ ngọt", "Giữ đủ nước trong ngày"] },
      { heading: "Buổi tối", points: ["Chọn loại dịu nhẹ", "Tránh uống sát giờ ngủ", "Duy trì lượng vừa phải"] }
    ],
    faqs: [
      { question: "Có nên uống khi bụng đói?", answer: "Không nên, bạn nên uống sau ăn nhẹ để cơ thể dễ chịu hơn." },
      { question: "Tối muộn có nên uống không?", answer: "Nên tránh uống quá sát giờ ngủ để hạn chế đi tiểu đêm." },
      { question: "Mỗi ngày uống bao nhiêu là đủ?", answer: "Mức 1-2 ly/ngày thường phù hợp với người mới." }
    ]
  },
  {
    slug: "kien-thuc-tra-duong-nhan-thanh-phan-va-luu-y",
    title: "Kiến thức trà dưỡng nhan: thành phần và lưu ý quan trọng",
    description: "Tổng hợp kiến thức cần biết về thành phần trà dưỡng nhan và các lưu ý an toàn khi dùng.",
    category: "kien-thuc-duong-nhan",
    relatedSlugs: ["uong-tra-duong-nhan-luc-nao-la-tot-nhat", "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "review-tra-hoa-hong-lai-kho-co-thuc-su-dep-da"],
    intro: "Hiểu đúng thành phần giúp bạn chọn trà dưỡng nhan phù hợp hơn với cơ địa và mục tiêu chăm sóc da.",
    toc: ["Nhóm thành phần phổ biến", "Cách đọc nhãn", "Lưu ý an toàn"],
    sections: [
      { heading: "Nhóm thành phần phổ biến", points: ["Táo đỏ, kỷ tử", "Hoa cúc, hoa hồng", "Gạo lứt rang, cam thảo"] },
      { heading: "Cách đọc nhãn sản phẩm", points: ["Ưu tiên bảng thành phần rõ", "Hạn chế phụ gia quá nhiều", "Xem khuyến nghị dùng từ nhà sản xuất"] },
      { heading: "Lưu ý an toàn", points: ["Không dùng thay thuốc", "Dùng lượng vừa phải", "Theo dõi phản ứng cá nhân"] }
    ],
    faqs: [
      { question: "Trà dưỡng nhan có thay thế skincare không?", answer: "Không, trà dưỡng nhan chỉ hỗ trợ từ bên trong và cần kết hợp chăm sóc da tổng thể." },
      { question: "Có phải ai cũng hợp cùng một loại trà?", answer: "Không, khẩu vị và cơ địa khác nhau nên cần thử lượng nhỏ trước." },
      { question: "Nên mua theo tiêu chí nào?", answer: "Ưu tiên nguồn gốc rõ ràng, thành phần minh bạch và đánh giá thực tế." }
    ]
  },
  {
    slug: "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang",
    title: "Routine uống trà dưỡng nhan 21 ngày cho da sáng khỏe",
    description: "Lộ trình 21 ngày kết hợp uống trà dưỡng nhan và thói quen sinh hoạt giúp da khỏe hơn.",
    category: "routine-dep-da",
    relatedSlugs: ["lich-uong-tra-duong-nhan-sang-trua-toi", "thuc-don-nhe-khi-dung-tra-duong-nhan", "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay"],
    intro: "Thay vì kỳ vọng nhanh, routine 21 ngày giúp bạn tạo nền tảng: uống đủ nước, uống trà đều và ngủ đúng giờ.",
    toc: ["Tuần 1: làm quen", "Tuần 2: ổn định", "Tuần 3: tối ưu duy trì"],
    sections: [
      { heading: "Tuần 1", points: ["Bắt đầu 1 ly/ngày", "Chọn 1 công thức dễ uống", "Theo dõi da và giấc ngủ"] },
      { heading: "Tuần 2", points: ["Tăng lên 2 ly/ngày nếu phù hợp", "Giảm đồ uống nhiều đường", "Giữ giờ ngủ ổn định"] },
      { heading: "Tuần 3", points: ["Tinh chỉnh công thức hợp nhất", "Duy trì đều 5-6 ngày/tuần", "Kết hợp vận động nhẹ"] }
    ],
    faqs: [
      { question: "Có cần uống đúng 21 ngày liên tục?", answer: "Bạn nên duy trì đều, nếu bỏ 1 ngày thì quay lại lịch ngay hôm sau." },
      { question: "Có cần thay đổi loại trà mỗi tuần không?", answer: "Không bắt buộc, chỉ cần giữ loại hợp cơ thể và dễ uống." },
      { question: "Routine này phù hợp người bận rộn không?", answer: "Có, vì mỗi lần pha chỉ cần 3-8 phút." }
    ]
  },
  {
    slug: "lich-uong-tra-duong-nhan-sang-trua-toi",
    title: "Lịch uống trà dưỡng nhan sáng - trưa - tối dễ áp dụng",
    description: "Gợi ý lịch uống trà dưỡng nhan theo từng khung giờ cho người bận rộn.",
    category: "routine-dep-da",
    relatedSlugs: ["uong-tra-duong-nhan-luc-nao-la-tot-nhat", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang", "thanh-loc-co-the-bang-tra-thao-moc-7-ngay"],
    intro: "Lịch uống rõ ràng giúp bạn giữ thói quen bền hơn, tránh uống quá dồn vào một khung giờ.",
    toc: ["Khung sáng", "Khung trưa", "Khung tối"],
    sections: [
      { heading: "Khung sáng", points: ["Uống sau bữa sáng", "Ưu tiên công thức nhẹ", "Không pha quá đậm"] },
      { heading: "Khung trưa", points: ["Uống sau ăn trưa 30-60 phút", "Bổ sung nước đủ", "Tránh thay thế nước lọc hoàn toàn"] },
      { heading: "Khung tối", points: ["Uống tối sớm", "Ưu tiên trà dịu", "Tránh uống quá sát giờ ngủ"] }
    ],
    faqs: [
      { question: "Có thể chỉ uống buổi tối không?", answer: "Có, nhưng lịch 1 sáng + 1 chiều thường dễ ổn định hơn." },
      { question: "Có nên uống thay nước lọc?", answer: "Không, vẫn cần uống đủ nước lọc trong ngày." },
      { question: "Nên bắt đầu từ khung nào?", answer: "Khung sáng sau ăn nhẹ thường dễ bắt đầu nhất." }
    ]
  },
  {
    slug: "thuc-don-nhe-khi-dung-tra-duong-nhan",
    title: "Thực đơn nhẹ khi dùng trà dưỡng nhan để tối ưu routine",
    description: "Gợi ý thực đơn nhẹ kết hợp trà dưỡng nhan giúp routine đẹp da bền vững hơn.",
    category: "routine-dep-da",
    relatedSlugs: ["routine-uong-tra-duong-nhan-21-ngay-cho-da-sang", "uong-tra-duong-nhan-luc-nao-la-tot-nhat", "thanh-loc-co-the-bang-tra-thao-moc-7-ngay"],
    intro: "Trà dưỡng nhan hiệu quả hơn khi đi kèm thói quen ăn uống cân bằng: ít đường, đủ đạm, đủ chất xơ.",
    toc: ["Nguyên tắc ăn nhẹ", "Gợi ý theo bữa", "Mẹo duy trì"],
    sections: [
      { heading: "Nguyên tắc ăn nhẹ", points: ["Giảm đồ ngọt", "Ưu tiên rau và đạm nạc", "Uống đủ nước"] },
      { heading: "Gợi ý theo bữa", points: ["Sáng: yến mạch + trái cây", "Trưa: cơm vừa đủ + rau", "Tối: bữa nhẹ, ít dầu mỡ"] },
      { heading: "Mẹo duy trì", points: ["Chuẩn bị trước 2-3 bữa", "Giữ thực đơn đơn giản", "Theo dõi 1 tuần/lần"] }
    ],
    faqs: [
      { question: "Có cần kiêng tinh bột hoàn toàn?", answer: "Không, bạn chỉ cần cân bằng khẩu phần và ưu tiên tinh bột tốt." },
      { question: "Có thể uống trà ngay sau ăn no không?", answer: "Nên chờ 20-30 phút để cơ thể dễ chịu hơn." },
      { question: "Mục tiêu chính của thực đơn nhẹ là gì?", answer: "Giúp routine dễ duy trì và hỗ trợ cơ thể cân bằng hơn." }
    ]
  },
  {
    slug: "thanh-loc-co-the-bang-tra-thao-moc-7-ngay",
    title: "Thanh lọc cơ thể bằng trà thảo mộc 7 ngày: lộ trình an toàn",
    description: "Lộ trình 7 ngày thanh lọc nhẹ với trà thảo mộc, phù hợp người mới bắt đầu.",
    category: "thanh-loc-co-the",
    relatedSlugs: ["uong-tra-duong-nhan-luc-nao-la-tot-nhat", "review-tra-gao-lut-hoa-hong-co-hop-thanh-loc", "thuc-don-nhe-khi-dung-tra-duong-nhan"],
    intro: "Thanh lọc cơ thể không cần cực đoan. Kế hoạch 7 ngày ưu tiên uống đều, ăn nhẹ và ngủ đúng giờ.",
    toc: ["Mục tiêu 7 ngày", "Lịch uống mẫu", "Những điều cần tránh"],
    sections: [
      { heading: "Mục tiêu 7 ngày", points: ["Giảm đồ uống nhiều đường", "Giữ nhịp uống nước ổn định", "Quan sát năng lượng mỗi ngày"] },
      { heading: "Lịch uống mẫu", points: ["Sáng: trà nhẹ sau ăn", "Chiều: 1 ly trước 17h", "Tối: cân nhắc loại dịu"] },
      { heading: "Những điều cần tránh", points: ["Nhịn ăn quá mức", "Uống trà quá đặc", "Kỳ vọng kết quả tức thì"] }
    ],
    faqs: [
      { question: "7 ngày có đủ để thấy khác biệt không?", answer: "Bạn có thể thấy sự khác biệt nhẹ về thói quen và cảm giác cơ thể." },
      { question: "Có cần tập thể dục trong 7 ngày không?", answer: "Nên kết hợp vận động nhẹ để routine hiệu quả và bền hơn." },
      { question: "Có nên uống 3-4 ly mỗi ngày?", answer: "Không cần, 1-2 ly/ngày thường đã phù hợp với người mới." }
    ]
  },
  {
    slug: "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam",
    title: "Review trà kỷ tử táo đỏ hoa cúc: có hợp da xạm, ngủ muộn?",
    description: "Đánh giá thực tế trà kỷ tử táo đỏ hoa cúc: hương vị, cách dùng và đối tượng phù hợp.",
    category: "review-tra-duong-nhan",
    productId: "goji-tao-do-hoa-cuc",
    relatedSlugs: ["tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau", "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay", "uong-tra-duong-nhan-luc-nao-la-tot-nhat"],
    intro: "Đây là một trong các combo dưỡng nhan phổ biến vì dễ uống và dễ duy trì. Bài review tập trung trải nghiệm thực tế cho người ngủ muộn và da xạm nhẹ.",
    toc: ["Hương vị thực tế", "Ai nên thử", "Cách dùng gợi ý"],
    quickSummary: ["Vị thanh, ngọt nhẹ.", "Dễ hợp người mới.", "Phù hợp uống sáng hoặc chiều."],
    bestFor: ["Người mới bắt đầu uống trà dưỡng nhan.", "Người cần loại dễ uống, dễ duy trì."],
    notFor: ["Người không hợp vị ngọt tự nhiên.", "Người muốn hiệu quả tức thì."],
    sections: [
      { heading: "Hương vị thực tế", points: ["Mùi cúc dịu", "Vị táo đỏ nhẹ", "Hậu vị dễ chịu"] },
      { heading: "Ai nên thử", points: ["Người ngủ muộn nhẹ", "Người uống trà lần đầu", "Người cần routine đơn giản"] },
      { heading: "Cách dùng gợi ý", points: ["1-2 ly mỗi ngày", "Ưu tiên uống sau ăn", "Duy trì 2-3 tuần"] }
    ],
    faqs: [
      { question: "Loại này có khó uống không?", answer: "Thường khá dễ uống, nhất là với người mới bắt đầu." },
      { question: "Nên uống lúc nào?", answer: "Buổi sáng hoặc chiều là khung giờ dễ duy trì nhất." },
      { question: "Có thể thêm mật ong không?", answer: "Có thể, nhưng nên dùng lượng ít để tránh quá ngọt." }
    ]
  },
  {
    slug: "review-tra-hoa-hong-lai-kho-co-thuc-su-dep-da",
    title: "Review trà hoa hồng lai khô: có thực sự hỗ trợ đẹp da?",
    description: "Review trà hoa hồng lai khô: cảm nhận hương vị, cách pha và lưu ý cho người mới.",
    category: "review-tra-duong-nhan",
    productId: "hoa-hong-lai-kho",
    relatedSlugs: ["kien-thuc-tra-duong-nhan-thanh-phan-va-luu-y", "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang", "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau"],
    intro: "Trà hoa hồng lai khô được nhiều người chọn vì mùi hương dễ chịu và cảm giác thư giãn. Nhưng có hợp bạn không còn tùy khẩu vị và lịch sinh hoạt.",
    toc: ["Điểm mạnh", "Điểm cần cân nhắc", "Cách uống thực tế"],
    quickSummary: ["Hương hoa rõ.", "Hợp routine tối.", "Nên pha nhạt nếu mới bắt đầu."],
    bestFor: ["Người thích hương hoa.", "Người cần ritual tối thư giãn."],
    notFor: ["Người nhạy với mùi floral.", "Người thích trà vị đậm mạnh."],
    sections: [
      { heading: "Điểm mạnh", points: ["Mùi thơm dễ nhận biết", "Dễ tạo thói quen uống", "Phù hợp uống chậm buổi tối"] },
      { heading: "Điểm cần cân nhắc", points: ["Mùi hoa có thể kén người", "Pha quá đậm sẽ gắt", "Không thay thế chăm sóc da tổng thể"] },
      { heading: "Cách uống thực tế", points: ["Pha 3g với 220ml nước nóng", "Ủ 4-6 phút", "Uống tối sớm thay đồ ngọt"] }
    ],
    faqs: [
      { question: "Uống hằng ngày có được không?", answer: "Có thể, với lượng vừa phải và theo dõi phản ứng cá nhân." },
      { question: "Loại này có giúp ngủ ngon không?", answer: "Một số người thấy thư giãn hơn, nhưng không phải thuốc ngủ." },
      { question: "Có nên uống trước ngủ sát giờ?", answer: "Nên tránh quá sát giờ ngủ để hạn chế thức giấc giữa đêm." }
    ]
  },
  {
    slug: "review-tra-gao-lut-hoa-hong-co-hop-thanh-loc",
    title: "Review trà gạo lứt hoa hồng: có hợp thanh lọc và giữ dáng?",
    description: "Đánh giá trà gạo lứt hoa hồng cho người muốn thanh lọc nhẹ và giảm đồ uống ngọt.",
    category: "review-tra-duong-nhan",
    productId: "gao-lut-hoa-hong",
    relatedSlugs: ["thanh-loc-co-the-bang-tra-thao-moc-7-ngay", "thuc-don-nhe-khi-dung-tra-duong-nhan", "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay"],
    intro: "Nếu bạn muốn một loại trà dễ uống ban ngày và có vị bùi nhẹ, trà gạo lứt hoa hồng là lựa chọn đáng cân nhắc.",
    toc: ["Cảm nhận vị trà", "Đối tượng phù hợp", "Checklist trước khi mua"],
    quickSummary: ["Vị bùi nhẹ, dễ uống.", "Hợp thay đồ uống ngọt.", "Pha nhanh, tiện mang đi làm."],
    bestFor: ["Người muốn giảm nước ngọt.", "Người thích vị rang dịu nhẹ."],
    notFor: ["Người kỳ vọng hiệu quả giảm cân tức thì.", "Người không hợp mùi gạo rang."],
    sections: [
      { heading: "Cảm nhận vị trà", points: ["Mùi rang thơm", "Hậu vị nhẹ", "Ít gắt khi pha đúng"] },
      { heading: "Đối tượng phù hợp", points: ["Dân văn phòng bận rộn", "Người cần trà uống ban ngày", "Người mới bắt đầu thanh lọc nhẹ"] },
      { heading: "Checklist trước khi mua", points: ["Kiểm tra thành phần", "Xem phản hồi người dùng", "Bắt đầu gói nhỏ trước"] }
    ],
    faqs: [
      { question: "Có thể dùng buổi tối không?", answer: "Có thể dùng tối sớm, tránh uống quá sát giờ ngủ." },
      { question: "Pha bình lớn trong ngày được không?", answer: "Được, nên dùng trong ngày để giữ hương vị ổn định." },
      { question: "Loại này có đắng không?", answer: "Thường không đắng rõ, thiên vị bùi nhẹ." }
    ]
  }
];


