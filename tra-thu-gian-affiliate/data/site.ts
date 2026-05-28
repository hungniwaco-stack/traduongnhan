export type FAQ = { question: string; answer: string };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "tra-ngu-ngon" | "giam-stress" | "review-tra" | "healthy-lifestyle" | "kien-thuc-tra";
  intro: string;
  toc: string[];
  sections: { heading: string; points: string[] }[];
  faqs: FAQ[];
};

export type Product = {
  id: string;
  name: string;
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
  { slug: "tra-ngu-ngon", name: "Trà ngủ ngon", desc: "Gợi ý trà thảo mộc hỗ trợ thư giãn buổi tối." },
  { slug: "giam-stress", name: "Giảm stress", desc: "Thói quen và đồ uống giúp đầu óc nhẹ nhàng hơn." },
  { slug: "review-tra", name: "Review trà", desc: "Đánh giá thực tế các sản phẩm trà phổ biến." },
  { slug: "healthy-lifestyle", name: "Healthy Lifestyle", desc: "Routine lành mạnh cho dân văn phòng bận rộn." },
  { slug: "kien-thuc-tra", name: "Kiến thức trà", desc: "Kiến thức nền tảng để chọn và pha trà đúng cách." }
] as const;

export const categoryLabelMap: Record<BlogPost["category"], string> = {
  "tra-ngu-ngon": "Trà ngủ ngon",
  "giam-stress": "Giảm stress",
  "review-tra": "Review trà",
  "healthy-lifestyle": "Healthy Lifestyle",
  "kien-thuc-tra": "Kiến thức trà"
};

