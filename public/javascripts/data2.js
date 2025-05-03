const dataSets = [
    {
        ques: "Tôi bị sốt, nên uống thuốc gì để hạ sốt nhanh?",
        ans: "Bạn có thể dùng Paracetamol 500mg của Mediplantex, Actadol 500 hoặc Hapacol Blue. Đây là thuốc hạ sốt hiệu quả, an toàn. Uống cách mỗi 4-6 giờ, tối đa không quá 4g/ngày. Uống nhiều nước và nghỉ ngơi."
    },
    {
        ques: "Trẻ em bị sốt nhẹ, nên uống thuốc nào?",
        ans: "Paracetamol 500mg chia nhỏ liều theo cân nặng của trẻ, hoặc Hapacol Kid. Chỉ nên sử dụng đúng hướng dẫn. Nếu sốt cao trên 3 ngày hoặc kèm co giật, cần đưa trẻ đi khám."
    },
    {
        ques: "Sốt do cảm lạnh thì dùng thuốc gì?",
        ans: "TK3 300mg Hadiphar giúp hạ sốt, giảm đau và thông mũi nhẹ nhờ chứa Paracetamol và phenylephrine. Nên uống đủ nước và nghỉ ngơi hỗ trợ phục hồi."
    },
    {
        ques: "Người cao tuổi bị sốt, nên chọn thuốc nào?",
        ans: "Paracetamol 500mg hoặc Actadol 500 là lựa chọn an toàn cho người cao tuổi. Lưu ý tránh lạm dụng liều cao và kiểm tra chức năng gan định kỳ."
    },
    {
        ques: "Tôi bị sốt đau nhức toàn thân, nên dùng gì?",
        ans: "Bạn có thể uống Ibuprofen 200mg Nadyphar, vừa giúp hạ sốt, giảm đau nhức và có tác dụng chống viêm nhẹ. Nên uống sau ăn để tránh kích ứng dạ dày."
    },
    {
        ques: "Tôi bị dị ứng da, nổi mề đay, nên dùng thuốc nào?",
        ans: "Promethazin có tác dụng điều trị dị ứng như nổi mề đay, phù mạch, viêm mũi, viêm kết mạc. Thuốc có thể gây buồn ngủ nhẹ nên thận trọng khi lái xe."
    },
    {
        ques: "Tôi bị viêm mũi dị ứng, nên uống thuốc nào?",
        ans: "Lorastad D hoặc Allerphast 180 sẽ giúp kiểm soát triệu chứng viêm mũi dị ứng, giảm nghẹt mũi và sổ mũi hiệu quả trong các đợt cấp."
    },
    {
        ques: "Dị ứng mắt (viêm kết mạc) nên dùng thuốc gì?",
        ans: "Allerphast 180 giúp kiểm soát triệu chứng ngứa, đỏ mắt do dị ứng. Ưu điểm ít gây buồn ngủ, phù hợp với người cần tỉnh táo làm việc."
    },
    {
        ques: "Tôi dễ bị say tàu xe, nên dùng thuốc nào?",
        ans: "Promethazin được chỉ định để phòng và điều trị say sóng, say tàu xe. Uống trước chuyến đi khoảng 30 phút để đạt hiệu quả tốt nhất."
    },
    {
        ques: "Người có bệnh tim mạch bị dị ứng nên chọn thuốc nào?",
        ans: "Allerphast 180 là thuốc kháng histamin thế hệ mới, an toàn hơn cho người bệnh tim vì không gây tăng huyết áp như các thuốc thông mũi."
    },
    {
        ques: "Tôi bị đau dạ dày nhẹ, nên uống thuốc gì?",
        ans: "Bạn nên dùng Amalgel hoặc Ulcersep để trung hòa acid dạ dày, giảm đau nhanh và bảo vệ niêm mạc. Uống sau bữa ăn hoặc khi đau."
    },
    {
        ques: "Đầy bụng, khó tiêu sau ăn thì dùng thuốc nào?",
        ans: "Cholapan giúp tăng tiết mật, hỗ trợ tiêu hóa chất béo, giảm nhanh cảm giác đầy bụng, chướng hơi sau bữa ăn nhiều dầu mỡ."
    },
    {
        ques: "Tôi bị viêm loét dạ dày, dùng thuốc nào hỗ trợ?",
        ans: "Ulcersep có tác dụng hỗ trợ phục hồi niêm mạc dạ dày tổn thương. Với loét nặng, cần phối hợp thêm thuốc ức chế bơm proton theo chỉ định bác sĩ."
    },
    {
        ques: "Tôi ăn đồ dầu mỡ dễ đầy bụng, nên uống gì?",
        ans: "Bạn có thể dùng Cholapan. Thuốc giúp kích thích tiết mật, cải thiện tiêu hóa lipid, giảm cảm giác đầy bụng và khó chịu."
    },
    {
        ques: "Người sau uống rượu bia bị rối loạn tiêu hóa, nên dùng gì?",
        ans: "Baci-Subti chứa men Bacillus subtilis giúp khôi phục hệ vi khuẩn ruột, giảm tiêu chảy và rối loạn tiêu hóa do bia rượu."
    },
    {
        ques: "Tôi bị táo bón lâu ngày, nên dùng thuốc nào?",
        ans: "Forlax chứa Macrogol, giúp hấp thu nước vào ruột, làm mềm phân và cải thiện nhu động ruột tự nhiên, an toàn cho điều trị táo bón mạn."
    },
    {
        ques: "Táo bón cấp tính, nên chọn thuốc gì?",
        ans: "Bisacodyl DHG có tác dụng kích thích nhu động ruột nhanh, thích hợp điều trị táo bón cấp tính. Chỉ nên dùng ngắn hạn."
    },
    {
        ques: "Trẻ em bị táo bón nên dùng thuốc nào an toàn?",
        ans: "Phytilax với nguồn gốc từ thiên nhiên, tác dụng nhẹ nhàng, phù hợp cho trẻ bị táo bón, nên dùng kèm uống nhiều nước."
    },
    {
        ques: "Chuẩn bị nội soi đại tràng, nên uống thuốc nào?",
        ans: "Ovalax® được chỉ định thải sạch ruột trước nội soi hoặc phẫu thuật vùng bụng, giúp quá trình kiểm tra dễ dàng hơn."
    },
    {
        ques: "Táo bón do ít vận động, nên uống gì?",
        ans: "Bạn có thể dùng Forlax kết hợp thay đổi chế độ sinh hoạt: uống nhiều nước, ăn nhiều chất xơ và vận động nhẹ nhàng hàng ngày."
    },
    {
        ques: "Tôi bị ho khan kéo dài, nên uống thuốc gì?",
        ans: "Tocemux chứa Carbocistein giúpày loãng đờm, giảm ho khan hiệu quả. Uống đúng liều lượng để đạt hiệu quả tốt nhất."
    },
    {
        ques: "Ho có đờm đặc khó khạc ra, nên dùng thuốc gì?",
        ans: "Tocemux là lựa chọn phù hợp, giúp long đờm, giảm kích ứng họng và làm sạch đường hô hấp nhanh hơn."
    },
    {
        ques: "Ho do dị ứng nên chọn thuốc nào hỗ trợ?",
        ans: "Allerphast 180 giúp giảm triệu chứng ho khan do dị ứng bằng cách chặn histamin gây viêm và kích thích hô hấp."
    },
    {
        ques: "Trẻ nhỏ bị ho đờm, nên dùng thuốc gì?",
        ans: "Tocemux có thể sử dụng cho trẻ em trên 2 tuổi, giúp làm loãng đờm và giảm ho đờm nhẹ. Nên tham khảo ý kiến bác sĩ trước khi dùng."
    },
    {
        ques: "Người bị viêm phế quản nhẹ, nên hỗ trợ bằng thuốc gì?",
        ans: "Tocemux giúp giảm tiết đờm và hỗ trợ làm sạch phế quản. Nếu ho kéo dài trên 7 ngày, nên đi khám để đánh giá thêm."
    },
    {
        ques: "Tôi muốn tăng sức đề kháng, nên bổ sung gì?",
        ans: "Vitamin C 500mg giúp tăng sức đề kháng, chống oxy hóa, hỗ trợ cơ thể chống lại cảm lạnh và các bệnh nhiễm trùng nhẹ."
    },
    {
        ques: "Da tôi khô, tóc dễ gãy, nên bổ sung gì?",
        ans: "Vitamin E 400IU giúp bảo vệ da và tóc khỏi tổn thương oxy hóa. Nên uống đều đặn 1 viên mỗi ngày theo khuyến nghị."
    },
    {
        ques: "Tôi cần bổ sung men tiêu hóa, nên uống gì?",
        ans: "Baci-Subti cung cấp lợi khuẩn Bacillus subtilis, giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa và hấp thu dưỡng chất tốt hơn."
    },
    {
        ques: "Bị tiêu hóa kém sau ốm dậy, nên bổ sung gì?",
        ans: "Bio-acimin Fiber vừa bổ sung chất xơ hòa tan vừa cung cấp men vi sinh, giúp phục hồi chức năng tiêu hóa sau ốm hiệu quả."
    },
    {
        ques: "Người lớn tuổi muốn chăm sóc hệ tiêu hóa, uống gì?",
        ans: "Bio-acimin Fiber là lựa chọn phù hợp, giúp duy trì hệ vi sinh đường ruột khỏe mạnh, ngăn ngừa táo bón và hỗ trợ hấp thu dưỡng chất."
    }
];