export const products: Product[] = [
  {
    id: "tam-sen-say-kho",
    name: "Trà Tâm Sen Sấy Khô Giúp Ngủ Ngon Thanh Nhiệt",
    shortDesc: "Vị thanh nhẹ, thường được dùng vào buổi tối để hỗ trợ thư giãn.",
    benefits: ["Hỗ trợ thư giãn sau giờ làm", "Có thể giúp cơ thể dễ vào giấc hơn", "Phù hợp routine tối nhẹ nhàng"],
    ingredients: "Tâm sen sấy khô, không tẩm hương liệu mạnh.",
    whoFor: "Dân văn phòng khó tắt nhịp suy nghĩ về đêm, người thích vị trà mộc.",
    howToBrew: "Dùng 2-3g cho 250ml nước nóng 85-90°C, ủ 5-7 phút.",
    experience: "Nước vàng nhạt, hậu hơi đắng nhẹ rồi dịu. Hợp uống sau bữa tối 1-2 giờ.",
    caution: "Người nhạy với vị đắng nên pha loãng trước. Không dùng thay cho tư vấn y tế.",
    affiliateUrl: "https://s.shopee.vn/5ApfBMndXs"
  },
  {
    id: "tra-hoa-cuc-mat-ong",
    name: "Trà Hoa Cúc Mật Ong Vạn An Thượng Hạng OCOP, Trà Hoa Cúc Đường Phèn Dưỡng Nhan Đẹp Da",
    shortDesc: "Dễ pha, mùi thơm dịu, thích hợp cho người mới bắt đầu uống trà thảo mộc.",
    benefits: ["Giúp thư giãn tinh thần", "Dùng nhanh ở văn phòng", "Vị dịu, dễ uống"],
    ingredients: "Hoa cúc sấy, mật ong sấy, túi lọc giấy thực phẩm.",
    whoFor: "Người bận rộn, cần giải pháp nhanh 3-5 phút.",
    howToBrew: "1 túi lọc với 200ml nước nóng, ủ 3-4 phút.",
    experience: "Mùi dịu, vị ngọt nhẹ tự nhiên, hợp uống chiều muộn.",
    caution: "Kiểm tra thành phần nếu dị ứng với phấn hoa.",
    affiliateUrl: "https://s.shopee.vn/70HK7MPvCJ"
  },
  {
    id: "tra-lavender-ngu-ngon",
    name: "Nụ hoa oải hương, lavender sấy khô, thư giãn, thảo mộc thiên nhiên",
    shortDesc: "Mùi hương thảo mộc nhẹ, thường dùng trong routine trước giờ ngủ.",
    benefits: ["Hỗ trợ thả lỏng", "Tạo cảm giác dễ chịu cuối ngày", "Kết hợp tốt với journaling"],
    ingredients: "Hoa lavender, cỏ ngọt tự nhiên.",
    whoFor: "Người làm việc trí óc căng thẳng cả ngày.",
    howToBrew: "2g trà với 220ml nước 90°C, ủ 5 phút.",
    experience: "Mùi floral rõ, nên uống ấm để cảm nhận tốt hơn.",
    caution: "Người không quen mùi hoa nên bắt đầu lượng ít.",
    affiliateUrl: "https://s.shopee.vn/8KmhiWBfIX"
  },
  {
    id: "tra-gao-lut-dau-do",
    name: "Trà Gạo Lứt Đậu Đỏ Rang",
    shortDesc: "Vị bùi nhẹ, dễ uống ban ngày hoặc tối sớm.",
    benefits: ["Giúp thay đồ uống ngọt", "Cảm giác ấm bụng", "Hợp với chế độ ăn lành mạnh"],
    ingredients: "Gạo lứt rang, đậu đỏ rang.",
    whoFor: "Dân văn phòng muốn giảm thói quen uống nước ngọt.",
    howToBrew: "5g hỗn hợp với 300ml nước sôi, ủ 7 phút.",
    experience: "Mùi rang thơm, vị hậu bùi dịu.",
    caution: "Không thay thế bữa ăn hoặc điều trị dinh dưỡng.",
    affiliateUrl: "https://s.shopee.vn/5q5MkQnhX2"
  },
  {
    id: "tra-hoa-nhai-goji",
    name: "Trà Hoa Nhài Nở Sấy Khô Nguyên Bông",
    shortDesc: "Hương hoa nhẹ, vị thanh, phù hợp dùng chiều tối để thư giãn sau giờ làm.",
    benefits: ["Hỗ trợ thư giãn tinh thần", "Dễ uống với người mới bắt đầu", "Phù hợp routine tối nhẹ nhàng"],
    ingredients: "Hoa nhài sấy, kỷ tử, cỏ ngọt tự nhiên.",
    whoFor: "Dân văn phòng cần đồ uống dịu nhẹ thay nước ngọt buổi chiều.",
    howToBrew: "Dùng 3-4g với 250ml nước nóng 85-90°C, ủ 4-6 phút.",
    experience: "Mùi hoa rõ nhưng không gắt, hậu thanh nhẹ và dễ uống hằng ngày.",
    caution: "Người nhạy với mùi hoa nên bắt đầu với lượng ít.",
    affiliateUrl: "https://s.shopee.vn/110704kJcg"
  },
  {
    id: "tra-cam-thao-tao-do",
    name: "Trà cam quế hoa hồng, táo đỏ, hoa nhài",
    shortDesc: "Vị ngọt thanh tự nhiên, phù hợp uống ấm vào tối sớm hoặc ngày mưa.",
    benefits: ["Giúp thay thế đồ uống nhiều đường", "Có thể hỗ trợ cảm giác ấm bụng", "Hợp với lối sống healthy nhẹ nhàng"],
    ingredients: "Cam thảo lát, táo đỏ sấy, hoa cúc trắng.",
    whoFor: "Người làm việc căng thẳng, muốn một lựa chọn trà thảo mộc dễ duy trì.",
    howToBrew: "Dùng 1 gói hoặc 5g trà cho 300ml nước sôi, ủ 6-8 phút.",
    experience: "Nước trà vàng nâu nhẹ, vị ngọt dịu, phù hợp uống chậm trước khi nghỉ ngơi.",
    caution: "Nên kiểm tra thành phần nếu đang theo chế độ ăn đặc thù.",
    affiliateUrl: "https://s.shopee.vn/2LVUgtdj5Y"
  }
];

export const posts: BlogPost[] = [
  {
    slug: "tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong",
    title: "Trà nào hỗ trợ ngủ ngon cho dân văn phòng bận rộn?",
    description: "Gợi ý các loại trà thảo mộc giúp bạn thư giãn và dễ vào giấc hơn sau ngày làm việc dài.",
    category: "tra-ngu-ngon",
    intro: "Nếu bạn hay trằn trọc vì đầu óc còn căng sau giờ làm, các loại trà thảo mộc dịu nhẹ có thể hỗ trợ thư giãn và tạo tín hiệu nghỉ ngơi cho cơ thể. Chọn đúng loại, đúng thời điểm sẽ giúp routine tối ổn định hơn.",
    toc: ["Vì sao dân văn phòng khó ngủ", "3 nhóm trà nên thử", "Cách uống để hiệu quả ổn định"],
    sections: [
      { heading: "Vì sao dân văn phòng dễ khó ngủ", points: ["Làm việc màn hình đến muộn", "Nhịp sinh hoạt thất thường", "Dùng đồ uống nhiều đường/caffeine chiều tối"] },
      { heading: "3 nhóm trà thường được dùng", points: ["Tâm sen: vị mộc, hợp uống tối", "Hoa cúc: dịu và dễ bắt đầu", "Lavender: phù hợp khi stress tinh thần"] },
      { heading: "Cách uống thực tế", points: ["Uống trước ngủ 60-90 phút", "Không pha quá đậm", "Duy trì đều 2-3 tuần để quan sát"] }
    ],
    faqs: [
      { question: "Uống trà ngủ ngon mỗi ngày có ổn không?", answer: "Thường có thể dùng hằng ngày với liều vừa phải, nhưng nên theo dõi phản ứng cá nhân." },
      { question: "Nên uống lúc mấy giờ?", answer: "Khoảng 60-90 phút trước giờ ngủ thường phù hợp với dân văn phòng." },
      { question: "Có thể thêm đường không?", answer: "Nên hạn chế đường để tránh ảnh hưởng chất lượng giấc ngủ." }
    ]
  },
  {
    slug: "routine-buoi-toi-15-phut-giam-cang-thang",
    title: "Routine buổi tối 15 phút giúp giảm căng thẳng sau giờ làm",
    description: "Một routine ngắn, dễ duy trì cho người bận rộn muốn ngủ tốt hơn.",
    category: "healthy-lifestyle",
    intro: "Bạn không cần routine phức tạp để sống lành mạnh hơn. Chỉ 15 phút buổi tối với trà ấm, giãn cơ và giảm tiếp xúc màn hình có thể giúp tâm trí chậm lại, từ đó hỗ trợ giấc ngủ và năng lượng ngày hôm sau.",
    toc: ["Routine 15 phút", "Những lỗi thường gặp", "Mẹo duy trì lâu dài"],
    sections: [
      { heading: "Routine 15 phút gợi ý", points: ["5 phút pha và uống trà ấm", "5 phút giãn vai gáy", "5 phút ghi 3 điều cần làm ngày mai"] },
      { heading: "Lỗi khiến routine khó bền", points: ["Đặt mục tiêu quá lớn", "Đổi lịch quá đột ngột", "Vừa uống trà vừa lướt điện thoại"] },
      { heading: "Mẹo duy trì", points: ["Chuẩn bị sẵn trà ở bàn bếp", "Đặt nhắc lịch cố định", "Bắt đầu từ 3 ngày/tuần"] }
    ],
    faqs: [
      { question: "Nếu về muộn thì làm sao?", answer: "Giữ phiên bản tối giản 5 phút vẫn tốt hơn bỏ hẳn." },
      { question: "Có cần tập nặng buổi tối?", answer: "Không bắt buộc, ưu tiên vận động nhẹ để thư giãn." },
      { question: "Nên chọn trà gì cho routine?", answer: "Các trà thảo mộc dịu như hoa cúc hoặc tâm sen thường dễ bắt đầu." }
    ]
  },
  {
    slug: "kien-thuc-co-ban-ve-tra-thao-moc",
    title: "Kiến thức cơ bản về trà thảo mộc cho người mới bắt đầu",
    description: "Hiểu đúng về trà thảo mộc để chọn sản phẩm phù hợp nhu cầu.",
    category: "kien-thuc-tra",
    intro: "Trà thảo mộc không phải thuốc và cũng không thay thế điều trị chuyên môn, nhưng thường được dùng để hỗ trợ thư giãn, cân bằng thói quen sinh hoạt. Hiểu đúng thành phần, thời điểm uống và cách pha sẽ giúp bạn dùng trà hiệu quả hơn.",
    toc: ["Trà thảo mộc là gì", "Cách đọc thành phần", "Nguyên tắc pha cơ bản"],
    sections: [
      { heading: "Trà thảo mộc là gì", points: ["Làm từ hoa, lá, hạt hoặc rễ", "Thường không chứa caffeine như trà xanh/đen", "Mục tiêu chính là thư giãn và trải nghiệm vị"] },
      { heading: "Đọc thành phần", points: ["Ưu tiên nhãn rõ ràng", "Hạn chế hương liệu quá mạnh", "Chú ý cảnh báo dị ứng"] },
      { heading: "Pha trà đúng cách", points: ["Nhiệt độ 85-95°C tùy loại", "Không ủ quá lâu", "Bắt đầu từ nồng độ nhẹ"] }
    ],
    faqs: [
      { question: "Trà thảo mộc có caffeine không?", answer: "Phần lớn ít hoặc không có, nhưng vẫn nên đọc nhãn sản phẩm." },
      { question: "Có thể pha nhiều lần?", answer: "Một số loại có thể pha 2 lần, tùy nguyên liệu." },
      { question: "Người nhạy cảm dạ dày nên lưu ý gì?", answer: "Nên uống sau ăn nhẹ và pha loãng hơn bình thường." }
    ]
  },
  {
    slug: "giam-stress-o-van-phong-bang-do-uong-lanh-manh",
    title: "Giảm stress ở văn phòng bằng đồ uống lành mạnh: nên bắt đầu từ đâu?",
    description: "Cách thay đổi nhỏ trong đồ uống giúp nhịp làm việc nhẹ nhàng hơn.",
    category: "giam-stress",
    intro: "Để giảm stress khi làm việc, bắt đầu từ đồ uống mỗi ngày là cách dễ nhất. Chuyển dần từ nước ngọt sang trà thảo mộc hoặc trà rang có thể giúp bạn ổn định năng lượng tốt hơn và giảm cảm giác bồn chồn cuối ngày.",
    toc: ["Vì sao đồ uống ảnh hưởng stress", "3 thay đổi nhỏ", "Checklist 7 ngày"],
    sections: [
      { heading: "Đồ uống và mức căng thẳng", points: ["Đường cao dễ làm năng lượng lên xuống", "Đồ uống quá kích thích làm khó thư giãn", "Uống đúng lúc giúp nhịp sinh học ổn định"] },
      { heading: "3 thay đổi dễ làm", points: ["Đổi 1 ly ngọt thành trà mỗi ngày", "Chuẩn bị bình nước cá nhân", "Giảm đồ uống kích thích sau 15h"] },
      { heading: "Checklist 7 ngày", points: ["Theo dõi giấc ngủ", "Theo dõi mức tỉnh táo buổi sáng", "Giữ thay đổi nhỏ, đều"] }
    ],
    faqs: [
      { question: "Có cần bỏ hẳn cà phê không?", answer: "Không nhất thiết, bạn có thể giảm dần theo khung giờ." },
      { question: "Nên thay bằng loại trà nào trước?", answer: "Hoa cúc hoặc gạo lứt rang thường dễ thích nghi." },
      { question: "Bao lâu thấy khác biệt?", answer: "Nhiều người cảm nhận sau 1-2 tuần duy trì ổn định." }
    ]
  },
  {
    slug: "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay",
    title: "6 loại trà cho dân văn phòng dễ uống ban ngày",
    description: "Danh sách trà vị dịu, tiện pha, hợp mang đi làm.",
    category: "tra-ngu-ngon",
    intro: "Nếu bạn muốn thay đổi thói quen đồ uống công sở, 6 loại trà dưới đây dễ pha, dễ uống và phù hợp nhịp làm việc bận rộn. Chúng không tạo cảm giác nặng nề, đồng thời có thể hỗ trợ tinh thần nhẹ nhàng suốt ngày.",
    toc: ["Tiêu chí chọn trà công sở", "Top 6 gợi ý", "Cách chuẩn bị tiết kiệm thời gian"],
    sections: [
      { heading: "Tiêu chí chọn trà", points: ["Vị dịu", "Dễ pha nhanh", "Thành phần minh bạch"] },
      { heading: "Top 6 loại trà", points: ["Hoa cúc", "Gạo lứt rang", "Lavender nhẹ", "Tâm sen pha loãng", "Hoa nhài sấy khô nguyên bông", "Cam quế hoa hồng, táo đỏ, hoa nhài"] },
      { heading: "Chuẩn bị tiện lợi", points: ["Dùng túi lọc sẵn", "Mang bình giữ nhiệt nhỏ", "Chuẩn bị phần uống cho cả ngày"] }
    ],
    faqs: [
      { question: "Có thể pha sẵn từ sáng không?", answer: "Có thể, nhưng nên giữ nhiệt phù hợp và dùng trong ngày." },
      { question: "Nên uống bao nhiêu ly?", answer: "Thường 1-2 ly là mức dễ duy trì cho người mới." },
      { question: "Trà nào hợp giờ chiều?", answer: "Hoa cúc hoặc gạo lứt rang là lựa chọn phổ biến." }
    ]
  }
,
  {
    slug: "review-tra-tam-sen-say-kho-cho-nguoi-kho-ngu",
    title: "Review Trà Tâm Sen Sấy Khô: Có hợp với dân văn phòng khó ngủ?",
    description: "Bài review chi tiết trà tâm sen sấy khô: hương vị, cách pha, đối tượng phù hợp và lưu ý khi dùng.",
    category: "review-tra",
    intro: "Trà tâm sen sấy khô thường được dùng vào buổi tối để hỗ trợ thư giãn và giúp cơ thể dễ vào trạng thái nghỉ ngơi hơn. Với dân văn phòng căng thẳng cuối ngày, đây có thể là lựa chọn đáng thử nếu pha đúng độ và dùng đều đặn.",
    toc: ["Sản phẩm là gì", "Điểm mạnh và điểm cần lưu ý", "Cách dùng thực tế cho dân văn phòng"],
    sections: [
      { heading: "Sản phẩm là gì", points: ["Trà thảo mộc từ tâm sen sấy khô", "Vị mộc, hơi đắng nhẹ", "Thường uống tối sau bữa ăn"] },
      { heading: "Điểm mạnh và điểm cần lưu ý", points: ["Hỗ trợ thư giãn sau ngày làm việc", "Phù hợp routine trước giờ ngủ", "Người mới nên pha loãng để dễ uống hơn"] },
      { heading: "Cách dùng thực tế", points: ["Dùng 2-3g cho 250ml nước 85-90°C", "Ủ 5-7 phút", "Uống trước ngủ 60-90 phút"] }
    ],
    faqs: [
      { question: "Trà tâm sen có gây buồn ngủ ngay không?", answer: "Thường không gây buồn ngủ ngay, mà hỗ trợ trạng thái thư giãn dần." },
      { question: "Uống bao lâu thì thấy phù hợp?", answer: "Bạn có thể theo dõi trong 2-3 tuần để đánh giá mức độ hợp cơ thể." },
      { question: "Có nên thêm đường?", answer: "Nên hạn chế để giữ vị mộc tự nhiên và tránh ảnh hưởng giấc ngủ." }
    ]
  },
  {
    slug: "review-tra-hoa-cuc-mat-ong-van-an-ocop",
    title: "Review Trà Hoa Cúc Mật Ong Vạn An OCOP: Dễ uống cho người mới?",
    description: "Đánh giá thực tế trà hoa cúc mật ong Vạn An OCOP: vị, độ tiện, đối tượng phù hợp và lưu ý.",
    category: "review-tra",
    intro: "Nếu bạn mới bắt đầu uống trà thảo mộc, trà hoa cúc mật ong Vạn An OCOP là lựa chọn dễ tiếp cận vì vị dịu, mùi nhẹ và cách pha nhanh. Sản phẩm phù hợp với người bận rộn muốn thay đồ uống ngọt bằng một lựa chọn nhẹ nhàng hơn.",
    toc: ["Hương vị thực tế", "Ưu điểm cho dân văn phòng", "Lưu ý trước khi dùng"],
    sections: [
      { heading: "Hương vị thực tế", points: ["Mùi hoa cúc dịu", "Vị ngọt nhẹ tự nhiên", "Dễ uống khi còn ấm"] },
      { heading: "Ưu điểm cho dân văn phòng", points: ["Pha nhanh 3-5 phút", "Tiện mang theo khi đi làm", "Phù hợp khung giờ chiều muộn"] },
      { heading: "Lưu ý trước khi dùng", points: ["Kiểm tra thành phần nếu dị ứng phấn hoa", "Nên uống nhạt khi mới bắt đầu", "Không dùng để thay thế tư vấn y tế"] }
    ],
    faqs: [
      { question: "Uống lúc nào hợp nhất?", answer: "Chiều muộn hoặc tối sớm thường là khung giờ dễ chịu." },
      { question: "Có hợp người ăn kiêng không?", answer: "Bạn nên chọn phiên bản ít đường hoặc không thêm đường." },
      { question: "Có thể uống hằng ngày?", answer: "Thường có thể dùng hằng ngày với lượng vừa phải." }
    ]
  },
  {
    slug: "review-nu-hoa-oai-huong-lavender-say-kho",
    title: "Review Nụ Hoa Oải Hương Sấy Khô: Thư giãn tinh thần sau giờ làm",
    description: "Review trà lavender sấy khô: cảm nhận mùi vị, cách pha và ai nên cân nhắc trước khi dùng.",
    category: "review-tra",
    intro: "Nụ hoa oải hương sấy khô phù hợp với người muốn thư giãn tinh thần sau giờ làm việc căng thẳng. Mùi floral khá rõ nên trải nghiệm sẽ phụ thuộc khẩu vị từng người, nhưng nếu dùng đúng lượng và uống ấm, cảm giác dễ chịu thường rõ hơn.",
    toc: ["Mùi vị và trải nghiệm", "Đối tượng phù hợp", "Cách pha để dễ uống"],
    sections: [
      { heading: "Mùi vị và trải nghiệm", points: ["Mùi hoa đặc trưng, rõ", "Hậu vị dịu nếu pha vừa", "Hợp uống chậm vào buổi tối"] },
      { heading: "Đối tượng phù hợp", points: ["Người làm việc trí óc căng thẳng", "Người thích trà hương hoa", "Người cần ritual thư giãn cuối ngày"] },
      { heading: "Cách pha để dễ uống", points: ["Dùng 2g với 220ml nước 90°C", "Ủ khoảng 5 phút", "Bắt đầu nồng độ nhẹ nếu mới uống"] }
    ],
    faqs: [
      { question: "Mùi lavender có dễ uống không?", answer: "Với người quen trà hoa thì khá dễ chịu, người mới nên pha nhạt trước." },
      { question: "Uống vào ban ngày được không?", answer: "Có thể, nhưng thường hợp nhất vào chiều tối hoặc trước giờ nghỉ." },
      { question: "Có thể kết hợp với routine nào?", answer: "Rất hợp với journaling hoặc giãn cơ 5-10 phút trước ngủ." }
    ]
  },
  {
    slug: "review-tra-gao-lut-dau-do-rang-cho-van-phong",
    title: "Review Trà Gạo Lứt Đậu Đỏ Rang: Lựa chọn lành mạnh thay đồ ngọt",
    description: "Đánh giá trà gạo lứt đậu đỏ rang: vị bùi, cách pha, ai nên dùng trong môi trường công sở.",
    category: "review-tra",
    intro: "Trà gạo lứt đậu đỏ rang là lựa chọn dễ uống cho người muốn thay dần nước ngọt hoặc trà sữa. Vị bùi nhẹ, cảm giác ấm bụng và ít kén khẩu vị giúp sản phẩm này phù hợp với nhịp sống văn phòng bận rộn hằng ngày.",
    toc: ["Vị trà có gì nổi bật", "Ai nên dùng", "Mẹo dùng hiệu quả"],
    sections: [
      { heading: "Vị trà có gì nổi bật", points: ["Mùi rang thơm", "Hậu vị bùi nhẹ", "Dễ uống cả ngày"] },
      { heading: "Ai nên dùng", points: ["Người muốn giảm đồ uống nhiều đường", "Người thích trà vị ngũ cốc", "Người cần đồ uống ấm nhẹ nhàng"] },
      { heading: "Mẹo dùng hiệu quả", points: ["Pha 5g với 300ml nước sôi", "Ủ 7 phút để vị tròn hơn", "Uống thay 1 ly đồ ngọt mỗi ngày"] }
    ],
    faqs: [
      { question: "Uống tối có nặng bụng không?", answer: "Thường khá nhẹ, nhưng bạn nên thử lượng nhỏ trước để theo dõi cơ thể." },
      { question: "Có thể pha bình lớn mang đi làm?", answer: "Có thể, giữ ấm và dùng trong ngày sẽ ngon hơn." },
      { question: "Dùng thay bữa sáng được không?", answer: "Không nên dùng thay bữa ăn chính." }
    ]
  },
  {
    slug: "review-tra-hoa-nhai-no-say-kho-nguyen-bong",
    title: "Review Trà Hoa Nhài Nở Sấy Khô Nguyên Bông: Thanh nhẹ, dễ duy trì",
    description: "Bài review trà hoa nhài nguyên bông: hương vị, đối tượng phù hợp và cách uống cho dân văn phòng.",
    category: "review-tra",
    intro: "Trà hoa nhài nở sấy khô nguyên bông phù hợp với người thích hương hoa nhẹ và muốn một loại trà uống đều mỗi ngày. Vị thanh, hậu dịu giúp sản phẩm này dễ kết hợp với routine làm việc lẫn thư giãn buổi tối.",
    toc: ["Cảm nhận hương vị", "Phù hợp với ai", "Cách dùng gợi ý"],
    sections: [
      { heading: "Cảm nhận hương vị", points: ["Hương nhài nhẹ, không gắt", "Nước trà thanh", "Dễ uống khi pha vừa"] },
      { heading: "Phù hợp với ai", points: ["Người thích trà hương hoa", "Dân văn phòng cần đồ uống nhẹ", "Người muốn giảm nước ngọt buổi chiều"] },
      { heading: "Cách dùng gợi ý", points: ["3-4g với 250ml nước 85-90°C", "Ủ 4-6 phút", "Uống chậm để cảm nhận hậu vị"] }
    ],
    faqs: [
      { question: "Trà hoa nhài có đắng không?", answer: "Thường không đắng rõ nếu pha đúng nhiệt và thời gian." },
      { question: "Có thể uống lạnh không?", answer: "Có thể, nhưng phiên bản ấm thường cho cảm giác thư giãn tốt hơn." },
      { question: "Nên dùng mấy ly mỗi ngày?", answer: "1-2 ly là mức dễ duy trì với người mới." }
    ]
  },
  {
    slug: "review-tra-cam-que-hoa-hong-tao-do-hoa-nhai",
    title: "Review Trà cam quế hoa hồng, táo đỏ, hoa nhài: Ấm dịu cuối ngày",
    description: "Review chi tiết trà cam quế hoa hồng táo đỏ hoa nhài: mùi vị, đối tượng phù hợp và lưu ý.",
    category: "review-tra",
    intro: "Trà cam quế hoa hồng, táo đỏ, hoa nhài mang vị ngọt thanh tự nhiên và cảm giác ấm dịu, phù hợp cho tối sớm hoặc ngày mưa. Đây là lựa chọn đáng cân nhắc nếu bạn muốn giảm đồ uống ngọt nhưng vẫn giữ trải nghiệm dễ chịu.",
    toc: ["Điểm nổi bật của sản phẩm", "Ai nên cân nhắc dùng", "Cách pha cho vị cân bằng"],
    sections: [
      { heading: "Điểm nổi bật của sản phẩm", points: ["Mùi thơm thảo mộc ấm", "Vị ngọt thanh", "Hợp uống chậm để thư giãn"] },
      { heading: "Ai nên cân nhắc dùng", points: ["Người muốn đồ uống tối nhẹ nhàng", "Người cần thay nước ngọt", "Người thích trà có mùi quế-hồng nhẹ"] },
      { heading: "Cách pha cho vị cân bằng", points: ["1 gói hoặc 5g cho 300ml nước sôi", "Ủ 6-8 phút", "Điều chỉnh đậm nhạt theo khẩu vị"] }
    ],
    faqs: [
      { question: "Trà này có ngọt gắt không?", answer: "Thường ngọt dịu tự nhiên, không quá gắt nếu pha đúng liều." },
      { question: "Có thể uống trước ngủ không?", answer: "Có thể dùng tối sớm để thư giãn, tránh uống quá sát giờ ngủ." },
      { question: "Người ăn kiêng dùng được không?", answer: "Nên đọc kỹ thành phần để phù hợp chế độ ăn cá nhân." }
    ]
  }
];
