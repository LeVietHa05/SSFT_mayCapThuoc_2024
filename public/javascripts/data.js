let pillList = [
    {
        pill_id: 'P1235f',
        pill_name: 'Paracetamol giảm đau từ nhẹ đến vừa và hạ sốt',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: 'Mediplantex',
        pill_quantity: 0,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [`images/pill/Thuốc_giảm_đau_và_hạ_sốt_-_Paracetamol.png`],
        pill_description: ['Paracetamol 500mg là thuốc được sử dụng phổ biến giúp giảm các triệu chứng đau từ nhẹ đến vừa và giảm mạnh các triệu chứng sốt nhẹ. Thuốc Paracetamol 500mg giúp hạ nhiệt, giảm đau. Không gây lệ thuộc thuốc, không gây kích ứng đường tiêu hóa.'],
        pill_use: [
            `Sử dụng thuốc cùng với một lượng nước ấm vừa phải.`,
            `Chờ ít nhất 4 tiếng trước khi sử dụng một liều khác.`,
            `Không nên sử dụng nhiều hơn 4 liều trong 24 giờ`,
        ],
        pill_ingredient: ['Paracetamol'],
        pill_indication: [
            `Với điều trị đau: Điều trị ở các chứng đau do các nguyên nhân khác nhau: Nhức đầu, đau nửa đầu, đau bụng kinh, đau dây thần kinh, đau nhức hệ xương cơ, đau răng.`,
            `Với điều trị sốt: Sốt do bị nhiễm khuẩn, viêm họng, viêm phế quản.`,
            `Làm giảm đau nhức và hạ sốt trong các trường hợp bị cảm lạnh, cảm cúm, sốt do virus.`,
        ],
        pill_contraindication: [
            `Bệnh nhân bị thiếu máu.`,
            `Người mắc chứng rối loạn trong đông máu.`,
            `Người mắc bệnh tạo keo, giảm thể tích tuần hoàn do sử dụng thuốc lợi tiểu hay suy thận, bệnh nhân hen suyễn.`,
            `Người bệnh quá mẫn với paracetamol hoặc các thành phần tá dược của thuốc.`,
            `Người bệnh bị suy giảm glucose-6-phosphat dehydrogenase.`,
            `Người bệnh có tiền sử phản ứng quá mẫn (co thắt phế quản, phù mạch, hen suyễn, viêm mũi, hoặc nổi mày đay) khi sử dụng aspirin hoặc các thuốc chống viêm không steroid (NSAID).`,
            `Bệnh nhân đã từng bị hoặc đang bị loét hay xuất huyết đường tiêu hóa.`,
            `Người bị suy gan nặng, suy thận nặng có Clcr < 30 ml/ phút, suy tim sung huyết.`,
        ],
        pill_dosage: [
            `Liều dùng cho người lớn:`,
            [
                `Liều dùng paracetamol 500mg thông thường để hạ sốt và giảm đau cho người lớn là từ 325 – 650mg trong mỗi 4 – 6 giờ hoặc 1.000mg trong 6 – 8 giờ.`,
                `Thuốc paracetamol 500mg viên nén có thể dùng đường uống hoặc đặt trực tràng.`,
            ],
            `Liều dùng cho trẻ em:`,
            [
                `Liều dùng để giảm đau và sốt bằng đường uống hoặc đặt trực tràng cho trẻ em như sau:`,
                `Dưới 1 tháng tuổi: Dùng 10 – 15mg/kg cho mỗi liều sau khoảng 4 – 6 giờ khi cần thiết.`,
                `Từ 1 tháng – 12 tuổi: Dùng 10 – 15mg/kg sau mỗi 4 – 6 giờ khi cần thiết (tối đa 5 liều trong vòng 24 giờ).`,
                `Hạ sốt cho trẻ từ 4 tháng – 9 tuổi: Nên dùng liều ban đầu là 30mg/kg.`,
                `Từ 12 tuổi trở lên: Dùng 325 – 650mg sau mỗi 4 – 6 giờ hoặc 1000mg mỗi 6 – 8 giờ.`,
                `Đối với trẻ béo phì: Sử dụng theo tuổi chứ không sử dụng theo kí lô cân nặng`,
                `Lưu ý đặc biệt và thận trọng khi sử dụng thuốc Paracetamol 500mg`,
                `Hiệu quả của thuốc hạ sốt và giảm đau Paracetamol 500mg còn tùy thuộc tình trạng và thể trạng của bệnh nhân.`,
                `Không uống nhiều thuốc này hơn liều khuyến cáo, vì quá liều acetaminophen sẽ gây ra nhiều tác hại nghiêm trọng. Liều lượng tối đa cho người lớn là 1g (1.000mg) mỗi lần và 4g (4.000mg) mỗi ngày.`,
            ],
            `Hỏi ý kiến bác sĩ nếu điều trị kéo dài quá 5 ngày ở trẻ em và quá 10 ngày ở người lớn.`,
            `Không được uống rượu trong thời gian điều trị bằng thuốc này.Vì rượu có thể làm tăng nguy cơ gây tổn thương gan.`,
            `Hỏi ý kiến bác sĩ khi dùng thuốc này cho trẻ dưới 3 tuổi.`,
            `Trẻ em dưới 12 tuổi liều dùng hàng ngày không vượt quá 2 gam.`,
            `Người có tiền sử nghiện rượu và bệnh gan, nên hỏi bác sĩ trước khi sử dụng thuốc.`,
            `Không uống thuốc khi bị dị ứng với paracetamol(acetaminophen hoặc N - acetyl - p - aminophenol).`,
            `Ngoài ra người bệnh cần phải ngưng sử dụng ngay và gặp bác sĩ nếu như:`,
            `Tiếp tục bị sốt sau thời gian khoảng 3 ngày sử dụng thuốc.`,
            `Tình trạng đau vẫn không chấm dứt sau 7 ngày sử dụng(hoặc sau 5 ngày đối với trẻ em).`,
            `Da bị nổi mẩn ngứa, đau đầu liên tục hoặc xuất hiện những đốm đỏ, sưng tấy.`,
            `Các triệu chứng trở nên trầm trọng hơn hoặc có thêm những triệu chứng bất thường mới.`,
            `Sử dụng cho người lái xe và vận hành máy móc`,
            `Chưa có báo cáo về những ảnh hưởng của thuốc giảm đau và hạ sốt Paracetamol 500mg trên khả năng lái xe hoặc sử dụng máy móc.`,
            `Tuy nhiên, qua một số theo dõi thì thuốc có thể sử dụng ở trên đối tượng này.`,
            `Sử dụng cho phụ nữ có thai hoặc đang cho con bú`,
            `Các nghiên cứu về việc dùng thuốc này trên phụ nữ có thai và đang cho con bú vẫn còn hạn chế.`,
            `Thời kỳ mang thai: Chưa xác định được tính an toàn của thuốc dùng khi thai nghén liên quan đến tác dụng không mong muốn có thể có đối với phát triển thai.Do đó, chỉ nên dùng thuoc paracetamol ở người mang thai khi thật cần.`,
            `Thời kỳ cho con bú: thuốc Paracetamol được bài tiết qua sữa mẹ nhưng không có ý nghĩa đáng kể trên lâm sàng.Dữ liệu được công bố không chống chỉ định sử dụng thuốc này cho phụ nữ cho con bú.`,

        ],
        pill_pharmacology: [
            `Paracetamol (còn có tên gọi khác là acetaminophen hoặc N-acetyl-p-aminophenol) là một loại chất chuyển hóa mang trong mình hoạt tính của phenacetin, được biết đến như một thuốc giảm đau - hạ sốt hữu hiệu và phổ biến có thể thay thế aspirin; tuy nhiên, khác với aspirin, paracetamol không có hiệu quả trong điều trị các trường hợp bị viêm.`,
            `Với liều dùng ngang nhau và được tính theo đơn vị gam, thì paracetamol có tác dụng giảm đau và hạ sốt tương tự như aspirin.`,
            `Paracetamol làm giảm thân nhiệt ở người bệnh sốt, nhưng hiếm khi làm giảm thân nhiệt ở người bình thường. Thuốc acetaminophen tác động lên vùng dưới đồi gây hạ nhiệt, tỏa nhiệt tăng do giãn mạch và tăng lưu lượng máu ngoại biên.`,
            `Với liều điều trị, acetaminophen ít tác động đến hệ tim mạch và hô hấp, không làm thay đổi cân bằng acid - base, không gây kích ứng, xước hoặc chảy máu dạ dày như khi dùng salicylat, vì paracetamol không tác dụng trên cyclooxygenase toàn thân, chỉ tác động đến cyclooxygenase/prostaglandin của hệ thần kinh trung ương. Paracetamol/acetaminophen không có tác dụng trên tiểu cầu hoặc thời gian chảy máu.`,
            `Khi sử dụng đến trạng thái quá liều, một chất chuyển hóa của paracetamol là N-acetyl-benzoquinonimin có thể gây độc nặng cho gan. Ở liều bình thường, paracetamol dung nạp tốt, không có nhiều tác dụng phụ của aspirin. Tuy vậy, quá liều cấp tính (trên 10 g) làm thương tổn gan gây chết người, và những vụ ngộ độc và tự vẫn bằng paracetamol đã tăng lên một cách đáng lo ngại trong những năm gần đây. Ngoài ra, nhiều người trong đó có cả thầy thuốc, dường như không biết tác dụng chống viêm kém của paracetamol.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Paracetamol được hấp thu nhanh và hầu như hoàn toàn thông qua đường tiêu hóa. Thức ăn có thể làm viên nén giải phóng kéo dài thuốc paracetamol chậm được hấp thu một phần. Thức ăn giàu carbon hydrat làm giảm tỷ lệ hấp thu của paracetamol. Nồng độ đỉnh trong huyết tương đạt trong vòng 30 đến 60 phút sau khi uống với liều điều trị.`,
            `Phân bố: Paracetamol (acetaminophen) phân bố nhanh và đồng đều trong phần lớn các mô của cơ thể. Khoảng 25% lượng paracetamol trong máu kết hợp với protein huyết tương.`,
            `Chuyển hóa: Paracetamol bị N-hydroxyl hóa bởi cytochrom P450 để tạo nên N-acetyl-benzoquinonimin, một chất trung gian có tính phản ứng cao. Chất chuyển hóa này bình thường phản ứng với các nhóm sulfhydryl trong glutathion và như vậy bị khử hoạt tính. Tuy nhiên, nếu uống liều cao paracetamol, chất chuyển hóa này được tạo thành với lượng đủ để làm cạn kiệt glutathion của gan; trong tình trạng đó, phản ứng của nó với nhóm sulfhydryl của protein gan tăng lên, có thể dẫn đến hoại tử gan.`,
            `Thải trừ: Nửa đời huyết tương của paracetamol là 1,25 - 3 giờ, có thể kéo dài với liều gây độc hoặc ở người bệnh có thương tổn gan. Sau liều điều trị, có thể tìm thấy 90 đến 100% thuốc trong nước tiểu trong ngày thứ nhất, chủ yếu sau khi liên hợp trong gan với acid glucuronic (khoảng 60%), acid sulfuric (khoảng 35%) hoặc cystein (khoảng 3%); cũng phát hiện thấy một lượng nhỏ những chất chuyển hóa hydroxyl - hóa và khử acetyl. Trẻ nhỏ ít khả năng glucuro liên hợp với thuốc hơn so với người lớn.`,
        ],
        pill_sideEffects: [
            `Các phản ứng phụ có thể xảy ra khi điều trị giảm đau, hạ sốt bằng thuoc Paracetamol bao gồm:`,
            `Thường gặp:`,
            [
                `Mẩn ngứa, ngoại ban.`,
                `Sốt, mỏi mệt.`,
                `Chướng bụng, buồn nôn, nôn.`,
                `Nhức đầu, hoa mắt, chóng mặt, bồn chồn.`,
            ],
            `Ít gặp:`,
            [
                `Phản ứng dị ứng, viêm mũi, nổi mày đay.`,
                `Đau bụng, chảy máu dạ dày - ruột, làm loét dạ dày tiến triển.`,
                `Lơ mơ, mất ngủ, ù tai; rối loạn thị giác, thính lực giảm.`,
                `Thời gian chảy máu kéo dài.`,
                `Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,
                `Giảm bạch cầu trung tính, giảm toàn thể huyết cầu, thiếu máu.`,
            ],
            `Hiếm gặp:`,
            [
                `Hội chứng Steven - Johnson, rụng tóc.`,
                `Trầm cảm, viêm màng não vô khuẩn, nhìn mờ, rối loạn nhìn màu, giảm thị lực do ngộ độc thuốc.`,
                `Rối loạn co bóp túi mật, nhiễm độc gan, viêm bàng quang, tiểu ra máu.​`,
                `Danh sách trên không bao gồm tất cả các tác dụng không mong muốn có thể gặp phải.`,
                `Hãy gọi cho các bác sĩ, dược sĩ đề được tư vấn kịp thời khi gặp phải bất kỳ tác dụng không mong muốn nào.`,
            ],
        ],
        pill_interactions: [
            `Việc sử dụng thuốc hạ sốt Paracetamol 500mg với một số thuốc khác (thuốc kê đơn hoặc không kê đơn) có thể làm thay đổi công dụng của thuốc.`,
            `Một số thuốc có thể tương tác với thuốc hạ sốt paracetamol Mediplantex bao gồm:`,
            [
                `Thuốc khác cũng chứa paracetamol`,
                `Amitriptyline, Amlodipine, Amoxicillin, Aspirin, Atorvastatin.`,
                `Caffeine, Clopidogrel, Codeine.`,
                `Diazepam, Diclofenac.`,
                `Furosemide, Gabapentin, Ibuprofen.`,
                `Lansoprazolem Levofloxacin, Levothyroxine.`,
                `Metformin, Naproxen, Omeprazole.`,
                `Pantoprazole, Prednisolone, Pregabalin.`,
                `Ramipril, Ranitidine, Sertraline`,
                `Simvastatin, Tramadol.`,
            ],
            `Khi sử dụng Thuốc Paracetamol 500mg tốt nhất bệnh nhân nên thông báo cho bác sĩ biết về các loại thuốc mà mình đang sử dụng để bác sĩ tư vấn tránh xảy ra các tương tác không mong muốn.​`,

        ],
        pill_precautions: [],
        pill_overdose: [
            `Nếu bỏ lỡ một liều thuốc Paracetamol sủi thì nên bổ sung ngay sau khi bệnh nhân nhớ ra. Nếu quên một liều thuốc quá lâu mà gần tới thời gian sử dụng liều tiếp theo thì bỏ qua liều đã quên. Không sử dụng 2 liều thuốc cùng một lúc để bù cho liều đã quên.`,
            `Quá liều thuốc:`,
            `Dù cơ thể không xuất hiện triệu chứng gì bất thường, vẫn gọi ngay cho nhân viên y tế để được tư vấn cũng như đưa ra các biện pháp hỗ trợ xử lý kịp thời, bởi nếu trì hoãn thời gian cấp cứu sẽ làm tăng nguy cơ tổn thương gan nghiêm trọng.`,
            `Nếu người bệnh hoặc bất kì ai uống cùng lúc nhiều viên thuốc, hoặc nếu biết một đứa trẻ có nuốt bất kỳ viên thuốc nào trong số này, gọi ngay cho bác sĩ/ dược sĩ hoặc khoa cấp cứu bệnh viện ngay lập tức để xử lý kịp thời.`,
            `Luôn mang theo thuốc bên mình, thậm chí cả hộp thuốc và tờ hướng dẫn sử dụng nhằm giúp việc đánh giá dễ dàng hơn.`,

        ],
        pill_overdose_handling: ['Trên thực tế dị ứng paracetamol không phổ biến. Một số triệu chứng dị ứng paracetamol như nổi mề. Cần ngưng sử dụng thuốc và đến gặp ngay bác sĩ.'],
        pill_viewed: 100,
    },

    {
        pill_id: 'P123af',
        pill_name: 'Paracetamol 500mg Hạ sốt - Giảm đau',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: 'Mediplantex',
        pill_quantity: 9,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên nén dài',
        pill_imgAddress: [`images/pill/medparacetamol.png`],
        pill_description: ['Paracetamol 500mg là thuốc được sử dụng phổ biến giúp giảm các triệu chứng đau từ nhẹ đến vừa và giảm mạnh các triệu chứng sốt nhẹ. Thuốc Paracetamol 500mg giúp hạ nhiệt, giảm đau. Không gây lệ thuộc thuốc, không gây kích ứng đường tiêu hóa.'],
        pill_use: [
            `Sử dụng thuốc cùng với một lượng nước ấm vừa phải.`,
            `Chờ ít nhất 4 tiếng trước khi sử dụng một liều khác.`,
            `Không nên sử dụng nhiều hơn 4 liều trong 24 giờ`,
        ],
        pill_ingredient: ['Paracetamol 500mg'],
        pill_indication: [
            `Với điều trị đau: Điều trị ở các chứng đau do các nguyên nhân khác nhau: Nhức đầu, đau nửa đầu, đau bụng kinh, đau dây thần kinh, đau nhức hệ xương cơ, đau răng.`,
            `Với điều trị sốt: Sốt do bị nhiễm khuẩn, viêm họng, viêm phế quản.`,
            `Làm giảm đau nhức và hạ sốt trong các trường hợp bị cảm lạnh, cảm cúm, sốt do virus.`,
        ],
        pill_contraindication: [
            `Bệnh nhân bị thiếu máu.`,
            `Người mắc chứng rối loạn trong đông máu.`,
            `Người mắc bệnh tạo keo, giảm thể tích tuần hoàn do sử dụng thuốc lợi tiểu hay suy thận, bệnh nhân hen suyễn.`,
            `Người bệnh quá mẫn với paracetamol hoặc các thành phần tá dược của thuốc.`,
            `Người bệnh bị suy giảm glucose-6-phosphat dehydrogenase.`,
            `Người bệnh có tiền sử phản ứng quá mẫn (co thắt phế quản, phù mạch, hen suyễn, viêm mũi, hoặc nổi mày đay) khi sử dụng aspirin hoặc các thuốc chống viêm không steroid (NSAID).`,
            `Bệnh nhân đã từng bị hoặc đang bị loét hay xuất huyết đường tiêu hóa.`,
            `Người bị suy gan nặng, suy thận nặng có Clcr < 30 ml/ phút, suy tim sung huyết.`,
        ],
        pill_dosage: [
            `Liều dùng cho người lớn:`,
            [
                `Liều dùng paracetamol 500mg thông thường để hạ sốt và giảm đau cho người lớn là từ 325 – 650mg trong mỗi 4 – 6 giờ hoặc 1.000mg trong 6 – 8 giờ.`,
                `Thuốc paracetamol 500mg viên nén có thể dùng đường uống hoặc đặt trực tràng.`,
            ],
            `Liều dùng cho trẻ em:`,
            [
                `Liều dùng để giảm đau và sốt bằng đường uống hoặc đặt trực tràng cho trẻ em như sau:`,
                `Dưới 1 tháng tuổi: Dùng 10 – 15mg/kg cho mỗi liều sau khoảng 4 – 6 giờ khi cần thiết.`,
                `Từ 1 tháng – 12 tuổi: Dùng 10 – 15mg/kg sau mỗi 4 – 6 giờ khi cần thiết (tối đa 5 liều trong vòng 24 giờ).`,
                `Hạ sốt cho trẻ từ 4 tháng – 9 tuổi: Nên dùng liều ban đầu là 30mg/kg.`,
                `Từ 12 tuổi trở lên: Dùng 325 – 650mg sau mỗi 4 – 6 giờ hoặc 1000mg mỗi 6 – 8 giờ.`,
                `Đối với trẻ béo phì: Sử dụng theo tuổi chứ không sử dụng theo kí lô cân nặng`,
                `Lưu ý đặc biệt và thận trọng khi sử dụng thuốc Paracetamol 500mg`,
                `Hiệu quả của thuốc hạ sốt và giảm đau Paracetamol 500mg còn tùy thuộc tình trạng và thể trạng của bệnh nhân.`,
                `Không uống nhiều thuốc này hơn liều khuyến cáo, vì quá liều acetaminophen sẽ gây ra nhiều tác hại nghiêm trọng. Liều lượng tối đa cho người lớn là 1g (1.000mg) mỗi lần và 4g (4.000mg) mỗi ngày.`,
            ],
            `Hỏi ý kiến bác sĩ nếu điều trị kéo dài quá 5 ngày ở trẻ em và quá 10 ngày ở người lớn.`,
            `Không được uống rượu trong thời gian điều trị bằng thuốc này.Vì rượu có thể làm tăng nguy cơ gây tổn thương gan.`,
            `Hỏi ý kiến bác sĩ khi dùng thuốc này cho trẻ dưới 3 tuổi.`,
            `Trẻ em dưới 12 tuổi liều dùng hàng ngày không vượt quá 2 gam.`,
            `Người có tiền sử nghiện rượu và bệnh gan, nên hỏi bác sĩ trước khi sử dụng thuốc.`,
            `Không uống thuốc khi bị dị ứng với paracetamol(acetaminophen hoặc N - acetyl - p - aminophenol).`,
            `Ngoài ra người bệnh cần phải ngưng sử dụng ngay và gặp bác sĩ nếu như:`,
            `Tiếp tục bị sốt sau thời gian khoảng 3 ngày sử dụng thuốc.`,
            `Tình trạng đau vẫn không chấm dứt sau 7 ngày sử dụng(hoặc sau 5 ngày đối với trẻ em).`,
            `Da bị nổi mẩn ngứa, đau đầu liên tục hoặc xuất hiện những đốm đỏ, sưng tấy.`,
            `Các triệu chứng trở nên trầm trọng hơn hoặc có thêm những triệu chứng bất thường mới.`,
            `Sử dụng cho người lái xe và vận hành máy móc`,
            `Chưa có báo cáo về những ảnh hưởng của thuốc giảm đau và hạ sốt Paracetamol 500mg trên khả năng lái xe hoặc sử dụng máy móc.`,
            `Tuy nhiên, qua một số theo dõi thì thuốc có thể sử dụng ở trên đối tượng này.`,
            `Sử dụng cho phụ nữ có thai hoặc đang cho con bú`,
            `Các nghiên cứu về việc dùng thuốc này trên phụ nữ có thai và đang cho con bú vẫn còn hạn chế.`,
            `Thời kỳ mang thai: Chưa xác định được tính an toàn của thuốc dùng khi thai nghén liên quan đến tác dụng không mong muốn có thể có đối với phát triển thai.Do đó, chỉ nên dùng thuoc paracetamol ở người mang thai khi thật cần.`,
            `Thời kỳ cho con bú: thuốc Paracetamol được bài tiết qua sữa mẹ nhưng không có ý nghĩa đáng kể trên lâm sàng.Dữ liệu được công bố không chống chỉ định sử dụng thuốc này cho phụ nữ cho con bú.`,

        ],
        pill_pharmacology: [
            `Paracetamol (còn có tên gọi khác là acetaminophen hoặc N-acetyl-p-aminophenol) là một loại chất chuyển hóa mang trong mình hoạt tính của phenacetin, được biết đến như một thuốc giảm đau - hạ sốt hữu hiệu và phổ biến có thể thay thế aspirin; tuy nhiên, khác với aspirin, paracetamol không có hiệu quả trong điều trị các trường hợp bị viêm.`,
            `Với liều dùng ngang nhau và được tính theo đơn vị gam, thì paracetamol có tác dụng giảm đau và hạ sốt tương tự như aspirin.`,
            `Paracetamol làm giảm thân nhiệt ở người bệnh sốt, nhưng hiếm khi làm giảm thân nhiệt ở người bình thường. Thuốc acetaminophen tác động lên vùng dưới đồi gây hạ nhiệt, tỏa nhiệt tăng do giãn mạch và tăng lưu lượng máu ngoại biên.`,
            `Với liều điều trị, acetaminophen ít tác động đến hệ tim mạch và hô hấp, không làm thay đổi cân bằng acid - base, không gây kích ứng, xước hoặc chảy máu dạ dày như khi dùng salicylat, vì paracetamol không tác dụng trên cyclooxygenase toàn thân, chỉ tác động đến cyclooxygenase/prostaglandin của hệ thần kinh trung ương. Paracetamol/acetaminophen không có tác dụng trên tiểu cầu hoặc thời gian chảy máu.`,
            `Khi sử dụng đến trạng thái quá liều, một chất chuyển hóa của paracetamol là N-acetyl-benzoquinonimin có thể gây độc nặng cho gan. Ở liều bình thường, paracetamol dung nạp tốt, không có nhiều tác dụng phụ của aspirin. Tuy vậy, quá liều cấp tính (trên 10 g) làm thương tổn gan gây chết người, và những vụ ngộ độc và tự vẫn bằng paracetamol đã tăng lên một cách đáng lo ngại trong những năm gần đây. Ngoài ra, nhiều người trong đó có cả thầy thuốc, dường như không biết tác dụng chống viêm kém của paracetamol.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Paracetamol được hấp thu nhanh và hầu như hoàn toàn thông qua đường tiêu hóa. Thức ăn có thể làm viên nén giải phóng kéo dài thuốc paracetamol chậm được hấp thu một phần. Thức ăn giàu carbon hydrat làm giảm tỷ lệ hấp thu của paracetamol. Nồng độ đỉnh trong huyết tương đạt trong vòng 30 đến 60 phút sau khi uống với liều điều trị.`,
            `Phân bố: Paracetamol (acetaminophen) phân bố nhanh và đồng đều trong phần lớn các mô của cơ thể. Khoảng 25% lượng paracetamol trong máu kết hợp với protein huyết tương.`,
            `Chuyển hóa: Paracetamol bị N-hydroxyl hóa bởi cytochrom P450 để tạo nên N-acetyl-benzoquinonimin, một chất trung gian có tính phản ứng cao. Chất chuyển hóa này bình thường phản ứng với các nhóm sulfhydryl trong glutathion và như vậy bị khử hoạt tính. Tuy nhiên, nếu uống liều cao paracetamol, chất chuyển hóa này được tạo thành với lượng đủ để làm cạn kiệt glutathion của gan; trong tình trạng đó, phản ứng của nó với nhóm sulfhydryl của protein gan tăng lên, có thể dẫn đến hoại tử gan.`,
            `Thải trừ: Nửa đời huyết tương của paracetamol là 1,25 - 3 giờ, có thể kéo dài với liều gây độc hoặc ở người bệnh có thương tổn gan. Sau liều điều trị, có thể tìm thấy 90 đến 100% thuốc trong nước tiểu trong ngày thứ nhất, chủ yếu sau khi liên hợp trong gan với acid glucuronic (khoảng 60%), acid sulfuric (khoảng 35%) hoặc cystein (khoảng 3%); cũng phát hiện thấy một lượng nhỏ những chất chuyển hóa hydroxyl - hóa và khử acetyl. Trẻ nhỏ ít khả năng glucuro liên hợp với thuốc hơn so với người lớn.`,
        ],
        pill_sideEffects: [
            `Các phản ứng phụ có thể xảy ra khi điều trị giảm đau, hạ sốt bằng thuoc Paracetamol bao gồm:`,
            `Thường gặp:`,
            [
                `Mẩn ngứa, ngoại ban.`,
                `Sốt, mỏi mệt.`,
                `Chướng bụng, buồn nôn, nôn.`,
                `Nhức đầu, hoa mắt, chóng mặt, bồn chồn.`,
            ],
            `Ít gặp:`,
            [
                `Phản ứng dị ứng, viêm mũi, nổi mày đay.`,
                `Đau bụng, chảy máu dạ dày - ruột, làm loét dạ dày tiến triển.`,
                `Lơ mơ, mất ngủ, ù tai; rối loạn thị giác, thính lực giảm.`,
                `Thời gian chảy máu kéo dài.`,
                `Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,
                `Giảm bạch cầu trung tính, giảm toàn thể huyết cầu, thiếu máu.`,
            ],
            `Hiếm gặp:`,
            [
                `Hội chứng Steven - Johnson, rụng tóc.`,
                `Trầm cảm, viêm màng não vô khuẩn, nhìn mờ, rối loạn nhìn màu, giảm thị lực do ngộ độc thuốc.`,
                `Rối loạn co bóp túi mật, nhiễm độc gan, viêm bàng quang, tiểu ra máu.​`,
                `Danh sách trên không bao gồm tất cả các tác dụng không mong muốn có thể gặp phải.`,
                `Hãy gọi cho các bác sĩ, dược sĩ đề được tư vấn kịp thời khi gặp phải bất kỳ tác dụng không mong muốn nào.`,
            ],
        ],
        pill_interactions: [
            `Việc sử dụng thuốc hạ sốt Paracetamol 500mg với một số thuốc khác (thuốc kê đơn hoặc không kê đơn) có thể làm thay đổi công dụng của thuốc.`,
            `Một số thuốc có thể tương tác với thuốc hạ sốt paracetamol Mediplantex bao gồm:`,
            [
                `Thuốc khác cũng chứa paracetamol`,
                `Amitriptyline, Amlodipine, Amoxicillin, Aspirin, Atorvastatin.`,
                `Caffeine, Clopidogrel, Codeine.`,
                `Diazepam, Diclofenac.`,
                `Furosemide, Gabapentin, Ibuprofen.`,
                `Lansoprazolem Levofloxacin, Levothyroxine.`,
                `Metformin, Naproxen, Omeprazole.`,
                `Pantoprazole, Prednisolone, Pregabalin.`,
                `Ramipril, Ranitidine, Sertraline`,
                `Simvastatin, Tramadol.`,
            ],
            `Khi sử dụng Thuốc Paracetamol 500mg tốt nhất bệnh nhân nên thông báo cho bác sĩ biết về các loại thuốc mà mình đang sử dụng để bác sĩ tư vấn tránh xảy ra các tương tác không mong muốn.​`,

        ],
        pill_precautions: [],
        pill_overdose: [
            `Nếu bỏ lỡ một liều thuốc Paracetamol sủi thì nên bổ sung ngay sau khi bệnh nhân nhớ ra. Nếu quên một liều thuốc quá lâu mà gần tới thời gian sử dụng liều tiếp theo thì bỏ qua liều đã quên. Không sử dụng 2 liều thuốc cùng một lúc để bù cho liều đã quên.`,
            `Quá liều thuốc:`,
            `Dù cơ thể không xuất hiện triệu chứng gì bất thường, vẫn gọi ngay cho nhân viên y tế để được tư vấn cũng như đưa ra các biện pháp hỗ trợ xử lý kịp thời, bởi nếu trì hoãn thời gian cấp cứu sẽ làm tăng nguy cơ tổn thương gan nghiêm trọng.`,
            `Nếu người bệnh hoặc bất kì ai uống cùng lúc nhiều viên thuốc, hoặc nếu biết một đứa trẻ có nuốt bất kỳ viên thuốc nào trong số này, gọi ngay cho bác sĩ/ dược sĩ hoặc khoa cấp cứu bệnh viện ngay lập tức để xử lý kịp thời.`,
            `Luôn mang theo thuốc bên mình, thậm chí cả hộp thuốc và tờ hướng dẫn sử dụng nhằm giúp việc đánh giá dễ dàng hơn.`,

        ],
        pill_overdose_handling: ['Trên thực tế dị ứng paracetamol không phổ biến. Một số triệu chứng dị ứng paracetamol như nổi mề. Cần ngưng sử dụng thuốc và đến gặp ngay bác sĩ.'],
        pill_viewed: 100,
    },

    {
        pill_id: 'P124af',
        pill_name: 'Lessenol Paracetamol 500mg Hạ sốt - Giảm đau',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: 'Lessenol',
        pill_quantity: 9,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên nén dài',
        pill_imgAddress: [`images/pill/lessparacetamol.png`],
        pill_description: ['Paracetamol 500mg là thuốc được sử dụng phổ biến giúp giảm các triệu chứng đau từ nhẹ đến vừa và giảm mạnh các triệu chứng sốt nhẹ. Thuốc Paracetamol 500mg giúp hạ nhiệt, giảm đau. Không gây lệ thuộc thuốc, không gây kích ứng đường tiêu hóa.'],
        pill_use: [
            `Sử dụng thuốc cùng với một lượng nước ấm vừa phải.`,
            `Chờ ít nhất 4 tiếng trước khi sử dụng một liều khác.`,
            `Không nên sử dụng nhiều hơn 4 liều trong 24 giờ`,
        ],
        pill_ingredient: ['Paracetamol 500mg'],
        pill_indication: [
            `Với điều trị đau: Điều trị ở các chứng đau do các nguyên nhân khác nhau: Nhức đầu, đau nửa đầu, đau bụng kinh, đau dây thần kinh, đau nhức hệ xương cơ, đau răng.`,
            `Với điều trị sốt: Sốt do bị nhiễm khuẩn, viêm họng, viêm phế quản.`,
            `Làm giảm đau nhức và hạ sốt trong các trường hợp bị cảm lạnh, cảm cúm, sốt do virus.`,
        ],
        pill_contraindication: [
            `Bệnh nhân bị thiếu máu.`,
            `Người mắc chứng rối loạn trong đông máu.`,
            `Người mắc bệnh tạo keo, giảm thể tích tuần hoàn do sử dụng thuốc lợi tiểu hay suy thận, bệnh nhân hen suyễn.`,
            `Người bệnh quá mẫn với paracetamol hoặc các thành phần tá dược của thuốc.`,
            `Người bệnh bị suy giảm glucose-6-phosphat dehydrogenase.`,
            `Người bệnh có tiền sử phản ứng quá mẫn (co thắt phế quản, phù mạch, hen suyễn, viêm mũi, hoặc nổi mày đay) khi sử dụng aspirin hoặc các thuốc chống viêm không steroid (NSAID).`,
            `Bệnh nhân đã từng bị hoặc đang bị loét hay xuất huyết đường tiêu hóa.`,
            `Người bị suy gan nặng, suy thận nặng có Clcr < 30 ml/ phút, suy tim sung huyết.`,
        ],
        pill_dosage: [
            `Liều dùng cho người lớn:`,
            [
                `Liều dùng paracetamol 500mg thông thường để hạ sốt và giảm đau cho người lớn là từ 325 – 650mg trong mỗi 4 – 6 giờ hoặc 1.000mg trong 6 – 8 giờ.`,
                `Thuốc paracetamol 500mg viên nén có thể dùng đường uống hoặc đặt trực tràng.`,
            ],
            `Liều dùng cho trẻ em:`,
            [
                `Liều dùng để giảm đau và sốt bằng đường uống hoặc đặt trực tràng cho trẻ em như sau:`,
                `Dưới 1 tháng tuổi: Dùng 10 – 15mg/kg cho mỗi liều sau khoảng 4 – 6 giờ khi cần thiết.`,
                `Từ 1 tháng – 12 tuổi: Dùng 10 – 15mg/kg sau mỗi 4 – 6 giờ khi cần thiết (tối đa 5 liều trong vòng 24 giờ).`,
                `Hạ sốt cho trẻ từ 4 tháng – 9 tuổi: Nên dùng liều ban đầu là 30mg/kg.`,
                `Từ 12 tuổi trở lên: Dùng 325 – 650mg sau mỗi 4 – 6 giờ hoặc 1000mg mỗi 6 – 8 giờ.`,
                `Đối với trẻ béo phì: Sử dụng theo tuổi chứ không sử dụng theo kí lô cân nặng`,
                `Lưu ý đặc biệt và thận trọng khi sử dụng thuốc Paracetamol 500mg`,
                `Hiệu quả của thuốc hạ sốt và giảm đau Paracetamol 500mg còn tùy thuộc tình trạng và thể trạng của bệnh nhân.`,
                `Không uống nhiều thuốc này hơn liều khuyến cáo, vì quá liều acetaminophen sẽ gây ra nhiều tác hại nghiêm trọng. Liều lượng tối đa cho người lớn là 1g (1.000mg) mỗi lần và 4g (4.000mg) mỗi ngày.`,
            ],
            `Hỏi ý kiến bác sĩ nếu điều trị kéo dài quá 5 ngày ở trẻ em và quá 10 ngày ở người lớn.`,
            `Không được uống rượu trong thời gian điều trị bằng thuốc này.Vì rượu có thể làm tăng nguy cơ gây tổn thương gan.`,
            `Hỏi ý kiến bác sĩ khi dùng thuốc này cho trẻ dưới 3 tuổi.`,
            `Trẻ em dưới 12 tuổi liều dùng hàng ngày không vượt quá 2 gam.`,
            `Người có tiền sử nghiện rượu và bệnh gan, nên hỏi bác sĩ trước khi sử dụng thuốc.`,
            `Không uống thuốc khi bị dị ứng với paracetamol(acetaminophen hoặc N - acetyl - p - aminophenol).`,
            `Ngoài ra người bệnh cần phải ngưng sử dụng ngay và gặp bác sĩ nếu như:`,
            `Tiếp tục bị sốt sau thời gian khoảng 3 ngày sử dụng thuốc.`,
            `Tình trạng đau vẫn không chấm dứt sau 7 ngày sử dụng(hoặc sau 5 ngày đối với trẻ em).`,
            `Da bị nổi mẩn ngứa, đau đầu liên tục hoặc xuất hiện những đốm đỏ, sưng tấy.`,
            `Các triệu chứng trở nên trầm trọng hơn hoặc có thêm những triệu chứng bất thường mới.`,
            `Sử dụng cho người lái xe và vận hành máy móc`,
            `Chưa có báo cáo về những ảnh hưởng của thuốc giảm đau và hạ sốt Paracetamol 500mg trên khả năng lái xe hoặc sử dụng máy móc.`,
            `Tuy nhiên, qua một số theo dõi thì thuốc có thể sử dụng ở trên đối tượng này.`,
            `Sử dụng cho phụ nữ có thai hoặc đang cho con bú`,
            `Các nghiên cứu về việc dùng thuốc này trên phụ nữ có thai và đang cho con bú vẫn còn hạn chế.`,
            `Thời kỳ mang thai: Chưa xác định được tính an toàn của thuốc dùng khi thai nghén liên quan đến tác dụng không mong muốn có thể có đối với phát triển thai.Do đó, chỉ nên dùng thuoc paracetamol ở người mang thai khi thật cần.`,
            `Thời kỳ cho con bú: thuốc Paracetamol được bài tiết qua sữa mẹ nhưng không có ý nghĩa đáng kể trên lâm sàng.Dữ liệu được công bố không chống chỉ định sử dụng thuốc này cho phụ nữ cho con bú.`,

        ],
        pill_pharmacology: [
            `Paracetamol (còn có tên gọi khác là acetaminophen hoặc N-acetyl-p-aminophenol) là một loại chất chuyển hóa mang trong mình hoạt tính của phenacetin, được biết đến như một thuốc giảm đau - hạ sốt hữu hiệu và phổ biến có thể thay thế aspirin; tuy nhiên, khác với aspirin, paracetamol không có hiệu quả trong điều trị các trường hợp bị viêm.`,
            `Với liều dùng ngang nhau và được tính theo đơn vị gam, thì paracetamol có tác dụng giảm đau và hạ sốt tương tự như aspirin.`,
            `Paracetamol làm giảm thân nhiệt ở người bệnh sốt, nhưng hiếm khi làm giảm thân nhiệt ở người bình thường. Thuốc acetaminophen tác động lên vùng dưới đồi gây hạ nhiệt, tỏa nhiệt tăng do giãn mạch và tăng lưu lượng máu ngoại biên.`,
            `Với liều điều trị, acetaminophen ít tác động đến hệ tim mạch và hô hấp, không làm thay đổi cân bằng acid - base, không gây kích ứng, xước hoặc chảy máu dạ dày như khi dùng salicylat, vì paracetamol không tác dụng trên cyclooxygenase toàn thân, chỉ tác động đến cyclooxygenase/prostaglandin của hệ thần kinh trung ương. Paracetamol/acetaminophen không có tác dụng trên tiểu cầu hoặc thời gian chảy máu.`,
            `Khi sử dụng đến trạng thái quá liều, một chất chuyển hóa của paracetamol là N-acetyl-benzoquinonimin có thể gây độc nặng cho gan. Ở liều bình thường, paracetamol dung nạp tốt, không có nhiều tác dụng phụ của aspirin. Tuy vậy, quá liều cấp tính (trên 10 g) làm thương tổn gan gây chết người, và những vụ ngộ độc và tự vẫn bằng paracetamol đã tăng lên một cách đáng lo ngại trong những năm gần đây. Ngoài ra, nhiều người trong đó có cả thầy thuốc, dường như không biết tác dụng chống viêm kém của paracetamol.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Paracetamol được hấp thu nhanh và hầu như hoàn toàn thông qua đường tiêu hóa. Thức ăn có thể làm viên nén giải phóng kéo dài thuốc paracetamol chậm được hấp thu một phần. Thức ăn giàu carbon hydrat làm giảm tỷ lệ hấp thu của paracetamol. Nồng độ đỉnh trong huyết tương đạt trong vòng 30 đến 60 phút sau khi uống với liều điều trị.`,
            `Phân bố: Paracetamol (acetaminophen) phân bố nhanh và đồng đều trong phần lớn các mô của cơ thể. Khoảng 25% lượng paracetamol trong máu kết hợp với protein huyết tương.`,
            `Chuyển hóa: Paracetamol bị N-hydroxyl hóa bởi cytochrom P450 để tạo nên N-acetyl-benzoquinonimin, một chất trung gian có tính phản ứng cao. Chất chuyển hóa này bình thường phản ứng với các nhóm sulfhydryl trong glutathion và như vậy bị khử hoạt tính. Tuy nhiên, nếu uống liều cao paracetamol, chất chuyển hóa này được tạo thành với lượng đủ để làm cạn kiệt glutathion của gan; trong tình trạng đó, phản ứng của nó với nhóm sulfhydryl của protein gan tăng lên, có thể dẫn đến hoại tử gan.`,
            `Thải trừ: Nửa đời huyết tương của paracetamol là 1,25 - 3 giờ, có thể kéo dài với liều gây độc hoặc ở người bệnh có thương tổn gan. Sau liều điều trị, có thể tìm thấy 90 đến 100% thuốc trong nước tiểu trong ngày thứ nhất, chủ yếu sau khi liên hợp trong gan với acid glucuronic (khoảng 60%), acid sulfuric (khoảng 35%) hoặc cystein (khoảng 3%); cũng phát hiện thấy một lượng nhỏ những chất chuyển hóa hydroxyl - hóa và khử acetyl. Trẻ nhỏ ít khả năng glucuro liên hợp với thuốc hơn so với người lớn.`,
        ],
        pill_sideEffects: [
            `Các phản ứng phụ có thể xảy ra khi điều trị giảm đau, hạ sốt bằng thuoc Paracetamol bao gồm:`,
            `Thường gặp:`,
            [
                `Mẩn ngứa, ngoại ban.`,
                `Sốt, mỏi mệt.`,
                `Chướng bụng, buồn nôn, nôn.`,
                `Nhức đầu, hoa mắt, chóng mặt, bồn chồn.`,
            ],
            `Ít gặp:`,
            [
                `Phản ứng dị ứng, viêm mũi, nổi mày đay.`,
                `Đau bụng, chảy máu dạ dày - ruột, làm loét dạ dày tiến triển.`,
                `Lơ mơ, mất ngủ, ù tai; rối loạn thị giác, thính lực giảm.`,
                `Thời gian chảy máu kéo dài.`,
                `Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,
                `Giảm bạch cầu trung tính, giảm toàn thể huyết cầu, thiếu máu.`,
            ],
            `Hiếm gặp:`,
            [
                `Hội chứng Steven - Johnson, rụng tóc.`,
                `Trầm cảm, viêm màng não vô khuẩn, nhìn mờ, rối loạn nhìn màu, giảm thị lực do ngộ độc thuốc.`,
                `Rối loạn co bóp túi mật, nhiễm độc gan, viêm bàng quang, tiểu ra máu.​`,
                `Danh sách trên không bao gồm tất cả các tác dụng không mong muốn có thể gặp phải.`,
                `Hãy gọi cho các bác sĩ, dược sĩ đề được tư vấn kịp thời khi gặp phải bất kỳ tác dụng không mong muốn nào.`,
            ],
        ],
        pill_interactions: [
            `Việc sử dụng thuốc hạ sốt Paracetamol 500mg với một số thuốc khác (thuốc kê đơn hoặc không kê đơn) có thể làm thay đổi công dụng của thuốc.`,
            `Một số thuốc có thể tương tác với thuốc hạ sốt paracetamol Mediplantex bao gồm:`,
            [
                `Thuốc khác cũng chứa paracetamol`,
                `Amitriptyline, Amlodipine, Amoxicillin, Aspirin, Atorvastatin.`,
                `Caffeine, Clopidogrel, Codeine.`,
                `Diazepam, Diclofenac.`,
                `Furosemide, Gabapentin, Ibuprofen.`,
                `Lansoprazolem Levofloxacin, Levothyroxine.`,
                `Metformin, Naproxen, Omeprazole.`,
                `Pantoprazole, Prednisolone, Pregabalin.`,
                `Ramipril, Ranitidine, Sertraline`,
                `Simvastatin, Tramadol.`,
            ],
            `Khi sử dụng Thuốc Paracetamol 500mg tốt nhất bệnh nhân nên thông báo cho bác sĩ biết về các loại thuốc mà mình đang sử dụng để bác sĩ tư vấn tránh xảy ra các tương tác không mong muốn.​`,

        ],
        pill_precautions: [],
        pill_overdose: [
            `Nếu bỏ lỡ một liều thuốc Paracetamol sủi thì nên bổ sung ngay sau khi bệnh nhân nhớ ra. Nếu quên một liều thuốc quá lâu mà gần tới thời gian sử dụng liều tiếp theo thì bỏ qua liều đã quên. Không sử dụng 2 liều thuốc cùng một lúc để bù cho liều đã quên.`,
            `Quá liều thuốc:`,
            `Dù cơ thể không xuất hiện triệu chứng gì bất thường, vẫn gọi ngay cho nhân viên y tế để được tư vấn cũng như đưa ra các biện pháp hỗ trợ xử lý kịp thời, bởi nếu trì hoãn thời gian cấp cứu sẽ làm tăng nguy cơ tổn thương gan nghiêm trọng.`,
            `Nếu người bệnh hoặc bất kì ai uống cùng lúc nhiều viên thuốc, hoặc nếu biết một đứa trẻ có nuốt bất kỳ viên thuốc nào trong số này, gọi ngay cho bác sĩ/ dược sĩ hoặc khoa cấp cứu bệnh viện ngay lập tức để xử lý kịp thời.`,
            `Luôn mang theo thuốc bên mình, thậm chí cả hộp thuốc và tờ hướng dẫn sử dụng nhằm giúp việc đánh giá dễ dàng hơn.`,

        ],
        pill_overdose_handling: ['Trên thực tế dị ứng paracetamol không phổ biến. Một số triệu chứng dị ứng paracetamol như nổi mề. Cần ngưng sử dụng thuốc và đến gặp ngay bác sĩ.'],
        pill_viewed: 100,
    },


    {
        pill_id: 'P1345n',
        pill_name: 'Thuốc giảm đau TK3 300mg Hadiphar giúp giảm đau, hạ sốt',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 0,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: ['images/pill/Cam_lanh_thong_thuong_TK3.png'],
        pill_indication: ['Điều trị triệu chứng trong các trường hợp: Cảm sốt, đau đầu, đau nửa đầu, đau răng, đau họng, đau sau nhổ răng, đau bụng kinh, đau cơ xương, đau do viêm khớp, đau dây thần kinh, hạ sốt trong viêm nhiễm.'],
        pill_use: [
            'Thuốc dùng đường uống.'
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Người lớn (kể cả người cao tuổi) và trẻ em từ 12 tuổi trở lên`,
            [
                `Nên dùng 2 viên mỗi lần. Khoảng cách liều tối thiểu: 4 giờ. Liều tối đa hàng ngày: 12 viên trong 24 giờ.`,
                `Thời gian tối đa dùng thuốc không có tư vấn của bác sĩ: 7 ngày. `,
            ],
            `Trẻ em dưới 12 tuổi`,
            [
                `Không khuyến nghị dùng thuốc này.`,
            ],
            `Không dùng quá liều chỉ định. Không dùng với các thuốc khác có chứa paracetamol, các thuốc chống xung huyết, các thuốc chống cảm cúm khác.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,

        ],
        pill_pharmacology: [

        ],
        pill_pharmacokinetics: [

        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Giảm Đau Tk3 , bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Paracetamol`,
            [
                `Rất hiếm (< 1/10000)`,
                `Rối loạn máu và hệ bạch huyết: Giảm tiểu cầu. `,
                `Rối loạn hệ miễn dịch: Phản ứng quá mẫn. Phản ứng dị ứng da như ban đỏ, phù mạch, hội chứng Stevens - Johnson. `,
                `Rối loạn hệ hô hấp, ngực và trung thất: Co thắt phế quản ở các bệnh nhân nhạy cảm với aspirin và các NSAID khác. `,
                `Rối loạn gan mật: Bất thường gan. `,
            ],
            `Cafein `,
            [
                `Không xác định được tần suất `,
                `Hệ thần kinh trung ương: Bồn chồn, chóng mặt. Khi dùng liều khuyến nghị paracetamol - cafein cùng với chế độ ăn uống có nhiều cafein, có thể gặp các tác dụng phụ do quá liều cafein như mất ngủ, thao thức, lo lắng, cáu kỉnh, đau đầu, rối loạn tiêu hóa, hồi hộp. `,
            ],
            `Phenylephrin `,
            [
                `Các rối loạn tâm thần: Bồn chồn. `,
                `Các rối loạn trên hệ thần kinh: Đau đầu, chóng mặt, mất ngủ. `,
                `Các rối loạn trên tim: Tăng huyết áp. `,
                `Các rối loạn trên đường tiêu hóa: Buồn nôn, nôn. `,
                `Rối loạn về mắt: Giãn đồng tử, glaucoma góc đóng cấp tính, thường hay xảy ra ở những bệnh nhân có tiền sử bị glaucoma góc đóng. `,
                `Các rối loạn trên tim: Nhịp tim nhanh, hồi hộp. `,
                `Các rối loạn da và dưới da: Phản ứng dị ứng (như phát ban, mày đay, viêm da dị ứng). `,
                `Các rối loạn thận và đường tiết niệu: Bí tiểu. Thường hay xảy ra ở những bệnh nhân bị đường tiểu tắc nghẽn như bệnh nhân phì đại tuyến tiền.`,
            ],
            `Hướng dẫn cách xử trí ADR`,
            `Tham vấn bác sĩ, dược sĩ nếu gặp phải tác dụng không mong muốn khi sử dụng thuốc. `,

        ],
        pill_interactions: [

        ],
        pill_precautions: [
            `Làm gì khi quên 1 liều?: \nKhông thay đổi liều dùng cho lần tiếp theo, tiếp tục dùng thuốc cho hết đợt điều trị. `,
        ],
        pill_overdose: [
            `Nhiễm độc paracetamol có thể do dùng một liều độc duy nhất, hoặc do uống lặp lại liều lớn paracetamol (ví dụ, 7,5 - 10g mỗi ngày, trong 1 - 2 ngày), hoặc do uống thuốc dài ngày. Hoại tử gan phụ thuộc liều là tác dụng độc cấp tính nghiêm trọng nhất do quá liều và có thể gây tử vong.`,
            `Buồn nôn, nôn, và đau bụng thường xảy ra trong vòng 2 - 3 giờ sau khi uống liều độc của thuốc. Methemoglobin - máu, dẫn đến chứng xanh tím da, niêm mạc và móng tay là một dấu hiệu đặc trưng nhiễm độc cấp tính dẫn chất p - aminophenol, một lượng nhỏ sulfhemoglobin cũng có thể được sản sinh. Trẻ em có khuynh hướng tạo methemoglobin dễ hơn người lớn sau khi uống paracetamol.`,
            `Khi bị ngộ độc nặng, ban đầu có thể có kích thích hệ thần kinh trung ương, kích động, và mê sảng. Tiếp theo có thể là ức chế hệ thần kinh trung ương, sững sờ, hạ thân nhiệt, mệt lả, thở nhanh - nông, mạch nhanh - yếu - không đều, huyết áp thấp, suy tuần hoàn. Trụy mạch do giảm oxy huyết tương đối và do tác dụng ức chế trung tâm, tác dụng này chỉ xảy ra với liều rất lớn. Sốc có thể xảy ra nếu giãn mạch nhiều. Cơn co giật nghẹt thở gây tử vong có thể xảy ra. Thường hôn mê xảy ra trước khi chết đột ngột hoặc sau vài ngày hôn mê.`,
            `Dấu hiệu lâm sàng thương tổn gan trở nên rõ rệt trong vòng 2 đến 4 ngày sau khi uống liều độc. Aminotransferase huyết tương tăng (đôi khi tăng rất cao) và nồng độ bilirubin trong huyết tương cũng có thể tăng. Thêm nữa, khi thương tổn gan lan rộng, thời gian prothrombin kéo dài. Có thể 10% người bệnh bị ngộ độc không được điều trị đặc hiệu đã có thương tổn gan nghiêm trọng, trong số đó 10% đến 20% cuối cùng chết vì suy gan. Suy thận cấp cũng xảy ra ở một số người bệnh. Sinh thiết gan phát hiện hoại tử trung tâm tiểu thùy trừ vùng quanh tĩnh mạch cửa. Ở những trường hợp không tử vong, thương tổn gan phục hồi sau nhiều tuần hoặc nhiều tháng.`,
            `Phenylephrin HCl: Dùng quá liều làm tăng huyết áp, đau đầu, cơn co giật, xuất huyết não, đánh trống ngực, ngoại tâm thu, dị cảm, nhịp tim chậm thường xảy ra sớm.                `,
        ],
        pill_overdose_handling: [
            `Chẩn đoán sớm rất quan trọng trong điều trị quá liều paracetamol. Có những phương pháp xác định nhanh nồng độ thuốc trong huyết tương. Tuy vậy, không được trì hoãn điều trị trong khi chờ kết quả xét nghiệm nếu bệnh sử gợi ý là quá liều nặng. Khi nhiễm độc nặng, điều quan trọng là phải điều trị hỗ trợ tích cực. Cần rửa dạ dày trong mọi trường hợp, tốt nhất trong vòng 4 giờ sau khi uống.`,
            `Liệu pháp giải độc chính là dùng những hợp chất sulfhydryl, có lẽ tác động một phần do bổ sung dự trữ glutathion ở gan.`,
            `N-acetylcystein có tác dụng khi uống hoặc tiêm tĩnh mạch. Phải cho thuốc ngay lập tức nếu chưa đến 36 giờ kể từ khi uống paracetamol. Ðiều trị với N - acetylcystein có hiệu quả hơn khi cho thuốc trong thời gian dưới 10 giờ sau khi uống paracetamol. Khi cho uống, hòa loãng dung dịch N - acetylcystein với nước hoặc đồ uống không có rượu để đạt dung dịch 5% và phải uống trong vòng 1 giờ sau khi pha. Cho uống N - acetylcystein với liều đầu tiên là 140mg/kg, sau đó cho tiếp 17 liều nữa, mỗi liều 70mg/kg cách nhau 4 giờ một lần. Chấm dứt điều trị nếu xét nghiệm paracetamol trong huyết tương cho thấy nguy cơ độc hại gan thấp.`,
            `Tác dụng không mong muốn của N - acetylcystein gồm ban da (gồm cả mày đay, không yêu cầu phải ngừng thuốc), buồn nôn, nôn, ỉa chảy, và phản ứng kiểu phản vệ.`,
            `Nếu không có N - acetylcystein, có thể dùng methionin (xem chuyên luận Methionin). Ngoài ra có thể dùng than hoạt và/hoặc thuốc tẩy muối, chúng có khả năng làm giảm hấp thụ paracetamol.`,
            `Tăng huyết áp có thể khắc phục bằng cách dùng thuốc chẹn α-adrenergic như phentolanim 5 – 10mg tiêm tĩnh mạch. Cần chú ý đến điều trị triệu chứng và hỗ trợ chăm sóc y tế.`,

        ],
        pill_viewed: 100,
    },


    {
        pill_id: 'P1636h',
        pill_name: 'Thuốc Ibuprofen 200 Nadyphar giảm đau, kháng viêm thống kinh, nhức đầu, đau răng, viêm khớp (10 vỉ x 10 viên)',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 0,
        pill_sellPrice: 4300,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [`images/pill/Thuoc_giam_dau_va_ha_sot_Ibuprofen.png`],
        pill_indication: [
            `Thuốc Ibuprofen 200 Nadyphar 10x10 được chỉ định dùng trong các trường hợp sau:`,
            [
                `Chống đau và viêm từ nhẹ đến vừa: Thống kinh, nhức đầu và đau nửa đầu, đau răng, viêm khớp dạng thấp, viêm xương khớp, viêm túi thanh mạc.`,
                `Sử dụng kết hợp trong giảm đau sau phẫu thuật hay ung thư, hạ sốt ở trẻ em.`,
            ],
        ],
        pill_use: [
            `Thuốc dùng đường uống, uống sau bữa ăn.`
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Theo hướng dẫn của thầy thuốc, trung bình:`,
            `Người lớn`,
            [
                `Giảm đau và hạ sốt: Mỗi lần 1 - 2 viên, ngày 2 - 3 lần.`,
                `Kháng viêm: Mỗi lần 2 viên, ngày 3 - 4 lần.`,
            ],
            `Trẻ em (cân nặng dưới 30 kg)`,
            [
                `Giảm đau và hạ sốt: 20 - 30mg/kg thể trọng/ngày, chia làm 3 - 4 lần.`,
                `Kháng viêm: 40mg/kg thể trọng/ngày, chia làm 3 - 4 lần.`,
            ],
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.                `,
        ],
        pill_pharmacology: [
            `Ibuprofen là thuốc chống viêm không steroid, dẫn xuất từ acid propionic. Giống như các thuốc chống viêm không steroid khác, Ibuprofen có tác dụng giảm đau, hạ sốt và chống viêm. Cơ chế tác dụng của thuốc là ức chế prostaglandin synthetase, do đó ngăn tạo ra prostaglandin, thrombxan và các sản phẩm khác của cyclooxygenase. Ibuprofen cũng ức chế tổng hợp prostacyclin ở thận và có thể gây nguy cơ ứ nước do làm giảm dòng máu tới thận. Cần phải để ý đến điều này đối với các người bệnh bị suy thận, suy tim, suy gan và các bệnh có rối loạn về thể tích huyết tương.`,
            `Tác dụng chống viêm của Ibuprofen xuất hiện sau hai ngày điều trị. Ibuprofen có tác dụng hạ sốt mạnh hơn aspirin, nhưng kém indomethacin. Thuốc có tác dụng chống viêm tốt và có tác dụng giảm đau tốt trong điều trị viêm khớp dạng thấp thiếu niên.`,
            `Ibuprofen là thuốc an toàn nhất trong các thuốc chống viêm không steroid.`,
        ],
        pill_pharmacokinetics: [
            `Ibuprofen hấp thu tốt ở ống tiêu hóa. Nồng độ tối đa của thuốc trong huyết tương đạt được sau khi uống từ 1 đến 2 giờ. Thuốc gắn rất nhiều với protein huyết tương. Nửa đời của thuốc khoảng 2 giờ. Ibuprofen đào thải rất nhanh qua nước tiểu (1% dưới dạng không đổi, 14% dưới dạng liên hợp).`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Ibuprofen 200 Nadyphar 10X10, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            [
                `Tiêu hóa: Chướng bụng, buồn nôn, nôn, (chảy máu dạ dày - ruột, làm loét dạ dày tiến triển: Ít gặp).`,
                `Da: Phát ban, ngứa;`,
                `Mắt: Rối loạn thị giác;`,
                `Thần kinh trung ương: Chóng mặt, nhức đầu.`,
            ],
            `Hướng dẫn cách xử trí ADR`,
            `Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
        ],
        pill_interactions: [

        ],
        pill_precautions: [],
        pill_overdose: [

        ],
        pill_overdose_handling: [
            `Thường điều trị triệu chứng và hỗ trợ. Áp dụng biện pháp tăng đào thải và bất hoạt thuốc rửa dạ dày, gây nôn và lợi tiểu, uống than hoạt hay thuốc tẩy muối. Nếu nặng thẩm tách máu hoặc truyền máu.`,
            `Làm gì khi quên 1 liều? \nNếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`
        ],
        pill_viewed: 100,
    },


    {
        pill_id: 'U7342h',
        pill_name: 'Thuốc Actadol 500 Medipharco điều trị các chứng đau và sốt từ nhẹ đến vừa (10 vỉ x 10 viên)',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 0,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [`images/pill/Tatanol.png`],
        pill_indication: [
            `Thuốc Tatanol được chỉ định dùng trong các trường hợp sau:`,
            `Thuốc có tác dụng giảm đau, hạ sốt từ nhẹ đến vừa.`,
            `Giảm đau tạm thời trong điều trị các cơn đau do cảm cúm, nhức đầu, đau họng, đau nhức cơ xương, đau do hành kinh, đau răng, đau nửa đầu.`
        ],
        pill_contraindication: [
            `Thuốc Tatanol chống chỉ định trong các trường hợp sau:`,
            `Bệnh nhân mẫn cảm với thành phần của thuốc.`,
            `Bệnh nhân thiếu hụt glucose - 6 - phosphat dehydrogenase.`,
            `Người bệnh nhiều lần thiếu máu.`,
            `Suy gan nặng.`,
            `Có bệnh tim, phổi, thận.`,
        ],
        pill_use: [
            `Thuốc Tatanol 500 dùng đường uống.`
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi 1 viên/lần x 2 - 3 lần/ngày, khoảng cách các liều dùng cách nhau ít nhất 4 giờ. Không được dùng quá 8 viên/ngày.`,
            `Trẻ em > 6 tuổi: 1 viên/lần x 1 lần/ngày. Không được dùng quá 4 viên /ngày.`,
            `Không được dùng acetaminophen để tự điều trị giảm đau quá 10 ngày ở người lớn hoặc quá 5 ngày ở trẻ em, trừ khi do thầy thuốc hướng dẫn.`,
            `Không dùng acetaminophen cho người lớn và trẻ em để tự điều trị sốt cao (trên 39,5°C), sốt kéo dài trên 3 ngày, hoặc sốt tái phát, trừ khi do thầy thuốc hướng dẫn, vì sốt như vậy có thể là dấu hiệu của một bệnh nặng cần được thầy thuốc chẩn đoán nhanh chóng.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.                `,
        ],
        pill_pharmacology: [
            `Thuốc giảm đau, hạ sốt`,
            `Cơ chế giảm đau: Ức chế tổng hợp prostaglandin - chất trung gian gây đau.`,
            `Cơ chế hạ sốt: Ức chế tổng hợp prostaglandin ở trung tâm điều nhiệt vùng đồi thị gây giãn mạch ngoại biên kết quả làm tăng sự lưu thông máu qua da, tăng tiết mồ hôi, hạ nhiệt.`
        ],
        pill_pharmacokinetics: [
            `Acetaminophen được hấp thu nhanh chóng và hoàn toàn khi dùng đường uống. Tmax 1- 3 giờ. Thời gian kéo dài tác động 3 - 4 giờ.`,
            `Phân phối nhanh đến tất cả các mô. Tỉ lệ gắn kết với protein ở liều điều trị là 10%. Khoảng 90 - 95% liều dùng được chuyển hóa ở gan chủ yếu do liên hợp với acid glucuronic, sulfat và cystein. Chuyển hóa rất nhanh và có thể tích lũy trong trường hợp quá liều sau khi các đường chuyển hóa chủ yếu đã bị lão hóa. Khi thuốc bị tích lũy có thể gây độc gan và thận.`,
            `Thời gian bán hủy T1/2 khoảng 1 - 4 giờ. Thải trừ qua nước tiểu chủ yếu ở dạng liên hợp.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Tatanol, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Ban da và những phản ứng dị ứng khác thỉnh thoảng xảy ra. Thường là ban đỏ hoặc mày đay, nhưng đôi khi nặng hơn và có kèm theo sốt do thuốc và thương tổn niêm mạc. Người bệnh mẫn cảm với salicylat hiếm mẫn cảm với acetaminophen và những thuốc có liên quan. Trong một số ít trường hợp riêng rẻ, acetaminophen đã gây giảm bạch cầu trung tính, giảm tiểu cầu và giảm toàn thể huyết cầu.`,
            `Ít gặp, 1/1000 < ADR < 1/100`,
            `Da: Ban.`,
            `Dạ dày - ruột: Buồn nôn, nôn.`,
            `Huyết học: Loạn tạo máu (giảm bạch cầu trung tính, giảm toàn thể huyết cầu, giảm bạch cầu), thiếu máu.`,
            `Thận: Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,
            `Hiếm gặp, ADR< 1/1000`,
            `Khác: Phản ứng quá mẫn.`,
            `Hướng dẫn cách xử trí ADR`,
            `Thông báo cho thầy thuốc tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
        ],
        pill_interactions: [

        ],
        pill_precautions: [],
        pill_overdose: [

        ],
        pill_overdose_handling: [
            `Triệu chứng: Tiêu chảy, chán ăn, buồn nôn, nôn, xanh xao, đau bụng, tăng tiết mồ hôi, độc gan. Các triệu chứng này thường xuất hiện trong 24 giờ đầu và có thể vẫn xảy ra sau 2 - 4 ngày.`,
            `Điều trị: Phải chuyển ngay đến bệnh viện, gây nôn hay rửa dạ dày để loại trừ thuốc đã uống. Uống than hoạt tính (than hoạt có thể làm giảm hiệu quả điều trị khi dùng acetylcystein để điều trị quá liều acetaminophen). Dùng thuốc giải độc đặc hiệu N-acetylcystein, lượng N-acetylcystein được dùng tùy theo lượng acetaminophen đã dùng. Khuyến cáo nên sử dụng ngay N-acetylcystein sau khi đã uống quá liều acetaminophen nhất là trong vòng 10 - 12 giờ. Xác định nồng độ acetaminophen chậm nhất sau 4 giờ.`,
            `Thẩm phân trong trường hợp sau 24 giờ đã uống quá liều mà chưa điều trị bằng N - acetylcystein. Điều trị nâng đỡ tổng trạng, duy trì cân bằng nước, chất điện giải.`,
            `Làm gì khi quên 1 liều?`,
            [
                `Vì acetaminophen thường chỉ được sử dụng khi cần thiết, bạn có thể không theo lịch trình dùng thuốc.`,
                `Nếu bạn đang sử dụng thuốc thường xuyên, hãy sử dụng liều đã quên ngay khi nhớ ra. Nếu gần đến thời gian dùng liều thường xuyên tiếp theo, hãy bỏ qua liều đã quên và sử dụng liều tiếp theo theo chỉ dẫn. Không sử dụng thêm thuốc để bù cho liều đã quên.`,
            ],
        ],
        pill_viewed: 100,
    },


    {
        pill_id: 'G7362s',
        pill_name: 'Thuốc Hapacol Blue 500 DHG điều trị đau đầu, đau nửa đầu, đau răng (10 vỉ x 10 viên)',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 0,
        pill_sellPrice: 4000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [`images/pill/Hapacol_Blue.png`],
        pill_indication: [
            `Thuốc Hapacol Blue được chỉ định dùng trong các trường hợp sau:`,
            `Điều trị các triệu chứng đau trong các trường hợp, đau đầu, đau nửa đầu, đau răng, đau nhức do cảm cúm, đau họng, đau nhức cơ xương, đau do viêm khớp, đau sau khi tiêm ngừa hay nhổ răng.`,
            `Hạ sốt ở bệnh nhân bị cảm hay những bệnh có liên quan đến sốt.`,
        ],
        pill_contraindication: [`Quá mẫn với một trong các thành phần của thuốc. Người bệnh thiếu hụt Glucose -6 - Phosphat Dehydrogenase.`],
        pill_use: [
            `Dùng đường uống.`
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Người lớn và trẻ em 12 tuổi`,
            `Uống 1 viên/lần. Đau nhiều người lớn có thể uống 2 viên/lần.`,
            `Khoảng cách giữa 2 lần uống phải hơn 4 giờ và không uống quá 8 viên/ngày.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.                `,
        ],
        pill_pharmacology: [
            `Paracetamol là thuốc giảm đau - hạ sốt hữu hiệu. Thuốc tác động lên trung tâm điều nhiệt ở vùng dưới đôi gây hạ nhiệt, tăng tỏa nhiệt do giãn mạch và tăng lưu lượng máu ngoại biên làm giảm thân nhiệt ở người bị sốt, nhưng hiếm khi làm giảm thân nhiệt bình thường.`,
            `Ở liều điều trị, hiệu quả giảm đau, hạ sốt tương đương Aspirin nhưng Paracetamol ít tác động đến hệ tim mạch và hệ hô hấp, không làm thay đổi cân bằng Acid - Base, không gây kích ứng, xước hoặc chảy máu dạ dày.`
        ],
        pill_pharmacokinetics: [
            `Paracetamol hấp thu nhanh chóng và hầu như hoàn toàn qua đường tiêu hóa. Thời gian bán thải là 1,25 - 3 giờ. Thuốc chuyển hóa ở gan và thải trừ qua thận.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Hapacol Blue, bạn có thể gặp các tác dụng không mong muốn (ADR). Một số tác dụng phụ được ghi nhận trong các nghiên cứu trên người dùng thuốc này là:`,
            `Ít gặp`,
            `Ban da, buồn nôn, nôn, bệnh thận, độc tính thận khi lạm dụng dài ngày, giảm bạch cầu trung tính, giảm toàn thể huyết cầu, thiếu máu.`,
            `Hiếm gặp phản ứng quá mẫn.`,
            `Đây không phải là danh mục đầy đủ tất cả các tác dụng phụ và có thể xảy ra những tác dụng phụ khác. Nếu bạn gặp phải bất kỳ tác dụng không mong muốn nào, hãy ngưng dùng thuốc Hapacol Blue và thông báo ngay cho bác sĩ hoặc đến ngay cơ sở y tế gần nhất để được xử trí kịp thời.                `,
        ],
        pill_interactions: [

        ],
        pill_precautions: [],
        pill_overdose: [
            `Không dùng quá liều lượng được kê. Dùng thuốc nhiều hơn sẽ không cải thiện triệu chứng của bạn, thay vào đó chúng có thể gây ngộ độc hoặc những tác dụng phụ nghiêm trọng. Nếu bạn nghi vấn rằng bạn hoặc ai khác có thể đã sử dụng quá liều Hapacol vui lòng đến phòng cấp cứu tại bệnh viện hoặc viện chăm sóc gần nhất. Mang theo hộp, vỏ, hoặc nhãn hiệu thuốc với bạn để giúp các bác sĩ có thông tin cần thiết.`,
            `Quá liều Paracetamol do dùng một liều độc duy nhất hoặc do uống lặp lại liều lớn Paracetamol (7,5 - 10g mỗi ngày, trong 1 - 2 ngày) hoặc do uống thuốc dài ngày. Hoại tử gan phụ thuộc liều là tác dụng độc cấp tính nghiêm trọng nhất do quá liều và có thể gây tử vong.`,
            `Biểu hiện của quá liều Paracetamol: Buồn nôn, nôn, đau bụng, triệu chứng xanh tím da, niêm mạc và móng tay.`,
            `Biểu hiện của ngộ độc nặng Paracetamol: Ban đầu kích thích nhẹ, kích động và mê sảng. Tiếp theo là ức chế hệ thần kinh trung ương sững sờ, hạ thân nhiệt, mệt lả, thở nhanh và nông: Mạch nhanh, yếu, không đều, huyết áp thấp và suy tuần hoàn.                `,
        ],
        pill_overdose_handling: [
            `Chẩn đoán sớm rất quan trọng trong điều trị quá liều Paracetamol.`,
            `Khi nhiễm độc Paracetamol nặng, cần điều trị hỗ trợ tích cực. Cần rửa dạ dày trong trường hợp, tốt nhất trong vòng 4 giờ sau khi uống.`,
            `Liệu pháp giải độc chính là dùng những hợp chất Sulfhydry. N-acetylcystein có tác dụng khi uống hoặc tiêm tĩnh mạch.`,
            `Ngoài ra, có thể dùng Methionin, than hoạt hoặc thuốc tẩy muối.`,
            `Làm gì khi quên liều?`,
            `Nếu bạn quên một liều thuốc Hapacol Blue, hãy uống càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và uống liều kế tiếp vào thời điểm như kế hoạch. Không uống gấp đôi liều đã quy định.`
        ],
        pill_viewed: 100,
    },




    //Duy

    //Giảm đau và Hạ sốt


    {
        pill_id: `H6462w`,
        pill_name: `Thuốc Tiffy Dey Thai Nakorn Patana điều trị nghẹt mũi, sổ mũi (25 vỉ x 4 viên)`,
        pill_brand: ``,
        pill_tags: [`Giảm đau và Hạ sốt`],
        pill_quantity: 0,
        pill_sellPrice: 4500,
        pill_buyPrice: 2000,
        pill_packKind: `1 vỉ x 4 viên`,
        pill_imgAddress: [`images/pill/Giảm_đau_và_hạ_sốt.png`],
        pill_indication: [`Tiffy Dey làm giảm các triệu chứng cảm thông thường như: nghẹt mũi, sổ mũi, hắt hơi, nhức đầu và sốt.`],
        pill_contraindication: [
            `Tiffy Dey không dùng cho trẻ em dưới 6 tuổi.`,
            `Đối với paracetamol: Mẫn cảm với paracetamol hay bất cứ thành phần nào của thuốc.`,
            `Đối với chlorpheniramin maleat: Mẫn cảm với thuốc kháng histamin, trẻ sơ sinh, trẻ sinh non, phụ nữ cho con bú, bệnh glaucoma góc hẹp, loét đường tiêu hóa, phì đại tuyến tiền liệt, bệnh hen suyễn, tắc cổ bàng quang, tắc môn vị - tá tràng, bệnh nhân đang sử dụng thuốc ức chế monoamine oxidase (IMAO).`,
            `Đối với phenylephrin HCl: Chống chỉ định đối với bệnh nhân mẫn cảm với thuốc, bệnh nhân cao huyết áp nặng hay có bệnh nhịp nhanh tâm thất. Nếu dùng cho bệnh nhân bị viêm gan hay viêm tụy cấp có thể làm tăng chứng thiếu máu cục bộ ở tụy hay gan.`,
            `Phenylephrin HCI không dùng cho bệnh nhân có bệnh huyết khối ngoại biên hay mạch màng treo ruột bởi vì chứng thiếu máu cục bộ có thể bị tăng lên và diện tích tổn thương bị mở rộng. Trong trường hợp dùng chung với thuộc gây tê tại chỗ, phenylephrin HCl không được dùng tại các vùng ở ngón tay, ngón chân, tai, mũi và cơ quan sinh dục ngoài.`,
        ],
        pill_description: [

        ],
        pill_ingredient: [``],
        pill_use: [
            `Dùng đường uống.`
        ],
        pill_dosage: [
            `Người lớn: uống mỗi lần từ 1 - 2 viên, 4 - 6 giờ mỗi lần.`,
            `Trẻ em từ 6 – 12 tuổi: uống mỗi lần 1 viên, 4 – 6 giờ mỗi lần.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [`Chưa có báo cáo.`],
        pill_pharmacokinetics: [`Chưa có báo cáo.`],
        pill_sideEffects: [
            `Da: phản ứng quá mẫn, mề đay, vàng da;`,
            `Thần kinh: bồn chồn, lo lắng, hốt hoảng, chóng mặt, mất khả năng phối hợp;`,
            `Tiêu hóa: đau vùng thượng vị, khó chịu;`,
            `Máu và hệ bạch huyết: thiếu máu, giảm bạch cầu trung tính, giảm bạch cầu, giảm toàn thể huyết cầu/ tiểu cầu;`,
            `Cận lâm sàng: giảm glucose máu;`,
            `Toàn thân: sốt, run, xanh xao, nhợt nhạt;`,
            `Hô hấp: truỵ hô hấp;`,
            `Cơ xương khớp: yếu cơ.`,
            `Hướng dẫn cách xử trí ADR`,
        ],
        pill_interactions: [

        ],
        pill_precautions: [
            `Khi gặp tác dụng phụ của thuốc Tiffy Dey, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_overdose: [
            `Rối loạn tiêu hóa (như tiêu chảy, giảm cảm giác thèm ăn, buồn nôn, nôn, đau bụng); vã mồ hôi; nhiễm độc gan (như đau, sưng tấy ở phần bụng trên) có thể xuất hiện trong 2 đến 4 ngày sau khi sử dụng quá liều.`,
            `Chú ý: Mặc dù rối loạn tiêu hóa và vã mồ hôi thường không xảy ra, nhưng các triệu chứng này thỉnh thoảng xuất hiện trong vòng (6 đến 14 tiếng sau khi dùng thuốc quá liều và sẽ kéo dài trong khoảng 24 tiếng).`,
            `Dấu hiệu đầu tiên của tổn thương gan và các bất thường trong chức năng gan có thể không xuất hiện trong vòng 2 đến 4 ngày sau khi dùng thuốc quá liều. Chức năng gan bị thay đổi lớn nhất thường sau 3 đến 4 ngày sau khi dùng thuốc quá liều.`,
            `Suy gan có thể xảy ra sau 4 đến 6 ngày sau khi quá liều thuốc. Các bệnh về thần kinh (như loạn tâm thần, lú lẫn, lo âu hoặc sững sờ), co giật, ức chế hô hấp, hôn mê, phù não, chảy máu dạ dày, rối loạn đông máu, hạ đường huyết, nhiễm acid chuyển hóa, ngừng tim có thể xuất hiện.`,
            `Hoại tử ống thận gây suy thận (dấu hiệu có thể bao gồm nước tiểu màu đục hoặc màu máu, lượng nước tiểu giảm đột ngột) cũng được ghi nhận khi quá liều paracetamol, thường đi cùng với ảnh hưởng nhiễm độc gan.`,
            `Quá liều chlorpheniramin maleat ở người lớn thường gây ức chế hệ thần kinh trung ương như ngủ gà, hôn mê. Ở trẻ em và người lớn, phù não, thận hư, hôn mê sâu, mạch nhanh, khoảng QRS kéo dài, block tim, ngừng tim và tử vong có thể xảy ra.`,
            `Quá liều phenylephrin HCI có thể gây ra tăng huyết áp, đau đầu, co giật, xuất huyết não, đánh trống ngực, dị cảm hoặc nôn. Đau đầu có thể là triệu chứng của tăng huyết áp, có thể uống thuốc ức chế alpha-adrenergic (như phentolamin).`,
            `Phenylephrin có thể gây ra co mạch ngoại vi và nội tạng, giảm lưu lượng máu đến các tổ chức quan trọng, giảm lưu lượng lọc thận, và có thể gây giảm lượng nước tiểu gây acid chuyển hóa. Phenylephrin HCI còn có thể gây ra chậm nhịp tim và giảm lưu lượng tim, gây hoại tử mô nếu bị tràn mạch máu.`,
            `Nếu bạn quên một liều thuốc Tiffy Dey, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
        ],
        pill_overdose_handling: [`Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`],
        pill_viewed: 10
    },


    {
        pill_id: `G5638f`,
        pill_name: `Thuốc Di-Angesic 30 Codein giảm đau cấp tính mức độ trung bình (2 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Giảm đau và Hạ sốt`],
        pill_quantity: 0,
        pill_sellPrice: 30000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/DI_-_angestic_-_thuốc_giảm_đau_đầu,_hạ_sốt.png`],
        pill_indication: [
            `Thuốc Di - angesic 30 được chỉ định dùng trong các trường hợp sau:`,
            `Giảm đau cấp tính mức độ trung bình cho người lớn và trẻ em trên 12 tuổi trong các trường hợp nhức đầu, đau răng, đau khớp, đau cơ, đau do chấn thương hoặc sau khi mổ, đau bụng kinh.`,
        ],
        pill_contraindication: [
            `Thuốc Di - angesic 30 chống chỉ định trong các trường hợp sau:`,
            ` Mẫn cảm với bất kỳ thành phần nào của thuốc.`,
            `Suy hô hấp cấp.`,
            `Suy gan, suy thận nặng.`,
            `Nguy cơ liệt ruột, trướng bụng, bệnh tiêu chảy cấp như viêm đại tràng loét hoặc viêm đại tràng do kháng sinh.`,
            `Các bệnh kèm tăng áp lực nội sọ hoặc chấn thương sọ não (vì ngăn cản chẩn đoán dựa vào đáp ứng đồng tử).`,
            `Bệnh nhân hôn mê.`,
            `Mọi lứa tuổi khi đã biết người bệnh thuộc loại chuyển hóa cực nhanh codein. `,
            `Giảm đau cho tất cả các trẻ em (dưới 18 tuổi) thực hiện cắt amidan, nạo V.A để điều trị cơn ngừng thở khi ngủ.`,
            `Không dùng cho trẻ em có vấn đề về thở, bao gồm các bệnh về thần kinh cơ, các bệnh về tim hoặc hô hấp nặng, nhiễm khuẩn hô hấp, đa chấn thương hoặc phẫu thuật rộng.`,
            `Mẹ cho con bú vì thuốc có thể vào sữa mẹ.`,
            `Trẻ em dưới 12 tuổi.`,
        ],
        pill_description: [

        ],
        pill_ingredient: [``],
        pill_use: [`Dùng đường uống.`],
        pill_dosage: [
            `Theo chỉ dẫn của bác sĩ hoặc theo liều sau:`,
            `Người lớn và trẻ em trên 12 tuổi: Mỗi lần uống 1 - 2 viên, cách 6 giờ uống một lần. Không dùng quá 8 viên/ngày.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Paracetamol (acetaminophen hay N - acetyl - p - aminophenol): Là chất chuyển hóa có hoạt tính của phenacetin, có tác dụng giảm đau - hạ sốt hữu hiệu có thể thay thế aspirin; tuy vậy, khác với aspirin, paracetamol không có hiệu quả điều trị viêm. Với liều ngang nhau tính theo gam, paracetamol có tác dụng giảm đau và hạ sốt tương tự như aspirin.`,
            `Paracetamol làm giảm thân nhiệt ở người bệnh sốt, nhưng hiếm khi làm giảm thân nhiệt ở người bình thường. Thuốc tác động lên vùng dưới đồi gây hạ nhiệt, tỏa nhiệt tăng do giãn mạch và tăng lưu lượng máu ngoại biên.`,
            `Paracetamol, với liều điều trị, ít tác động đến hệ tim mạch và hô hấp, không làm thay đổi cân bằng acid - base, không gây kích ứng, loét hoặc chảy máu dạ dày như khi dùng salicylat. Tác dụng của paracetamol trên hoạt tính cyclooxygenase chưa được biết đầy đủ. Với liều 1 g/ngày, paracetamol là một thuốc ức chế cyclooxygenase yếu. Tác dụng ức chế của paracetamol trên cyolooxygenase - 1 yếu. Paracetamol thường được chọn làm thuốc giảm đau và hạ sốt, đặc biệt ở người cao tuổi và ở người có chống chỉ định dùng salicylat hoặc NSAID khác, như người bị hen, có tiền sử loét dạ dày tá tràng và trẻ em.`,
            `Paracetamol không có tác dụng trên sự kết tập tiểu cầu hoặc thời gian chảy máu.`,
            `Với liều điều trị, paracetamol chuyển hóa chủ yếu qua phản ứng liên hợp sulfat và glucuronid. Một lượng nhỏ thường chuyển thành một chất chuyển hóa độc, N - acetyl - p - benzoquinonimin (NAPQI). NAPQI được khử độc bằng glutathion và đào thải vào nước tiểu và/hoặc mật. Khi chất chuyển hóa không được liên hợp với glutathion sẽ gây độc cho các tế bào gan và gây hoại tử.`,
            `Paracetamol thường an toàn khi dùng với liều điều trị, vì lượng NAPQI được tạo thành tương đối ít và glutathion tạo thành trong tế bào gan đủ liên hợp với NAPQI. Tuy nhiên khi quá liều hoặc đôi khi với liều thường dùng ở một số người nhạy cảm (như suy dinh dưỡng, hoặc tương tác thuốc, nghiện rượu, cơ địa di truyền), nồng độ NAPQI có thể tích lũy gây độc cho gan.`,
            `Codein là một dẫn chất của methylmorphin, nhóm methyl thay thế vị trí của hydro ở nhóm hydroxyl liên kết với nhân thơm trong phân tử morphin, do vậy codein có tác dụng dược lý tương tự morphin, tức là có tác dụng giảm đau và giảm ho. So với morphin, codein được hấp thu tốt ở dạng uống, ít gây táo bón và ít gây co thắt mật hơn. Ở liều điều trị, ít gây ức chế hô hấp (60% thấp hơn so với morphin) và ít gây nghiện hơn morphin và hiệu lực giảm đau kém hơn nhiều so với morphin.`,
            `Codein và muối của nó có tác dụng giảm đau trong trường hợp đau nhẹ và vừa tác dụng giảm đau của codein có thể là do sự biến đổi khoảng 10% liều sử dụng thành morphin. Khi dùng với mục đích giảm đau thì codein nên cho với liều thấp nhất có tác dụng để giảm sự lệ thuộc vào thuốc và thường kết hợp với các thuốc giảm đau không steroid như aspirin, ibuprofen, paracetamol để tăng hiệu quả giảm đau do tác dụng cộng hợp (cơ chế tác dụng giảm đau của các thuốc khác nhau).`,
            `Codein và muối của nó có tác dụng giảm ho do tác dụng trực tiếp lên trung tâm gây ho ở hành não, codein làm khô dịch tiết đường hô hấp và làm tăng độ quánh của dịch phế quản. Codein không đủ hiệu lực để giảm ho nặng. Codein là thuốc giảm ho trong trường hợp ho khan làm mất ngủ.`,
            `Codein gây giảm như động ruột, vì vậy là một thuốc rất tốt trong điều trị tiêu chảy do bệnh thần kinh, do đái tháo đường. Không được dùng chỉ định khi bị tiêu chẩy cấp và tiêu chảy do nhiễm khuẩn.`,
        ],
        pill_pharmacokinetics: [
            `Paracetamol`,
            [
                `Phân bố: Paracetamol phân bố nhanh và đồng đều trong phần lớn các mô của cơ thể. Khoảng 25% paracetamol trong máu kết hợp với protein huyết tương.`,
                `Thải trừ: Nửa đời huyết tương của paracetamol là 1,25 - 3 giờ, có thể kéo dài với liều gây độc hoặc ở người bệnh có thương tổn gan.`,
                `Sau liều điều trị, có thể tìm thấy 90 đến 100% thuốc trong nước tiểu trong ngày thứ nhất, chủ yếu sau khi liên hợp trong gan với acid glucuronic (khoảng 60%), acid sulfuric (khoảng 35%) hoặc oystein (khoảng 3%); cũng phát hiện thấy một lượng nhỏ những chất chuyển hóa hydroxyl - hoá và khử acetyl. Trẻ nhỏ ít khả năng glucuro liên hợp với thuốc hơn so với người lớn.`,
                `Paracetamol bị N - hydroxyl hóa bởi cytochrom P450 để tạo nên N - acetyl - benzoquinonimin, một chất trung gian có tính phản ứng cao. Chất chuyển hóa này bình thường phản ứng với các nhóm sulfhydryl trong glutathion và bị khử hoạt tính. Tuy nhiên, nếu uống liều caoparacetamol, chất chuyển hóa này được tạo thành với lượng đủ để làm cạn kiệt glutathion của gan; trong tình trạng đó, chất NAPQ không được liên hợp với glutathion gây độc cho tế bào gan, dẫn đến viêm và có thể dẫn đến hoại tử gan.`,
            ],
            `Codein`,
            [
                `Codein và muối của nó được hấp thu tốt qua đường tiêu hóa. Sau khi uống, nồng độ đỉnh codein trong máu đạt được sau 1 giờ.`,
                `Codein bị chuyển hóa ở gan bởi khử methyl (tại vị trí O - và N - methyl trong phân tử) tạo thành morphin, norcodein và những chất chuyển hóa khác như normorphin và hydrocodon. Sự chuyển hóa thành morphin gián tiếp chịu tác dụng của cytochrom P450 isoenzym CYP2D6 và tác dụng này rất khác nhau do ảnh hưởng của cấu trúc gen.`,
                `Codein và sản phẩm chuyển hóa của nó được thải trừ chủ yếu qua thận và vào nước tiểu dưới dạng liên hợp với acid glucuronic. Nửa đời thải trừ là 3 - 4 giờ sau khi uống. Codein qua được nhau thai và phân bố vào sữa mẹ.`,
            ],
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Di - angesic 30, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Paracetamol:`,
            [
                `Phản ứng da nghiêm trọng như hội chứng Stevens - Johnson, hội chứng Lyell, hoại tử biểu bì nhiệm độc, mụn mủ ban đỏ toàn thân cấp tuy hiểm xảy ra, nhưng có khả năng gây tử vong. Nếu thấy xuất hiện ban hoặc các biểu hiện khác về da, phải ngừng dùng thuốc và thăm khám thầy thuốc.`,
                `Ban da và những phản ứng dị ứng khác thỉnh thoảng xảy ra. Thường là ban đỏ hoặc mày đay nhưng đôi khi nặng hơn và có thể kèm theo sốt do thuốc và thương tổn niêm mạc. Nếu thấy sốt bóng nước quanh các hốc tự nhiên, nên nghĩ đến hội chứng Stevens - Johnson, phải ngừng thuốc ngay.`,
                'Người bệnh mẫn cảm với salicylat hiếm mẫn cảm với paracetamol và những thuốc có liên quan. Trong một số ít trường hợp riêng lẻ, paracetamol đã gây giảm bạch cầu trung tính, giảm tiểu cầu giảm toàn thể huyết cầu.',
                `Ít gặp, 1/1000 < ADR < 1/100:`,

                `Da: Ban.`,
                `Dạ dày - ruột: Buồn nôn, nôn.`,
                `Huyết học: Loạn tạo máu (giảm bạch cầu trung tính, giảm toàn thể huyết cầu, giảm bạch cầu), thiếu máu.`,
                `Thận: Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,

                `Hiếm gặp, ADR < 1/1000:`,

                `Da: Hội chứng Stevens - Johnson, hoại tử biểu bì nhiễm độc, hội chứng Lyell, mụn mủ ngoại ban toàn thân cấp tính.`,
                `Khác: Phản ứng quá mẫn.`

            ],
            'Codein:',
            [
                `Thường gặp, ADR > 1/100`,

                `Thần kinh: Đau đầu, chóng mặt, khát và có cảm giác khác lạ.`,
                `Tiêu hóa: Buồn nôn, nôn, táo bón.`,
                `Tiết niệu: Bí tiểu, tiểu ít.`,
                `Tim mạch: Mạch nhanh, mạch chậm, hồi hộp, yếu mệt, hạ huyết áp thế đứng.`,

                `Ít gặp, 1/1000 < ADR < 1/100:`,

                `Phản ứng dị ứng: Ngứa, mày đay.`,
                `Thần kinh: Suy hô hấp, an dịu, sảng khoái, bồn chồn.`,
                `Tiêu hóa: Đau dạ dày, co thắt ống mật.`,

                `Hiếm gặp, ADR < 1/1000:`,

                `Dị ứng: Phản ứng phản vệ.`,
                `Thần kinh: Ảo giác, mất phương hướng, rối loạn thị giác, co giật.`,
                `Tim mạch: Suy tuần hoàn.`,
                'Loại khác: Đỏ mặt, toát mồ hôi, mệt mỏi.',
                `Nghiện thuốc: Dùng codein trong thời gian dài với liều cao (từ 240 - 540 mg/ngày) có thể gây nghiện thuốc. Các biểu hiện thường gặp khi thiếu thuốc là bồn chồn, run, co giật cơ, toát mồ hôi, chảy nước mũi. Có thể gây lệ thuộc thuốc về tâm lý, về thân thể và gây quen thuốc.`,

            ],
        ],
        pill_interactions: [

        ],
        pill_precautions: [
            `Paracetamol: Nếu xảy ra ADR nghiêm trọng, phải ngừng dùng paracetamol.`,
            `Codein: ADR thường ít xảy ra khi dùng liều điều trị thông thường bằng đường uống. Buồn nôn, nôn, táo bón khi dùng liều lặp lại nhiều lần. Tránh dùng liều cao, hoặc kéo dài. Nếu cần có thể sử dụng thuốc nhuận tràng hoặc thụt tháo.`,
            `Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
        ],
        pill_overdose: [

            `Paracetamol:`,
            [
                `Nhiễm độc paracetamol có thể do dùng một liều độc duy nhất, hoặc do uống lặp lại liều lớn paracetamol (ví dụ, 7,5 - 10 g mỗi ngày, trong 1 - 2 ngày), hoặc do uống thuốc dài ngày. Hoại tử phụ thuộc liều là tác dụng độc cấp tính nghiêm trọng nhất do quá liều và có thể gây tử vong.`,
                `Buồn nôn, nôn, và đau bụng thường xảy ra trong vòng 2 - 3 giờ sau khi uống liều độc của thuốc.`,
                `Methemoglobin - máu, dẫn đến chứng xanh tím da, niêm mạc và móng tay là một dấu hiệu đặc độc cấp tính dẫn chất p - aminophenol; một lượng nhỏ sulfhemoglobin cũng có thể được sản sinh. Trẻ em có khuynh hướng tạo methemoglobin dễ hơn người lớn sau khi uống paracetamol.`,
                `Khi bị ngộ độc nặng, ban đầu có thể có kích thích hệ thần kinh trung ương, kích động, và mê sảng. Tiếp theo có thể là ức chế hệ thần kinh trung ương; sững sờ, hạ thân nhiệt; mệt lả, thở nhanh, nông; mạch nhanh, yếu, không đều, huyết áp thấp, và suy tuần hoàn.`,
                `Trụy mạch do giảm oxy huyết tương đối và do tác dụng ức chế trung tâm, tác dụng này chỉ xảy ra với liều rất lớn. Sốc có thể xảy ra nếu giãn mạch nhiều. Cơn co giật nghẹt thở gây tử vong có thể xảy ra. Thường hôn mê xảy ra trước khi chết đột ngột hoặc sau vài ngày hôn mê.`,
                `Dấu hiệu lâm sàng thương tổn gan trở nên rõ rệt trong vòng 2 đến 4 ngày sau khi uống liều độc. Aminotransferase huyết tương tăng (đôi khi tăng rất cao) và nồng độ bilirubin trong huyết tương cũng có thể tăng; thêm nữa, khi thương tổn gan lan rộng, thời gian prothrombin sẽ kéo dài. Có thể 10% người bệnh bị ngộ độc không được điều trị đặc hiệu đã có thương tổn gan nghiêm trọng; trong số đó 10% đến 20% cuối cùng chết vì suy gan.`,
                `Suy thận cấp cũng xảy ra ở một số người bệnh. Sinh thiết gan phát hiện hoại tử trung tâm tiểu thùy trừ vùng quanh tĩnh mạch cửa. Ở những trường hợp không tử vong, thương tổn gan phục hồi sau nhiều tuần hoặc nhiều tháng.`,
            ],
            `Codein:`,
            [
                `Suy hô hấp (giảm nhịp thở, hô hấp Cheyne - Stokes, xanh tím). Lơ mơ dẫn đến tình trạng đờ đẫn hoặc hôn mê, mềm cơ, da lạnh và ẩm, đôi khi mạch chậm và hạ huyết áp.`,
                `Trong trường hợp nặng: Ngừng thở, trụy mạch, ngừng tim, và có thể tử vong.`,
            ],

            `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
        ],
        pill_overdose_handling: [
            `Paracetamol:`,
            [
                `Chẩn đoán sớm rất quan trọng trong điều trị quá liều paracetamol. Có những phương pháp xác định nhanh nồng độ thuốc trong huyết tương. Tuy vậy, không được trì hoãn điều trị trong khi chờ kết quả xét nghiệm nếu bệnh sử gợi ý là quá liều nặng. Khi nhiễm độc nặng, điều quan trọng là điều trị hỗ trợ tính cực. Cần rửa dạ dày trong mọi trường hợp, tốt nhất trong vòng 4 giờ sau khi uống.`,
                `Liệu pháp giải độc chính là dùng những hợp chất sulfhydryl, có lẽ tác động một phần do bổ sung dự trữ glutathion ở gan. N - acetylcystein có tác dụng khi uống hoặc tiêm tĩnh mạch. Phải cho thuốc giải ngay lập tức nếu chưa đến 36 giờ kể từ khi uống paracetamol.`,
                `Điều trị với N - acetylcystein có hiệu quả hơn khi cho thuốc trong thời gian dưới 10 giờ sau khi uống paracetamol. Khi cho uống hòa loãng dung dịch N - acetylcystein với nước hoặc đồ uống không có rượu để đạt dung dịch 5% và phải uống trong vòng 1 giờ sau khi pha. Cho uống N - acetylcystein với liều đầu nên là 140 mg/kg, sau đó cho tiếp 17 liều nữa, mỗi liều 70 mg/kg cách nhau 4 giờ một lần.`,
                `Chấm dứt điều trị nếu xét nghiệm paracetamol trong huyết tương cho thấy nguy cơ độc hại gan thấp. Cũng có thể dùng N - acetylcystein theo đường tĩnh mạch: Liều ban đầu là 150 mg/kg, pha trong 200 ml glucose 5%, tiêm tĩnh mạch trong 15 phút. Sau đó tiêm truyền tĩnh mạch liều 50 mg/kg trong 500 ml glucose 5% trong 4 giờ; tiếp theo là 100 mg/kg trong 1 lít dung dịch trong 16 giờ tiếp theo. Nếu không có dung dịch glucose 5% có thể dùng dung dịch natri clorid 0,9%.`,
                `Cũng có thể dùng N - acetylcystein theo đường tĩnh mạch: Liều ban đầu là 150 mg/kg, pha trong 200 ml glucose 5%, tiêm tĩnh mạch trong 15 phút. Sau đó tiêm truyền tĩnh mạch liều 50 mg/kg trong 500 ml glucose 5% trong 4 giờ; tiếp theo là 100 mg/kg trong 1 lít dung dịch trong 16 giờ tiếp theo. Nếu không có dung dịch glucose 5% có thể dùng dung dịch natri clorid 0,9%.`,
                `Tác dụng không mong muốn của N - acetylcystein gồm ban da (gồm cả mày đay, không yêu cầu phải ngừng thuốc), buồn nôn, nôn, tiêu chảy, và phản ứng kiểu phản vệ.`,
                `Nếu không có N - acetylcystein, có thể dùng methionin. Nếu đã thể dùng than hoạt trước khi dùng methionin thì phải hút than hoạt ra khỏi dạ dày trước. Ngoài ra có than hoạt và/hoặc thuốc tẩy muối, chúng có khả năng làm giảm hấp thu paracetamol.`,
            ],
            `Codein:`,
            [`Phải hồi phục hô hấp bằng cách cung cấp dưỡng khí và hô hấp hỗ trợ có kiểm soát. Chỉ định naloxon ngay bằng đường tiêm tĩnh mạch trong trường hợp nặng.`,],
        ],
        pill_viewed: 10
    },


    {
        pill_id: `G5538f`,
        pill_name: `Viên sủi Tovalgan Ef Trường Thọ Pharma giảm đau, hạ sốt (5 vỉ x 4 viên)`,
        pill_brand: ``,
        pill_tags: [`Giảm đau và Hạ sốt`],
        pill_quantity: 0,
        pill_sellPrice: 8000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Tovalgan.png`],
        pill_indication: [
            `Viên nén sủi bọt Tovalgan Ef chứa Paracetamol là một chất giảm đau và hạ sốt được dùng trong các trường hợp:`,
            [
                `Các cơn đau nhẹ đến trung bình bao gồm: Nhức đầu, đau nhức do cảm lạnh hay cảm cúm, đau họng, đau do hành kinh, đau nhức cơ xương, đau sau khi tiêm ngừa hay nhổ răng, đau răng, đau trong viêm xương khớp, nhức nửa đầu.`,
                `Sốt.`,
            ],
        ],
        pill_contraindication: [
            `Thuốc Tolvagan EF chống chỉ định trong các trường hợp sau:`,
            [
                `Người bệnh nhiều lần thiếu máu hoặc có bệnh tim, phổi, thận hoặc gan.`,
                `Người bệnh quá mẫn với paracetamol.`,
                `Người bệnh thiếu hụt glucose - 6 - phosphat dehydrogenase.`,
                `Thuốc có chứa ion natri, do vậy không nên sử dụng Tovalgan EF đối với những bệnh nhân kiêng muối.`,
                `Không nên sử dụng với các thuốc khác chứa paracetamol.`,
                `Để xa tầm với của trẻ em.`,
                `Nếu các triệu chứng còn dai đẳng, hỏi ý kiến bác sĩ.`,
                `Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Steven — Jonhson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP).`,
            ],
        ],
        pill_description: [

        ],
        pill_ingredient: [``],
        pill_use: [`Hòa tan 1 - 2 viên trong ít nhất nửa cốc nước.`],
        pill_dosage: [
            `Mỗi lần dùng 1 - 2 viên cách nhau 4 giờ, dùng không quá 4g/ngày.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Paracetamol (acetaminophen hay N - acetyl - p - aminophenol) là chất chuyển hóa có hoạt tính của phenacetin, là thuốc giảm đau - hạ sốt hữu hiệu có thể thay thế aspirin; tuy vậy, khác với aspirin, paracetamol không có hiệu quả điều trị viêm. Với liều ngang nhau tính theo gam, paracetamol có tác dụng giảm đau và hạ sốt tương tự như Aspirin.`,
            `Paracetamol làm giảm thân nhiệt ở người bệnh sốt, nhưng hiếm khi làm giảm thân nhiệt ở người bình thường. Thuốc tác động lên vùng dưới đồi gây hạ nhiệt, tỏa nhiệt tăng do giãn mạch và tăng lưu lượng máu ngoại biên.`,
            `Paracetamol, với liều điều trị, ít tác động đến hệ tim mạch và hô hấp, không làm thay đổi cân bằng acid - base, không gây kích ứng, loét hoặc chảy máu dạ dày như khi dùng salicylat, vì paracetamol không tác dụng trên cyclooxygenase toàn thân, chỉ tác động đến cyclooxygenase/prostaglandin của hệ thần kinh trung ương. Paracetamol không có tác dụng trên tiểu cầu hoặc thời gian chảy máu.`,
            `Khi dùng quá liều paracetamol một chất chuyển hóa là N - acetyl – benzoquinonimin gây độc nặng cho gan. Liều bình thường, paracetamol dung nạp tốt, không có nhiều tác dụng phụ của aspirin.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Paracetamol được hấp thu nhanh chóng và hầu như hoàn toàn qua đường tiêu hóa. Nồng độ đỉnh trong huyết tương đạt trong vòng 30 đến 60 phút sau khi uống với liều điều trị.`,
            `Phân bố: Paracetamol phân bố nhanh và đồng đều trong phần lớn các mô của cơ thể. Khoảng 25% paracetamol trong máu kết hợp với protein huyết tương.`,
            'Thải trừ:: Nửa đời huyết tương của Paracetamol là 1,25 - 3 giờ, có thể kéo dài với liều gây độc hoặc ở người bệnh có thương tổn gan. Sau liều điều trị, có thể tìm thấy 90 đến 100% thuốc trong nước tiểu trong ngày thứ nhất, chủ yếu sau khi liên hợp trong gan với acid glucuronic (khoảng 60%), acid sulfuric (khoảng 35%) hoặc cystein (khoảng 3%); cũng phát hiện thấy một lượng nhỏ những chất chuyển hóa hydroxyl - hoá và khử acetyl.',
            `Trẻ nhỏ ít khả năng glucuro liên hợp với thuốc hơn so với người lớn. Paracetamol bị N - hydroxyl hóa bởi cytochrom P450 để tạo nên N - acetyl - benzoquinonimin, một chất trung gian có tính phản ứng cao. Chất chuyển hóa này bình thường phản ứng với các nhóm sulfhydryl trong glutathion và như vậy bị khử hoạt tính.`,
            `Tuy nhiên, nếu uống liều cao paracetamol, chất chuyển hóa này được tạo thành với lượng đủ để làm cạn kiệt glutathion của gan; trong tình trạng đó, phản ứng của nó với nhóm sulfhydryl của protein gan tăng lên, có thể dẫn đến hoại tử gan.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Tolvagan EF, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR > 1/100:`,
            [
                `Chưa có báo cáo.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Chưa có báo cáo.`,
            ],
            `Không xác định tần suất`,
            `Da và các phản ứng phụ: Nhạy cảm, phát ban da, mày đay.`,
            `Hô hấp: Làm nặng tình trạng co thắt phế quản đã được biết đến ở những bệnh nhân nhạy cảm với aspirin và các thuốc chống viêm non-steroid khác.`,
            'Hệ tạo máu: Loạn thể tạng.',
            `Hướng dẫn cách xử trí ADR:`,
            [
                `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
            ],
        ],
        pill_interactions: [

        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
        ],
        pill_overdose: [
            `Biểu hiện:`,
            [
                `Nhiễm độc paracetamol có thể do dùng một liều độc duy nhất, hoặc do uống lặp lại liều lớn paracetamol (ví dụ: 7,5 - 10g mỗi ngày, trong 1 - 2 ngày), hoặc do uống thuốc dài ngày. Hoại tử gan phụ thuộc liều là tác dụng độc cấp tính nghiêm trọng nhất do quá liều và có thể gây tử vong.`,
                'Buồn nôn, nôn, và đau bụng thường xảy ra trong vòng 2 - 3 giờ sau khi uống liều độc của thuốc. Methemoglobin - máu, dẫn đến chứng xanh tím da, niêm mạc và móng tay là một dấu hiệu đặc trưng nhiễm độc cấp tính dẫn chất p - aminophenol; một lượng nhỏ Sulfhemoglobin cũng có thể được sản sinh. Trẻ em có khuynh hướng tạo methemoglobin dễ hơn người lớn sau khi uống paracetamol.',
                `Khi bị ngộ độc nặng, ban đầu có thẻ có kích thích hệ thần kinh trung ương, kích động và mê sảng. Tiếp theo có thể là ức chế hệ thần kinh trung ương; sững sờ, hạ thân nhiệt; mệt lả; thở nhanh, nông; mạch nhanh, yếu, không đều; huyết áp thấp; và suy tuần hoàn.`,
                `Trụy mạch do giảm oxy huyết tương đối và do tác dụng ức chế trung tâm, tác dụng này chỉ xảy ra với liều rất lớn. Sốc có thể xảy ra nếu giãn mạch nhiều. Cơn co giật nghẹt thở gây tử vong có thể xảy ra. Thường hôn mê xảy ra trước khi chết đột ngột hoặc sau vài ngày hôn mê.`,
                `Dấu hiệu lâm sàng thương tổn gan trở nên rõ rệt trong vòng 2 đến 4 ngày sau khi uống liều độc. Aminotransferase huyết tương tăng (đôi khi tăng rất cao) và nồng độ bilirubin trong huyết tương cũng có thể tăng thêm nữa, khi thương tổn gan lan rộng, thời gian prothrombin kéo dài.`,
                `Có thể 10% người bệnh bị ngộ độc không được điều trị đặc hiệu đã có thương tổn gan nghiêm trọng; trong số đó 10% đến 20% cuối cùng chết vì suy gan. Suy thận cấp cũng xảy ra ở một số người bệnh. Sinh thiết gan phát hiện hoại tử trung tâm tiểu thùy trừ vùng quanh tĩnh mạch cửa. Ở những trường hợp không tử vong, thương tổn gan phục hồi sau nhiều tuần hoặc nhiều tháng.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [
            `Điều trị:`,
            [
                `Chẩn đoán sớm rất quan trọng trong điều trị quá liều paracetamol. Có những phương pháp xác định nhanh nồng độ thuốc trong huyết tương. Tuy vậy, không được trì hoãn điều trị trong khi chờ kết quả xét nghiệm nếu bệnh sử gợi ý là quá liều nặng. Khi nhiễm độc nặng, điều quan trọng là phải điều trị hỗ trợ tích cực. Cần rửa dạ dày trong mọi trường hợp, tốt nhất trong vòng 4 giờ sau khi uống.`,
                `Liệu pháp giải độc chính là dùng những hợp chất sulfhydryl, có lẽ tác động một phần do bổ sung dự trữ glutathion ở gan.`,
                `N-acetylcystein có tác dụng khi uống hoặc tiêm tĩnh mạch. Phải cho thuốc ngay lập tức nếu chưa đến 36 giờ kể từ khi uống paracetamol. Điều trị với N - acetylcystein có hiệu quả hơn khi cho thuốc trong thời gian dưới 10 giờ sau khi uống paracetamol.`,
                `Khi cho uống, hòa loãng dung dịch N - acetylcystein với nước hoặc đồ uống không có rượu để đạt dung dịch 5% và phải uống trong vòng 1 giờ sau khi pha. Cho uống N - acetylcystein với liều đầu tiên là 140mg/kg, sau đó cho tiếp 17 liều nữa, mỗi liều 70mg/kg cách nhau 4 giờ một lần. Chấm dứt điều trị nếu xét nghiệm paracetamol trong huyết tương cho thấy nguy cơ độc hại gan thấp.`,
                `Tác dụng không mong muốn của N - acetylcystein gồm ban da (gồm cả mày đay, không yêu cầu phải ngừng thuốc), buồn nôn, nôn, tiêu chảy, và phản ứng kiểu phản vệ.`,
                `Nếu không có N - acetylcystein, có thể dùng methionin. Ngoài ra có thể dùng than hoạt và/hoặc thuốc tẩy muối, chúng có khả năng làm giảm hấp thụ paracetamol.`,
                `Dùng Natri bicarbonat liều cao có thể gây ra các triệu chứng tại đường tiêu hóa như ợ hơi và buồn nôn. Hơn nữa Natri bicarbonat liều cao có thể gây kiềm hóa máu, cần phải theo dõi các chất điện giải đồng thời kiểm soát bệnh nhân một cách thích hợp.`,
                `Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`,
            ],
        ],
        pill_viewed: 10
    },

    //Thuốc dị ứng


    {
        pill_id: `T7653g`,
        pill_name: `Thuốc Allerphast 180mg Mebiphar điều trị viêm mũi dị ứng theo mùa, mày đay mạn tính vô căn (1 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 25000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Allerphast.png`],
        pill_indication: [
            `Allerphast được chỉ định sử dụng trong trường hợp:`,
            `Ðiều trị triệu chứng trong viêm mũi dị ứng theo mùa, mày đay mạn tính vô căn ở người lớn và trẻ em trên 6 tuổi.`,
        ],
        pill_contraindication: [
            `Allerphast chống chỉ định trong các trường hợp:`,
            `Quá mẫn với fexofenadin hoặc các thành phần khác của thuốc.`,
        ],
        pill_description: [

        ],
        pill_ingredient: [``],
        pill_use: [`Thuốc dùng đường uống.`],
        pill_dosage: [
            `Viêm mũi dị ứng:`,
            [
                `Người lớn và trẻ em trên 12 tuổi: Uống 1 viên (180 mg) x 1 lần/ngày. Tăng liều lên 2 viên x 2 lần/ngày, tuy nhiên không làm tăng thêm tác dụng điều trị.`,
                `Trẻ em từ 6 - 12 tuổi: 30 mg x 2 lần/ngày, nên dùng dạng bào chế có hàm lượng thấp hơn để phù hợp với liều này.`,
            ],
            `Mày đay mạn tính vô căn:`,
            [
                `Người lớn và trẻ em trên 12 tuổi: Uống 1 viên (180 mg) x 1 lần/ngày.`,
                `Trẻ em từ 6 - 12 tuổi: 30 mg x 2 lần/ngày, nên dùng dạng bào chế có hàm lượng thấp hơn để phù hợp với liều này.`,
            ],
            `Người suy thận:`,
            [
                'Người lớn và trẻ em trên 12 tuổi bị suy thận hay phải thẩm phân máu: Uống 1/2 viên (60 mg) x 1 lần/ngày.',
                `Trẻ em từ 6 - 12 tuổi bị suy thận: 30 mg x 1 lần/ngày, nên dùng dạng bào chế có hàm lượng thấp hơn để phù hợp với liều này.`,
            ],
            'Người suy gan:',
            [
                `Không cần điều chỉnh liều.`,
            ],
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Fexofenadin là thuốc kháng histamin thế hệ hai, có tác dụng đối kháng đặc hiệu và chọn lọc trên thụ thể H1 ngoại vi.`,
            `Thuốc là một chất chuyển hóa có hoạt tính của terfenadin, cũng cạnh tranh với histamin tại các thụ thể H1 ở đường tiêu hóa, mạch máu và đường hô hấp, nhưng không còn độc tính đối với tim do không ức chế kênh kali liên quan đến sự tái cực tế bào cơ tim.`,
            `Fexofenadin không có tác dụng đáng kể đối kháng acetylcholin, đối kháng dopamine và không có tác dụng ức chế thụ thể alpha1 hoặc beta - adrenergic.`,
            `Ở liều điều trị, thuốc không gây ngủ hay ảnh hưởng đến thần kinh trung ương. Thuốc có tác dụng nhanh và kéo dài do thuốc gắn chậm vào thụ thể H1, tạo thành phức hợp bền vững và tách ra chậm.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Thuốc hấp thu tốt khi dùng đường uống và bắt đầu phát huy tác dụng sau khi uống 60 phút. Nồng độ đỉnh trong máu đạt được sau 2 - 3 giờ. Thức ăn giàu chất béo làm giảm nồng độ đỉnh trong huyết tương khoảng 17% và kéo dài thời gian đạt nồng độ đỉnh của thuốc (đến khoảng 4h). Tác dụng kháng histamin kéo dài hơn 12 giờ.`,
            `Phân bố: Tỉ lệ liên kết với protein huyết tương của thuốc là 60 - 70%, chủ yếu với albumin và alpha1 - acid glycoprotein. Không rõ thuốc có qua nhau thai hoặc bài tiết vào sữa mẹ hay không. Fexofenadin không qua hàng rào máu - não.`,
            `Chuyển hóa: Fexofenadin rất ít bị chuyển hóa.`,
            `Thải trừ: Thời gian bán thải của fexofenadin khoảng 14,4 giờ, kéo dài hơn (31 - 72%) ở người suy thận. Thuốc thải trừ chủ yếu qua phân (xấp xỉ 80%) và nước tiểu (11 - 12%) dưới dạng không đổi.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng Allerphast 180 mg thường gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR > 1/100:`,
            [
                `Thần kinh: Buồn ngủ, mệt mỏi, đau đầu, mất ngủ, chóng mặt.`,
                `Tiêu hóa: Buồn nôn, khó tiêu.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Thần kinh: Sợ hãi, rối loạn giấc ngủ, ác mộng; khô miệng.`,
                `Tiêu hóa: Đau bụng.`,
            ],
            `Hiếm gặp, ADR < 1/1000:`,
            [
                `Da: Ban da, mày đay, ngứa.`,
                `Toàn thân: Phù mạch, tức ngực, khó thở, đỏ bừng, choáng phản vệ.`,
            ],
            `Hướng dẫn cách xử trí ADR:`,
            [
                `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
            ],
        ],
        pill_interactions: [

        ],
        pill_precautions: [``],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Thông tin về độc tính cấp của fexofenadin còn hạn chế. Tuy nhiên, buồn ngủ, chóng mặt, khô miệng đã được báo cáo.`,
                `Xử lý: Sử dụng các biện pháp thông thường để loại bỏ phần thuốc còn chưa được hấp thu ở ống tiêu hóa. Điều trị hỗ trợ và điều trị triệu chứng. Thẩm phân máu làm giảm nồng độ thuốc trong máu không đáng kể (1,7%). Không có thuốc giải độc đặc hiệu.`,
                `Trong trường hợp khẩn cấp, hãy gọi ngay cho trung tâm cấp cứu 115 hoặc đến trạm y tế địa phương gần nhất.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu quên dùng một liều thuốc, hãy uống càng sớm càng tốt khi nhớ ra. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Không dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


    {
        pill_id: `T6789w`,
        pill_name: `Viên nén Lorastad D 5mg Stella giảm viêm mũi dị ứng, mày đay (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 12000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Lorastad.png`],
        pill_indication: [`Thuốc Lorastad D điều trị làm giảm triệu chứng của: Chứng viêm mũi dị ứng và Chứng nổi mày đay.`],
        pill_contraindication: [
            `Thuốc Lorastad D chống chỉ định trong trường hợp sau:`,
            [`Quá mẫn với desloratadine, loratadine hoặc với bất kỳ thành phần nào của thuốc.`,],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Lorastad D được chỉ định dùng đường uống. Thuốc có thể được uống cùng hoặc không cùng với thức ăn.`],
        pill_dosage: [
            `Người lớn và trẻ từ 12 tuổi trở lên: Liều dùng khuyến cáo của Lorastad D là 1 viên x 1 lần/ngày.`,
            `Viêm mũi dị ứng không liên tục (triệu chứng xuất hiện < 4 ngày/tuần hoặc < 4 tuần) cần được điều trị kết hợp với việc đánh giá tiền sử bệnh của người bệnh và phải ngưng điều trị nếu triệu chứng bệnh dai dẳng và tái lại.`,
            `Viêm mũi dị ứng kéo dài (triệu chứng xuất hiện > 4 ngày/tuần và kéo dài > 4 tuần), việc điều trị có thể tiếp tục đối với những bệnh nhân trong giai đoạn tiếp xúc với dị ứng nguyên.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Desloratadine là chất kháng histamin tác dụng kéo dài, không an thần, có hoạt tính đối kháng chọn lọc thụ thể H1 ngoại biên. Sau khi dùng liều uống, desloratadine ngăn chặn thụ thể histamin H1 ngoại biên một cách chọn lọc vì desloratadine không thấm vào hệ thần kinh trung ương.`,
            `Tác dụng chống dị ứng của desloratadine bao gồm khả năng ngăn chặn sự phóng thích của cytokin gây viêm như IL-4, IL-6, IL-8, và IL-13 trong tế bào mast hoặc bạch cầu ưa kiềm trong cơ thể người, đồng thời ngăn chặn sự gắn kết phân tử P-selectin lên tế bào nội mô.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu:`,
            [
                `Sau khi dùng liều uống desloratadine 5 mg x 1 lần/ngày trong 10 ngày trên những người tình nguyện khỏe mạnh cho thấy thời gian trung bình để đạt nồng độ tối đa trong huyết tương (Tmax) khoảng 3 giờ.`,
                `Nồng độ đỉnh trong huyết tương ở trạng thái ổn định (Cmax) và diện tích dưới đường cong nồng độ - thời gian (AUC) lần lượt là 4 ng/ml và 56,9 ng.giờ/ml. Thức ăn hoặc nước ép bưởi đều không ảnh hưởng lên sinh khả dụng (Cmax  và AUC) của desloratadine.`,
            ],
            `Phân bố: Desloratadine và 3-hydroxydesloratadine gắn kết với protein huyết tương lần lượt khoảng 82 - 87% và 85 - 89%. Khả năng gắn kết với protein huyết tương của desloratadine và 3-hydroxydesloratadine không thay đổi ở người bị suy chức năng thận.`,
            `Chuyển hóa:`,
            [
                `Desloratadine (một chất chuyển hóa chính của loratadine) được chuyển hóa mạnh thành 3-hydroxydesloratadine, một chất chuyển hóa có hoạt tính, chất này sau đó được glucuronic hóa. Chưa xác định được enzym đảm nhiệm việc hình thành 3-hydroxydesloratadine.`,
                `Thông tin từ các thử nghiệm lâm sàng cho thấy một bộ phận nhỏ dân số có khả năng hạn chế trong việc tạo thành 3- hydroxydesloratadine và sự chuyển hóa desloratadine ở những người này thấp.`,
            ],
            'Thải trừ:',
            [
                `Thời gian bán thải trung bình của desloratadine là khoảng 27 giờ. Giá trị Cmax và AUC tăng theo tỉ lệ liều uống duy nhất trong khoảng 5 - 20 mg. Mức độ tích lũy sau 14 ngày dùng thuốc vẫn giữ ổn định về thời gian bán thải và tần suất liều dùng.`,
                `Một nghiên cứu về độ cân bằng khối lượng ở người cho thấy khả năng phục hồi của liều 14C-desloratadine khoảng 87%, tương đương với việc phân bố vào nước tiểu và phân như một sản phẩm chuyển hóa. Phân tích 3-hydroxydesloratadine huyết tương cho giá trị Tmax và thời gian bán thải tương tự so với desloratadine.`,
            ],
        ],
        pill_sideEffects: [
            `Thường gặp, ADR >1/100:`,
            [
                `Rối loạn chung: Mệt mỏi.`,
                `Hệ tiêu hóa: Khô miệng.`,
                `Hệ thần kinh: Đau đầu.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Chưa có báo cáo.`,
            ],
            `Hiếm gặp, ADR < 1/1000:`,
            [
                `Tâm thần: Bệnh ảo giác`,
                `Hệ thần kinh: Chóng mặt, ngủ gà, mất ngủ, tăng động do tâm thần vận động, co giật.`,
                `Hệ tim mạch: Tim đập nhanh, đánh trống ngực.`,
                `Hệ tiêu hóa: Đau bụng, buồn nôn, nôn mửa, khó tiêu, tiêu chảy.`,
                `Hệ gan mật: Tăng enzym gan, tăng sắc tố mật, viêm gan.`,
                `Hệ cơ xương và mô liên kết: Đau cơ.`,
                `Rối loạn chung: Các phản ứng nhạy cảm (như chứng quá mẫn, phù mạch, khó thở, ngứa, phát ban và nổi mày đay).`,
            ],
            `Hướng dẫn cách xử trí ADR:`,
            [
                `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
            ],
        ],
        pill_interactions: [
            `Không có báo cáo lâm sàng nào liên quan đến tương tác thuốc trong các thử nghiệm lâm sàng của desloratadine khi dùng đồng thời với erythromycin hoặc ketoconazol.`,
            `Trong một thử nghiệm lâm sàng về dược lý, khi dùng đồng thời desloratadine với rượu, không có khả năng làm suy yếu ảnh hưởng của rượu.`,
        ],
        pill_precautions: [
            `Tính an toàn và hiệu quả của desloratadine ở trẻ em dưới 12 tuổi chưa được thiết lập.`,
            `Trong trường hợp suy thận nặng, nên thận trọng khi dùng desloratadine.`,
        ],
        pill_overdose: [
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [
            `Làm gì khi dùng quá liều?`,
            [
                `Trong trường hợp quá liều, xem xét việc sử dụng các biện pháp chuẩn để loại bỏ lượng hoạt chất không được hấp thu. Khuyến cáo sử dụng các biện pháp điều trị triệu chứng và điều trị hỗ trợ. Trong một thử nghiệm lâm sàng liều cao, sử dụng liều uống 45 mg desloratadine (gấp 9 lần liều khuyến cáo), không nhận thấy phản ứng quá liều nào.`,
                `Desloratadine không được loại trừ bởi thẩm tách máu, chưa được biết thuốc có được loại trừ bởi thấm tách màng bụng hay không.`,
            ],
        ],
        pill_viewed: 10
    },


    {
        pill_id: `O9876r`,
        pill_name: `Thuốc Cetirizin 10mg Trường Thọ trị ngứa ngoài da do dị ứng (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 4000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Thuốc_chống_dị_ứng_-_Cetirizin.png`],
        pill_indication: [
            `Thuốc Cetirizin 10mg Trường Thọ được chỉ định điều trị triệu chứng viêm mũi dị theo mùa hoặc không theo mùa, các bệnh ngứa ngoài da do dị ứng, nổi mề đay mãn tính, bệnh viêm kết mạc dị ứng.`,
        ],
        pill_contraindication: [
            `Thuốc Cetirizin 10mg Trường Thọ chống chỉ định trong các trường hợp quá mẫn với thành phần của thuốc hoặc với hydroxyzin.`,
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Dùng đường uống.`,],
        pill_dosage: [
            `Cetirizin 10mg được dùng đường uống, hàm lượng và dạng bào chế phù hợp dùng cho trẻ em trên 6 tuổi. Mặc dù thức ăn có thể làm giảm nồng độ đỉnh trong máu và kéo dài thời gian đạt nồng độ đỉnh, nhưng không ảnh hưởng đến mức hấp thụ thuốc, cho nên có thể uống cùng hoặc ngoài bữa ăn.`,
            `Người lớn và trẻ em từ 6 tuổi trở lên: Uống 1 viên 10 mg/ngày.`,
            `Người bệnh có chức năng thận suy giảm (độ thanh thải creatinin là 11 - 31 ml/phút) người bệnh đang thẩm tích máu (độ thanh thải creatinin < 7 ml/phút) và bệnh nhân suy gan: Liều cần là 5 mg/lần/ngày.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Cetirizin là thuốc kháng histamin mạnh có tác dụng chống dị ứng, nhưng không gây buồn ngủ ở liều dược lý. Cetirizin có tác dụng đối kháng chọn lọc ở thụ thể H1, nhưng hầu như không có tác dụng đến các thụ thể khác, do vậy hầu như không có tác dụng đối kháng acetylcholin và không có tác dụng đối kháng serotonin. Cetirizin ức chế giai đoạn sớm của phản ứng dị ứng qua trung gian histamin và cũng làm giảm sự di dời của các tế bào viêm và giảm giải phóng các chất trung gian ở giai đoạn muộn của phản ứng dị ứng.`,
        ],
        pill_pharmacokinetics: [
            `Nồng độ đỉnh trong máu ở mức 0,3 microgam/ml sau 30 đến 60 phút khi uống 1 liều 10 mg. Nửa đời huyết tương xấp xỉ 11 giờ. Hấp thu thuốc không thay đổi giữa các cá thể.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Cetirizin 10mg Trường Thọ, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR > 1/100:`,
            [
                `Hay gặp nhất là hiện tượng ngủ gà. Tỉ lệ gây nên phụ thuộc vào liều dùng. Ngoài ra thuốc còn gây mệt mỏi, khô miệng, viêm họng, chóng mặt, nhức đầu, buồn nôn.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Chán ăn hoặc tăng thèm ăn, bí tiểu, đỏ bừng, tăng tiết nước bọt.`,
            ],
            `Hiếm gặp, ADR < 1/1000:`,
            [
                `Thiếu máu tan máu, giảm tiểu cầu, hạ huyết áp nặng, choáng phản vệ, viêm gan, ứ mật, viêm cầu thận.`,
            ],
        ],
        pill_interactions: [`Đến nay chưa thấy tương tác đáng kể với các thuốc khác. Độ thanh thải cetirizin giảm nhẹ khi uống cùng 400 mg theophylin.`,],
        pill_precautions: [
            `Lưu ý:`,
            [`Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,],
            'Thận trọng khi sử dụng:',
            [
                `Cần phải điều chỉnh liều ở người suy thận vừa hoặc nặng và người đang thẩm phân thận nhân tạo. `,
                `Cần điều chỉnh liều ở người suy gan.`,
                `Khả năng lái xe và vận hành máy móc: Ở một số người bệnh sử dụng Cetirizin có hiện tượng ngủ gà do vậy nên thận trọng khi lái xe, hoặc vận hành máy, vì dễ gây nguy hiểm.`,
                `Thời kỳ mang thai: Tuy cetirizin không gây quái thai ở động vật, nhưng không có những nghiên cứu đầy đủ trên người mang thai, cho nên không nên dùng khi có thai.`,
                `Thời kỳ cho con bú: Cetirizin bài tiết qua sữa, vì vậy người cho con bú không nên dùng.`,
            ],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Triệu chứng của quá liều: Ngủ gà ở người lớn; ở trẻ em có thể bị kích động. Khi quá liều nghiêm trọng cần gây nôn và rửa dạ dày cùng với các phương pháp hỗ trợ. Đến nay, chưa có thuốc giải độc đặc hiệu.`,
                `Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [
            `Hướng dẫn cách xử trí ADR`,
            [
                `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
            ],
        ],
        pill_viewed: 10
    },


    {
        pill_id: `Y7649r`,
        pill_name: `Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị ứng, mày đay (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 20000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Exopadin.png`],
        pill_indication: [`Thuốc Exopadin chỉ định điều trị trong các trường hợp sau:`,],
        pill_contraindication: [
            `Thuốc Exopadin chống chỉ định trong các trường hợp sau:`,
            `Bệnh nhân có tiền sử dị ứng với bất kỳ thành phần nào của thuốc.`,
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc dùng đường uống với nước và trước bữa ăn. Không uống thuốc với nước hoa quả (như cam, bưởi, táo).`,],
        pill_dosage: [
            `Người lớn và trẻ em từ 12 tuổi trở lên: Liều khuyên dùng là 60mg x 2 lần/ngày hoặc 180mg/1 lần/ngày`,
            `Người suy thận: Liều khởi đầu khuyên dùng là 60mg fexofenadin hydroclorid mỗi ngày.`,
            `Người suy gan: Không cần điều chỉnh liều.`,
            `Người cao tuổi: Không cần điều chỉnh liều, ngoại trừ có suy giảm chức năng thận.`,
            `Lưu ý: Không có yêu cầu đặc biệt về xử lý thuốc sau khi sử dụng. Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Nhóm trị liệu: Kháng histamin hệ thống`,
            `Mã ATC: R06A X26`,
            `Fexofenadin là thuốc kháng histamin thế hệ hai, có tác dụng đối kháng đặc hiệu và chọn lọc trên thụ thể histamin H1 ngoại biên. Fexofenadin là chất chuyển hóa có hoạt tính của terfena dine nhưng không còn độc tính đối với tim do không ức chế kênh kali liên quan đến sự tái cực tế bào cơ tim. Fexofenadin không có tác dụng đáng kể kháng cholinergic hoặc dopami - nergic và không có tác dụng ức chế thụ thể alpha - 1 hoặc beta adrenergic. Ở liều điều trị, fexofenadin không gây buồn ngủ hay ảnh hưởng đến hệ thần kinh trung ương. Thuốc có tác dụng nhanh và kéo dài.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Fexofenadin được hấp thu tốt khi dùng đường uống và bắt đầu phát huy tác dụng sau khi uống 60 phút. Nồng độ đỉnh trong huyết tương đạt được sau 2 - 3 giờ. Việc sử dụng đồng thời fexofenadin với chế độ ăn nhiều chất béo làm giảm AUC và Cmax của fexofenadin lần lượt là 21% và 20%.`,
            `Phân bố: Khoảng 60 - 70% fexofenadin gắn kết với protein huyết tương chủ yếu với albumin và alpha-1 acid glycoprotein. Không rõ thuốc có qua nhau thai hoặc bài tiết vào sữa mẹ hay không. Fexofenadin không qua hàng rào máu não.`,
            `Chuyển hóa: Fexofenadin rất ít bị chuyển hóa (khoảng 5%, chủ yếu ở niêm mạc ruột. Chỉ khoảng 0,5 - 1,5% liều dùng được chuyển hóa ở gan nhờ hệ enzyme cytochrome P450 thành chất không có hoạt tính).`,
            `Thải trừ: Thời gian bán thải trung bình của fexofenadin khoảng 14,4 giờ, kéo dài hơn (31 - 72%) ở người suy thận. Thuốc được thải trừ dưới dạng không đổi chủ yếu qua phân khoảng 80%, và 11% qua nước tiểu.`,
            `Đối tượng đặc biệt: Dược động học ở các đối tượng đặc biệt (đối với người suy thận, suy gan và cao tuổi), thu được sau một liều duy nhất 80 ma fexofenadin hydroclorid, được so sánh với những người tình nguyện khỏe mạnh trong một nghiên cứu riêng biệt của thiết kế tương tự.`,
            [
                `Người cao tuổi: Ở người cao tuổi (> 65 tuổi), nồng độ đỉnh của fexofenadin trong huyết tương lớn hơn 99% so với những những đối tượng trẻ hơn (< 65 tuổi). Thời gian bán thải của fexofenadin ở người cao tuổi tương tự như ở người trẻ hơn.`,
                `Trẻ em: So sánh nghiên cứu chéo chỉ ra rằng diện tích dưới đường cong (AUC) fexofenadin sau khi uống một liều 60 mg fexofenadin hydroclorid ở trẻ 7 - 12 tuổi bị viêm mũi dị ứng cao hơn 56% so với tình nguyện viên trưởng thành khỏe mạnh cho cùng một liều lượng. Nồng độ thuốc trong huyết tương ở đối tượng trẻ em khi uống 30mg fexofenadin hydroclorid tương đương với người lớn được uống 60 mg fexofenadin hydroclorid.`,
                `Suy thận: Ở những người có mức độ suy thận nhẹ đến trung bình (độ thanh thải creatinin 41 - 80 ml/phút) và suy thận nặng (độ thanh thải creatinin 11 - 40 ml/phút), nồng độ đỉnh fexofenadin trong huyết tương lần lượt lớn hơn 87% và 111% và thời gian bán thải trung bình lần lượt dài hơn 59% và 72% so với quan sát thấy ở những người tình nguyện khỏe mạnh. Nồng độ đỉnh trong huyết tương ở đối tượng chạy thận nhân tạo (độ thanh thải creatinin ≤ 10 ml/phút) lớn hơn 82% và thời gian bán thải là 31% lâu hơn so với quan sát ở những người tình nguyên khỏe mạnh. Dựa trên sự gia tăng sinh khả dụng và thời gian bán thải, liều 60 mg mỗi ngày một lần được khuyến cáo là liều khởi đầu ở bệnh nhân suy thận.`,
                `Suy gan: Dược động học của fexofenadin ở những đối tượng mắc bệnh gan không khác biệt đáng kể so với quan sát thấy ở những tình nguyện viên khỏe mạnh.`,
                `Giới tính: Qua nhiều thử nghiệm, không có sự khác biệt đáng kể về mặt lâm sàng liên quan đến giới tính được quan sát trong dược động học của fexofenadin hydroclorid.`,
            ],
            `Nghiên cứu lâm sàng:`,
            [
                `Viêm mũi dị ứng theo mùa: Trong nghiên cứu lâm sàng ngẫu nhiên, mù đôi, đa trung tâm, kéo dài 2 tuần trên bệnh nhân từ 12 đến 65 tuổi bị viêm mũi dị ứng theo mùa (n = 863), dùng fexofenadin hydroclorid 180mg 1 lần mỗi ngày làm giảm đáng kể tổng điểm số triệu chứng (cộng các điểm số của từng triệu chứng hắt hơi, sổ mũi, ngứa mũi - hầu - họng, mắt đỏ - ngứa - chảy nước mắt) so với giả dược. Mặc dù số bệnh nhân còn ít trong một vài phân nhóm bệnh nhân được phân chia theo giới tính, độ tuổi và chủng tộc.`,
                `Mày đay vô căn mạn tính: Trong nghiên cứu đối chứng giả dược, ngẫu nhiên, mù đôi, đa trung tâm, kéo dài 4 tuần trên bệnh nhân từ 12 tuổi trở lên bị mày đay vô căn mạn tính (n=259), dùng fexofenadin hydroclorid 180 mg 1 lần mỗi ngày làm giảm đáng kể số lượng trung bình của dát mày đay (MNW), điểm số trung bình triệu chứng ngứa (MPS), và trung bình tổng điểm số triệu chứng (tổng của MNW và MPS). Đối với MNW và MPS được ghi nhận giảm đều nhau vào cuối thời điểm của khoảng liều dùng 24 giờ. Giảm triệu chứng nhiều hơn trong nhóm dùng fexofenadin hydroclorid 180mg so với nhóm dùng giả dược. Cải thiện triệu chứng được chứng minh trong 1 ngày điều trị bằng fexofenadin hydroclorid 180mg và được duy trì suốt 4 tuần điều trị. Không có sự khác biệt đáng kể về hiệu quả của fexofenadin giữa các phân nhóm bệnh nhân được phân chia theo giới tính, độ tuổi và chủng tộc.`,
            ],
        ],
        pill_sideEffects: [
            `Các nghiên cứu lâm sàng có đối chứng với giả dược cho thấy tỷ lệ tác dụng không mong muốn ở nhóm người bệnh dùng fexofenadin tương tự như ở nhóm dùng giả dược. Các tác dụng không mong muốn của thuốc không bị ảnh hưởng bởi liều dùng, tuổi, giới tính và chủng tộc của bệnh nhân.`,
            `Thường gặp: (>1/100, <1/10):`,
            [
                `Thần kinh: Buồn ngủ (1,3 - 2,2%), mệt mỏi, đau đầu, mất ngủ, chóng mặt.`,
                `Tiêu hóa: Buồn nôn, khó tiêu.`,
                `Khác: Dễ bị nhiễm siêu vi (cảm, cúm), đau bụng kinh, dễ bị nhiễm khuẩn hô hấp trên, ngứa họng, ho, sốt, viêm tai giữa, viêm xoang, đau lưng.`,
            ],
            `Ít gặp: (> 1/1000, < 1/100):`,
            [
                `Thần kinh: Sợ hãi, rối loạn giấc ngủ, ác mộng.`,
                `Tiêu hóa: Khô miệng, đau bụng.`,
            ],
            `Hiếm gặp < (1/1000):`,
            [
                `Da: Ban da, mày đay, ngứa.`,
                `Phản ứng quá mẫn: Phù mạch, tức ngực, khó thở, đỏ bừng, choáng phản vệ.`,
            ],
            `Không rõ tần suất (không thể ước tính từ dữ liệu hiện có):`,
            [
                `Tim mạch: Tăng nhịp tim, hồi hộp.`,
                `Tiêu hóa: Tiêu chảy.`,
            ],
            `Ghi chú: Thông báo ngay cho bác sĩ hoặc dược sỹ những tác dụng không mong muốn khi sử dụng thuốc.`,
        ],
        pill_interactions: [
            `Erythromycin và ketoconazol làm tăng nồng độ fexofenadin trong huyết tương nhưng không làm thay đổi khoảng QT. Không có sự khác biệt về tác dụng không mong muốn được báo cáo khi các thuốc này được dùng riêng lẻ hoặc phối hợp. Thuốc kháng acid chứa nhôm và magnesi nếu dùng đồng thời với fexofenadin sẽ làm giảm hấp thụ thuốc, vì vậy phải dùng các thuốc này cách nhau khoảng 2 giờ.`,
            `Không ghi nhận có tương tác giữa fexofenadin và omeprazole. Nồng độ fexofenadin có thể bị tăng do verapamil, các chất ức chế p-glycoprotein.`,
            `Fexofenadin có thể làm tăng nồng độ cồn, các chất an thần hệ thần kinh trung ương, các chất kháng cholinergic. Tránh dùng fexofenadin với rượu vì làm tăng nguy cơ an thần (ngủ).`,
            `Fexofenadin có thể làm giảm nồng độ các chất ức chế acetyl- cholinesterase (ở thần kinh trung ương), betahistin.`,
            `Fexofenadin có thể bị giảm nồng độ bởi các chất ức chế acetyl - cholinesterase (ở thần kinh trung ương), amphetamine, các chất kháng acid, nước ép quả bưởi, rifampicin.`,
            `Nước hoa quả (cam, bưởi, táo) có thể làm giảm sinh khả dụng của fexofenadin đến 36%.`,
            `Tương kỵ: Do không có các nghiên cứu về tính tương kỵ của thuốc, không trộn lẫn thuốc này với các thuốc khác.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,

            `Thuốc có chứa lactose cần thận trọng khi kê thuốc này cho những bệnh nhân với các bệnh lý di truyền hiếm gặp về dung nạp galactose, thiếu enzym Lapp lactase hoặc rối loạn hấp thu glucose-galactose.`,
            `Cần thận trọng và điều chỉnh liều thích hợp khi dùng thuốc cho người có chức năng thận suy giảm vì nồng độ thuốc trong huyết tương tăng do thời gian bán thải kéo dài.`,
            `Cần thận trọng khi dùng thuốc cho người cao tuổi (trên 65 tuổi) thường có suy giảm sinh lý chức năng thận.`,
            `Độ an toàn và tính hiệu quả của thuốc chưa được đánh giá trên trẻ em dưới 12 tuổi.`,
            `Không tự ý dùng thêm thuốc kháng histamin H1 khác khi đang sử dụng Exopadin.`,
            `Cần ngưng Exopadin ít nhất 24 - 48 giờ trước khi tiến hành các thử nghiệm kháng nguyên tiêm trong da.`,
            `Dùng Exopadin làm bệnh vảy nến tăng lên.`,
            `Sử dụng thuốc cho phụ nữ trong thời kỳ mang thai và cho con bú:`,

            `Phụ nữ có thai`,
            [
                `Tác động gây quái thai: Loại C. Không có bằng chứng về khả năng gây quái thai ở chuột hoặc thỏ với liều terfenadine đường uống lên tới 300 mg/kg (dẫn đến phơi nhiễm fexofenadin gấp khoảng 3 và 30 lần, tương ứng với mức độ phơi nhiễm từ liều tối đa được khuyến cáo hàng ngày ở người là 180mg fexofenadin hydroclorid dựa trên so sánh AUC)`,
                `Ở chuột, không thấy tác dụng phụ và tác dụng gây quái thai khi mang thai sử dụng với liều lên tới 3730 mg/kg (gấp khoảng 15 lần liều fexofenadin hydroclorid tối đa được khuyến cáo ở người hàng ngày là 180 mg fexofenadin hydroclorid dựa trên so sánh AUC).`,
                `Không có dữ liệu đầy đủ về sử dụng fexofenadin hydroclorid ở phụ nữ có thai. Không nên dùng fexofenadin hydroclorid trong thời kỳ mang thai, chỉ dùng thuốc nếu lợi ích vượt trội so với nguy cơ tiềm ẩn đối với thai nhi,`,
                `Tác động không gây quái thai: Giảm liều liên quan đến tăng cân và tỷ lệ sống sót được quan sát thấy ở những con chuột tiếp xúc với liều 150 mg/kg terfenadine đường uống (gấp khoảng 3 lần liều fexofenadin hydroclorid tối đa được khuyến cáo hàng ngày ở người là 180 mg fexofenadin hydroclorid dựa trên so sánh AUC).`,
            ],
            `Phụ nữ cho con bú:`,
            [
                `Không có dữ liệu về thành phần của sữa mẹ sau khi dùng fexofenadin hydroclorid. Tuy nhiên, khi dùng terfenadine trong thời kỳ cho con bú thì fexofenadin hydroclorid được thấy có trong sữa mẹ. Cho nên fexofenadin hydroclorid được khuyến cáo không nên dùng trong thời kỳ cho con bú.`,
            ],
            `Khả năng sinh sản:`,
            [
                'Không có dữ liệu của con người về tác dụng của fexofenadin hydroclorid đối với khả năng sinh sản. Ở chuột, không có ảnh hưởng đến khả năng sinh sản với điều trị bằng fexofenadin hydroclorid.',
            ],

            `Ảnh hưởng của thuốc lên khả năng lái xe và vận hành máy móc:`,
            [
                `Căn cứ vào đặc tính dược lực học và các báo cáo về tác dụng không mong muốn, fexofenadin hydroclorid ít có khả năng ảnh hưởng đến khả năng lái xe hoặc vận hành máy móc. Trong các thử nghiệm khách quan, fexofenadin hydroclorid đã được chứng minh là không có tác dụng đáng kể đối với chức năng hệ thần kinh trung ương. Điều này có nghĩa là bệnh nhân có thể lái xe hoặc thực hiện các nhiệm vụ đòi hỏi sự tập trung. Tuy nhiên, để xác định những người nhạy cảm có phản ứng bất thường với thuốc, nên kiểm tra phản ứng cá nhân trước khi lái xe hoặc thực hiện các nhiệm vụ phức tạp.`,
            ],

        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Các báo cáo về quá liều của fexofenadin ít gặp và thông tin về độc tính cấp còn hạn chế. Tuy nhiên, buồn ngủ, chóng mặt, khô miệng đã được báo cáo. Liều dùng fexofenadin hydroclorid lên đến 800mg (6 tình nguyện viên khỏe mạnh ở mức liều này) và liều tới 690mg hai lần mỗi ngày trong 1 tháng (3 tình nguyện viên khỏe mạnh ở mức liều này) hoặc 240mg mỗi ngày một lần trong 1 năm (234 tình nguyện viên khỏe mạnh ở mức liều này) đã được sử dụng mà không phát triển các tác dụng phụ có ý nghĩa lâm sàng so với giả dược.`,
                `Không có trường hợp tử vong nào xảy ra với liều uống fexofenadin hydroclorid lên tới 5000 mg/kg ở chuột (gấp 110 lần liều uống khuyến cáo tối đa hàng ngày ở người lớn và 200 lần so với liều uống khuyến cáo tối đa hàng ngày ở trẻ em dựa trên mg/m2) và lần tới 5000 mg/kg ở chuột (gấp 230 lần liều uống khuyến cáo tối đa hàng ngày ở người lớn và 400 lần so với liều uống khuyến cáo tối đa hàng ngày ở trẻ em dựa trên mg/m2). Ngoài ra, không có dấu hiệu lâm sàng về độc tính hoặc phát hiện bệnh lý tổng quát được quan sát. Ở chó, không có bằng chứng về độc tính được quan sát ở liều uống lên tới 2000 mg/kg (gấp 300 lần liều uống khuyến cáo tối đa hàng ngày ở người lớn và gấp 530 lần liều uống khuyến cáo tối đa ở người hàng ngày ở trẻ em dựa trên mg/m2).`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Bổ sung liều ngay khi nhớ ra. Tuy nhiên, nếu thời gian giãn cách với liều tiếp theo quá ngắn thì bỏ qua liều đã quên và tiếp tục lịch dùng thuốc. Không dùng liều gấp đôi để bù cho liều đã bị bỏ lỡ.`,
            ],
        ],
        pill_overdose_handling: [
            `Xử trí: Trong trường hợp quá liều sử dụng các biện pháp thông thường để loại bỏ phần thuốc còn chưa được hấp thu ở ống tiêu hóa. Điều trị triệu chứng và điều trị hỗ trợ được khuyến khích. Lọc máu làm giảm nồng độ thuốc trong máu không đáng kể (1,7%). Không có thuốc giải độc đặc hiệu.`,
            `Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`,
        ],
        pill_viewed: 10
    },


    {
        pill_id: `R6793f`,
        pill_name: `Thuốc Telfast Kids 30mg Sanofi điều trị viêm mũi dị ứng, mày đay cho trẻ em (1 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 28000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Telfast_Kids.png`],
        pill_indication: [
            `Thuốc Telfast Kids dùng riêng cho trẻ em từ 6 đến 11 tuổi được chỉ định trong các trường hợp sau:`,
            [
                `Điều trị viêm mũi dị ứng theo mùa.`,
                `Điều trị các biểu hiện ngoài da không biến chứng của mày đay vô căn mạn tính. Thuốc làm giảm ngứa và số lượng dát mày đay một cách đáng kể.`,
            ],
        ],
        pill_contraindication: [
            `Telfast Kids bị chống chỉ định trên bệnh nhân có tiền sử dị ứng với bất cứ thành phần nào của thuốc. Viên Telfast Kids không khuyên dùng cho trẻ dưới 6 tuổi vì nguy cơ bị hốc.`,
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc dùng thường uống với nước và trước bữa ăn. Không uống thuốc với nước hoa quả (như cam, bưởi, táo).`,],
        pill_dosage: [
            `Trẻ em từ 6 đến 11 tuổi: Liều khuyên dùng của Telfast Kids là 1 viên/lần x 2 lần mỗi ngày.`,
            `Trẻ em bị suy thận: Liều khởi đầu khuyên dùng là 1 viên/ ngày.`,
            `Bệnh nhi suy gan: Không cần điều chỉnh liều.`,
            `Tính hiệu quả của fexofenadin trên trẻ dưới 6 tuổi vẫn chưa được xác định.`,
            `Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Thuốc Telfast Kids có chứa hoạt chất fexofenadin - thuốc kháng histamin thế hệ hai, có tác dụng đối kháng đặc hiệu và chọn lọc trên thụ thể histamin H1 ngoại biên.`,
            `Fexofenadin là chất chuyển hóa có hoạt tính của terfenadin nhưng không còn độc tính đối với tim do không ức chế kênh kali liên quan đến sự tái cực tế bào cơ tim.`,
            `Fexofenadin không có tác dụng đáng kể kháng cholinergic hoặc dopaminergic và không có tác dụng ức chế thụ thể alpha-1 hoặc beta adrenergic. Ở liều điều trị, fexofenadin không gây buồn ngủ hay ảnh hưởng đến hệ thần kinh trung ương. Thuốc có tác dụng nhanh và kéo dài.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Fexofenadin được hấp thu tốt khi dùng đường uống và bắt đầu phát huy tác dụng sau khi uống 60 phút. Nồng độ đỉnh trong huyết tương đạt được sau 2-3 giờ. Việc sử dụng đồng thời fexofenadin với chế độ ăn nhiều chất béo làm giảm AUC và Cmax của fexofenadin lần lượt là 21% và 20%.`,
            `Phân bố: Khoảng 60-70% fexofenadin gắn kết với protein huyết tương, chủ yếu với albumin và alpha-1 acid glycoprotein. Thuốc không qua hàng rào máu não. Không rõ thuốc có qua nhau thai hoặc bài tiết vào sữa mẹ hay không.`,
            `Chuyển hóa: Fexofenadin rất ít bị chuyển hóa (khoảng 5%, chủ yếu ở niêm mạc ruột. Chỉ khoảng 0,5-1,5% liều dùng được chuyển hóa ở gan nhờ hệ enzym cytochrom P450 thành chất không có hoạt tính).`,
            `Thải trừ: Thuốc được thải trừ dưới dạng không đổi chủ yếu qua phân khoảng 80%, và 11% qua nước tiểu. Thời gian bán thải trung bình của fexofenadin khoảng 14,4 giờ, kéo dài hơn (31-72%) ở người suy thận.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc nhỏ mắt Telfast Kids , bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR >1/100:`,
            [
                `Thần kinh: Buồn ngủ , mệt mỏi, đau đầu, mất ngủ, chóng mặt.`,
                `Tiêu hóa: Buồn nôn, khó tiêu.`,
                `Khác: Dễ bị nhiễm siêu vi (cảm, cúm), đau bụng kinh, dễ bị nhiễm khuẩn hô hấp trên, ngứa họng, ho, sốt, viêm tai giữa, viêm xoang, đau lưng.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Thần kinh: Sợ hãi, rối loạn giấc ngủ, ác mộng.`,
                `Tiêu hóa: Khô miệng, đau bụng.`,
            ],
        ],
        pill_interactions: [
            `Erythromycin và ketoconazol làm tăng nồng độ fexofenadin trong huyết tương nhưng không làm thay đổi khoảng QT. Không có sự khác biệt về tác dụng không mong muốn được báo cáo khi các thuốc này được dùng riêng lẻ hoặc phối hợp.`,
            `Thuốc kháng acid chứa nhôm và magnesi nếu dùng đồng thời với fexofenadin sẽ làm giảm hấp thu thuốc, vì vậy phải dùng các thuốc này cách nhau khoảng 2 giờ.`,
            `Nồng độ fexofenadin có thể bị tăng do verapamil, các chất ức chế p-glycoprotein.`,
            `Fexofenadin có thể làm tăng nồng độ cồn, các chất an thẩn hệ thẩn kinh trung ương, các chất kháng cholinergic. Tránh dùng fexofenadin với rượu vì làm tăng nguy cơ an thần (ngủ).`,
            `Fexofenadin có thể làm giảm nồng độ các chất ức chế acetylcholoinesterase (ở thần kinh trung ương), betahistin.`,
            `Fexofenadin có thể bị giảm nồng độ bởi các chất ức chế acetylcholinesterase (ở thần kinh trung ương), amphetamin, các chất kháng acid, nước ép quả bưởi, rifampin.`,
            `Nước hoa quả (cam, bưởi, táo) có thể làm giảm sinh khả dụng của fexofenadin đến 36%.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            'Thận trọng khi sử dụng:',

            `Cần thận trọng và điều chỉnh liều thích hợp khi dùng thuốc cho người có chức năng thận suy giảm vì nồng độ thuốc trong huyết tương tăng do thời gian bán thải kéo dài.`,
            `Cần thận trọng khi dùng cho người bị bệnh tim, vì thuốc này có thể dẫn đến nhịp tim nhanh hoặc bất thường.`,
            `Không tự ý dùng thêm thuốc kháng histamin H1 khác khi đang sử dụng fexofenadine do độ an toàn và tính hiệu quả của fexofenadin chưa được đánh giá trên trẻ em dưới 6 tuổi.`,
            `Cần ngưng fexofenadin ít nhất 24-48 giờ trước khi tiến hành các thử nghiệm kháng nguyên tiêm trong da. Dùng fexofenadin làm bệnh vẩy nến tăng lên.`,
            `Khả năng lái xe và vận hành máy móc:`,
            [`Không có.`],
            `Thời kỳ mang thai và cho con bú:`,
            [`Không có.`],
            `Thời kỳ cho con bú:`,
            [`Không có.`],

        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Triệu chứng quá liều của fexofenadin ít gặp và thông tin về độc tính cấp còn hạn chế. Tuy nhiên, buồn ngủ, chóng mặt, mệt mỏi và khô miệng đã được báo cáo.`,
                `Cách xử trí: Sử dụng các biện pháp thông thường để loại bỏ phần thuốc còn chưa được hấp thu ở ống tiêu hóa. Điều trị triệu chứng và nâng đỡ tổng trạng. Lọc máu làm giảm nồng độ thuốc trong máu không đáng kể (1,7%). Không có thuốc giải độc đặc hiệu.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu quên dùng một liều thuốc Telfast, hãy uống càng sớm càng tốt khi nhớ ra. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và uống liều kế tiếp vào thời điểm như kế hoạch. Không uống gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [
            `Hướng dẫn cách xử trí ADR:`,
            `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
        ],
        pill_viewed: 10
    },


    {
        pill_id: `U8765o`,
        pill_name: `Thuốc Fexophar 60mg TV. Pharm điều trị triệu chứng viêm mũi dị ứng, dị ứng da, nổi mày đay (5 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 14000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Fexophar.png`],
        pill_indication: [
            `Thuốc Fexophar chỉ định điều trị trong các trường hợp sau:`,
            [
                `Điều trị các triệu chứng viêm mũi dị ứng: Sổ mũi, hắt hơi, viêm họng (ngứa và đỏ cổ họng).`,
                `Dị ứng da, nổi mày đay.`,
            ],
        ],
        pill_contraindication: [
            `Thuốc Fexophar chống chỉ định trong các trường hợp sau:`,
            [`Mẫn cảm với bất kỳ thành phần nào của thuốc.`],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc dùng đường uống, sau khi ăn.`],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi: Mỗi lần uống 1 viên, ngày 2 lần.`,
            `Trẻ em từ 6 – 12 tuổi: Ngày uống 1 viên.`,
            `Đối với người suy thận:`,
            [
                `Người lớn và trẻ em trên 12 tuổi: Ngày 1 viên.`,
                `Trẻ em từ 6 – 12 tuổi: Dạng phân liều không thích hợp.`,
            ],
            `Suy gan: Không cần chỉnh liều ở người bị suy gan.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Nhóm dược lý: Kháng histamin thế hệ 2, đối kháng thụ thể H1.`,
            `Fexofenadine có tác dụng kháng histamin chọn lọc trên thụ thể H1. Không có tác dụng kháng cholinergic hay adrenergic.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Thuốc hấp thu nhanh sau khi uống, đạt nồng độ tối đa trong máu sau 2 - 3 giờ.`,
            `Phân bố: Thuốc liên kết với protein huyết tương khoảng 60 - 70%.`,
            `Chuyển hóa: Khoảng 5% Fexofenadine bị chuyển hóa trong cơ thể.`,
            `Thải trừ: Thời gian bán thải trừ của thuốc là 14,4 giờ, thuốc chủ yếu đào thải qua phân 80%, qua nước tiểu 11%.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc thường gặp các tác dụng không mong muốn (ADR) như:`,
            [
                `Các tác dụng giống như nhóm antihistamin không gây ngủ.`,
                `Tác dụng ngoại ý phổ biến nhất của nhóm antihistamin gây ngủ là tác dụng lên thần kinh trung ương, với nhiều tác dụng khác nhau từ buồn ngủ nhẹ đến ngủ sâu, uể oải, chóng mặt. (Mặc dù sự kích thích ngược lại có thể xảy ra, đặc biệt ở liều cao và trẻ em hoặc người lớn tuổi). Những tác dụng gây ngủ này thường biến mất sau vài ngày dùng thuốc. Nhóm antihistamin không gây ngủ gây ít hoặc ko gây buồn ngủ.`,
                `Tác dụng ngoại ý phổ biến khác của nhóm gây ngủ là nhức đầu, làm giảm khả năng vận động. Tác dụng kháng thụ thể muscarinic như khô miệng, nhìn mờ, bài tiết khó khăn, táo bón, tăng trào ngược dạ dày. Thuận lợi chính của nhóm không gây ngủ là có rất ít hoặc không có tác dụng kháng muscarinic.`,
                `Tác dụng ngoại ý không thường xuyên lên dạ dày ruột bao gồm buồn nôn, nôn, tiêu chảy, đau thượng vị.`,
                `Tim đập nhanh và loạn nhịp tim thỉnh thoảng xảy ra với hầu hết các antihistamin.`,
                `Antihistamin có thể gây các phản ứng quá mẫn như co thắt phế quản, phù mạch, sốc phản vệ và nhạy cảm chéo với các thuốc liên quan.`,
                `Những tác dụng ngoại ý khác cũng được báo cáo khi dùng antihistamin bao gồm co giật, đổ mồ hôi, chứng đau cơ, hội chứng ngoại tháp, sự run, khó ngủ, trầm cảm, rụng tóc, ù tai, hạ huyết áp. Rối loạn huyết học ít gặp, bao gồm mất bạch cầu hạt, thiếu máu tán huyết, giảm tiểu cầu.`,
                `Quá liều antihistamin gây ngủ kết hợp với kháng thụ thể muscarinic, hội chứng ngoại tháp, và tác động lên thần kinh trung ương. Kích thích thần kinh trung ương mạnh hơn là ức chế, đặc biệt là ở trẻ em và người lớn tuổi, gây ra sự mất điều hòa, hưng phấn, run, ảo giác, co giật. Tăng thân nhiệt bất thường gây nguy hiểm có thể xảy ra. Ở người lớn, tác dụng ức chế thần kinh trung ương phổ biến hơn với tình trạng ngủ gà, co giật, hôn mê, tiến triển với suy đường hô hấp và trụy tim mạch. Với nhóm antihistamin không gây ngủ, tác dụng kháng muscarinic kém hơn.`,
                `Loạn nhịp tim: Một người đàn ông 67 tuổi bị ngất sau khi uống Fexofenadin 180mg hàng ngày sau 2 tháng. ECG cho thấy sự kéo dài bất thường khoảng cách sóng QT, khoảng cách rút ngắn ngay khi ngưng dùng fexofenadin, tuy vậy khoảng cách vẫn có khuynh hướng kéo dài ra dù ngưng quá trình trị liệu. Dù vậy, sự tái cảm vẫn dương tính. Nhà sản xuất đã cảnh báo bệnh nhân có nguy cơ phát triển loạn nhịp trước khi dùng thuốc.`,
                `Tác động lên ECG của fexofenadin đã được nghiên cứu trên những đối tượng bình thường và chỉ định đến liều 480 mg ngày (gấp 4 lần liều khuyến cáo cho viêm mũi dị ứng theo mùa) đã không kéo dài khoảng cách sóng QT.`,
                `Cho con bú: Không có tác dụng ngoại ý nào được mô tả trên trẻ sơ sinh còn bú sữa mẹ khi người mẹ dùng fexofenadin, Viện hàn lâm Mỹ về nhi học xét rằng fexofenadin tương hợp với phụ nữ cho con bú.`,
            ],
        ],
        pill_interactions: [
            `Erythromycin và Ketoconazol làm tăng nồng độ của Fexofenadin trong máu.`,
            `Các antacid (chứa nhôm hydroxyd hoặc Magne hydroxyd) làm giảm sự hấp thu của Fexofenadin, nên dùng các thuốc này cách nhau ít nhất 2 giờ.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,
            [
                `Thận trọng khi dùng cho người suy thận, người cao tuổi (trên 65 tuổi).`,
                `Thận trọng khi dùng cho người đã có nguy cơ về tim mạch hoặc đã có khoảng QT kéo dài từ trước.`,
                `Thận trọng khi dùng cho trẻ em dưới 6 tuổi vì độ an toàn và tính hiệu quả chưa được xác định.`,
                `Cần ngừng dùng fexofenadin ít nhất 24 – 48 giờ trước khi tiến hành các thử nghiệm kháng nguyên tiêm trong da.`,
                `Sử dụng thuốc cho phụ nữ trong thời kỳ mang thai và cho con bú:`,
                `Chỉ dùng cho phụ nữ có thai, và phụ nữ cho con bú khi thật cần thiết.`,
                `Ảnh hưởng của thuốc lên khả năng lái xe và vận hành máy móc:`,
                `Thận trọng khi dùng cho người lái xe, vận hành máy móc vì có khả năng gây buồn ngủ.`,
            ],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Triệu chứng:`,

                `Thông tin còn hạn chế nhưng đã có báo cáo: Buồn ngủ, chóng mặt, khô miệng.`,
                `Không có thuốc giải độc đặc hiệu, cần điều trị triệu chứng và hỗ trợ.`,
                `Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`,

            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Bổ sung liều ngay khi nhớ ra. Tuy nhiên, nếu thời gian giãn cách với liều tiếp theo quá ngắn thì bỏ qua liều đã quên và tiếp tục lịch dùng thuốc. Không dùng liều gấp đôi để bù cho liều đã bị bỏ lỡ.`,
            ],
        ],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


    {
        pill_id: `U8754w`,
        pill_name: `Thuốc Devomir S.P.M ohòng ngừa say sóng, say tàu xe, máy bay (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 4000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Devomir.png`],
        pill_indication: [
            `Thuốc Devomir 25 mg được chỉ định dùng trong các trường hợp sau:`,
            [
                `Phòng ngừa say sóng, say tàu xe, máy bay.`,
                `Phòng ngừa và điều trị đau nửa đầu.`,
                `Phòng ngừa và điều trị chóng mặt, buồn nôn do rối loạn tiền đình, co thắt mạch máu não.`,
                `Điều trị duy trì các triệu chứng rối loạn tuần hoàn ngoại vi (hiện tượng Raynaud, xanh tím đầu chi, đi khập khiễng cách hồi, rối loạn dinh dưỡng, loét giãn tĩnh mạch, tê rần, co cứng cơ về đêm, lạnh đầu chi).`,
            ],
        ],
        pill_contraindication: [
            `Thuốc Devomir 25 mg chống chỉ định trong các trường hợp sau:`,
            [
                `Không dùng cho bệnh nhân nhạy cảm với bất cứ thành phần nào của thuốc.`,
                `Loạn chuyển hóa porphyrin.`,
            ],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Uống thuốc với nước lọc, sau bữa ăn.`],
        pill_dosage: [
            `Phòng say tàu xe:`,
            [
                `Người lớn: Uống 1 viên, 2 giờ trước chuyến đi. Lặp lại sau mỗi 6 giờ.`,
                `Trẻ em 5 - 12 tuổi: 1/2 liều người lớn.`,
            ],
            `Các trường hợp khác:`,
            [
                `Mỗi lần dùng 1 – 2 viên, ngày 3 lần.`,
            ],
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Cinnarizin là thuốc kháng histamin (H1). Phần lớn những thuốc kháng histamin H1 cũng có tác dụng chống tiết acetylcholin và an thần. Thuốc kháng histamin có thể chặn các thụ thể ở cơ quan tận cùng của tiền đình và ức chế sự hoạt hóa quá trình tiết histamin và acetylcholin.`,
            `Ðể phòng say tàu xe, thuốc kháng histamin có hiệu quả hơi kém hơn so với scopolamin (hyosin), nhưng thường được dung nạp tốt hơn và loại thuốc kháng histamin ít gây buồn ngủ hơn như cinnarizin hoặc cyclizin thường được ưa dùng hơn.`,
            `Cinnarizin còn là chất đối kháng calci. Thuốc ức chế sự co tế bào cơ trơn mạch máu bằng cách chẹn các kênh calci.`,
            `Ở một số nước, cinnarizin được kê đơn rộng rãi làm thuốc giãn mạch não để điều trị bệnh mạch não mạn tính với chỉ định chính là xơ cứng động mạch não; nhưng những thử nghiệm lâm sàng ngẫu nhiên về cinnarizin đều không đi đến kết luận rõ ràng.`,
            `Cinnarizin đã được dùng trong điều trị hội chứng Raynaud, nhưng không xác định được là có hiệu lực. Cinnarizin cũng được dùng trong các rối loạn tiền đình.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu – Phân bố: Sau khi uống, cinarizin đạt được nồng độ đỉnh huyết tương từ 2 – 4 giờ.`,
            `Chuyển hóa – Thải trừ: Sau 72 giờ, thuốc vẫn còn thải trừ ra nước tiểu. Nửa đời huyết tương của thuốc ở người tình nguyện trẻ tuổi khoảng 3 giờ.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Devomir 25 mg, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR >1/100:`,
            [
                `Thần kinh trung ương: Ngủ gà.`,
                `Tiêu hóa: Rối loạn tiêu hóa.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Thần kinh trung ương: Nhức đầu.`,
                `Tiêu hóa: Khô miệng, tăng cân.`,
                `Khác: Ra mồ hôi, phản ứng dị ứng.`,
            ],
            `Hiếm gặp, 1/10000 < ADR < 1/1000:`,
            [
                `Thần kinh trung ương: Triệu chứng ngoại tháp ở người cao tuổi hoặc khi điều trị dài ngày.`,
                `Tim mạch: Giảm huyết áp (liều cao).`,
                `Hướng dẫn cách xử trí ADR:`,

                `Có thể phòng tình trạng ngủ gà và rối loạn tiêu hóa, thường có tính chất tạm thời, bằng tăng dần liều tới mức tối ưu. Phải ngừng thuốc khi bệnh nặng hơn hoặc xuất hiện những triệu chứng ngoại tháp khi điều trị dài ngày cho người cao tuổi. `,
                `Thông báo cho bác sĩ hoặc dược sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,

            ],
        ],
        pill_interactions: [
            `Không dùng thuốc chung với các thuốc ức chế hệ thần kinh, thuốc chống trầm cảm ba vòng, rượu bia.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,
            [
                `Cũng như với những thuốc kháng histamin khác, cinnarizin có thể gây đau vùng thượng vị. Uống thuốc sau bữa ăn có thể làm giảm kích ứng dạ dày.`,
                `Cinnarizin có thể gây ngủ gà, đặc biệt lúc khởi đầu điều trị. Phải tránh những công việc cần sự tỉnh táo (chẳng hạn như lái xe).`,
                `Phải tránh dùng cinnarizin dài ngày ở người cao tuổi, vì có thể gây tăng hoặc xuất hiện những triệu chứng ngoại tháp, đôi khi kết hợp với cảm giác trầm cảm trong điều trị kéo dài.`,
            ],
            `Khả năng lái xe và vận hành máy móc:`,
            [`Không dùng thuốc khi đang lái xe và vận hành máy móc.`],
            `Thời kỳ mang thai:`,
            [`Chỉ sử dụng khi thật cần thiết.`],
            `Thời kỳ cho con bú:`,
            [`Chỉ dùng cinnarizin trong thời kỳ cho con bú khi lợi ích điều trị cho mẹ trội hơn nguy cơ có thể xảy ra đối với trẻ.`],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Chưa gặp trường hợp nào. Cần tham khảo nhân viên y tế.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu quên dùng một liều thuốc, hãy uống càng sớm càng tốt khi nhớ ra. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và uống liều kế tiếp vào thời điểm như kế hoạch. Không uống gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


    {
        pill_id: `D5790e`,
        pill_name: `Thuốc Promethazin 15mg Nadyphar phòng và điều trị các tình trạng dị ứng, chống nôn (5 vỉ x 20 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 0,
        pill_sellPrice: 5900,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 20 viên`,
        pill_imgAddress: [`images/pill/Promethazin.png`],
        pill_indication: [
            `Thuốc Promethazin được chỉ định dùng trong các trường hợp sau:`,
            [
                `Phòng và điều trị các tình trạng dị ứng (mày đay, phù mạch, viêm mũi, viêm kết mạc, ngứa).`,
                `An thần, chống nôn và buồn nôn.`,
                `Phòng và điều trị say sóng, say tàu xe.`,
            ],
        ],
        pill_contraindication: [
            `Thuốc Promethazin chống chỉ định trong các trường hợp sau:`,
            [
                `Quá mẫn cảm với Promethazin.`,
                `Trạng thái hôn mê, người đang dùng các thuốc ức chế thần kinh trung ương với liều lớn (như rượu, thuốc an thần gây ngủ barbiturat, các thuốc mê, thuốc giảm đau gây ngủ, thuốc trấn tĩnh,...).`,
                `Trẻ em dưới 2 tuổi, trẻ có dấu hiệu và biểu hiện của hội chứng Reye.`,
            ],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Promethazin dùng đường uống.`],
        pill_dosage: [
            `Theo sự hướng dẫn của thầy thuốc, trung bình:`,
            `Phòng và điều trị các tình trạng dị ứng (mày đay, phù mạch, viêm mũi, viêm kết mạc, ngứa) - an thần:`,
            `Người lớn:`,
            [
                `1 viên/ lần x3 lần/ ngày, uống trước bữa ăn và khi đi ngủ hoặc 2 viên khi đi ngủ.`,
            ],
            `Trẻ em trên 2 tuổi:`,
            [
                `0,1mg/ kg thể trọng, cách 6 giờ/ lần; hoặc 0,5mg/kg thể trọng khi đi ngủ.`,
            ],
            `Phòng và điều trị say sóng, say tàu xe:`,

            `Người lớn:`,
            [
                `Uống 2 viên trước khi khởi hành 30 - 60 phút. Có thể nhắc lại liều sau 8 - 12 giờ, nếu cần.`,
            ],
            `Trẻ em trên 2 tuổi:`,
            [
                `0,5mg/kg thể trọng, cách 8 giờ/lần`,
            ],

            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Promethazin là dẫn chất phenothiazin có cấu trúc khác các phenothiazin chống loạn tâm thần ở mạch nhánh phụ và không có thay thế ở vòng. Người ta cho rằng cấu hình này làm thuốc giảm tác dụng dopaminergic ở thần kinh trung ương (chỉ còn bằng 1/10 tác dụng của clopromazin).`,
            `Promethazin có tác dụng kháng histamin và an thần mạnh. Tuy vậy, thuốc cũng có thể kích thích hoặc ức chế một cách nghịch lý hệ thần kinh trung ương. Ức chế hệ thần kinh trung ương, biểu hiện bằng an thần, là phổ biến khi dùng thuốc với liều điều trị để kháng histamin. Promethazin cũng có tác dụng chống nôn, kháng cholinergic, chống say tàu xe và tê tại chỗ. Ngoài ra, thuốc còn có tác dụng chống ho nhẹ, phản ánh tiềm năng ức chế hô hấp.`,
            `Ở liều điều trị, promethazin không có tác dụng đáng kể trên hệ tim mạch, mặc dù tiêm tĩnh mạch nhanh có thể gây hạ huyết áp tạm thời, huyết áp thường duy trì hoặc hơi tăng khi tiêm chậm.`,
            `Promethazin là thuốc chẹn thụ thể H, do tranh chấp với histamin ở các vị trí của thụ thể H, trên các tế bào tác động, nhưng không ngăn cản giải phóng histamin, do đó thuốc chỉ ngăn chặn những phản ứng do histamin tạo ra. Promethazin đối kháng ở những mức độ khác nhau, với hầu hết, nhưng không phải tất cả, các tác dụng dược lý của histamin, kể cả mày đay, ngứa. Do đó thuốc được dùng trong tiền mê, trước các thủ thuật có thể gây giải phóng histamin. Ngoài ra, tác dụng kháng cholinergic của hầu hết các thuốc kháng histamin còn gây khô mũi và niêm mạc miệng.`,
            `Promethazin và phần lớn các thuốc kháng histamin đi qua hàng rào máu - não, gây tác dụng an thần do ức chế histamin N-methyltransferase và chẹn các thụ thể histamin trung ương. Đây là một nguy cơ đặc biệt cho các trẻ nhỏ, vì các thuốc kháng histamin đã được chứng minh gây tử vong do ngừng thở khi ngủ.`,
            `Sự đối kháng ở các vị trí thụ thể khác của hệ thần kinh trung ương, thí dụ như của serotonin, acetylcholin cũng có thể xảy ra. Người ta cho rằng các phenothiazin gián tiếp làm giảm kích thích tới hệ thống lưới của thân não.`,
            `Promethazin có tính kháng cholinergic, ngăn chặn đáp ứng với acetylcholin thông qua thụ thể muscarinic. Tác dụng chống nôn, chống say tàu xe và chống chóng mặt của promethazin là do tác dụng kháng cholinergic trung ương trên tiền đình, trên trung tâm nôn tích hợp và trên vùng phát động nhận cảm hóa chất của não giữa. Tác động chống ho nhẹ có thể do tính chất kháng cholinergic và ức chế thần kinh trung ương của thuốc. Promethazin và các phenothiazin khác có tác dụng chẹn alpha-adrenergic, gây nguy cơ hạ huyết áp thế đứng.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Promethazin được hấp thu tốt qua đường tiêu hóa và ở vị trí tiêm. Nồng độ thuốc trong huyết tương cần để có tác dụng kháng histamin và tác dụng an thần còn chưa được biết rõ. Dùng theo đường uống, trực tràng hoặc tiêm bắp, thuốc đều bắt đầu có tác dụng kháng histamin và an thần trong vòng 20 phút, còn theo đường tiêm tĩnh mạch chỉ trong 3 đến 5 phút. Tác dụng kháng histamin có thể kéo dài tới 12 giờ hoặc lâu hơn, còn tác dụng an thần có thể duy trì từ 2 đến 8 giờ tùy theo liều và đường dùng.`,
            `Phân bố: Tỷ lệ liên kết với protein huyết tương từ 76 đến 93%. Thuốc được phân bố rộng rãi tới các mô của cơ thể. Mặc dù nồng độ trong não có thấp hơn so với các bộ phận khác, nhưng vẫn cao hơn nồng độ trong huyết tương. Thuốc dễ dàng qua nhau thai. Chưa rõ thuốc có phân bố trong sữa mẹ không.`,
            `Chuyển hoá và thải trừ: Promethazin chuyển hóa mạnh ở gan cho sản phẩm chủ yếu là promethazin sulphoxid và cả N-demethyl-promethazin. Thuốc thải trừ qua nước tiểu và phân, phần lớn ở dạng promethazin sulphoxid va dang glucuronid.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Promethazin, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR >1/100:`,
            [
                `Ngủ gà, nhìn mờ.`,
                `Ban ở da.`,
                `Niêm dịch quánh đặc.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Chóng mặt, mệt mỏi, ù tai, mất phối hợp, nhìn đôi, mất ngủ, run, cơn động kinh, kích thích Hysteria.`,
                `Khô miệng hoặc họng (thường gặp ở người cao tuổi).`,
                `Buồn nôn, nôn.`,
            ],
            `Hiếm gặp, 1/10.000 < ADR < 1/1000:`,
            [
                `Mất phương hướng, mất kiểm soát động tác, lú lẫn, tiểu tiện buốt (thường gặp ở người cao tuổi), ác mộng, kích động bất thường, bồn chồn không yên (thường gặp ở trẻ em và người cao tuổi).`,
                `Giảm bạch cầu, giảm tiểu cầu, giảm bạch cầu hạt.`,
                `Mẫn cảm với ánh sáng, viêm da dị ứng, vàng da.`,
                `Nguy cơ sâu răng khi dùng trường diễn do miệng bị khô.`,
            ],
            `Hướng dẫn cách xử trí ADR:`,
            [
                `Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
            ],
        ],
        pill_interactions: [
            `Khi dùng promethazin đồng thời với:`,
            [
                `Các thuốc ức chế thần kinh trung ương: Tác dụng an thần của promethazin được tăng cường bởi các thuốc ức chế thần kinh trung ương (barbiturat và các thuốc an thần khác), opiat, hoặc các thuốc giảm đau khác, thuốc kháng histamin, các thuốc trấn tĩnh và rượu, khi sử dụng đồng thời phải thận trọng để tránh quá liều.`,
                `Epinephrin: Tác dụng alpha-adrenergic của epinephrin có thể bị chẹn.`,
                `Các chất ức chế monoamin oxydase (IMAO): Có thể kéo đài và tăng cường tác dụng ức chế thần kinh trung ương và kháng cholinergic.`,
                `Các thuốc kháng histamin là dẫn chất phenothiazin: Có thể làm tăng nguy cơ hạ huyết áp và các phản ứng ngoại tháp.`,
                `Các chất chẹn beta-adrenergic: Đặc biệt propranolol có thể gây tăng nồng độ trong huyết tương của mỗi thuốc do ức chế chuyển hóa; do đó có thể tăng tác dụng hạ huyết áp, bệnh lý võng mạc không phục hồi, loạn nhịp tim và loạn vận động muộn.`,
                `Levodopa: Tác dụng chống Parkinson bị ức chế do chẹn các thụ thể dopamin trong não.`,
            ],
            `Tương tác với các xét nghiệm chẩn đoán:`,
            [
                `Chẩn đoán thai: Xét nghiệm chẩn đoán thai trên cơ sở phản ứng miễn dịch giữa HCG và kháng HCG có thể cho kết quả âm tính hoặc dương tính giả tạo.`,
                `Thử nghiệm dung nạp glucose: Tăng glucose máu có thể xảy ra ở người bệnh dùng promethazin.`,
            ],
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,

            `Thuốc gây buồn ngủ, thận trọng khi dùng cho người lái xe hay vận hành máy móc.`,
            `Phụ nữ có thai và cho con bú.`,
            `Dùng thận trọng trong các bệnh: Hen, tăng nhãn áp góc đóng, bí tiểu tiện, phì đại tuyến tiền liệt, tắc môn vị - tá tràng, động kinh, bệnh tim mạch nặng, suy gan, suy tủy.`,
            `Thận trọng khi sử dụng promethazin đồng thời với các thuốc ức chế thần kinh trung ương để tránh quá liều. Khi dùng đồng thời với promethazin, liều của barbiturat phải giảm ít nhất một nửa và liều của các thuốc giảm đau (morphin, pethidin) phải giảm từ 1⁄4 đến 1⁄2.`,
            `Khả năng lái xe và vận hành máy móc:`,
            [`Thuốc gây buồn ngủ nên ảnh hưởng cho người lái xe và vận hành máy móc.`],
            `Thời kỳ mang thai và thời kỳ cho con bú:`,
            [
                `Chưa xác định được tính an toàn khi sử dụng promethazin trong thời kỳ mang thai (trừ lúc đau đẻ) đối với phát triển thai nhi về mặt tác dụng phụ có thể xảy ra. Khi thai đủ tháng, thuốc qua nhau thai nhanh chóng.`,
                `Nồng độ thuốc trong máu thai và mẹ cân bằng trong 15 phút và nồng độ thuốc ở trẻ nhỏ kéo dài ít nhất 4 giờ. Tuy vậy, không có chứng cứ lâm sàng trẻ bị ức chế hô hấp do promethazin. Chỉ nên dùng promethazin cho người có thai khi mà lợi ích điều trị xác đáng hơn nguy cơ có thể xảy ra cho thai nhi.`,
                `Do không biết rõ thuốc có phân bố vào sữa mẹ hay không, nên cần thận trọng khi dùng cho người đang cho con bú vì nguy cơ tác dụng không mong muốn (như kích động hoặc kích thích khác thường) có thể xây ra ở đứa trẻ. Các thuốc kháng histamin có thể ức chế tiết sữa do tác dụng kháng cholinergic.`,
            ],

        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều và xử trí?`,
            [
                `Triệu chứng: Tác dụng kháng cholinergic ở trung ương, ức chế thần kinh trung ương, cơn động kinh, hạ huyết áp nặng, phức hợp QRS giãn rộng ở đáy trên điện tâm đồ, một vài trường hợp tiêu cơ vân gây myoglobin niệu.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [`Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`],
        ],
        pill_overdose_handling: [

            `Động kinh:`,
            ['Dùng diazepam, physostigmin tiêm tĩnh mạch.'],
            `Hạ huyết áp nặng:`,
            [`Dùng noradrenalin tiêm truyền tĩnh mạch chậm.`],
            `Triệu chứng ngoài tháp:`,
            [`Điều trị với biperiden tiêm bắp, tiêm tĩnh mạch. Cần duy trì bài niệu tốt, thông khí hỗ trợ cho người bệnh nếu cần.`],
        ],
        pill_viewed: 10
    },


    //thuốc dạ dày
    {
        pill_id: `S6373e`,
        pill_name: `Viên nhai Kremil-S United điều trị đau dạ dày, giảm nóng rát dạ dày, ợ nóng, ợ chua(10 vĩ 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 11000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Thuốc_dạ_dày_-_Kremil_S.png`],
        pill_indication: [
            `Làm giảm các triệu chứng như khó tiêu, ợ nóng, đầy hơi.`
        ],
        pill_contraindication: [
            `Quá mẫn với hoạt chất hoặc bất kì thành phần nào của tá được.`,
            `Bệnh nhân bị suy nhược nặng hoặc bị suy thận.`,
            `Giảm phosphate máu.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Kremil-S nên nhai viên thuốc trước khi nuốt, dùng sau mỗi bữa ăn khoảng 1 giờ và trước khi đi ngủ; hoặc khi đau.`],
        pill_dosage: [
            `Liều dùng cho người lớn: Dùng 1 - 2 viên sau mỗi bữa ăn khoảng 1 giờ và trước khi đi ngủ; hoặc khi đau với tổng liều không quá 8 viên một ngày, hoặc theo sự kê toa của bác sĩ.`,
            `Không khuyến cáo dùng cho trẻ em.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [``],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [
            `Khi sử dụng thuốc dạ dày Kremil-S, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Tần suất tác dụng không mong muốn được định nghĩa như sau:`,
            `Rất thường gặp (≥ 1/10), thường gặp (≥ 1/100 đến <1/10), ít gặp (≥ 1/1000 đến < 1/100), hiếm gặp ( 1/10.000 đến < 1/1000), rất hiếm (< 1/10.000), báo cáo lẻ tẻ (không thể ước tính từ dữ liệu có sẵn).`,
            `Rối loạn hệ miễn dịch`,
            `Báo cáo lẻ tẻ: Phản ứng quá mẫn như ngứa, nổi mề đay, phù mạch và phản ứng phản vệ.`,
            `Rối loạn tiêu hóa`,
            `Ít gặp: Tiêu chảy hoặc táo bón..`,
            `Báo cáo lẻ tẻ: Đau bụng.`,
            `Rối loạn chuyển hóa và dinh dưỡng`,
            `Rất hiếm: Tăng Magnesium mẫu, theo dõi sau khi dùng Magnesium hydroxide kéo dài ở những bệnh nhân suy thận.`,
            `Báo cáo lẻ tẻ: Tăng Aluminium máu.`,
            `Giảm phosphate máu, dùng thuốc kéo dài hoặc liều cao hoặc thậm chí dùng liều bình thường ở những bệnh nhân có chế độ ăn ít phospho, có thể dẫn đến tăng quá trình hủy xương, tăng calci niệu, nhuyễn xương.`,
            `Hướng dẫn cách xử trí ADR:`,
            `Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
            `Lưu ý`,
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`
        ],
        pill_interactions: [
            `Không nên dùng đồng thời Kremil-S với các thuốc khác vì có thể làm thay đổi sự hấp thu của các thuốc này nếu dùng trong vòng 1 giờ.`,
            `Thuốc kháng acid chứa Aluminium có thể gây cản trở sự hấp thu của các thuốc khác như tetracycline, vitamin, ciprofloxacin, ketoconazole, hydroxychloroquine, chloroquine, chlorpromazine, rifampicin, cefdinir, cefpodoxime, levothyroxine, rosuvastatin.`,
            `Levothyroxin cũng có thể gắn kết với Simethicone làm chậm hoặc làm giảm sự hấp thu launthurovin.`,
            `Polystyrene sulphonate: Cần thận trọng dùng đồng thời với polystyrene suphonate do làm giảm khả năng gắn kết resin vào khi với nguy cơ nhiễm kiếm chuyển hóa ở những bệnh nhân suy thận (được báo cáo khi dùng Aluminium hydroxide và Magnesium hydroxide), và tắc ruột (được báo cáo khi dùng Aluminium hydroxide).`,
            `Aluminium hydroxide và citrate có thể làm tăng nồng độ Aluminium, đặc biệt ở những bệnh nhân suy thận.`,
            `Sự kiệm hóa nước tiểu do Magnesium hydroxide có thể làm thay đổi sự bài tối của một số loại thuốc, quan sát thấy có sự tăng bài tiết salicylate.`,
            `Tương kỵ của thuốc: Không áp dụng.`
        ],
        pill_precautions: [],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },
    {
        pill_id: `F4626s`,
        pill_name: `Thuốc Sucralfate Vidipha điều trị loét tá tràng - dạ dày (2 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 2000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Thuốc_dạ_dày_-_Sucralfate.png`],
        pill_indication: [
            `Thuốc SUCRALFATE được chỉ định dùng trong các trường hợp sau:`,
            `Thuốc dùng để điều trị loét tá tràng, loét dạ dày lành tính, viêm dạ dày mạn tính.`,
            `Phòng chảy máu dạ dày ruột khi loét do stress.`,
            `Viêm loét miệng do hóa trị liệu ung thư hoặc nguyên nhân khác do thực quản, dạ dày.`,
            `Viêm thực quản.`,
            `Dự phòng loét dạ dày tá tràng tái phát.`,
        ],
        pill_contraindication: [`Quá mẫn với sucralfat hoặc với bất cứ thành phần nào của thuốc.`],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Dùng theo đường uống, nên uống Sucralfat lúc đói, uống trước bữa ăn hoặc trước khi đi ngủ.`
        ],
        pill_dosage: [
            `Người lớn và trè em trên 15 tuổi:`,
            `Loét tá tràng, viêm dạ dày: Uống 2g/ lần, mỗi ngày uống 2 lần (vào buổi sáng và trước khi đi ngủ) hoặc 1 g/ lần, 4 lần/ ngày (uống 1 giờ trước bữa ăn và trước khi đi ngũ), trong 4 đến 8 tuần, nếu cần có thể dùng tới 12 tuần. Liều tối đa 8g/ ngày.`,
            `Loét dạ dày lành tính: Uống 1g/lần, ngày uống 4 lần. Điều trị đến khi vết loét lành hẳn (kiểm tra bằng nội soi), thường cần điều trị 6 - 8 tuần. Nếu người bệnh có chứng cứ rõ ràng bị nhiễm Helicobacter pylori, cũng cần được điều trị để loại trừ vi khuẩn H.pylori tối thiểu bằng metronidazol và amoxicilin, phối hợp với sucralfat và với một thuốc chống tiết acid như thuốc ức chế H2 histamin hay ức chế bơm proton.`,
            `Phòng tái phát loét tá tràng: Uống 1 g/ lần, ngày uống 2 lần. Điều trị không được kéo dài quá 6 tháng.`,
            `Loét tá tràng tái phát là do vi khuẩn Helicobacter pylori, cần cho một đợt điều trị mới bằng sucralfate phối hợp với kháng sinh.`,
            `Phòng loét do stress: Uống 1 g/ lần, ngày uống 4 lần, cách một giờ trước mỗi bữa ăn và trước khi đi ngủ, liều tối đa 8g/ ngày.`,
            `Phòng chảy máu dạ dày ruột khi loét do stress: Uống 1 g/ lần, 6 lần/ ngày. Liều tối đa 8g/ ngày.`,
            `Người suy thận: Muối nhôm được hấp thu rất ít (< 5%), tuy nhiên, thuốc có thể tích lũy ở người suy thận. Phải thận trọng khi dùng.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Sucralfat là một muối nhôm của sulfat disacarid, dùng điều trị ngắn ngày loét hành tá tráng, dạ dày. Thuốc có tác dụng tại chỗ (ổ loét) hơn toàn thân. Khi có acid dịch vị, thuốc tạo thành một phức hợp giống như bột hồ dính vào niêm mạc bị tổn thương.`,
            `Sucralfat không trung hòa nhiều độ acid dạ dày. Liều điều trị của sucralfate không có tác dụng kháng acid, tuy vậy khi bám dính vào niêm mạc dạ dày – tá tràng, tác dụng trung hòa acid của sucralfate có thể trở thành quan trọng để bảo vệ tại chỗ loét. Thuốc có ái lực mạnh (gấp 6 – 7 lần so với niêm mạc dạ dày bình thường) đối với vùng loét và ái lực đối với loét tá tràng lớn hơn loét dạ dày. Sucralfat đã tạo ra một hàng rào bảo vệ ổ loét. Hàng rào này đã ức chế tác dụng tiêu protein của pepsin bằng cách ngăn chặn pepsin gán vào albumin, fibrinogen… có trên bề mặt loét. Hàng rào này cũng ngăn cản khuếch tán trở lại acid glycocholic và bảo vệ niêm mạc dạ dày không bị tổn hại do acid taurocholic. Tuy nhiên, tác dụng của sucralfate đối với acid mật trong điều trị loét dạ dày tá tràng chưa rõ ràng. Sucralfat được coi là thuốc bảo vệ tế bào niêm mạc đường tiêu hóa với ý nghĩa là đã tạo một hàng rào ở ổ loét để bảo vệ ổ loét không bị pepsin, acid và mật gây loét và do đó ổ loét có thể liền được. Thuốc được coi là thuốc bảo vệ tế bào niêm mạc đường tiêu hóa.`,
            `Thuốc xuất hiện tác dụng sau 1 - 2 giờ và thời gian tác dụng tới 6 giờ.`
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Thuốc hấp thu rất ít (< 5%) qua đường tiêu hóa. Hấp thu kém có thể do tính phân cực cao và độ hòa tan thấp của thuốc trong dạ dày.`,
            `Phân bố: Chưa xác định được.`,
            `Chuyển hóa: Thuốc không chuyển hóa.`,
            `Thải trừ: 90% bài tiết vào phân, một lượng rất nhỏ được hấp thu và bài tiết vào nước tiểu dưới dạng hợp chất không đổi.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc SUCRALFATE, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR > 1/100`,
            `Tiêu hóa: Táo bón.`,
            `Ít gặp, 1/1000 < ADR < 1/100`,
            `Tiêu hóa: Tiêu chảy, buồn nôn, nôn, đầy bụng, khó tiêu, đầy hơi, khô miệng.`,
            `Da: Ngứa, ban đỏ.`,
            `Thần kinh: Hoa mắt, chóng mặt, mất ngù, buồn ngủ.`,
            `Khác: Đau lưng, đau đầu.`,
            `Hiếm gặp, ADR < 1/1000`,
            `Phản ứng quá mẫn: Mày đay, phù Quincke, khó thờ, viêm mũi, co thắt thanh quản, mặt phù to.`,
            `Hướng dẫn cách xử trí ADR`,
            `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Có thể dùng các antacid cùng với sucralfat trong điều trị loét tá tràng để giảm nhẹ chứng đau, nhưng không được uống cùng một lúc vì antacid có thể ảnh hưởng đến sự gắn cùa sucralfat trên niêm mạc. Nên uống antacid trước hoặc sau khi uống sucralfat /4 giờ.`,
            `Các thuốc cimetidin, ranitidin, ciprofloxacin, norfloxacin, ofloxacin, digoxin, warfarin, phenytoin, theophylin, tetracyclin khi uống cùng với sucralfat sẽ bị giảm hấp thu. Vì vậy phải uống các thuốc này 2 giờ trước hoặc sau khi uống sucralfat.`,
            `Dùng đồng thời citrat với sucralfat có thể làm tăng nồng độ của nhôm trong máu. Vì vậy, không nên sừ dụng sucralfat cùng với các chế phẩm citrat.`

        ],
        pill_precautions: [`Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [
            `Triệu chứng: Khi quá liều sucralfat có thể có rối loạn tiêu hóa, đau bụng, buồn nôn và nôn.`,
            `Xử trí: Phải báo ngay cho bác sỹ trường hợp dùng quá liều hoặc dùng liều quá cao.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `G6725c`,
        pill_name: `Thuốc Dạ Dày Nhất Nhất điều trị viêm loét dạ dày, hành tá tràng cấp và mãn tính (2 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 62500,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Dạ_dày_Nhất_Nhất.png`],
        pill_indication: [
            `Thuốc Dạ Dày Nhất Nhất được chỉ định dùng trong các trường hợp sau:`,
            `Điều trị viêm loét dạ dày, hành tá tràng cấp và mãn tính, đau rát vùng thượng vị, ăn không tiêu, đầy hơi, ợ chua, cảm giác khó chịu dạ dày.`,
            `Điều trị rối loạn tiêu hóa, sôi bụng, chướng bụng, ăn uống chậm tiêu, ăn không ngon.`
        ],
        pill_contraindication: [`Thuốc Dạ Dày Nhất Nhất chống chỉ định trong các trường hợp: Trẻ em dưới 30 tháng tuổi, trẻ em có tiền sử động kinh hoặc Co giật do sốt cao, loét dạ dày thể nhiệt và rối loạn tiêu hóa thể nhiệt.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Dạ Dày Nhất Nhất dùng đường uống, nên uống vào lúc đói.`
        ],
        pill_dosage: [
            `Ngày uống 2 lần, mỗi lần 2 viên.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`Thuốc có tác dụng hành khí, hòa vị, tán hàn, chỉ thống.`
        ],
        pill_pharmacokinetics: [`Chưa có thông tin.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Dạ Dày Nhất Nhất, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Chưa có báo cáo.`,
            `Hướng dẫn cách xử trí ADR`,
            `Thông báo cho bác sĩ tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
            `Lưu ý`,
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`
        ],
        pill_interactions: [`Chưa có báo cáo.`
        ],
        pill_precautions: [`Thận trong khi dùng cho phụ nữ có thai và cho con bú.`
        ],
        pill_overdose: [`Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`
        ],
        pill_overdose_handling: [`Khi dùng thuốc quá liều có thể gặp một số tác dụng phụ, sử dụng đúng liều các tác dụng phụ sẽ hết.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `C4279d`,
        pill_name: `Thuốc Moxydar 1500mg Grimberg điều trị đau thực quản, dạ dày (5 vỉ x 6 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 42000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 6 Viên`,
        pill_imgAddress: [`images/pill/Moxydar.png`],
        pill_indication: [
            `Thuốc Moxydar được chỉ định dùng trong các trường hợp sau:
            Điều trị triệu chứng đau do bệnh ở thực quản, dạ dày, tá tràng.
            Điều trị triệu chứng của bệnh trào ngược dạ dày - thực quản.`
        ],
        pill_contraindication: [
            `Thuốc chống chỉ định trong những trường hợp sau: 
            Liên quan đến magnesi: Suy thận nặng.
            Dị ứng với bất kỳ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Dùng đường uống.
            Hòa tan một viên thuốc trong nửa ly nước.`
        ],
        pill_dosage: [
            `Điều trị triệu chứng đau do bệnh ở thực quản, dạ dày, tá tràng: 
            Một viên khi có cơn đau, không quá 4 lần mỗi ngày.
            Điều trị triệu chứng của bệnh trào ngược dạ dày - thực quản:
            Trong giai đoạn tấn công: 1 viên x 3 lần mỗi ngày sau 3 bữa ăn và 1 viên bổ sung khi đau, uống trong 4 đến 6 tuần.
            Trong điều trị duy trì: 1 viên khi có cơn đau.`
        ],
        pill_pharmacology: [
            `Moxydar kết hợp ba thành phần khoáng chất có tác dụng kháng acid với một thành phần có nguồn gốc từ thực vật có tính kháng acid nhẹ và có tính đệm giữa 11 và 1 để chuẩn bị hình thành hỗn dịch.
            Moxydar có các đặc tính như sau: 
            Tính kháng acid chủ yếu do tính đệm trên 1 quãng pH rộng với 3 vùng pH chủ yếu: 3.5, 2.0-1.5, 1.0.
            Khả năng hấp thụ các muối mật và lysolécithines. Khả năng này có tác dụng trong môi trường kiềm (đường ruột).
            Tác dụng chống loét.`
        ],
        pill_pharmacokinetics: [`Không có dữ liệu.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc, bạn có thể gặp các tác dụng không mong muốn như: 
            Rối loạn vận chuyển ruột (tiêu chảy và táo bón).
            Liên quan đến nhôm: Mất phospho trong trường hợp sử dụng kéo dài hoặc liều dùng cao.
            Trong quá trình sử dụng thuốc, nếu nhận thấy cơ thể xuất hiện những phản ứng bất thường, những phản ứng có khả năng làm ảnh hưởng nghiêm trọng đến sức khỏe, người bệnh cần ngưng sử dụng thuốc.
            Bên cạnh đó bạn cần nhanh chóng đến bệnh viện và báo ngay với bác sĩ chuyên khoa về tình trạng sức khỏe của bạn ở hiện tại. Khi đó các bác sĩ sẽ tiến hành kiểm tra và đề ra những phương pháp xử lý phù hợp tránh gây nguy hiểm.`
        ],
        pill_interactions: [
            `Các phối hợp cần thận trọng khi dùng:
            Để phòng xa, nên uống thuốc kháng acid cách xa một số thuốc khác. Nếu có thể, nên uống thuốc này cách xa hơn 2 giờ với:
            Kayexalat.
            Giảm khả năng gắn kết resin vào kali, với nguy cơ nhiễm kiềm chuyển hóa trên bệnh nhân suy thận.
            Thuốc kháng sinh chống lao (ethambutol, isoniazide);
            Kháng sinh họ cyclin;
            Kháng sinh họ lincosanide;
            Kháng sinh họ fluoroquinolone;
            Thuốc kháng histamin Hy;
            Atenolol, metoprolol, propranolol;
            Chloroquin;
            Diflunisal;
            Digitalis;
            Digoxin;
            Diphosphonat;
            Sắt (muối);
            Fluorua natri;
            Glucocorticoid;
            Indomectacin;
            Ketoconazole;
            Lansoprazole;
            Thuốc an thần kinh phenothiazin;
            Penicillamin.
            Giảm hấp thu những thuốc kể trên ở đường tiêu hóa khi được uống cùng lúc với thuốc này.
            Các phối hợp cần lưu ý:
            Salicylat: Tăng bài tiết salycilat ở thận do kiềm hóa nước tiểu.
            Để tránh tình trạng tương tác thuốc, tốt nhất nên viết một danh sách những thuốc bạn đang dùng (bao gồm thuốc được kê toa, không kê toa, thảo dược và thực phẩm chức năng) cho bác sĩ hoặc dược sĩ xem.
            Tình trạng sức khoẻ cũng có thể ảnh hưởng đến việc sử dụng thuốc này, báo cho bác sĩ biết nếu bạn có bất kỳ vấn đề sức khỏe nào.
            Rượu và thuốc lá có thể tương tác với vài loại thuốc nhất định. Trong quá trình sử dụng sản phẩm, bệnh nhân cần hạn chế tối đa các loại thức ăn hay đồ uống có chứa cồn hoặc chất kích thích để tránh làm ảnh hưởng tới hoạt động của hoạt chất. Hãy tham khảo ý kiến của bác sĩ về việc uống thuốc cùng thức ăn, rượu và thuốc lá.`
        ],
        pill_precautions: [
            `Trên bệnh nhân suy thận và thẩm phân dài hạn, cần lưu ý đến hàm lượng nhôm nguy cơ bệnh lý não).
            Cần lưu ý đến sự hiện diện của các ion nhôm và magnesi có thể ảnh hưởng đến sự vận chuyển trong ruột:
            Các muối nhôm là nguyên nhân gây táo bón, có thể làm tăng thêm triệu chứng táo bón điển hình trong thai kỳ; ở liều cao chúng có thể gây cạn kiệt phospho (trừ phosphat nhôm). Sự hấp thụ ion nhôm có thể xem là ở mức tối thiểu và không có nguy cơ gây quá liều trong cơ thể nếu liều dùng được hạn chế trong mỗi ngày và trong thời gian điều trị, nhưng nguy cơ sẽ thành hiện thực nếu không tôn trọng những biện pháp đề phòng nói trên và nhất là trong trường hợp mẹ bị suy thận: Nguy cơ ngộ độc nhôm ở thai nhi và trẻ sơ sinh.
            Muối magnesi có thể gây tiêu chảy; dùng liều cao và kéo dài sẽ có nguy cơ tăng magnesi – máu.
            Sử dụng đúng liều, không nên tự ý tăng hay giảm liều, vì như thế có thể gây ra các phản ứng quá mẫn, hoặc làm giảm hiệu quả điều trị sản phẩm. 
            Bệnh nhân không tự ý dừng sản phẩm mà phải nghe theo lời khuyên của bác sĩ, nên giảm dần liệu lượng, việc tự ý dừng sản phẩm có thể gây giảm miễn dịch của cơ thể, và có thể làm tăng triệu chứng của một số bệnh. 
            Khi ngưng sử dụng sản phẩm cần giảm từ từ, không nên dừng đột ngột. Không nên bỏ quá 2 liều liên tiếp.
            Trong trường hợp nghi ngờ đừng ngần ngại hỏi ý kiến bác sĩ hay dược sĩ.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [
            `Không có báo cáo về dùng quá liều.
            Trong trường hợp khẩn cấp hoặc quá liều, gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.
            Ngoài ra, bạn cần ghi lại và mang theo danh sách những loại thuốc bạn đã dùng, bao gồm cả thuốc kê toa và thuốc không kê toa.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `K9275b`,
        pill_name: `Viên mật nghệ Cholapan OPC điều trị các chứng gan đau, mật kém, đau dạ dày (5 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 8000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Cholapan.png`],
        pill_indication: [
            `Thuốc Cholapan được chỉ định dùng trong các trường hợp sau:
            Ðiều trị các chứng gan đau, mật kém, đau dạ dày.
            Điều trị các chứng đau vùng thượng vị, ợ chua, nóng rát vùng thượng vị, ăn uống khó tiêu, đầy hơi, sình bụng.
            Cải thiện các triệu chứng táo bón, chán ăn.`
        ],
        pill_contraindication: [
            `Thuốc Cholapan chống chỉ định trong các trường hợp sau:
            Không dùng cho phụ nữ có thai.
            Không dùng cho trẻ em dưới 5 tuổi do dạng bào chế không phù hợp.
            Không dùng cho bệnh nhân mẫn cảm với bất kỳ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Uống trước bữa ăn chính.`
        ],
        pill_dosage: [
            `Người lớn: Uống 2 viên/lần x 2 lần/ngày.
            Trẻ em từ 5 tuổi đến dưới 15 tuổi: 1 viên/lần x 2 lần/ngày.
            Trong trường hợp đau nhiều uống liều gấp đôi.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`chưa ghi nhận`],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [],
        pill_interactions: [`Chưa tìm thấy thông tin về tương tác thuốc.`
        ],
        pill_precautions: [`Chưa có báo cáo.`
        ],
        pill_overdose: [`Chưa có báo cáo. Tuy nhiên khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_overdose_handling: [`Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến Trạm y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `J7525q`,
        pill_name: `Thuốc Amalgel 500mg An Thiên điều trị loét dạ dày - tá tràng, tăng acid dạ dày (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 78000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Amalgel.png`],
        pill_indication: [`Thuốc Amalgel dùng điều trị các trường hợp loét dạ dày - tá tràng, tăng acid dạ dày, viêm thực quản trào ngược`
        ],
        pill_contraindication: [
            `Thuốc Amalgel chống chỉ định trong các trường hợp sau:
            Có tiền sử mẫn cảm với thành phần của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc dạng viên dùng đường uống. Uống trọn viên thuốc với một ly nước.`
        ],
        pill_dosage: [`Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`chưa có dữ liệu`],
        pill_pharmacokinetics: [`chưa có dữ liệu`],
        pill_sideEffects: [],
        pill_interactions: [
            `Tương tác thuốc có thể ảnh hưởng đến hoạt động của thuốc hoặc gây ra các tác dụng phụ.
            Bệnh nhân nên báo cho bác sĩ hoặc dược sĩ danh sách những thuốc và các thực phẩm chức năng bạn đang sử dụng. Không nên dùng hay tăng giảm liều lượng của thuốc mà không có sự hướng dẫn của bác sĩ.
            Vui lòng xem thêm các thông tin về thuốc trong tờ hướng dẫn sử dụng thuốc đính kèm sản phẩm.`
        ],
        pill_precautions: [`Vui lòng xem thêm các thông tin về thuốc trong tờ hướng dẫn sử dụng thuốc đính kèm sản phẩm.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [`Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `T6428z`,
        pill_name: `Thuốc Ampelop 625mg Traphaco điều trị viêm loét dạ dày, hành tá tràng (9 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 15000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Ampelop.png`],
        pill_indication: [
            `Thuốc Ampelop được chỉ định dùng trong các trường hợp sau:
            Điều trị viêm loét dạ dày - hành tá tràng do tăng tiết acid dịch vị.
            Dự phòng tái phát viêm loét dạ dày - hành tá tràng bao gồm do tăng tiết acid dịch vị và do Helicobacter pylori.
            Phối hợp với kháng sinh theo phác đồ điều trị được dùng trong các trường hợp viêm loét dạ dày - hành tá tràng có liên quan tới Helicobacter pylori.`
        ],
        pill_contraindication: [
            `Thuốc Ampelop chống chỉ định bệnh nhân mẫn cảm với bất cứ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Uống trọn viên thuốc với một ly nước. Uống sau bữa ăn.`
        ],
        pill_dosage: [
            `Phác đồ điều trị đơn độc
            Uống 2 viên/lần x 3 lần/ngày, uống sau bữa ăn. Đợt điều trị 30 ngày liên tục.
            Phác đồ điều trị làm tăng hiệu lực diệt Helicobacter Pylori
            Điều trị liên tục trong 30 ngày kết hợp với kháng sinh.
            10 ngày đầu:
            Ampelop 2 viên/lần x 3 lần/ngày. Uống sau bữa ăn. 
            Amoxicillin 1000mg/lần x 2 lần/ngày. Uống vào buổi sáng và buổi tối.
            Metronidazol 500mg/lần x 2 lần/ngày. Uống vào buổi sáng và buổi tối.
            20 ngày tiếp theo:
            Ampelop 2 viên/lần x 3 lần/ngày. Uống sau bữa ăn.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Theo Y học hiện đại: Trong cây chè dây có chứa thành phần chính là flavonoid, đây là một hoạt chất có tác dụng giảm đau rất hiệu quả, ngoài ra còn giúp làm lành các vết loét tại niêm mạc dạ dày. Bên cạnh đó thành phần flavonoid còn mang đến công dụng tiêu diệt xoắn khuẩn Helicobacter pylori, đây là một loại khuẩn gây ra viêm loét ở dạ dày, tá tràng. Cây chè dây còn có công dụng giải độc gan, thải loại độc tố và an thần.
            Theo Y học cổ truyền: Chè dây tính mát, giúp thanh nhiệt, giải độc, hỗ trợ tiêu hóa, giảm cơn đau nhức, chữa viêm loét dạ dày, chống oxy hóa, chống viêm nhiễm, kháng khuẩn, trị viêm kết mạc, cảm mạo, viêm họng, viêm gan thể hoàng đản, mụn nhọt.`
        ],
        pill_pharmacokinetics: [`Chưa có dữ liệu về Dược động học.`
        ],
        pill_sideEffects: [
            `Chưa ghi nhận được báo cáo về phản ứng có hại của thuốc.
            Thông báo ngay cho Bác sĩ hoặc Dược sĩ những phản ứng có hại gặp phải khi sử dụng thuốc.`
        ],
        pill_interactions: [
            `Chưa có dữ liệu về tương tác thuốc.`
        ],
        pill_precautions: [
            `Thận trọng khi sử dụng cho phụ nữ có thai hoặc đang cho con bú. Cần hỏi ý kiến bác sĩ trước khi dùng.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [
            `Không có dữ liệu về sử dụng thuốc quá liều, không dùng quá liều chỉ định của thuốc.
            Trường hợp sử dụng thuốc quá liều, cần tích cực theo dõi để có biện pháp xử trí kịp thời.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `I9754v`,
        pill_name: `Viên nhai Ulcersep 262.5mg OPV giảm khó chịu ở dạ dày, chống tiêu chảy (10 vỉ x 10 viên`,
        pill_brand: ``,
        pill_tags: [`Thuốc dạ dày`],
        pill_quantity: 0,
        pill_sellPrice: 50000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Ulcersep.png`],
        pill_indication: [
            `Thuốc Ulcersep được chỉ định dùng trong các trường hợp sau: Làm giảm các triệu chứng khó chịu ở dạ dày, ăn không tiêu, ợ nóng và buồn nôn. Làm giảm tiêu chảy.`
        ],
        pill_contraindication: [
            `Thuốc Ulcersep chống chỉ định trong các trường hợp sau:
            Mẫn cảm với aspirin hoặc các thuốc salicylat khác.
            Mẫn cảm với bất kỳ thành phần nào của thuốc.
            Trẻ em dưới 16 tuổi.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Dùng đường nhai.
            Nhai viên thuốc trước hoặc sau bữa ăn.`
        ],
        pill_dosage: [
            `Người lớn và trẻ em từ 16 tuổi trở lên: 2 viên.
            Lặp lại liều dùng trên mỗi 1/2 -1 giờ nếu cần. Không quá 16 viên trong 24 giờ.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Bismuth subsalicylat có tác dụng kháng khuẩn, tác động trực tiếp bảo vệ màng nhày và có tính trung hòa acid yếu.
            Salicylat khi ngấm vào thành ruột có tác dụng kháng viêm, giảm phù nề ruột, giảm hiện tượng khó tiêu, chán ăn trong thời gian tiêu chảy.`
        ],
        pill_pharmacokinetics: [
            `Bismuth subsalicylat được biến đổi thành bismuth carbonat và natri salicylat ở ruột non.
            Sinh khả dụng đường uống của bismuth subsalicylat rất thấp. Khả năng phân bố của bismuth trong các mô của cơ thể người rất ít. Mặc dù bismuth cũng được bài tiết qua mật, nhưng thanh thải qua thận là con đường bài tiết nguyên phát của bismuth. Phần còn lại của thuốc được bài tiết qua phân dưới dạng muối bismuth không hòa tan. Sau khi uống liều khuyến cáo hằng ngày tối đa cho người lớn, thời gian bán hủy sinh học trung bình khoảng 33 giờ và nồng độ đỉnh của bismuth trong huyết tương đạt dưới 35ppb.
            Salicylat hấp thu qua ruột và nhanh chóng phân bố vào trong các mô của cơ thể. Nồng độ đỉnh trong huyết tương sau liều dùng tối đa hằng ngày khoảng 110microgram/ml. Salicylat được bài tiết nhanh ra khỏi cơ thể và thời gian bán hủy sinh học trung bình khoảng 4 - 5,5 giờ.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Ulcersep, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường gặp, ADR >1/100
            Nhuộm đen phân hoặc lưỡi, làm biến màu răng (có phục hồi).
            Ít gặp, 1/1000<ADR<1/100
            Buồn nôn, nôn.
            Hiếm gặp, 1/10000 ≤ADR <1/1000
            Độc tính thận, bệnh não, độc tính thần kinh.
            Hướng dẫn cách xử trí ADR
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Nếu dùng thuốc chống đông máu, thuốc chữa bệnh tiểu đường, bệnh gout hay viêm khớp, cần tham khảo ý kiến bác sỹ trước khi dùng thuốc này.`
        ],
        pill_precautions: [
            `Vì tiêu chảy có thể gây mất nước, cần uống đủ nước để bù nước.
            Ulcersep có chứa salicylat, nếu dùng thuốc kèm với aspirin mà xuất hiện chứng ù tai, nên ngưng dùng thuốc.
            Ulcersep không chứa aspirin, nhưng nếu đã từng bị dị ứng với aspirin hoặc với các salicylat khác không chứa aspirin thì không nên dùng thuốc vì có thể xảy ra những phản ứng không mong muốn.
            Nếu tiêu chảy có kèm sốt cao hoặc kéo dài hơn 2 ngày, nên đi khám bác sỹ.
            Bệnh nhân bị suy thận.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [
            `Triệu chứng: Buồn nôn, nôn mửa, tiêu chảy, thở chậm, ù tai, sốt, tim đập nhanh, lơ mơ, tê mất cảm giác, ngứa ran và co giật.
        Cách xử trí: Gây nôn hoặc rửa dạ dày, sử dụng than hoạt tính. Truyền dịch, lọc máu, thẩm phân phúc mạc hoặc truyền máu là cần thiết cho những trường hợp quá liều nghiêm trọng. Theo dõi nồng độ salicylat trong huyết thanh cho đến khi nồng độ thuốc giảm dưới mức nhiễm độc.
        Theo dõi và điều trị nâng đỡ các chức năng sống còn, theo dõi hiện tượng phù phổi và co giật để có hướng điều trị thích hợp.`
        ],
        pill_viewed: 10
    },


    //thuốc trị táo bón



    {
        pill_id: `G7929x`,
        pill_name: `Thuốc Bisalaxyl Vidipha điều trị táo bón (5 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 4800,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Bisalaxyl.png`],
        pill_indication: [
            `Thuốc Bisalaxyl 5mg được chỉ định dùng trong các trường hợp sau:
            Điều trị táo bón.
            Thải sạch ruột trước và sau phẫu thuật.
            Chuẩn bị X - quang đại tràng.`
        ],
        pill_contraindication: [
            `Thuốc Bisalaxyl 5 mg chống chỉ định đối với các tình trạng phẫu thuật ổ bụng, tắc ruột, viêm ruột thừa, chảy máu trực tràng, viêm dạ dày - ruột.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Uống thuốc theo chỉ dẫn của bác sĩ. Nếu bạn đang tự điều trị, hãy làm theo tất cả các hướng dẫn trên bao bì của thuốc. Nếu bạn không chắc chắn về bất cứ thông tin nào, hãy hỏi bác sĩ hoặc dược sĩ.
            Nuốt toàn bộ thuốc. Không nghiền, nhai, bẻ viên thuốc hoặc dùng thuốc trong vòng 1 giờ sau khi dùng thuốc kháng acid, sữa, hoặc các sản phẩm làm từ sữa nhằm tránh phá hủy lớp phủ của viên nén, tăng nguy cơ của bệnh đau bao tử và buồn nôn.
            Liều lượng thuốc được dựa trên tuổi tác, tình trạng sức khỏe và sự thích ứng với việc điều trị. Không tăng liều hoặc uống thuốc này thường xuyên hơn chỉ định. Không dùng thuốc quá 7 ngày trừ khi có chỉ định của bác sĩ. Tác dụng phụ nghiêm trọng có thể xảy ra với việc lạm dụng thuốc.
            Có thể mất 6 - 12 giờ trước khi thuốc phát huy tác dụng giúp đi ngoài. Hãy cho bác sĩ biết nếu tình trạng bệnh vẫn tồn tại hoặc nặng hơn, hoặc bị chảy máu từ trực tràng. Hãy đi cấp cứu nếu bạn cảm thấy tình trạng nghiêm trọng hơn.`
        ],
        pill_dosage: [
            `Bisacodyl dùng được cho mọi lứa tuổi.
            Điều trị táo bón:
                Người lớn và trẻ em trên 10 tuổi: 1 hoặc 2 viên bao (5 hoặc 10 mg) uống vào buổi tối. Đôi khi có thể dùng liều cao hơn nếu cần (có thể tới 3 hoặc 4 viên bao 5 mg).
                Trẻ em dưới 10 tuổi: 1 viên bao 5 mg vào buổi tối.
                Người cao tuổi: Dùng liều người lớn (đã thử lâm sàng ở người trên 65 tuổi, không thấy phản ứng không mong muốn nào xảy ra).
                Trẻ em dưới 6 tuổi: Không nên uống, do phải nuốt cả viên.
            Dùng thay thế thụt tháo phân:
                Người lớn và trẻ em trên 10 tuổi: 2 viên bảo 5 mg vào buổi tối, sau đó 1 viên đạn trực tràng 10 mg vào buổi sáng.
                Trẻ em dưới 10 tuổi: 1 viên bao 5 mg vào buổi tối, sau đó 1 viên đạn trực tràng 5 mg vào buổi sáng.
            Dùng để chuẩn bị chụp X - quang đại tràng:
                Người lớn và trẻ em trên 10 tuổi: Mỗi tối dùng 2 viên 5 mg trong 2 tối liền, trước khi chụp chiếu.
                Trẻ em dưới 10 tuổi: Mỗi tối dùng 1 viên trong 2 tối liền, trước khi chụp, chiếu.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Bisacodyl là thuốc nhuận tràng tác động tại chỗ thuộc nhóm triarylmethane, sau khi bị thủy phân sẽ kích thích niêm mạc ruột gây tăng nhu động ruột.
            Bisacodyl bị thủy phân nhờ enzym của niêm mạc ruột thành dạng desacetyl bisacodyl được hấp thu và đào thải một phần qua nước tiểu và mật dưới dạng glucuronide. Nhờ sự phân tách của vi khuẩn, thành phần hoạt chất diphenol tự do được thành lập trong ruột già. Công thức Bisacodyl bền vững với dịch vị và dịch ruột non, do đó viên bao phim Bisacodyl đến ruột già mà không bị hấp thụ đáng kể và nhờ vậy tránh được lưu chuyển gan ruột.`
        ],
        pill_pharmacokinetics: [
            `Bisacodyl được hấp thu rất ít khi uống, chuyển hóa ở gan và thải trừ qua nước tiểu. Dùng đường uống Bisacodyl thải trừ sau 6 – 8 giờ.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Bisalaxyl 5 mg, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường xảy ra ở đường tiêu hóa khoảng 15 – 25%.
            Thường gặp: Có thể xuất hiện triệu chứng đau dạ dày/đau bụng, chuột rút, buồn nôn, tiêu chảy hoặc yếu trong người. 
            Ít gặp: Kích ứng, gây cảm giác rát niêm mạc trực tràng và gây viêm trực tràng nhẹ.
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Thuốc lợi tiểu giữ kali hoặc các chất bổ sung kali: Dùng các thuốc nhuận tràng lâu dài hoặc quá liều có thể làm giảm nồng độ kali huyết thanh do làm mất kali quá nhiều qua đường ruột, thuốc nhuận tràng có thể ảnh hưởng đến tác dụng giữ kali của các thuốc lợi tiểu nói trên.
            Bisacodyl làm giảm nồng độ digoxin trong huyết thanh chút ít, không quan trọng về mặt lâm sàng, có thể tránh được bằng cách uống bisacodyl 2 giờ trước digoxin.
            Dùng phối hợp các thuốc kháng acid, các thuốc đối kháng thụ thể H2 như cimetidin, famotidin, nizatidin và ranitidin, hoặc sữa với bisacodyl trong vòng 1 giờ sẽ làm cho dạ dày và tá tràng bị kích ứng do thuốc tan quá nhanh.`
        ],
        pill_precautions: [
            `Viên bao bisacodyl được sản xuất để chỉ phân rã ở ruột, do đó không được nhai thuốc trước khi uống; các thuốc kháng acid và sữa cũng phải uống cách xa 1 giờ.
            Dùng thuốc dài ngày có thể dẫn đến đại tràng mất trương lực, không hoạt động và chứng giảm kali máu, vì vậy cần tránh dùng các thuốc nhuận tràng kéo dài quá 1 tuần, trừ khi có hướng dẫn của thầy thuốc.
            Không sử dụng thuốc nếu viên thuốc bị biến màu, nứt, vỡ; vỉ thuốc bị rách; chai thuốc bị nứt, mất nhãn; phải ngưng dùng thuốc ngay và thông báo cho bác sĩ khi gặp những triệu chứng dị ứng.
            Không dùng thuốc quá hạn dùng ghi trên nhãn.
            Để xa tầm tay trẻ em.`
        ],
        pill_overdose: [
            `Triệu chứng: Đau bụng dưới có thể kèm với dấu hiệu mất nước, đặc biệt ở người cao tuổi và trẻ em.`
        ],
        pill_overdose_handling: [
            `Xử trí: Ở những nơi có điều kiện nên rửa dạ dày. Cần duy trì bù nước và theo dõi kali huyết thanh. Thuốc chống co thắt có thể phần nào có giá trị. Đặc biệt chú ý cân bằng thể dịch ở người cao tuổi và trẻ nhỏ. Không có thuốc giải độc đặc hiệu.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `T6244n`,
        pill_name: `Viên nhuận tràng Ovalax 5mg Traphaco điều trị táo bón, làm sạch ruột (1 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 8000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Ovalax.png`],
        pill_indication: [
            `Thuốc Ovalax® được chỉ định dùng trong các trường hợp sau:
            Điều trị táo bón.
            Chuẩn bị X-quang đại tràng.
            Thải sạch ruột trước khi phẫu thuật.`
        ],
        pill_contraindication: [
            `Thuốc Ovalax® chống chỉ định trong các trường hợp sau:
            Tắc ruột, đau bụng cấp tính bao gồm viêm ruột thừa, viêm ruột cấp tính.
            Tình trạng mất nước nặng.
            Mẫn cảm với bisacodyl hoặc bất cứ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Dùng đường uống.
            Nuốt trọn vẹn cả viên thuốc (không được nhai, bẻ). Uống thuốc cách xa sữa hoặc các thuốc kháng acid 1 giờ. Nên uống thuốc vào buổi tối trước khi đi ngủ. `
        ],
        pill_dosage: [
            `Điều trị táo bón
            Người lớn và trẻ em trên 10 tuổi: 1 - 2 viên/lần/ngày.
            Trẻ em 4 - 10 tuổi: 1 viên/lần/ngày. Nếu điều trị táo bón mạn tính hoặc kéo dài phải theo sự chỉ dẫn của bác sĩ.
            Chuẩn bị X-quang đại tràng hoặc phẫu thuật
            Theo chỉ dẫn của bác sĩ. Thường sử dụng phối hợp thuốc uống và thuốc đặt trực tràng để tháo sạch ruột hoàn toàn.
            Người lớn và trẻ em trên 10 tuổi: Uống 2 viên vào buổi sáng và 2 viên vào buổi tối trước ngày làm thủ thuật và đặt trực tràng 1 viên 10 mg vào buổi sáng hôm sau, trước khi chụp chiếu hoặc phẫu thuật.
            Trẻ em 4 - 10 tuổi: Uống 1 viên vào buổi tối trước ngày làm thủ thuật và đặt trực tràng 1 viên 5 mg vào buổi sáng hôm sau, trước khi chụp chiếu hoặc phẫu thuật. 
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Bisacodyl là thuốc nhuận tràng tiếp xúc thuộc nhóm dẫn chất của diphenylmethan. Thuốc có tác dụng trực tiếp lên cơ trơn ruột, kích thích đám rối thần kinh trong thành ruột chủ yếu ở đại tràng nên làm tăng nhu động đại tràng. Đồng thời, ức chế tái hấp thu nước ở ruột, dẫn đến tăng tích lũy nước, điện giải trong lòng đại tràng. Do đó, bisacodyl kích thích đại tiện, giảm thời gian đại tiện và làm mềm phân. 
            Bisacodyl tác động chủ yếu ở phần dưới của đường tiêu hóa và không ảnh hưởng đến quá trình tiêu hóa và hấp thu dinh dưỡng ở ruột non.`
        ],
        pill_pharmacokinetics: [
            `Sau khi uống, bisacodyl nhanh chóng bị thủy phân bởi enzym esterase ở ruột tạo thành dạng hoạt tính là bis (p-hydroxyphenyl)-pyridyl-2-methan (BHPM). Nồng độ huyết tương của BHPM đạt đỉnh từ 4 - 10 giờ sau uống, tác dụng nhuận tràng xuất hiện sau uống 6 - 12 giờ. Tác dụng nhuận tràng của bisacodyl không tương quan với nồng độ BHPM trong huyết tương mà thay vào đó, BHPM tác động tại chỗ ở phần dưới của đường tiêu hóa. Đó là lý do bisacodyl được bào chế dưới dạng viên bao tan trong ruột để có thể được giải phóng chủ yếu tại đại tràng - vị trí tác động mong muốn. 
            Lượng nhỏ thuốc hấp thu được liên hợp ở thành ruột và gan tạo thành dạng bất hoạt BHPM glucuronid. Nửa đời sinh học của BHPM glucuronid khoảng 16,5 giờ. Trung bình 51,8 % lượng thuốc được thải trừ qua phân ở dạng BHPM và trung bình 10,5 % lượng thuốc được thải trừ qua nước tiểu dưới dạng BHPM glucuronid.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Ovalax®, bạn có thể gặp các tác dụng không mong muốn (ADR). 
            Các tác dụng không mong muốn khi dùng bisacodyl ngắn ngày thường nhẹ và tự hết. Tác dụng không mong muốn thường gặp nhất là đau bụng, ỉa chảy. Nên nuốt trọn vẹn cả viên thuốc (không được nhai, bẻ), giảm liều nếu bị ỉa chảy.
            Hệ tiêu hóa
            Thường gặp: Đau bụng, co thắt bụng, tiêu chảy, buồn nôn.
            Ít gặp: Nôn, đầy bụng, cảm giác khó chịu ở hậu môn, trực tràng, máu lẫn trong phân.
            Hiếm gặp: Viêm đại tràng.
            Chuyển hóa và dinh dưỡng
            Hiếm gặp: Mất nước.
            Hệ thần kinh.
            Ít gặp: Chóng mặt.
            Hiếm gặp: Ngất.
            Hệ thống miễn dịch
            Hiếm gặp: Phản ứng phản vệ, phù mạch, quá mẫn.  
            Hướng dẫn cách xử trí ADR
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Sử dụng Ovalax® đồng thời cùng các thuốc kháng acid dịch vị, sữa làm giảm tính kháng acid của lớp bao tan trong ruột. Thuốc có thể tan rã sớm tại dạ dày có thể dẫn đến khó tiêu và kích thích dạ dày.
            Dùng liều cao Ovalax® đồng thời cùng thuốc lợi tiểu và corticosteroid làm tăng nguy cơ mất cân bằng điện giải. Mất cân bằng điện giải có thể dẫn đến tăng nhạy cảm với glycosid tim.`
        ],
        pill_precautions: [
            `Không nên dùng thuốc quá 5 ngày mà không tìm hiểu nguyên nhân táo bón.
            Dùng thuốc kéo dài có thể dẫn đến mất cân bằng nước, điện giải và hạ kali máu. Mất nước đường ruột có thể dẫn tới tình trạng mất nước, có hại cho người suy thận, người cao tuổi, cần thận trọng khi dùng thuốc cho đối tượng này.
            Thuốc nhuận tràng không giúp giảm cân.
            Dùng thuốc kéo dài có thể gây mất trương lực cơ, giảm hoạt động ruột.
            Có thể xuất hiện máu trong phân, nhưng tình trạng này thường nhẹ và tự khỏi.
            Chóng mặt và/hoặc ngất đã được ghi nhận ở những bệnh nhân dùng thuốc chứa bisacodyl. Những chi tiết có được từ những trường hợp này gợi ý rằng các triệu chứng đó phù hợp với chứng ngất khi đại tiện (ngất do rặn gắng sức), hoặc với phản xạ thần kinh phế vị do đau bụng liên quan đến chứng táo bón làm cho bệnh nhân phải dùng các thuốc nhuận tràng chứ không nhất thiết liên quan đến việc dùng bisacodyl.
            Có những báo cáo về đau bụng và tiêu chảy lẫn máu sau khi dùng bisacodyl. Một số trường hợp đã biết là do liên quan đến tình trạng thiếu máu niêm mạc đại tràng.
            Trẻ em dưới 10 tuổi dùng Ovalax® cần có sự tư vấn của cán bộ y tế. Không nên dùng cho trẻ dưới 4 tuổi vì dạng bào chế không phù hợp.
            Thuốc có chứa thành phần lactose, bệnh nhân có rối loạn di truyền hiếm gặp không dung nạp galactose, thiếu hụt enzym lapp - lactase hoặc bất thường hấp thu glucose - galactose không nên dùng thuốc này.`
        ],
        pill_overdose: [
            `Tiêu chảy, co thắt ở bụng, có biểu hiện mất nước, kali và chất điện giải trên lâm sàng. Sử dụng quá liều dài ngày có thể gây tiêu chảy mạn tính, đau bụng, hạ kali máu, cường aldosteron thứ cấp, sỏi thận, tổn thương ống thận, nhiễm kiềm chuyển hóa, suy nhược cơ thứ cấp do hạ kali máu kết hợp với tình trạng lạm dụng thuốc nhuận tràng mãn tính.`
        ],
        pill_overdose_handling: [
            `Giảm tối đa sự hấp thu bisacodyl bằng cách gây nôn hoặc rửa dạ dày. Duy trì bù nước và theo dõi kali huyết thanh, đặc biệt chú ý điều chỉnh cân bằng điện giải, nhất là ở người già và trẻ em. Thuốc chống co thắt có thể phần nào có giá trị.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `K7643m`,
        pill_name: `Thuốc BisacodylDHG điều trị táo bón, thải sạch ruột (4 vỉ x 25 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 7000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 25 Viên`,
        pill_imgAddress: [`images/pill/Thuốc_điều_trị_táo_bón_-_Bisacodyl.png`],
        pill_indication: [
            `Thuốc BisacodyIDHG được chỉ định dùng trong các trường hợp sau:
            Điều trị táo bón. 
            Thải sạch ruột trước và sau phẫu thuật. 
            Chuẩn bị X- quang đại tràng.`
        ],
        pill_contraindication: [],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Dùng dạng viên bao bisacodyl tan trong ruột, do đó không được nhai thuốc trước khi uống, các thuốc kháng acid và sữa cũng phải uống cách xa 1 giờ.`
        ],
        pill_dosage: [
            `Điều trị táo bón: 
                Người lớn và trẻ em trên 10 tuổi: Uống 1 đến 2 viên vào buổi tối. Có thể dùng liều cao hơn (3 hoặc 4 viên) nếu cần. 
                Trẻ em 6 - 10 tuổi: Uống 1 viên vào buổi tối. 
            Dùng thay thế thụt tháo phân: 
                Người lớn và trẻ em trên 10 tuổi: Uống 2 viên vào buổi tối. 
                Trẻ em 6 - 10 tuổi: Uống 1 viên vào buổi tối. 
            Dùng để chuẩn bị chụp X-quang đại tràng: 
                Người lớn và trẻ em trên 10 tuổi: Uống 2 viên vào mỗi tối, trong 2 đêm liền trước khi chụp chiếu. 
                Trẻ em 6 - 10 tuổi: Uống 1 viên vào mỗi tối, trong 2 đêm liền trước khi chụp chiếu. Do viên thuốc không thể chia nhỏ nên không dùng cho trẻ em dưới 6 tuổi.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Bisacodyl là thuốc nhuận tràng tác động tại chỗ thuộc nhóm triarylmethane, sau khi bị thủy phân sẽ kích thích niêm mạc ruột gây tăng nhu động ruột. Bisacodyl bị thủy phân nhờ enzym của niêm mạc ruột thành dạng desacetylbisacodyl được hấp thu và đào thải một phần qua nước tiểu và mật dưới dạng glucuronide. Nhờ sự phân tách của vi khuẩn, thành phần hoạt chất diphenol tự do được thành lập trong ruột già.`
        ],
        pill_pharmacokinetics: [
            `Bisacodyl được hấp thu rất ít khi uống, chuyển hóa ở gan và thải trừ qua nước tiểu. Dùng đường uống Bisacodyl thải trừ sau 6 - 8 giờ.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc BisacodyIDHG bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường gặp, ADR >1/100
            Nội tiết và chuyển hóa: Mất cân bằng dịch và điện giải.
            Hiếm gặp, ADR < 1/1000
            Hệ tiêu hóa: Đau bụng, buồn nôn.
            Hướng dẫn cách xử trí ADR
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Với thuốc lợi tiểu giữ kali hoặc các chất bổ sung kali: Bisacodyl có thể làm giảm tác dụng nếu dùng lâu dài hoặc dùng quá liều. Bisacodyl làm giảm nồng độ kali huyết thanh do làm mất kali quá nhiều qua đường ruột; có thể ảnh hưởng đến tác dụng giữ kali của các thuốc nói trên.
            Dùng phối hợp các thuốc kháng acid, thuốc đối kháng thụ thể H2 hoặc sữa với Bisacodyl trong vòng 1 giờ sẽ làm cho dạ dày và tá tràng bị kích ứng do thuốc bị tan quá nhanh. 
            Bisacodyl làm giảm nồng độ Digoxin, cần uống Bisacodyl 2 giờ trước khi dùng Digoxin.`
        ],
        pill_precautions: [],
        pill_overdose: [`Đau bụng dưới có thể kèm với dấu hiệu mất nước, đặc biệt ở người cao tuổi và trẻ em. `
        ],
        pill_overdose_handling: [
            `Bằng cách gây nôn hoặc rửa dạ dày. Cần duy trì bù nước và theo dõi Kali huyết thanh. Có thể dùng thuốc chống co thắt khi cần thiết. Đặc biệt chú ý cân bằng thể dịch ở người cao tuổi và trẻ nhỏ. Không có thuốc giải độc đặc hiệu.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `Q7543z`,
        pill_name: `Viên nhuận trường Phytilax Sagopha thông mật, điều trị táo bón (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 7000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Phytilax.png`],
        pill_indication: [
            `Thuốc Phytilax được chỉ định dùng trong các trường hợp sau:
            Thông mật, nhuận trường, trị táo bón nói chung và đặc biệt cho người già thiểu năng gan mật.`
        ],
        pill_contraindication: [
            `Thuốc Phytilax chống chỉ định trong các trường hợp sau:
            Người đang bị tiêu chảy, người viêm tắc mật, người thể hàn, dương hư hàn, tiểu đường.
            Phụ nữ có thai và cho con bú.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Thuốc nhuận tràng Phytilax dạng viên bao đường dùng đường uống.`
        ],
        pill_dosage: [
            `Liều dùng thông thường trong điều trị nhuận trường: 1 viên uống sau bữa ăn tối, ngày 1 lần.
            Liều dùng xổ: 2 - 3 viên uống sau bữa ăn tối, ngày 1 lần.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`Chưa có báo cáo.`],
        pill_pharmacokinetics: [`Chưa có báo cáo.`],
        pill_sideEffects: [
            `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Tương tác thuốc có thể ảnh hưởng đến hoạt động của thuốc hoặc gây ra các tác dụng phụ. Nên báo cho bác sĩ hoặc dược sĩ danh sách những thuốc và các thực phẩm chức năng bạn đang sử dụng. Không nên dùng hay tăng giảm liều lượng của thuốc mà không có sự hướng dẫn của bác sĩ.`
        ],
        pill_precautions: [`Chưa có báo cáo.`],
        pill_overdose: [],
        pill_overdose_handling: [
            `Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `L75431`,
        pill_name: `Bột Forlax Ipsen điều trị táo bón (20 gói)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 5000,
        pill_buyPrice: 2000,
        pill_packKind: `20 gói`,
        pill_imgAddress: [`images/pill/Forlax.png`],
        pill_indication: [
            `Thuốc Forlax được chỉ định dùng trong trường hợp:
                Ðiều trị táo bón triệu chứng ở người lớn và trẻ em trên 8 tuổi.
                Trước khi điều trị, nên loại trừ các rối loạn thực thể. Ở trẻ em, Forlax chỉ là biện pháp điều trị táo bón tạm thời kết hợp với chế độ ăn thích hợp và lối sống hợp vệ sinh, điều trị tối đa là 3 tháng.
                Nếu triệu chứng vẫn còn mặc dù đã thực hiện chế độ ăn uống thích hợp và lối sống hợp vệ sinh, nên tìm và điều trị nguyên nhân.`
        ],
        pill_contraindication: [
            `Thuốc Forlax chống chỉ định trong các trường hợp sau:
            Bệnh viêm ruột nặng (viêm loét đại tràng, bệnh Crohn) hoặc phình đại tràng nhiễm độc.
            Thủng đường tiêu hoá hoặc có nguy cơ thủng đường tiêu hoá.
            Tắc ruột hoặc nghi ngờ tắc ruột, hẹp ruột triệu chứng.
            Hội chứng đau bụng không rõ nguyên nhân.
            Quá mẫn với hoạt chất hoặc bất kỳ tá dược nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Thuốc Forlax dùng đường uống.
            Lượng thuốc trong mỗi túi phải được hòa tan trong 1 ly nước trước khi uống.`
        ],
        pill_dosage: [
            `Liều khuyến cáo: 1–2 gói (10–20 g) mỗi ngày, nên uống 1 lần vào buổi sáng.
            Liều hàng ngày nên được điều chỉnh theo đáp ứng lâm sàng, có thể từ 1 gói uống cách ngày (đặc biệt ở trẻ em) đến 2 gói/ngày.
            Forlax có hiệu quả trong vòng 24 – 48 giờ sau khi uống.
            Trẻ em: Không nên điều trị quá 3 tháng vì thiếu dữ liệu lâm sàng cho việc sử dụng trên 3 tháng. Sự hồi phục của nhu động ruột do thuốc sẽ được duy trì bằng chế độ ăn uống và lối sống vệ sinh.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Macrogol cao phân tử (4000) là những polymer dài thẳng liên kết với các phân tử nước bằng những cầu nối hydrogen. Khi uống vào, chúng làm tăng lượng dịch trong lòng ruột. Lượng dịch này không bị hấp thu, do đó dung dịch có tác dụng nhuận tràng.`
        ],
        pill_pharmacokinetics: [
            `Những dữ liệu dược động học khẳng định rằng macrogol 4000 không bị hấp thu cũng như không bị chuyển hoá trong đường tiêu hóa khi dùng đường uống.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Forlax, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường gặp, ADR > 1/100
            Dạ dày – ruột: Đau bụng, chướng bụng, tiêu chảy, buồn nôn.
            Ít gặp, 1/1000 < ADR < 1/100
            Dạ dày – ruột: Nôn, cảm giác đi tiêu gấp, đi tiêu không tự chủ.
            Rất hiếm gặp, ADR < 1/10000
            Miễn dịch: Phản ứng quá mẫn (sốc phản vệ, phù mạch, mày đay, phát ban, ngứa, ban đỏ).
            Không xác định tần suất
            Chuyển hoá: Rối loạn điện giải (giảm natri máu, giảm kali máu), mất nước, đặc biệt ở người cao tuổi.
            Hướng dẫn cách xử trí ADR
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.
            Lưu ý
            Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`
        ],
        pill_interactions: [`Chưa có báo cáo.`],
        pill_precautions: [
            `Điều trị táo bón với bất kỳ thuốc nào đều nên kết hợp với lối sống và chế độ ăn lành mạnh. (Ví dụ: Chế độ ăn nhiều chất lỏng và chất xơ, hoạt động thể lực thích hợp và luyện tập phản xạ của ruột.)
            Trước khi điều trị nên loại trừ các rối loạn thực thể.
            Các trường hợp quá mẫn (sốc phản vệ, phù mạch, mày đay, phát ban, ngứa, ban đỏ) với những thuốc có chứa macrogol (polyethylene glycol) đã được báo cáo.
            Hiếm gặp phản ứng quá mẫn nặng và co thắt phế quản do trong thành phần của thuốc có sulfur dioxide.
            Trong trường hợp bị tiêu chảy, thận trọng ở bệnh nhân dễ bị rối loạn cân bằng nước – điện giải (người cao tuổi, bệnh nhân suy giảm chức năng gan, thận hoặc bệnh nhân dùng thuốc lợi tiểu) và cân nhắc việc điều chỉnh điện giải.
            Đã ghi nhận các trường hợp hít vào phế quản khi đưa lượng lớn polyethylene glycol và chất điện giải vào cơ thể qua ống thông mũi dạ dày. Trẻ em thiểu năng hệ thần kinh có rối loạn chức năng vùng miệng đặc biệt hay gặp nguy cơ này.
            Forlax không chứa nhiều đường và polyol, có thể kê đơn cho bệnh nhân đái tháo đường hoặc bệnh nhân đang trong chế độ ăn kiêng không galactose.`
        ],
        pill_overdose: [
            `Triệu chứng: Tiêu chảy do dùng thuốc quá liều sẽ hết khi ngừng thuốc hoặc giảm liều.`
        ],
        pill_overdose_handling: [
            `Xử trí: Mất dịch quá nhiều do tiêu chảy hoặc nôn có thể cần phải bù điện giải.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `H7643c`,
        pill_name: `Bột nhuận tràng Constipass Wellcare bổ trợ nhuận tràng, khắc phục chứng táo bón (20 gói)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 19800,
        pill_buyPrice: 2000,
        pill_packKind: `20 gói`,
        pill_imgAddress: [`images/pill/Constipass.png`],
        pill_indication: [
            `Constipass được chỉ định đặc biệt trong trường hợp sau:
            Bổ trợ nhuận tràng, thông qua hành động thẩm thấu, điều hòa ruột một cách tự nhiên.
            Không được hấp thụ hoặc không lên men trong ruột, không gây kích ứng niêm mạc và được loại bỏ trong phân ở dạng chưa biến đổi.
            Chỉ định đặc biệt trong trường hợp táo bón mãn tính và thỉnh thoảng đi tiêu không đều. 
            Làm mềm phân tạo điều kiện cho việc loại thải ra mà không gây ra co rút hoặc đau bụng, hoặc tình trạng khẩn cấp.`
        ],
        pill_contraindication: [],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi: 20 - 30g/ngày, tương đương với 4 - 6 gói/ngày.
            Trẻ từ 2 - 11 tuổi: 1 - 1.5g/kg cân nặng/ngày, tương đương từ 2 - 4 gói/ngày, từ 3 - 6 ngày. Liều điều trị duy trì: 0.5 - 1g/kg cân nặng/ngày cho đến khi đạt được kết quả như mong muốn.
            Trẻ em dưới 2 tuổi cần tư vấn của bác sĩ.
            (Khuyến nghị: Từ 6 tháng - 2 tuổi: 0.8g/kg cân nặng/ngày, tương đương với 1 - 2 gói/ngày).
            Xé túi dọc theo vạch chỉ "một nửa liều" và pha loãng lượng chứa trong 62,5 ml nước (khoảng một nửa ly nước).
            Đối tượng sử dụng
            Dùng cho người lớn và trẻ từ 2 tuổi trở lên. Trẻ dưới 2 tuổi cần có sự tư vấn từ bác sĩ.`
        ],
        pill_pharmacology: [``],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [`Chưa có báo cáo về tác dụng phụ của sản phẩm.`],
        pill_interactions: [],
        pill_precautions: [
            `Không dùng Constipass trong trường hợp:
                Hẹp ruột
                Thủng ruột
                Bệnh viêm ruột (ví dụ như bệnh Crohn, viêm loét đại tràng)
                Không dùng trong trường hợp tắc ruột.
                Trẻ em dưới 2 tuổi, phụ nữ mang thai hoặc cho con bú chỉ nên sử dụng Constipass sau khi tham khảo ý kiến bác sĩ.
            Không nên vượt quá số lượng được đề xuất, vì liều cao hơn có thể gây ra tác dụng phụ không mong muốn.
            Không sử dụng sản phẩm trong hơn 30 ngày liên tiếp. Nếu các triệu chứng kéo dài hơn 30 ngày liên tục, hãy tham khảo ý kiến bác sĩ.
            Không dùng trong trường hợp không dung nạp với sản phẩm.
            Không dùng trường hợp quá mẫn đã biết với các thành phần và polyethylen glycol.
            Mỗi gói là dùng một lần và chỉ nên được mở tại thời điểm dùng.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },
    {
        pill_id: `E6745v`,
        pill_name: `Bột pha hỗn dịch nhuận tràng PEGinpol 5g Buona cải thiện tình trạng táo bón cho trẻ (20 gói)`,
        pill_brand: ``,
        pill_tags: [``],
        pill_quantity: 0,
        pill_sellPrice: 12750,
        pill_buyPrice: 2000,
        pill_packKind: `20 gói`,
        pill_imgAddress: [`images/pill/Peginpol.png`],
        pill_indication: [
            `Chỉ dùng bột nhuận tràng PEGinpol Macrogol cho các đối tượng trẻ nhỏ và người lớn có tình trạng táo bón trong các trường hợp cụ thể sau:
            Trẻ nhỏ và người lớn bị táo bón chức năng cấp và mãn tính hoặc thỉnh thoảng nhu động ruột bất thường.
            Ở trẻ em: Thích hợp với trẻ từ 6 tháng tuổi, trẻ < 6 tháng có thể sử dụng nhưng cần thăm khám và chỉ định trực tiếp từ bác sĩ.`
        ],
        pill_contraindication: [],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Pha mỗi gói bột nhuận tràng PEGinpol Macrogol 5 gram trong 70ml nước hoặc 1 thìa 2g với 25ml nước. Có thể pha trước và bảo quản trong tủ lạnh để chia làm nhiều lần uống trong ngày.`
        ],
        pill_dosage: [
            `Trẻ từ 6 tháng đến 2 tuổi (tới 12kg): 0,8g/kg/ngày – tương đương 1-2 gói hoặc 2-4 thìa/ngày.
            Trẻ từ 2 tuổi đến 11 tuổi (từ 12kg tới 20kg): 1g/kg/ngày – tương đương 2-4 gói hoặc 4-8 thìa/ngày.
            Trẻ trên 11 tuổi (hoặc trên 20kg): 20-30g/ngày – tương đương 4-6 gói hoặc 8-12 thìa/ngày.`
        ],
        pill_pharmacology: [``],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [
            `Chưa có thông tin về tác dụng phụ của sản phẩm.`
        ],
        pill_interactions: [],
        pill_precautions: [
            `Trẻ dưới 6 tháng tuổi cần sự chỉ định của bác sĩ.
            Không dùng quá liều khuyến cáo.
            Không dùng PEGinpol trong trường hợp: Tắc ruột, thủng ruột, hẹp đường ruột, các bệnh viêm ruột (bệnh Crohn, viêm loét đại tràng).
            Bột dễ hòa tan và có thể pha cùng đồ uống nóng. Đặc biệt nên uống nhiều nước khi sử dụng bột nhuận tràng.
            Nếu trẻ đang trong giai đoạn tập sử dụng toilet cần duy trì điều trị cho đến khi trẻ hình thành tốt thói quen này.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },
    {
        pill_id: `S7890m`,
        pill_name: `Cốm vi sinh Bio-acimin Fiber Meracine bổ sung chất sơ hòa tan, giảm tình trạng táo bón (30 gói)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị táo bón`],
        pill_quantity: 0,
        pill_sellPrice: 5000,
        pill_buyPrice: 2000,
        pill_packKind: `30 gói`,
        pill_imgAddress: [`images/pill/Cốm_vi_sinh.png`],
        pill_indication: [
            `Bio-acimin Fiber dùng cho người lớn và trẻ nhỏ trong các trường hợp sau:
                Trẻ em và người lớn bị táo bón hoặc có nguy cơ bị táo bón như: Phụ nữ có thai, phụ nữ sau khi sinh.
                Người có khẩu phần ăn thiếu cân đối, thiếu chất xơ.
                Người bị rối loạn tiêu hóa do loạn khuẩn đường ruột hoặc do dùng kháng sinh dài ngày.
                Người hay ốm yếu, trẻ em còi xương, chậm lớn do kém hấp thu, sức đề kháng kém.`
        ],
        pill_contraindication: [],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Cách dùng
            Dùng sau bữa ăn.
            Pha với nước <40ᵒC, khuấy đều cho tan và uống ngay.`
        ],
        pill_dosage: [
            `Trẻ từ 2 - 4 tuổi: Uống 1 gói/ lần, 2 lần/ ngày.
            Trẻ từ 5 - 7 tuổi: Uống 2 gói/ lần, 2 lần/ ngày.
            Người lớn và trẻ em trên 7 tuổi: Uống 2 gói/ lần, 2- 3 lần/ ngày.
            Trẻ em dưới 2 tuổi: Tham khảo ý kiến bác sĩ hoặc dược sĩ trước khi dùng.`
        ],
        pill_pharmacology: [
            `Bio-acimin Fiber bổ sung chất xơ cho những người có chế độ ăn thiếu chất xơ.
            Bổ sung vi khuẩn có lợi, giúp tái lập hệ vi sinh đường ruột, tăng sức đề kháng cho cơ thể, giúp làm giảm tình trạng táo bón ở trẻ em và người lớn.`
        ],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [
            `Chưa có thông tin về tác dụng phụ của sản phẩm.`
        ],
        pill_interactions: [],
        pill_precautions: [
            `Không sử dụng cho người mẫn cảm với bất cứ thành phần nào của sản phẩm. 
            Không dùng quá liều khuyến cáo.
            Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
            Đọc kỹ hướng dẫn sử dụng trước khi dùng.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },






    {
        pill_id: `G7929g`,
        pill_name: `Viên nhai Air-X hương cam chống đầy hơi và chướng bụng (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 9000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/air_-_X.png`],
        pill_indication: [
            `Thuốc AIR-X Hương vị cam được chỉ định dùng trong các trường hợp sau:
            Ðiều trị đầy hơi ở đường tiêu hóa, cảm giác bị đè ép và căng ở vùng thượng vị, chướng bụng thoáng qua thường có sau bữa ăn thịnh soạn hoặc ăn nhiều chất ngọt, chướng bụng sau phẫu thuật; chuẩn bị chụp X-quang (dạ dày, ruột, túi mật, thận) và trước khi nội soi dạ dày.`
        ],
        pill_contraindication: [
            `Thuốc AIR-X Hương vị cam chống chỉ định trong trường hợp sau:
            Các trường hợp quá mẫn cảm với bất kỳ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Nhai kỹ sau bữa ăn`],
        pill_dosage: [
            `Liều dùng thông thường cho người lớn là mỗi lần nhai kỹ 1-2 viên sau bữa ăn. Trong trường hợp chuẩn bị chụp X quang thì dùng 2 hoặc 3 ngày trước khi chụp. Liều dùng được điều chỉnh tùy theo tuổi và triệu chứng của bệnh nhân.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`Chưa có thông tin`],
        pill_pharmacokinetics: [`Chưa có thông tin`],
        pill_sideEffects: [
            `Khi sử dụng thuốc AIR-X Hương vị cam, bạn có thể gặp các tác dụng không mong muốn (ADR).
            AIR-X làm giảm đáng kể triệu chứng và loại bỏ khí gây chứng đầy hơi. Thành phần hoạt tính quan trọng nhất của AIR-X, dimethylpolysiloxan, không được hấp thu vào dạ dày và ruột, do đó thường không có bất kỳ tác động gây hại nào cho cơ thể.`
        ],
        pill_interactions: [
            `Chưa có tương tác thuốc nào giữa Air-X với thuốc khác được báo cáo.`
        ],
        pill_precautions: [
            `Không nên sừ dụng quá 12 viên/ngày trừ khi có chi định và theo dõi của thầy thuốc.`
        ],
        pill_overdose: [
            `Chưa có báo cáo nào về tác dụng gây hại của thuốc khi sử dụng quá liều, có lẽ là do tính chất trơ về mặt hóa học và không được hấp thu qua đường tiêu hóa của Simethicone.`
        ],
        pill_overdose_handling: [
            `Tuy nhiên, nếu có triệu chứng bất thường khi dùng thuốc quá liều, hãy đến bệnh viện để được áp dụng các biện pháp giải độc thông thường và điều trị theo triệu chứng.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `K7643z`,
        pill_name: `Thuốc Glomoti-M Glomed điều trị triệu chứng buồn nôn, nôn, chướng bụng (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 5300,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Thuốc_tiêu_hóa_-_Glomoti-M.png`],
        pill_indication: [
            `Thuốc Glomoti-M 10mg chỉ định dùng trong các trường hợp sau:
            Điều trị triệu chứng buồn nôn, nôn, chướng bụng, ợ hơi, khó tiêu sau bữa ăn.
            Điều trị triệu chứng buồn nôn và nôn nặng, đặc biệt ở người bệnh đang điều trị bằng thuốc độc tế bào, kể cả buồn nôn và nôn do dùng thuốc điều trị bệnh Parkinson như levodopa hay bromocriptin.`
        ],
        pill_contraindication: [
            `Thuốc Glomoti-M chống chỉ định trong các trường hợp sau:
            Mẫn cảm với các thành phần của thuốc.
            Nôn sau khi mổ.
            Xuất huyết đường tiêu hóa, tắc ruột cơ học hoặc thông tiêu hóa, u tuyến yên tiết prolactin.
            Trẻ em dưới 1 tuổi.
            Dùng domperidon thường xuyên hoặc dài ngày.
            Dùng đồng thời domperidon với các thuốc ức chế CYP3A4 do khả năng làm kéo dài khoảng QT như ketoconazol, itraconazol, fluconazol, voriconazol, erythromycin, clarithromycin, amiodaron, amprenavir, atazanavir, fosamprenavir, indinavir, nelfinavir, ritonavir, saquinavir, diltiazem, verapamil, telithromycin và các chất chống nôn ức chế thụ thể neurokinin-1 ở não.
            Domperidon có thể làm giảm hấp thu các thuốc dùng đồng thời trừ paracetamol và digoxin.
            Domperidon có thể làm giảm hấp thu các thuốc dùng đồng thời trừ paracetamol và digoxin.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Nên uống thuốc 15 - 30 phút trước bữa ăn.`],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi: Uống 1-2 viên mỗi 4 - 8 giờ, không quá 8 viên mỗi ngày.
            Liều hàng ngày tối đa của Domperidon là 80 mg.
            Nên sử dụng Domperidon với mức liều thấp nhất có hiệu quả ở người lớn và trẻ em. Trong trường hợp cần thiết, có thể tăng liều dùng Domperidon để đạt được hiệu quả điều trị, tuy nhiên lợi ích của việc tăng liều phải vượt trội hơn so với nguy cơ có thể xảy ra.`
        ],
        pill_pharmacology: [
            `Cơ chế tác dụng:
                Domperidon là chất kháng dopamin, có tính chất tương tự như metoclopramid hydroclorid.
                Do thuốc hầu như không có tác dụng lên các thụ thể dopamin ở não nên domperidon không có ảnh hưởng lên tâm thần và thần kinh.
                Domperidon kích thích nhu động của ống tiêu hóa, làm tăng trương lực cơ thắt tâm vị và làm tăng biên độ mở rộng của cơ thắt môn vị sau bữa ăn, nhưng lại không ảnh hưởng lên sự bài tiết của dạ dày.
                Thuốc dùng để điều trị triệu chứng buồn nôn và nôn cấp, cả buồn nôn và nôn do dùng levodopa hoặc bromocriptin ở người bệnh Parkinson.`
        ],
        pill_pharmacokinetics: [`Chưa có dữ liệu được báo cáo`],
        pill_sideEffects: [
            `Tác dụng phụ hiếm gặp như chảy sữa, rối loạn kinh nguyệt, mất kinh, vú to ở đàn ông, khô miệng, co thắt bụng thoáng qua.
            Triệu chứng ngoại tháp rất hiếm xảy ra ở trẻ em và không gặp ở người lớn.
            Nguy cơ loạn nhịp thất nghiêm trọng và đột tử do tim mạch có thể cao hơn ở bệnh nhân trên 60 tuổi hoặc ở bệnh nhân dùng tổng liều hàng ngày lớn hơn 30 mg.
            Thông báo cho bác sĩ những tác dụn
g không mong muốn gặp phải khi sử dụng thuốc.`
        ],
        pill_interactions: [
            `Các thuốc ức chế men CYP3A4 như ketoconazol, erythromycin hoặc ritonavir làm tăng nồng độ domperidon trong máu.
            Các thuốc kháng acid hoặc thuốc ức chế tiết acid làm giảm sinh khả dụng của domperidon. Nên uống các thuốc này sau bữa ăn, tức là không dùng đồng thời với domperidon.`
        ],
        pill_precautions: [
            `Không dùng quá 12 tuần cho người bệnh Parkinson. Domperidon có thể gây một vài tác dụng có hại lên thần kinh trung ương. Do đó, chỉ dùng domperidon cho người bệnh Parkinson khi các biện pháp chống nôn khác an toàn hơn không có tác dụng.
            Phải giảm 30 - 50% liều và cho uống nhiều lần trong ngày ở người bệnh suy thận.
            Thận trọng khi sử dụng trên bệnh nhân suy gan.
            Sử dụng thận trọng trên những bệnh nhân có nguy cơ cao như:
            Có khoảng thời gian dẫn truyền xung động tìm kéo dài (đặc biệt là khoảng QT).
            Bệnh nhân có rối loạn điện giải rõ rệt (như hạ kali máu, hạ magnesi máu).
            Bệnh nhân có bệnh tim mạch (như suy tim sung huyết).`
        ],
        pill_overdose: [
            `Triệu chứng: Quá liều chủ yếu xảy ra ở nhũ nhi và trẻ em. Các triệu chứng quá liều có thể gồm mất phương hướng, ngủ gà và các phản ứng ngoại tháp.`
        ],
        pill_overdose_handling: [
            `Xử trí: Không có thuốc giải độc đặc hiệu đối với domperidon, nhưng trong trường hợp quá liều, có thể gây lợi niệu thẩm thấu, rửa dạ dày, và điều trị triệu chứng.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `T6244m`,
        pill_name: `Thuốc Đại Tràng Nhất Nhất điều trị viêm đại tràng, tiêu chảy, rối loạn tiêu hóa (2 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 62000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Đại_tràng_Nhất_Nhất.png`],
        pill_indication: [
            `Thuốc Đại Tràng Nhất Nhất được chỉ định dùng trong các trường hợp sau:
            Ðiều trị viêm đại tràng, tiêu chảy, rối loạn tiêu hóa với các triệu chứng đau bụng, sôi bụng, chướng bụng, ăn không tiêu, phân sống...`
        ],
        pill_contraindication: [
            `Thuốc Đại Tràng Nhất Nhất chống chỉ định trong các trường hợp sau:
                Trẻ em dưới 30 tháng tuổi, trẻ em có tiền sử động kinh hoặc co giật do sốt cao.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Nên uống vào lúc đói`],
        pill_dosage: [
            `Trẻ em 3 - 15 tuổi: Ngày uống 2 lần, mỗi lần 1 viên.
            Từ 15 tuổi trở lên và người lớn: Ngày uống 2 lần, mỗi lần 2 viên.
            Với bệnh mãn tính nên uống thuốc liên tục ít nhất 3 tháng.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`Không có thông tin`],
        pill_pharmacokinetics: [`Không có thông tin`],
        pill_sideEffects: [
            `Chưa có báo cáo về tác dụng phụ của thuốc.
            Hướng dẫn cách xử trí ADR
            Thông báo cho bác sỹ tác dụng không mong muốn gặp phải khi sử dụng thuốc.`
        ],
        pill_interactions: [`Chưa có báo cáo`],
        pill_precautions: [`Thận trọng khi dùng trên phụ nữ có thai.`],
        pill_overdose: [`Khi dùng thuốc quá liều có thể gặp một số tác dụng phụ.`],
        pill_overdose_handling: [`Sử dụng đúng liều các tác dụng phụ sẽ hết.`],
        pill_viewed: 10
    },
    {
        pill_id: `Q75431`,
        pill_name: `Thuốc Normagut MEGA We care cân bằng hệ vi sinh đường ruột (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 70000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Normagut.png`],
        pill_indication: [
            `Thuốc Normagut được chỉ định dùng trong các trường hợp sau:
                Thiết lập và duy trì hoạt động hiệu quả của đường ruột, cân bằng hệ vi sinh vật đường ruột. 
                Phòng và điều trị tiêu chảy liên quan đến chế độ dinh dưỡng đường ruột.
                Phòng và điều trị tiêu chảy do clostridium difficile hay do tiêu chảy dùng kháng sinh. Ngăn ngừa tiêu chảy do đi du lịch.
                Hỗ trợ điều trị trong phác đồ diệt trị h. pylori.`
        ],
        pill_contraindication: [
            `Thuốc Normagut chống chỉ định trong các trường hợp sau:
            Bệnh nhân mẫn cảm với nấm men hay bất cứ thành phần nào của thuốc.
            Bệnh nhân suy giảm miễn dịch như HIV, cấy ghép cơ quan, xạ trị.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Dùng đường uống.
            Tháo nắp viên nang, cho thuốc Normagut 250mg trong nang vào bình sữa, ly nước hoặc nước trái cây rồi cho trẻ uống, không nên trộn thuốc vào các dung dịch quá nóng (trên 50°C) hoặc quá lạnh (nước đá) vì thuốc có chứa các tế bào men nấm sống, không được pha với cồn.`
        ],
        pill_dosage: [
            `Người lớn và trẻ em lớn hơn 12 tuổi
            Thiết lập và duy trì hoạt động hiệu quả của đường ruột và cân bằng hệ vi sinh vật đường ruột
            Mỗi lần 1 viên, uống 1 - 2 lần/ngày. 
            Điều trị tiêu chảy
            Mỗi lần 1 viên, uống 1 - 2 lần/ngày. 
            Ngăn ngừa tiêu chảy do đi du lịch
            Mỗi lần 1 viên Normagut 250mg, uống 1 - 2 lần/ngày, bắt đầu từ 5 ngày trước khi đi du lịch. 
            Hỗ trợ điều trị trong phác đồ diệt trừ H. Pylori
            Mỗi lần 1 viên, 1 - 2 lần/ngày hoặc theo chỉ định của bác sĩ. 
            Trẻ em từ 2 đến 12 tuổi
            Mỗi lần 1 viên, 1 - 2 lần/ngày. 
            Trẻ em dưới 2 tuổi
            Theo sự hướng dẫn của bác sĩ.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`Men saccharomyces boulardii là men vi sinh (probiotic) không gây bệnh, có tác dụng cân bằng hệ vi sinh đường ruột, tăng cường hoạt động của men tiêu hóa, phục hồi khả năng tăng hấp thu của niêm mạc ruột, tăng cường hệ miễn dịch, bất hoạt nội độc tố và ức chế sự phát triển của vi khuẩn gây bệnh.`],
        pill_pharmacokinetics: [`Saccharomyces boulardii đạt nồng độ tương đối ổn định trong ruột trong vòng 3 ngày sau khi uống và nhanh chóng thải trừ khỏi ruột trong vòng 2 - 5 ngày sau khi ngừng điều trị.`],
        pill_sideEffects: [
            `Khi sử dụng thuốc Normagut, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Có thể gặp triệu chứng đầy hơi.
            Hướng dẫn cách xử trí ADR
            Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Dùng chung với thuốc kháng nấm có thể làm giảm tác dụng của saccharomyces boulardii. Dùng chung với chất ức chế monoamino - oxidase có thể gây tăng huyết áp.`
        ],
        pill_precautions: [
            `Nếu sau 2 ngày điều trị mà vẫn bị tiêu chảy, nên tham khảo ý kiến của bác sĩ. 
            Không nên trộn thuốc vào các dung dịch quá nóng (trên 50°C) hoặc quá lạnh (nước đá) vì thuốc có chứa các tế bào men nấm sống, không được pha với cồn.`
        ],
        pill_overdose: [],
        pill_overdose_handling: [`Nếu dùng quá liều, tác dụng phụ có thể nặng hơn. Trong trường hợp này nên tham khảo ý kiến bác sĩ.`],
        pill_viewed: 10
    },
    {
        pill_id: `L7543x`,
        pill_name: `Thuốc Duspatalin Retard Abbott điều trị đau do rối loạn chức năng tiêu hóa và đường mật (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 63000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Duspatalin.png`],
        pill_indication: [
            `Thuốc Duspatalin được chỉ định dùng trong các trường hợp sau:
            Điều trị chứng đau bụng và co cứng cơ, rối loạn đại tràng và khó chịu ở ruột non do hội chứng ruột kích thích.
            Điều trị chứng co thắt dạng dạ dày - ruột thứ phát do bệnh lý thực thể.`
        ],
        pill_contraindication: [
            `Thuốc Duspatalin chống chỉ định trong các trường hợp bị dị ứng (quá mẫn) với bất kì thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Nếu bạn có bất kỳ thắc mắc nào, hãy hỏi bác sĩ hoặc dược sĩ.
            Nên uống thuốc với đủ nước, ít nhất là 100ml nước. Không nên nhai viên thuốc vì lớp bao có mục đích để đảm bảo cơ chế phóng thích kéo dài.`
        ],
        pill_dosage: [
            `Người lớn
            Một viên nang, 2 đến 3 lần mỗi ngày. Nên uống thuốc với một cốc nước trước khi ăn.
            Không nên nhai viên thuốc vì lớp bao có mục đích để đảm bảo cơ chế phóng thích kéo dài.
            Đối tượng đặc biệt
            Không có các nghiên cứu nào về liều lượng ở người già, bệnh nhân suy gan và/hoặc suy thận đã được thực hiện. Không có nguy cơ cụ thể đối với người già, bệnh nhân suy gan và/ hoặc suy thận có thể được tìm thấy từ các dữ liệu hậu marketing.
            Do vậy, không cần điều chỉnh liều trên đối tượng người già, bệnh nhân suy gan và/hoặc suy thận.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Cơ chế hoạt động và các tác dụng dược lực học
                Mebeverine là thuốc chống co thắt hướng cơ có tác dụng trực tiếp trên cơ trơn dạ dày - ruột mà không gây ảnh hưởng đến nhu động bình thường của ruột.
                Không biết cơ chế tác động chính xác của thuốc, nhưng mebeverine tác dụng theo đa cơ chế, như là giảm tính thẩm thấu của các kênh ion, ngăn chặn sự tái hấp thu noradrenalin, giảm đau tại chỗ, thay đổi sự hấp thu nước. Có thể những tác động này đã góp phần gây ra tác dụng tại chỗ của mebeverine trên đường tiêu hóa.
                Thông qua các cơ chế này mebeverine có tác dụng chống co thắt dẫn đến làm bình thường hóa nhu động ruột mà không gây giảm trương lực đường tiêu hóa. Không thấy xuất hiện các tác dụng phụ hệ thống kiểu phó giao cảm.
                An toàn và hiệu quả lâm sàng
                Sự an toàn và hiệu quả lâm sàng của các dạng bào chế khác nhau của mebeverine được đánh giá trên hơn 1500 bệnh nhân. Những cải thiện đáng kể trên các triệu chứng nổi trội của hội chứng ruột kích thích (ví dụ đau dụng, đặc tính phân) nhìn chung được theo dõi từ tài liệu tham khảo hoặc từ các nghiên cứu lâm sàng lý thuyết tổng hợp có đối chứng.
                Tất cả các dạng bào chế của mebeverine nhìn chung là an toàn và được dung nạp tốt ở liều điều trị được khuyến cáo.
            Trẻ em
                Các thử nghiệm lâm sàng ở dạng bào chế viên nang chỉ được thực hiện ở người lớn. Dữ liệu an toàn và hiệu quả lâm sàng từ các thử nghiệm lâm sàng cũng như từ kinh nghiệm hậu marketing với dạng bào chế hỗn dịch của mebeverine pamoate ở bệnh nhân trên 3 tuổi đã cho thấy mebeverine có hiệu quả, an toàn và được dung nạp tốt.
                Các nghiên cứu lâm sàng với mebeverine phân tán đã cho thấy rằng mebeverine có hiệu quả cải thiện triệu chứng hội chứng ruột kích thích ở trẻ em. Mở rộng hơn, các nghiên cứu lý thuyết tổng hợp có đối chứng với mebeverine dạng phân tán đã khẳng định hiệu quả của thuốc.
                Bảng liều dùng cho dạng bào chế viên nang được tính dựa trên cơ sở an toàn nhất quán và khả năng dung nạp tốt của mebeverine.`
        ],
        pill_pharmacokinetics: [
            `Mô tả chi tiết sau đây cho thấy hoạt chất của Duspatalin được chuyển hóa trong cơ thể như thế nào. Hãy hỏi bác sĩ nếu cần được giải thích.
            Hấp thu
            Mebeverine được hấp thu nhanh chóng và hoàn toàn sau khi uống viên nén. Dạng bào chế phóng thích kéo dài cho phép liều điều trị 2 lần mỗi ngày.
            Phân bố
            Sự tích lũy thuốc không có ý nghĩa sau khi dùng đa liều.
            Chuyển hóa sinh học
            Mebeverine hydrochloride chủ yếu được chuyển hóa bởi các esterase, mà bước đầu tiên là sự thủy phân thành acid veratric và mebeverine alcohol. Chất chuyển hóa chính trong huyết tương là DMAC (acid carboxylic đã khử methyl).
            Thời gian bán thải ở trạng thái ổn định của DMAC là 5.77 giờ.
            Trong thời gian dùng đa liều (200mg b.i.d.) thì Cmax của DMAC là 804ng/ml và tmax khoảng 3 giờ. Khả dụng sinh học tương đối của viên nang phóng thích kéo dài được tối ưu hóa với tỷ lệ trung bình 97%.
            Thải trừ
            Mebeverine được chuyển hóa hoàn toàn nhưng không được thải trừ như vậy; các chất chuyển hóa được thải trừ gần như hoàn toàn. Acid veratric được thải trừ qua nước tiểu, mebeverine alcohol cũng được thải trừ qua nước tiểu, một phần dưới dạng acid carboxylic (MAC) và một phần dưới dạng acid carboxylic đã khử methyl (DMAC).
            Trẻ em: Không có nghiên cứu dược động học nào đã được thực hiện ở trẻ em với bất kì dạng bào chế nào của mebeverine.`
        ],
        pill_sideEffects: [
            `Cũng như các thuốc khác, Duspatalin có thể có các tác dụng phụ. Nếu bạn thấy bất kỳ tác dụng phụ nào không được đề cập trong tờ hướng dẫn này, hoặc bất kỳ tác dụng phụ nào trở nên trầm trọng, hãy thông báo ngay cho bác sĩ hoặc dược sĩ.
            Các tác dụng không mong muốn được báo cáo tự phát từ quá trình sử dụng hậu marketing. Một tần số chính xác không thể được ước tính từ các thông tin sẵn có.
            Chủ yếu là các phản ứng dị ứng, nhưng không loại trừ, việc theo dõi chỉ được giới hạn trên da.
            Rối loạn da và mô dưới da
            Chứng phát ban (mày đay), sưng tấy mặt đột ngột (phù), sưng tấy ở cổ hoặc chân (phù mạch), các ban da/nổi mụn (ngoại ban).
            Rối loạn hệ miễn dịch
            Các phản ứng dị ứng (quá mẫn cảm) (phản ứng phản vệ).
            Báo cáo các phản ứng nghi ngờ có hại
            Báo cáo các phản ứng nghi ngờ có hại sau khi thuốc được cấp phép là rất quan trọng. Nó cho phép kiểm soát một cách liên tục sự cân bằng về lợi ích và nguy cơ của thuốc. Các nhân viên y tế được yêu cầu phải báo cáo cho các cơ quan quản lý sở tại khi có bất kỳ phản ứng nghi ngờ có hại nào xảy ra.`
        ],
        pill_interactions: [
            `Hãy thông báo cho bác sĩ hoặc dược sĩ nếu bạn đang hoặc gần đây có uống bất kỳ thuốc nào khác kể cả các thuốc không kê đơn.
            Không có nghiên cứu tương tác nào được thực hiện ngoại trừ với cồn. Các nghiên cứu in vitro và vivo trên động vật cho thấy không có bất kỳ tương tác nào giữa Duspatalin retard và ethanol.`
        ],
        pill_precautions: [`Không có`],
        pill_overdose: [
            `Triệu chứng: Trong trường hợp Duspatalin được uống quá liều, các triệu chứng không được xuất hiện hay nhẹ và trở lại bình thường nhanh chóng. Hệ thần kinh trung ương bị kích thích có thể xảy ra (về mặt lý thuyết). Các triệu chứng quá liều được theo dõi là trạng thái thần kinh và tim mạch.`
        ],
        pill_overdose_handling: [
            `Xử trí: Không có thuốc giải độc đặc hiệu nào được biết. Điều trị triệu chứng được, khuyến cáo. Rửa dạ dày nên chỉ được cân nhắc trong trường hợp triệu chứng quá liều nghiêm trọng được phát hiện trong vòng khoảng 1 giờ. Các biện pháp giảm hấp thụ là không cần thiết.
            Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `H7643f`,
        pill_name: `Men vi sinh Baci-subti Biopharco hỗ trợ điều trị tiêu chảy, viêm ruột, rối loạn tiêu hóa (6 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 32167,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Baci-subti.png`],
        pill_indication: [
            `Men vi sinh Baci-subti hỗ trợ điều trị trong các trường hợp sau:
                Rối loạn tiêu hóa do loạn khuẩn đường ruột hoặc dùng thuốc kháng tinh kéo dài như phân sống, đầy bụng, khó tiêu...
                Trẻ em đi ngoài phân sống.
                Viêm ruột cấp và mãn tính, tiêu chảy, táo bón.`
        ],
        pill_contraindication: [
            `Men vi sinh Baci-subti chống chỉ định trong các trường hợp sau:
                Quá mẫn với bất cứ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Men vi sinh Baci-subti uống trước bữa ăn 30 phút.`],
        pill_dosage: [
            `Liều khuyến cáo:
                Người lớn và trẻ em: Uống 1 - 2 viên ngày. 
                Trong các trường hợp đầy bụng, khó tiêu, táo bón, tiêu chảy, phân sống, loạn khuẩn đường ruột do thức ăn, rượu bia: Uống 3 - 4 viên ngày, cách 3 - 4 giờ dùng 1 viên.
                Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Bacillus subtilis R0179 tồn tại trong thuốc ở trạng thái bào tử, nhờ vậy khi uống vào dạ dày nó không bị axit cũng như các men tiêu hóa ở dịch vị phá hủy. Ở ruột, bào tử nảy mầm và phát triển thành thể hoạt động, gần vào thành ruột, phát triển và chống lại vi khuẩn gây bệnh qua cơ chế sau:
            Bacillus subtilis R0179 tổng hợp nhiều chất có hoạt tính sinh học có lợi cho cơ thể như các enzym thủy phân, các vitamin, axit amin... Chúng cung cấp ngay cho cơ thể một số men cần thiết, làm cho tiêu hóa trở lại bình thường trong khi hệ vi khuẩn ở ruột chưa lập lại trạng thái cân bằng.
            Cạnh tranh sinh tồn và ức chế các vi khuẩn gây bệnh đường ruột.
            Tiết các kháng sinh ức chế hoặc tiêu diệt vi khuẩn gây bệnh, tác dụng lên cả vi khuẩn gram (-), gram (+) và nấm gây bệnh.
            Ở thành bào tử, Bacillus subtilis R0179 có enzym giống như lysozyme có khả năng dung giải trực tiếp một số vi khuẩn gây bệnh như: E.coli, Stephylococcus...`
        ],
        pill_pharmacokinetics: [`Chưa có dữ liệu`],
        pill_sideEffects: [`Thông báo cho thầy thuốc các tác dụng không mong muốn gặp phải khi sử dụng thuốc.`],
        pill_interactions: [
            `Tương tác thuốc có thể ảnh hưởng đến hoạt động của thuốc hoặc gây ra các tác dụng phụ.
            Bệnh nhân nên báo cho bác sĩ hoặc dược sĩ danh sách những thuốc và các thực phẩm chức năng bạn đang sử dụng. Không nên dùng hay tăng giảm liều lượng của thuốc mà không có sự hướng dẫn của bác sĩ.`
        ],
        pill_precautions: [`Thuốc ở dạng bổ sung vi khuẩn nên không có lưu ý và cảnh báo đặc biệt.`],
        pill_overdose: [],
        pill_overdose_handling: [`Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`],
        pill_viewed: 10
    },
    {
        pill_id: `E6745n`,
        pill_name: `Thuốc Creon 25000 Abbott điều trị thiểu năng tụy ngoại tiết (2 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 150000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Creon.png`],
        pill_indication: [
            `Thuốc Creon 25000 được chỉ định dùng trong các trường hợp sau:
                Ðiều trị thiểu năng tụy ngoại tiết ở trẻ em và người lớn do tuyến tụy không cung cấp đủ men để tiêu hóa thức ăn.
                Ðiều trị thiểu năng tụy ngoại tiết thường, nhưng không chỉ được tìm thấy với các bệnh sau:
                    Bệnh xơ nang.
                    Viêm tụy cấp hoặc mãn tính (viêm tụy).
                    Phẫu thuật tụy (cắt bỏ một phần hoặc toàn bộ tuyến tụy).
                    Cắt bỏ một phần hoặc toàn bộ dạ dày.
                    Ung thư tụy.
                    Sau phẫu thuật nối cắt dạ dày-ruột.
                    Tắc ống tụy hoặc ống mật chủ (như do khối u tân sinh).
                    Hội chứng Shwachman-Diamond (một dạng rối loạn di truyền hiếm gặp).`
        ],
        pill_contraindication: [`Thuốc Creon 25000 chống chỉ định trong các trường hợp mẫn cảm với hoạt chất hoặc bất cứ thành phần tá dược của creon.`],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Liều dùng phụ thuộc vào nhu cầu của mỗi cá nhân và mức độ nặng của bệnh cũng như thành phần của thức ăn.
            Uống cả viên thuốc mà không nghiền hoặc nhai, với đủ nước trong hoặc sau mỗi bữa ăn chính hoặc ăn nhẹ.
            Khi việc uống thuốc gặp khó khăn (ví dụ bệnh phân là trẻ nhỏ hoặc người già), bạn có thể thận trọng mở nắp viên nang và đổ các hạt vi nang vào một lượng nhỏ thức ăn mềm có tính acid (pH < 5,5) mà không cần nhai, hoặc các hạt vi nang có thể uống cùng chất lỏng có tính acid (pH < 5,5). Chất lỏng này có thể là sốt táo, sữa chua hoặc nước hoa quả có pH ít hơn 5,5, như nước táo, cam hoặc dứa. Nên uống hỗn hợp này ngay không nên để lâu. Việc nghiền và nhai các vi nang hoặc trộn với thức ăn hoặc chất lỏng có pH lớn hơn 5,5 có thể phá vỡ bao nang bảo vệ. Điều này gây ra giải phóng sớm các enzym trong khoang miệng, dẫn tới giảm hiệu quả điều trị và kích ứng các màng nhày, cẩn thận để đảm bảo thuốc không còn trong khoang miệng.
            Điều quan trọng là luôn đảm bảo uống đủ nước, đặc biệt là trong những giai đoạn mất dịch tăng (ví dụ: tiêu chảy hoặc nôn), uống không đủ nước có thể làm táo bón nặng thêm. Bất kỳ hỗn hợp nào của các hạt vi nang với thức ăn hay chất lỏng nên được uống ngay và không nên để lâu.`
        ],
        pill_dosage: [
            `Liều dùng thường được khuyến cáo cho trẻ em, thanh thiếu niên và người lớn với bệnh xơ nang được dựa trên trọng lượng cơ thể:
            Dựa theo khuyến cáo của Hội nghị đồng thuận về bệnh xơ nang, nghiên cứu từng cá thể của Hiệp hội bệnh nang xơ Mỹ và Anh, liều khuyến cáo chung cho liệu pháp thay thế enzym tụy được đề xuất như sau:
                Liều sẽ được bắt đầu với 1000 đơn vị lipase/kg thể trọng/bữa ăn cho trẻ em dưới 4 tuổi và với 500 đơn vị lipase/kg thể trọng/bữa ăn cho trẻ em trên 4 tuổi.
                Liều dùng nên được điều chỉnh theo độ nặng của bệnh, sự kiểm soát chứng phân mỡ và sự duy trì tình trạng dinh dưỡng tốt.
                Đối với hầu hết bệnh nhân liều dùng 10000 đơn vị lipase/kg thể trọng/ngày hoặc liều 4000 đơn vị lipase/gram chất béo đưa vào sẽ là đủ.
                Liều dùng tính riêng cho bệnh nhân sẽ được xác định theo mức độ khó tiêu và hàm lượng mỡ trong bữa ăn. Liều dùng cần trong một bữa ăn chính từ 25000 đến 80000 đơn vị lipase và một nửa liều của các nhân bệnh nhân cho bữa ăn nhẹ.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Creon chứa pancreatin có nguồn gốc từ lợn được bào chế dưới dạng các vi nang tan trong ruột (kháng acid) trong các nang gelatin. Nang tan nhanh trong dạ dày giải phóng hàng trăm vi nang, được tạo ra trên nguyên tắc đa liều để đạt được sự pha trộn tốt với dưỡng trấp và sau khi thoát ra, chúng phân bố đều các enzym vào trong dưỡng trấp.
            Khi các vi nang đến ruột non lớp áo bọc nhanh chóng tan ra (ở pH >5,5) phóng thích các enzym có hoạt tính tiêu mỡ, tiêu tinh bột và thuỷ phân protein để bảo đảm sự tiêu hóa mỡ, tinh bột và protein. Các sản phẩm được tiêu hóa bởi enzym tiêu hóa của tuyến tụy sau đó được hấp thu trực tiếp hoặc được thủy phân thêm bằng các enzym tiêu hóa ở ruột.`
        ],
        pill_pharmacokinetics: [
            `Các nghiên cứu ở động vật không cho thấy bằng chứng về sự hấp thu các enzym nguyên vẹn, vì vậy các nghiên cứu dược động học kinh điển không được thực hiện. Các chất bổ sung enzym tụy không cần sự hấp thu để có tác dụng. Ngược lại hoạt tính điều trị đầy đủ của chúng được tạo ra từ trong lòng ống của đường dạ dày ruột. Hơn nữa, chúng là các protein, như thế chúng phải chịu sự tiêu hóa qua sự thuỷ phân protein trong khi đi suốt đường dạ dày ruột trước khi được hấp thu dưới dạng peptid và acid amin.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Creon 25000, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường gặp, ADR >1/100
            Tiêu hóa: Đau bụng, buồn nôn, nôn, táo bón, đầy bụng bất thường, tiêu chảy.
            Ít gặp, 1/1000 < ADR < 1/100
            Da và mô dưới da: Phát ban, mề đay.
            Hướng dẫn cách xử trí ADR
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [`Không có thông tin`],
        pill_precautions: [`Bệnh xơ kết đại tràng (hẹp thành ruột kết) đã được báo cáo ở những bệnh nhân xơ nang dùng liều cao các chế phẩm pancreatin. Như một sự thận trọng, các triệu chứng đau bụng bất thường hoặc thay đổi trong các triệu chứng đau bụng nên được đánh giá y tế để loại trừ khả năng của hẹp thành ruột kết, đặc biệt đối với những bệnh nhân đang dùng liều hơn 10000 đơn vị lipase/kg/ngày.`],
        pill_overdose: [`Liều quá cao pancreatin đã được báo cáo có liên quan với chứng tăng acid uric niệu và tăng acid uric máu.`],
        pill_overdose_handling: [`Nếu quên dùng một liều thuốc, hãy uống càng sớm càng tốt khi nhớ ra. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và uống liều kế tiếp vào thời điểm như kế hoạch. Không uống gấp đôi liều đã quy định.`],
        pill_viewed: 10
    },
    {
        pill_id: `S7890j`,
        pill_name: `Viên nén Modom's 10mg DHG Pharma điều trị triệu chứng nôn và buồn nôn (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc tiêu hoá`],
        pill_quantity: 0,
        pill_sellPrice: 5000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Modom_s.png`],
        pill_indication: [`Thuốc Modom'S được chỉ định dùng điều trị triệu chứng nôn và buồn nôn.`],
        pill_contraindication: [
            `Thuốc Modom'S chống chỉ định trong các trường hợp sau:
                Nôn sau khi mổ.
                Bệnh nhân chảy máu đường tiêu hóa, tắc ruột cơ học. 
                Trẻ em dưới 1 tuổi. 
                Dùng thường xuyên hoặc dài ngày.
                Bệnh nhân suy gan trung bình và nặng.
                Bệnh nhân có thời gian dẫn truyền xung động tim kéo dài, đặc biệt là khoảng QT, bệnh nhân có rối loạn điện giải rõ rệt hoặc bệnh nhân đang có bệnh tim mạch như suy tim sung huyết.
                Dùng đồng thời với các thuốc kéo dài khoảng QT.
                Dùng đồng thời với các thuốc ức chế CYP3A4 (không phụ thuộc tác dụng kéo dài khoảng QT).`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Modom'S chỉ nên sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất để kiểm soát nôn và buồn nôn.
            Nên uống Modom'S trước bữa ăn. Nếu uống sau bữa ăn, thuốc có thể bị chậm hấp thu.
            Thời gian điều trị tối đa không nên vượt quá một tuần.`
        ],
        pill_dosage: [
            `Người lớn và trẻ vỉ thành niên (từ 12 tuổi trở lên và cân nặng từ 35 kg trở lên):
            Viên 10 mg, có thể dùng lên đến 3 lần/ngày, liều tối đa là 30 mg/ngày.
            Trẻ sơ sinh, trẻ nhỏ, trẻ em (dưới 12 tuổi) và trẻ vị thành niên cân nặng dưới 35 kg:
            Do cần dùng liều chính xác nên các dạng thuốc viên nén không thích hợp cho trẻ nhỏ và trẻ vị thành niên cân nặng dưới 35 kg.
            Bệnh nhân suy gan: 
            Modom'S chống chỉ định với bệnh nhân suy gan trung bình và nặng. Không cần hiệu chỉnh liều đối với bệnh nhân suy gan nhẹ.
            Bệnh nhân suy thận: 
            Do thời gian bán thải của domperidon bị kéo dài ở bệnh nhân suy thận nặng nên nếu dùng nhắc lại, số lần đưa thuốc của Modem's cần giảm xuống còn 1 đến 2 lần/ngày và hiệu chỉnh liều tùy thuộc mức độ suy thận.
            Hoặc theo chỉ dẫn của thầy thuốc.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Modom'S với thành phần hoạt chất là domperidon, một chất kháng thụ thể dopamin với đặc tính chống nôn ói. Thuốc hầu như không có tác dụng lên các thụ thể dopamin ở não nên không có ảnh hưởng lên tâm thần và thần kinh. Domperidon kích thích nhu động của ống tiêu hóa, làm tăng trương lực cơ thắt tâm vị, làm tăng biên độ mở rộng cơ thắt môn vị sau bữa ăn.`
        ],
        pill_pharmacokinetics: [
            `Hấp thu:
                Thuốc được hấp thu ở đường tiêu hóa, đạt nồng độ đỉnh trong huyết tương sau khoảng 30 phút. 
            Phân bố:
                91-93 % gắn vào protein huyết tương, phân bố rộng rãi ở các mô, nhưng rất ít ở não.
            Chuyển hóa:
                Thuốc chuyển hóa qua gan, ruột.
            Thải trừ:
                Đào thải theo phân và nước tiểu.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Modom'S, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường gặp, ADR >1/100
                Nội tiết: Giảm ham muốn, chảy sữa, rối loạn kinh nguyệt, mất kinh, vú to hoặc đau tức vú do tăng prolactin huyết thanh có thể gặp ở người bệnh dùng liều cao kéo dài.
                Miễn dịch: Nổi mẩn và các phản ứng dị ứng khác.
                Tim mạch: Rối loạn tim mạch.
            Hiếm gặp, 1/10000 < ADR < 1/1000
                Tim mạch: Loạn nhịp thất, kéo dài khoảng QT, xoắn đỉnh, đột tử do tim mạch.
            Hướng dẫn cách xử trí ADR
                Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc. `
        ],
        pill_interactions: [
            `Các thuốc kháng cholinergic, thuốc giảm đau opioid và thuốc kháng muscarinic ức chế tác dụng của domperidon.
            Tăng nguy cơ kéo dài khoảng QT do tương tác dược động học hoặc dược lực học.
            Chống chỉ định dùng đồng thời với các thuốc sau:
            Các thuốc làm kéo dài khoảng QT:
                Thuốc chống loạn nhịp tim nhóm IA (ví dụ: Disopyramid, hydroquinidin, quinidin).
                Thuốc chống loạn nhịp tim nhóm III (ví dụ: Amiodaron, dofetilid, dronedaron, ibutilid, sotalol).
                Một số thuốc chống loạn thần (ví dụ: Haloperidol, pimozid, sertindol).
                Một số thuốc chống trầm cảm (ví dụ: Citalopram, escitalopram).
                Một số thuốc kháng sinh (ví dụ: Erythromycin, levofloxacin, moxifloxacin, spiramycin).
                Một số thuốc chống nấm (ví dụ: Pentamidin).
                Một số thuốc điều trị sốt rét (đặc biệt là halofantrin, lumefan trin).
                Một số thuốc dạ dày - ruột (ví dụ: Cisaprid, dolasetron, prucaloprid).
                Một số thuốc kháng histamin (ví dụ: Mequitazin, mizolastin).
                Một số thuốc điều trị ung thư (ví dụ: Toremifen, vandetanib, vincamin).
                Một số thuốc khác (ví dụ: Bepridil, diphemanil, methadon).
            Chất ức chế CYP3A4 mạnh (không phụ thuộc tác dụng kéo dài khoảng QT), ví dụ:
                Thuốc ức chế protease.
                Thuốc chống nấm toàn thân nhóm azol.
                Một số thuốc nhóm macrolid (erythromycin, clarithromycin và telithromycin).
            Không khuyến cáo dùng đổng thời với các thuốc sau:
            Thuốc ức chế CYP3A4 trung bình, ví dụ: Diltiazem, verapamil và một số thuốc nhóm macrolid.
            Sử dụng thận trong khi dùng đồng thời với các thuốc sau:
            Thuốc chậm nhịp tim, thuốc làm giảm kali máu và một số thuốc macrolid sau góp phần làm kéo dài khoảng QT: Azithromycin và roxithromycin (chống chỉ định clarithromycin do là thuốc ức chế CYP3A4 mạnh).
            Danh sách các chất ở trên là các thuốc đại diện và không đầy đủ.
`
        ],
        pill_precautions: [
            `Chỉ được dùng domperidon không quá 12 tuần cho người bệnh Parkinson. Có thể xuất hiện các tác dụng có hại ở thần kinh trung ương. Chỉ dùng domperidon cho người bệnh Parkinson khi các biện pháp chống nôn khác an toàn hơn không có tác dụng. Bệnh nhân rối loạn chức năng gan và chức năng thận.
            Suy thận:
                Thời gian bán thải của domperidon bị kéo dài ở bệnh nhân suy thận nặng. Trong trường hợp dùng nhắc lại, tần suất đưa domperidon cần giảm xuống còn 1 đến 2 lần/ngày tùy thuộc mức độ suy thận. Có thể hiệu chỉnh liều nếu cần.
            Tác dụng trên tim mạch:
                Domperidon làm kéo dài khoảng QT trên điện tâm đồ. Trong quá trình giám sát hậu mại, có rất ít báo cáo về kéo dài khoảng QT và xoắn đỉnh liên quan đến sử dụng domperidon. Các báo cáo này có các yếu tố nguy cơ gây nhiễu như rối loạn điện giải hay các thuốc dùng đồng thời.
                Các nghiên cứu dịch tễ cho thấy domperidon có thể làm tăng nguy cơ loạn nhịp thất nghiêm trọng hoặc đột tử do tim mạch. Nguy cơ này cao hơn đối với bệnh nhân trên 60 tuổi, bệnh nhân dùng liều hàng ngày lớn hơn 30 mg và bệnh nhân dùng đồng thời thuốc kéo dài khoảng QT hoặc thuốc ức chế CYP3A4.
                Sử dụng domperidon với liều thấp nhất có hiệu quả ở người lớn và trẻ em.
                Chống chỉ định domperidon cho những bệnh nhân có thời gian dẫn truyền xung động tim kéo dài, đặc biệt là khoảng QT, bệnh nhân có rối loạn điện giải rõ rệt (hạ kali máu. tăng kali máu, hạ magnesi máu), nhịp tim chậm hoặc bệnh nhân đang mắc bệnh tim mạch như suy tim sung huyết do nguy cơ rối loạn nhịp thất. Rối loạn điện giải (hạ kali máu, tăng kali máu, hạ magnesi máu) hoặc nhịp tim chậm đã được biết đến là yếu tố làm tăng nguy cơ loạn nhịp tim.
                Cần ngừng điều trị với domperidon và trao đổi lại với cán bộ y tế nếu có bất kỳ triệu chứng hay dấu hiệu nào liên quan đến rối loạn nhịp tim.
                Khuyên bệnh nhân nhanh chóng báo cáo các triệu chứng trên tim mạch.
            Liên quan đến tá dược lactose: 
                Bệnh nhân có vấn đề về di truyền không dung nạp galactose hiếm gặp, thiếu men Lapp lactase hoặc kém hấp thu glucose - galactose không nên dùng thuốc này.
`
        ],
        pill_overdose: [` Gây lợi niệu thẩm thấu, rửa dạ dày`],
        pill_overdose_handling: [`cần thực hiện các biện pháp điều trị triệu chứng ngay lập tức. Nên theo dõi điện tâm đồ do có khả năng kéo dài khoảng QT.`],
        pill_viewed: 10
    },



    //thuốc trị ho cảm



    {
        pill_id: `G7929k`,
        pill_name: `Thuốc Acemuc 200mg Sanofi long đàm, tiêu nhầy, giảm ho (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 26000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Acemuc.png`],
        pill_indication: [
            `Thuốc Acemuc 200mg viên được chỉ định dùng trong các trường hợp sau:
                Dùng điều trị trong trường hợp tiết chất nhầy trong bệnh hô hấp có đàm nhầy quánh như trong viêm phế quản cấp và mạn tính.`
        ],
        pill_contraindication: [
            `Thuốc Acemuc 200mg viên chống chỉ định trong các trường hợp sau:
                Trẻ em dưới 2 tuổi.
                Tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein).
                Quá mẫn với acetylcystein.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Acemuc 200mg viên dùng đường uống.`],
        pill_dosage: [
            `Thuốc Acemuc dùng đường uống cho trẻ em trên 2 tuổi.
            Trẻ em từ 2 đến 7 tuổi: 1 viên/lần, 2 lần/ngày.
            Người lớn và trẻ em ≥ 7 tuổi: 1 viên/lần, 3 lần/ngày.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Nhóm dược lý điều trị: Thuốc tiêu đàm, mã ATC: R05CB01.
            Acetylcysteine là một chất làm long đàm, tiêu nhầy. Thuốc có tác dụng tiêu nhầy do nhóm thiol (-SH) tự do làm giảm độ quánh của đàm ở phổi có mủ hoặc không, bằng cách tác động đối với disulfura trong mucoprotein và tạo thuận lợi để tống đàm ra ngoài bàng hoàng, dẫn lưu tư tưởng hoặc bằng phương pháp hóa học. Ngoài ra, acetylcysteine còn có tác dụng chống oxy-hoá trực tiếp, do có nhóm thiol tự do, nên nó có khả năng tương tác trực tiếp với các nhóm ua diện tích của các gốc tự do oxy-hoá.`
        ],
        pill_pharmacokinetics: [
            `Sau một liều uống từ 200 mg đến 600 mg, acetylcysteine nhanh chóng được hấp thu, đạt nồng độ đỉnh trong huyết tương sau 30 phút đến 1 giờ. Trong điều kiện hấp thu, acetylcysteine nhanh chóng chuyển hóa thành cysteine (chất chuyển hóa chính của thuốc lý). chất này mang thông tin đến các tình huống khác nhau. Acetylcysteine là tiền chất trực tiếp để tạo ra glutathion - một chất chống oxy hoá quan trọng trong cơ thể. Sinh khả dụng của acetylcysteine đường uống là 47% và 83% khi tiêm tĩnh mạch. Thời gian bán hủy của acetylcysteine là 30 phút và thuốc được thải trừ chủ yếu qua thận toàn thân.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Acemuc 200mg viên, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Tuy hiếm gặp có thất phế quản rõ ràng trong lòng sáng do acetylcysteine nhưng vẫn có thể xảy ra với tất cả các dạng thuốc chứa acetylcysteine.  
            Hiếm gặp, ADR <1/1000:  
            Miễn dịch: Tăng mẫn cảm.  
            Tiêu hóa: Buồn nôn, nôn, tiêu chảy, viêm miệng, đau bụng.
            Tim mạch: Đỏ bừng, phù, tim đập nhanh, hạ huyết áp.
            Thần kinh: Nhức đầu, ù tai .
            Hô hấp: Chảy nước mũi nhiều, rạn ngáy.
            Đa: Phát ban, mày đay, phù mạch, ngứa.
            Toàn thân: Sốt.
            Hiếm gặp, ADR <1/1000:  
            Tiêu hóa: Khó tiêu.
            Hô hấp: Có thất phế quản, khó thở.
            Toàn thân: Phản ứng dạng phản vệ toàn thân, rét run.
            Thông báo ngay cho bác sĩ hoặc được sự những phản ứng có thể gặp phải khi sử dụng thuốc.`
        ],
        pill_interactions: [
            `Việc phối hợp một thuốc long đàm, tiêu nhầy với các thuốc trị ho không có hoặc có làm giảm bài tiết phế quản (tác dụng giống atropin) là không hợp lý.`
        ],
        pill_precautions: [
            `Ho là yếu tố cơ bản để bảo vệ phế quản – phối nên cần phải tôn trọng,
            Cần thận trọng khi sử dụng ở những bệnh nhân có tiền sử co thắt phế quản, hoặc bị loét dạ dày – tá tràng.`
        ],
        pill_overdose: [
            `Liều dùng acetylcysteine mạch có khoảng cách an toàn khá rộng; tuy nhiên, quá liều có thể gặp khi dùng đường tiêm hoặc dùng quá nhiều thuốc có chứa acetylcysteine, điều trị ngộ độc paracetamol.
            Triệu chứng quá liều thường khá nặng: Tụt huyết áp, ức chế hô hấp, co thắt phế quản, tán huyết, đông máu nội mạch rải rác và suy thận; ngoài ra có thể rối loạn tiêu hóa (như buồn nôn, nôn, tiêu chảy). Một số triệu chứng này có thể còn do tình trạng ngộ độc paracetamol gây ra.`
        ],
        pill_overdose_handling: [`Xử trí: Điều trị triệu chứng và chăm sóc hỗ trợ.  `],
        pill_viewed: 10
    },
    {
        pill_id: `T6244f`,
        pill_name: `Thuốc Euxamus 200mg Euvipharm tiêu chất nhầy trong bệnh nhầy nhớt (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 8000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Euxamus.png`],
        pill_indication: [
            `Thuốc Euxamus 200 được chỉ định dùng trong các trường hợp sau:
                Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt như xơ nang tuyến tụy, bệnh hô hấp có đờm nhầy quanh như viêm phế quản cấp và mạn, làm sạch thường quy trong mở khí quản.
                Giải độc paracetamol khi quá liều.`
        ],
        pill_contraindication: [
            `Thuốc Euxamus 200 chống chỉ định trong các trường hợp sau:
            Bệnh nhân quá mẫn với acetylcystein hoặc các thành phần khác của thuốc. 
            Người có tiền sử hen (nguy cơ co thắt phế quản với tất cả dạng thuốc chứa acetylcystein). 
            Trẻ em dưới 2 tuổi.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Euxamus 200 dùng đường uống.`],
        pill_dosage: [
            `Dùng làm thuốc tiêu chất nhầy: 
            Trẻ em từ 5 đến 7 tuổi: Uống 200 mg/lần, ngày 2 lần. 
            Người lớn và trẻ em trên 7 tuổi: Uống 200 mg/lần, ngày 3 lần. 
            Nếu trẻ không nuốt được viên nang thì có thể dùng dạng bào chế phù hợp hơn như thuốc bột. 
            Dùng làm thuốc giải độc paracetamol: 
            Liều khởi đầu 140 mg/kg cân nặng, tiếp theo cứ 4 giờ uống liều 70 mg/kg cân nặng và uống tổng cộng 17 lần (rất hiệu quả khi bị quá liều trong vòng 8 giờ, và kém hiệu quả khi quá liều paracetamol trên 15 giờ).
            Trẻ em dưới 5 tuổi: Không thích hợp sử dụng dạng viên.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Acetylcystein được dùng làm thuốc tiêu chất nhầy và thuốc giải độc paracetamol, thuốc làm giảm độ quánh của đờm ở phổi có mủ hoặc không có mủ bằng cách tách đôi cầu nối disulfua trong mucoprotein tạo thuận lợi tống đờm ra ngoài bằng cách ho hay dẫn lưu hoặc bằng phương pháp cơ học. 
            Acetylcystein dùng bảo vệ cho gan do quá liều paracetamol bằng cách duy trì nồng độ glutathion của gan, là chất cần thiết làm bất hoạt chất chuyển hóa trung gian của paracetamol gây độc cho gan. Acetylcystein chuyển hóa thành cystein kích thích gan tổng hợp glutathion và do đó bảo vệ được gan.`
        ],
        pill_pharmacokinetics: [
            `Sau khi uống acetylcystein được hấp thu nhanh qua đường tiêu hóa, bị gan khử hoạt thành cystein và sau được chuyển hóa, nồng độ đạt đỉnh trong huyết tương sau khi uống khoảng 0,5 - 1 giờ. Chu kỳ bán hủy của acetylcystein toàn phần khoảng 6,25 giờ. 
            Sinh khả dụng theo đường uống thấp có thể do chuyển hóa trong thành ruột và chuyển hóa bước đầu trong gan. 
            Độ thanh thải thận có thể chiếm 30% độ thanh thải toàn thân.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Euxamus 200, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Thường gặp, ADR >1/100
                Hệ tiêu hóa: Buồn nôn, nôn.
            Ít gặp, 1/1000 < ADR < 1/100
                Hệ thần kinh: Chóng mặt, buồn ngủ.
                Da: Phát ban, mày đay.
                Tai mũi họng: Ù tai, viêm miệng, chảy nước mũi nhiều.
            Hướng dẫn cách xử trí ADR
                Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Acetylcystein là một chất khử nên không phù hợp với các chất oxy hóa. 
            Không được dùng đồng thời với thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein.`
        ],
        pill_precautions: [],
        pill_overdose: [
            `Quá liều acetylcystein có triệu chứng giống triệu chứng của phản vệ, đặc biệt là giảm huyết áp. Các triệu chứng khác là suy hô hấp, tan máu, đông máu rải rác nội mạch và suy thận. Tử vong đã xảy ra do ngộ độc quá liều acetylcystein khi điều trị ngộ độc paracetamol. `
        ],
        pill_overdose_handling: [`Điều trị quá liều acetylcystein theo triệu chứng.`],
        pill_viewed: 10
    },
    {
        pill_id: `K7643o`,
        pill_name: `Viên ngậm Strepsils Soothing mật ong & chanh giảm đau họng (2 vỉ x 12 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 17000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 12 Viên`,
        pill_imgAddress: [`images/pill/Strepsils.png`],
        pill_indication: [
            `Thuốc Strepsils Soothing mật ong và chanh được chỉ định dùng trong các trường hợp sau:
            Strepsils Soothing Honey & Lemon là viên ngậm chứa hai hoạt chất 2,4-dichlorobenzyl alcohol (dybenal) và amylmetacresol có tính kháng khuẩn sử dụng trong điều trị viêm họng. Viên ngậm Strepsils là viên ngậm kháng khuẩn để làm giảm đau họng dùng cho trẻ em và người lớn.`
        ],
        pill_contraindication: [
            `Thuốc Strepsils Soothing Honey & Lemon chống chỉ định trong trường hợp sau:
            Quá mẫn cảm với bất kỳ thành phần nào của thuốc. `
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Ngậm trong miệng`],
        pill_dosage: [
            `Ngậm 1 viên Strepsils để tan chậm trong miệng cách khoảng 2 đến 3 giờ. Không dùng quá liều đã chỉ định. Nếu các triệu chứng kéo dài, hỏi ý kiến bác sĩ.
            Lưu ý: liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Tác dụng của dichlorobenzyl alcohol có liên quan đến đặc tính kháng khuẩn, kháng virus và gây tê cục bộ. Tác dụng gây tê cục bộ của dichlorobenzyl alcohol được cho là do giảm phong tỏa kênh natri. Cơ chế hoạt động khử trùng của dichlorobenzyl alcohol chưa được chứng minh đầy đủ.
            Amylmetacresol là một chất kháng khuẩn và kháng virus, đồng thời ngăn chặn các kênh Na điện thế giống như thuốc gây tê cục bộ. Cơ chế của tác dụng diệt virus vẫn chưa được chứng minh đầy đủ.
            Các nghiên cứu in vitro với sự kết hợp của dichlorobenzyl alcohol và amylmetacresol đã cho thấy khả năng diệt virus đối với một số loại virus liên quan đến cảm lạnh thông thường, được quan sát bằng cách giảm tải lượng virus. Trong các thử nghiệm lâm sàng, việc sử dụng viên ngậm chứa cồn dichlorobenzyl đã được chứng minh là làm giảm đau họng, giảm đau và giảm khó nuốt sau 5 phút sử dụng. Hiệu ứng này có thể kéo dài thậm chí trong 2 giờ. Hiệu quả giảm đau được chứng minh là đạt đến trạng thái ổn định sau 45 phút.`
        ],
        pill_pharmacokinetics: [
            `Dichlorobenzyl alcohol được giải phóng gần như ngay lập tức và đạt đến nồng độ cao nhất sau 3 - 4 phút. Nồng độ trong nước bọt sau 120 phút chiếm khoảng 50% liều dùng.
            Dichlorobenzyl alcohol được chuyển hóa ở gan để tạo thành axit hippuric. Sau khi chuyển hóa, dichlorobenzyl alcohol được bài tiết qua nước tiểu.
            Amylmetacresol hấp thu và đào thải nhanh chóng.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Strepsils Soothing Honey & Lemon, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Trong trường hợp hiếm, đã gặp các rối loạn như “tiêu chảy và khó chịu ở dạ dày”, “viên ngậm làm đau lưỡi” v.v… mặc dù chúng không theo một dạng đặc trưng nào. Các triệu chứng của hiện tượng này đã được nhận biết khi xảy ra ở một tỷ lệ bệnh nhân dưới dạng phản ứng giả dược sau khi dùng viên lactose (Beecher, J Am Assn 1995,159,1602, Wolf và Pinsky, J Am Med Assn, 1954,155, 339). Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.
            Hướng dẫn cách xử trí ADR:
            Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`
        ],
        pill_interactions: [`Chưa được biết`],
        pill_precautions: [
            `Cần thận trọng và giảm liều trên bệnh nhân suy gan, suy thận để tránh khả năng xảy ra độc tính và các tác dụng không mong muốn.
            Phải nhớ là trẻ nhỏ có thể bị nghẹt thở do viên ngậm.`
        ],
        pill_overdose: [`Chưa ghi nhận trường hợp quá liều nào ở người.Để có liều chết LD50 đường uống tương đương ở chuột nhắt, cần dùng trên 80 viên ngậm/kg thể trọng.`],
        pill_overdose_handling: [],
        pill_viewed: 10
    },
    {
        pill_id: `Q7543t`,
        pill_name: `Thuốc Eugica Fort DHG điều trị các chứng ho, đau họng, sổ mũi, cảm cúm (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 9000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Eugica.png`],
        pill_indication: [
            `Thuốc Eugica® Fort được chỉ định dùng trong các trường hợp sau:
            Dùng điều trị các chứng ho, đau họng, sổ mũi, cảm cúm.
            Sát trùng đường hô hấp.
            Làm loãng niêm dịch, làm dịu ho.`
        ],
        pill_contraindication: [
            `Thuốc Eugica® Fort chống chỉ định trong các trường hợp sau:
            Quá mẫn với một trong các thành phần của thuốc.
            Các trường hợp: Ho do suyễn, ho lao, suy hô hấp.
            Trẻ em dưới 30 tháng tuổi, trẻ em có tiền sử động kinh hoặc co giật do sốt cao.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc dạng viên dùng đường uống.`],
        pill_dosage: [
            `Liều dùng trong trường hợp điều trị:
            Trẻ em trên 30 tháng tuổi: Uống 1 viên x 2 lần/ ngày.
            Người lớn: Uống 1 viên x 3 - 4 lần/ ngày.
            Hoặc theo hướng dẫn của thầy thuốc.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Eugica® Fort kết hợp trích tinh, tinh dầu của các dược liệu thuộc nhóm cây thuốc chữa ho, cảm cúm gồm: Bạc hà, tràm, tần, gừng.
            Eucalyptol có tính sát trùng, được dùng chữa ho, kích thích tiêu hóa. Eucalyptol được đào thải chủ yếu qua đường hô hấp sau khi phân tán trong huyết tương.
            Menthol còn được gọi là "bạc hà não", là trích tinh của tinh dầu bạc hà, có tính chất làm dịu ho, làm loãng niêm dịch. Uống liều nhỏ có thể gây hưng phấn, xúc tiến sự bài tiết của tuyến mồ hôi, làm hạ thấp thân nhiệt. Sau khi hấp thu, menthol được bài tiết trong nước tiểu và mật ở dạng glucuronic. Menthol thường được dùng điều trị cảm sốt, nhức đầu, sổ mũi, viêm họng, ho, kích thích tiêu hóa, tiêu chảy đau bụng.
            Gừng: Trên thực nghiệm, gừng có tác dụng chống dị ứng, thể hiện trên tác dụng chống co thắt cơ trơn. Tinh dầu gừng có tác dụng kháng khuẩn trên nhiều chủng vi khuẩn, làm loãng niêm dịch, làm giảm ho, chống viêm và giảm đau. Gừng thường được dùng điều trị cảm mạo, làm ra mồ hôi, chữa ho mất tiếng, ho do đờm ẩm, hen phế quản, viêm phế quản, viêm họng, chống cảm lạnh và chống nhiễm khuẩn trong các chứng ho, sổ mũi. Gừng còn là vị thuốc chữa đầy bụng, ăn uống không tiêu, nôn mửa, tiêu chảy đau bụng.
            Tinh dầu tràm có tác dụng long đờm, sát khuẩn và làm thông thoáng đường hô hấp trong điều trị nhiễm khuẩn đường hô hấp trên thể nhẹ.
            Tần dày lá hay húng chanh là một dược liệu chữa cảm cúm, ho hen. Theo nghiên cứu của Viện vi trùng học, tinh dầu tần có tác dụng kháng sinh mạnh đối với vi khuẩn Staphylococcus, Salmonella typhi, Shigella flexneri, Shigella sonnei, Shigella dysenteriae, Subtilis, Escherichia Coli, Coli bethesda, Streptococcus, Pneumococcus...`
        ],
        pill_pharmacokinetics: [
            `Eugica® Fort được bào chế dạng viên nang mềm bằng công nghệ hiện đại, với các thành phần hoạt chất hoàn toàn từ cây thuốc vị thuốc thiên nhiên, không gây độc hại. Eugica® Fort với hàm lượng hoạt chất cao và nhanh chóng được phóng thích ngay sau khi uống, vì vậy mang lại hiệu quả cao trong điều trị ho, đau họng, tiêu đàm.`
        ],
        pill_sideEffects: [
            `Có báo cáo rằng dùng menthol liều lớn qua đường tiêu hóa có thể có đau bụng, nôn ói, chóng mặt, buồn ngủ.
            Hướng dẫn cách xử trí ADR:
            Thông báo cho thầy thuốc các tác dụng không mong muốn gặp phải khi sử dụng thuốc.`
        ],
        pill_interactions: [
            `Tương tác thuốc: Chưa tìm thấy tài liệu.
            Tương kỵ của thuốc: Do không có các nghiên cứu về tính tương kỵ của thuốc, không trộn lẫn thuốc này với các thuốc khác.`
        ],
        pill_precautions: [`Menthol có tính ức chế hô hấp qua đường thở (hít vào mũi) nhất là đối với trẻ con ít tuổi.`],
        pill_overdose: [`Triệu chứng: Không có dữ liệu về sử dụng thuốc quá liều, không dùng quá liều chỉ định của thuốc.`],
        pill_overdose_handling: [`Cách xử trí: Tích cực theo dõi để có biện pháp xử trí kịp thời.`],
        pill_viewed: 10
    },
    {
        pill_id: `L5743e`,
        pill_name: `Thuốc Tocemux điều trị tiêu chất nhầy, bệnh lý hô hấp có đờm (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 7000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Tocemux.png`],
        pill_indication: [
            `Thuốc Tocemux được chỉ định dùng trong các trường hợp sau:
            Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) (xơ nang tuyến tụy), bệnh lý hô hấp có đờm nhầy quánh như trong viêm phế quản cấp và mạn, và làm sạch thường quy trong mở khí quản.`
        ],
        pill_contraindication: [
            `Thuốc Tocemux chống chỉ định trong các trường hợp sau:
            Tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). 
            Quá mẫn với acetylcystein. 
            Trẻ em dưới 2 tuổi.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Tocemux được dùng đường uống.`],
        pill_dosage: [
            `Làm thuốc tiêu chất nhầy
            Người lớn và trẻ em ≥ 7 tuổi: Uống 1 viên/lần, 3 lần mỗi ngày. 
            Trẻ em từ 2 đến 6 tuổi: Uống 1 viên/lần, 2 lần mỗi ngày.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Acetylcystein (N - acetylcystein) là dẫn chất N - acetyl của L - cystein, một amino - acid tự nhiên. Acetylcystein được dùng làm thuốc tiêu chất nhầy và thuốc giải độc khi quá liều paracetamol. Thuốc làm giảm độ quánh của đờm ở phổi có mủ hoặc không bằng cách tách đôi cầu nối disulfua trong mucoprotein và tạo thuận lợi để tống đờm ra ngoài bằng ho, dẫn lưu tư thế hoặc bằng phương pháp cơ học. 
            Acetylcystein dùng để bảo vệ chống gây độc cho gan do quá liều paracetamol, bằng cách duy trì hoặc khôi phục nồng độ glutathion của gan là chất cần thiết để làm bất hoạt chất chuyển hóa trung gian của paracetamol gây độc cho gan. Trong quá liều paracetamol, một lượng lớn chất chuyển hóa này được tạo ra vì đường chuyển hóa chính (liên hợp glucuronid và sulfat) trở thành bão hòa. Acetylcystein chuyển hóa thành cystein kích thích gan tổng hợp glutathion và do đó, acetylcystein có thể bảo vệ được gan nếu bắt đầu điều trị trong vòng 12 giờ sau quá liều paracetamol. Bắt đầu điều trị càng sớm càng tốt.`
        ],
        pill_pharmacokinetics: [
            `Sau khi uống, acetylcystein được hấp thu nhanh ở đường tiêu hóa và bị gan khử acetyl thành cystein và sau đó được chuyển hóa. Đạt nồng độ đỉnh huyết tương trong khoảng 0,5 đến 1 giờ sau khi uống liều 200 đến 600 mg. Khả dụng sinh học khi uống thấp và có thể do chuyển hóa trong thành ruột và chuyển hóa bước đầu trong gan. Độ thanh thải thận có thể chiếm 30% độ thanh thải toàn thân.
            Sau khi uống, nửa đời cuối của acetylcystein toàn phần là 6,25 giờ.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Tocemux, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Acetylcystein có giới hạn an toàn rộng. Tuy hiếm gặp co thắt phế quản rõ ràng trong lâm sàng do acetylcystein, nhưng vẫn có thể xảy ra với tất cả các dạng thuốc chứa acetylcystein. 
            Thường gặp, ADR > 1/100 
            Tiêu hóa: Buồn nôn, nôn. 
            Tim mạch: Đỏ bừng, phù, tim đập nhanh.
            Ít gặp, 1/1000 < ADR < 1/100 
            Thần kinh: Buồn ngủ, đau đầu, ù tai. 
            Hô hấp: Viêm miệng, chảy nước mũi nhiều, ran ngáy. 
            Da: Phát ban, mày đay.
            Hiếm, ADR < 1/1000 
            Toàn thân: Co thắt phế quản kèm phản ứng dụng phản vệ toàn thân, sốt, rét run. 
            Hướng dẫn cách xử trí ADR
            Dùng dung dịch acetylcystein pha loãng có thể giảm khả năng gây nên nhiều do thuốc.
            Phải điều trị ngay phản ứng phản vệ bằng tiêm dưới da adrenalin (0,3 - 0,5 ml dung dịch 1/1000) thở oxy 100%, đặt nội khí quản nếu cần, truyền dịch tĩnh mạch để tăng thể tích huyết tương, hít thuốc chủ vận beta - adrenergic nếu co thắt phế quản, tiêm tĩnh mạch 500 mg hydrocortison hoặc 125 mg methylprednisolon. 
            Có thể ức chế phản ứng quá mẫn với acetylcystein bao gồm phát hồng ban toàn thân, ngứa, buồn nôn, nôn, chóng mặt, bằng dùng kháng histamin trước. Có ý kiến cho rằng quá mẫn là do cơ chế giả dị ứng trên cơ sở giải phóng histamin hơn là do nguyên nhân miễn dịch. Vì phản ứng quá mẫn đã xảy ra tới 3% số người tiêm tĩnh mạch acetylcystein để điều trị quá liều paracetamol, nên các thầy thuốc cần chú ý dùng kháng histamin để phòng phản ứng đó. 
            Ghi chú: Thông báo cho bác sỹ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`
        ],
        pill_interactions: [
            `Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. 
            Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein.`
        ],
        pill_precautions: [
            `Phải giám sát chặt chẽ người bệnh có nguy cơ phát hen, nếu dùng acetylcystein cho người có tiền sử dị ứng; nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta- 2- adrenergic chọn lọc, tác dụng ngăn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng acetylcystein ngay. 
            Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho.`
        ],
        pill_overdose: [
            `Quá liều acetylcystein có triệu chứng tương tự như triệu chứng của phản vệ, nhưng nặng hơn nhiều: Đặc biệt là giảm huyết áp. Các triệu chứng khác bao gồm suy hô hấp, tan máu, đông máu rải rác nội mạch và suy thận.Tử vong đã xảy ra ở người bệnh bị quá liều acetylcystein trong khi đang điều trị nhiễm độc paracetamol. `
        ],
        pill_overdose_handling: [
            `Điều trị quá liều theo triệu chứng.
            Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `H7643e`,
        pill_name: `Viên trị ho Tussiday OPC điều trị các chứng ho, đau họng, sổ mũi (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 7800,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/OPC.png`],
        pill_indication: [
            `Viên Trị Ho Tussiday chỉ định dùng trong các trường hợp sau:
                Điều trị các chứng ho, đau họng, sổ mũi, cảm cúm.
                Sát trùng đường hô hấp.
                Làm loãng niêm dịch, làm dịu ho.`
        ],
        pill_contraindication: [
            `Viên trị ho Tussiday chống chỉ định trong các trường hợp sau:
            Trẻ em dưới 30 tháng tuổi.
            Trẻ em có tiền sử động kinh hoặc co giật do sốt cao.
            Các trường hợp ho do suyễn, suy hô hấp.
            Người mẫn cảm với bất kỳ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Viên trị ho Tussiday dùng đường uống.
            Sản phẩm mới Viên trị ho Tussiday của OPC có dạng bào chế nang mềm dễ uống, nhanh hấp thu, dễ chia liều, rất tiện dụng khi sử dụng.`
        ],
        pill_dosage: [
            `Viên trị ho Tussiday sử dụng an toàn cho trẻ từ 30 tháng tuổi trở lên với liều ngày uống 3 lần, mỗi lần 1 viên.
            Liều khuyến cáo cho người lớn uống mỗi lần 2 viên, ngày 3 lần.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [
            `Eucalyptol có tính sát trùng đường hô hấp, kháng khuẩn, kháng dị ứng, thông mũi, hạ sốt dùng để chữa ho, giảm đờm, viêm phế quản, chữa cảm cúm.
            Tinh dầu tần dày lá có tác dụng kháng sinh mạnh đối với một số vi khuẩn gây bệnh ho như: Staphylococcus, Salmonella typhi, Shigella sonnei,… Thường dùng để trị cảm cúm, chữa ho, viêm họng, khan tiếng.
            Tinh dầu gừng: Có công dụng tiêu đờm, chữa cảm mạo, ho mất tiếng, chống nôn.`
        ],
        pill_pharmacokinetics: [`Chưa có dữ liệu`],
        pill_sideEffects: [`Khi gặp tác dụng phụ của thuốc, bệnh nhân cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`],
        pill_interactions: [`Tương tác thuốc có thể ảnh hưởng đến hoạt động của thuốc hoặc gây ra các tác dụng phụ. Nên báo cho bác sĩ hoặc dược sĩ danh sách những thuốc và các thực phẩm chức năng bạn đang sử dụng. Không nên dùng hay tăng giảm liều lượng của thuốc mà không có sự hướng dẫn của bác sĩ.`],
        pill_precautions: [`Phụ nữ có thai và cho con bú cần hỏi ý kiến bác sĩ trước khi sử dụng.`],
        pill_overdose: [],
        pill_overdose_handling: [`Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`],
        pill_viewed: 10
    },

    {
        pill_id: `H765ae`,
        pill_name: `Thuốc Lorucet-10 điều trị viêm mũi dị ứng, viêm kết mạc dị ứng, mày đay`,
        pill_brand: `Micro`,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 9,
        pill_sellPrice: 7800,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Lorucet.png`],
        pill_indication: [
            `Viêm mũi dị ứng: Hắt hơi, chảy nước mũi, ngứa mũi.`,
            `Viêm kết mạc dị ứng: Ngứa và xót mắt, nóng mắt.`,
            `Ngứa và mày đay liên quan đến histamin.`,
        ],
        pill_contraindication: [
            `Bệnh nhân quá mẫn cảm với loratadine hoặc với bất kỳ thành phần nào của thuốc này. Kết hợp với pseudoephedrin cùng với IMAO.`
        ],
        pill_description: [`Thuốc Lorucet-10 được sản xuất bởi Micro Labs Limited, có thành phần chính là loratadine. Thuốc giúp điều trị các triệu chứng của viêm mũi dị ứng, viêm kết mạc dị ứng và rối loạn dị ứng da. `],
        pill_ingredient: [``],
        pill_use: [
            `Thuốc dạng viên dùng đường uống. Uống trọn viên thuốc với một ly nước.`
        ],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi: Mỗi ngày uống 1 viên 10mg khi đói. Với bệnh nhân suy gan, liều khởi đầu nên là 10mg trong mỗi ngày.`
        ],
        pill_pharmacology: [
            `Loratadine là thuốc kháng histamin nhóm 3 vòng, tác dụng bền, có tác dụng đối kháng đặc hiệu ở thụ thể H1 - histamin ngoại biên.`
        ],
        pill_pharmacokinetics: [
            `Trên người, sau khi uống 10mg một lần và nhắc lại nhiều lần viên nén loratadine, thấy thuốc có tác dụng kháng histamin, bắt đầu từ 1 - 3 giờ sau khi uống, đạt tác dụng tối đa sau 8 - 12 giờ và hết sau 24 giờ. Viên nén loratadine hấp thu nhanh và chuyển hoá mạnh để cho chất chuyển hóa còn hoạt tính. Khoảng 80% tổng liều có thể tìm thấy ngang nhau trong nước tiểu và phân, dưới dạng các sản phẩm chuyển hoá sau 10 ngày. Thời gian bán thải trung bình nghiên cứu ở người tình nguyện khỏe mạnh (n=54) là 8,4 giờ (3 - 20 giờ) cho chất mẹ loratadine và là 28 giờ cho chất chuyển hoá chính còn hoạt tính. Thời gian bán thải trung bình ở người cao tuổi là 18,2 giờ với loratadine và 17,5 với chất chuyển hoá còn hoạt tính.`
        ],
        pill_sideEffects: [
            `Loạn nhịp thất nặng đã xảy ra khi điều trị với một số thuốc kháng thụ thể histamin H1 thế hệ 2. Điều đó không xuất hiện khi điều trị bằng loratadin.`,
            `Khi sử dụng loratadin với liều lớn hơn 10 mg hằng ngày, những tác dụng phụ sau đây có thể xảy ra:`,
            `Thường gặp, ADR > 1/100`,
            [`Thần kinh: Đau đầu.`,
                `Tiêu hóa: Khô miệng.`,],
            `Ít gặp, 1/1000 < ADR < 1/100`,
            [`Thần kinh: Chóng mặt.`,
                `Hô hấp: Khô mũi và hắt hơi.`,
                `Khác: Viêm kết mạc.`,],
            `Hiếm gặp, ADR < 1/1000`,
            [`Thần kinh: Trầm cảm.`,
                `Tim mạch: Tim đập nhanh, loạn nhịp nhanh trên thất, đánh trống ngực.`,
                `Tiêu hóa: Buồn nôn.`,
                `Chuyển hóa: Chức năng gan bất thường, kinh nguyệt không đều.`,
                `Khác: Ngoại ban, nổi mề đay và choáng phản vệ.`,],
            `Thông báo cho bác sĩ nếu có bất kỳ tác dụng phụ nào liên quan đến việc dùng thuốc.`,
        ],
        pill_interactions: [
            `Loratadin được chuyển hóa bởi cytochrom P450 isoenzym CYP3A4 và CYP2D6, vì vậy sử dụng đồng thời với những thuốc ức chế hoặc bị chuyển hóa bằng những enzym có thể tạo ra thay đổi về nồng độ thuốc trong huyết tương và có thể có tác dụng không mong muốn. Các thuốc đã biết có ức chế enzym trên bao gồm: Cimetidin, erythromycin, ketoconazol, quinidin, fluconazol và fluoxetin.`,
            `Điều trị đồng thời loratadin và cimetidin ức chế chuyển hóa của loratadin. Điều này không có biểu hiện lâm sàng.`,
            `Điều trị đồng thời loratadin và ketoconazol dẫn tới tăng nồng độ loratadin trong huyết tương gấp 3 lần, do ức chế CYP3A4. Điều đó không có biểu hiện lâm sàng vì loratadin có chỉ số điều trị rộng. Điều trị đồng thời loratadin và erythromycin dẫn đến tăng nồng độ loratadin trong huyết tương. AUC (diện tích dưới đường cong của nồng độ theo thời gian) của loratadin, tăng trung bình 40% và AUC của desloratadin tăng trung bình 46% so với điều trị loratadin đơn độc. Trên điện tâm đồ không có thay đổi về khoảng QTc. Về mặt lâm sàng, không có biểu hiện sự thay đổi tính an toàn của loratadin và không có thông báo về tác dụng an thần hoặc hiện tượng ngất khi điều trị đồng thời 2 thuốc này.`,
        ],
        pill_precautions: [
            `Thận trọng chung: Bệnh nhân có suy gan cần dùng liều khởi đầu thấp, vì có giảm thanh thải loratadine.`,
            `Thuốc này có chứa lactose. Không nên dùng thuốc này cho người bị di truyền hiếm gặp không dung nạp galactose, thiểu năng Lapp lactase hoặc ít hấp thu glucose-galactose.`,
            `Ảnh hưởng của thuốc lên khả năng lái xe và vận hành máy móc`,
            [`Vì thuốc có thể gây nhức đầu, chóng mặt, buồn ngủ,... nên cần thận trọng khi lái xe hoặc vận hành máy móc trong khi đang dùng thuốc.`,],
            `Sử dụng thuốc cho phụ nữ trong thời kỳ mang thai và cho con bú`,
            `Phụ nữ có thai`,
            `Nghiên cứu trên chuột cống cái, thỏ cái, không thấy chứng tỏ có tác dụng sinh quái thai. Tuy nhiên, chưa có nghiên cứu thích hợp và có kiểm soát đầy đủ ở người mang thai. Vì rằng nghiên cứu về sự sinh sản ở động vật không phải bao giờ cũng báo trước cho đáp ứng trên người, nên chỉ dùng viên nén loratadine ở người mang thai khi thật sự cần thiết.`,
            `Phụ nữ cho con bú`,
            `Loratadine và chất chuyển hoá descarboethoxyloratadine sẽ bài tiết qua sữa mẹ và đạt nồng độ trong sữa ngang nồng độ trong huyết tương với tỷ lệ AUC sữa/AUC huyết tương là 1,17 cho loratadine và 0,85 cho chất chuyển hoá còn hoạt tính. Sau khi uống liều duy nhất 40mg, thấy một lượng nhỏ loratadine và chất chuyển hoá trong sữa mẹ. Cần quyết định, hoặc ngừng cho con bú, hoặc ngừng thuốc, tuỳ thuộc tầm quan trọng điều trị của thuốc đối với người mẹ. Cần thận trọng khi dùng viên nén loratadine ở người mẹ thời kỳ cho con bú.`,
            `Với trẻ em`,
            `Chưa xác định được hiệu lực và độ an toàn của loratadine ở trẻ em dưới 12 năm tuổi.`,
        ],
        pill_overdose: [
            `Buồn ngủ, nhịp tim nhanh, nhức đầu có thể xảy ra khi dùng liều quá 10mg. Khi dùng quá liều, cần có biện pháp điều trị hỗ trợ và điều trị triệu chứng, điều trị ngay và kéo dài khi cần.`,
            `Điều trị quá liều có thể gây nôn, trừ với bệnh nhân suy giảm ý thức, sau đó uống than hoạt để hấp phụ lượng thuốc còn dư. Nếu gây nôn không có kết quả, hoặc chống chỉ định, cần rửa dạ dày với nước muối đẳng trương. Thuốc tẩy muối cũng có ích để làm loãng nhanh chất chứa trong ruột. Loratadine không loại trừ được qua thẩm tách lọc máu, chưa rõ có loại trừ được loratadine qua thẩm tách màng bụng hay không?`,
            `Liều LD50 uống trên chuột cống và chuột nhắt là 5000mg/kg loratadine. Liễu cao gấp 10 lần liều dùng trong lâm sàng không có tác dụng trên chuột cống, chuột nhắt và khỉ.`,
            `Làm gì khi quên 1 liều?`,
            `Bổ sung liều ngay khi nhớ ra. Tuy nhiên, nếu thời gian giãn cách với liều tiếp theo quá ngắn thì bỏ qua liều đã quên và tiếp tục lịch dùng thuốc. Không dùng liều gấp đôi để bù cho liều đã bị bỏ lỡ.`,
        ],
        pill_overdose_handling: [`Trong trường hợp khẩn cấp, hãy gọi ngay cho Trung tâm cấp cứu 115 hoặc đến trạm Y tế địa phương gần nhất.`],
        pill_viewed: 10
    },

    {
        pill_id: `H764ae`,
        pill_name: `Thuốc Clorpheniramin Vidipha điều trị viêm mũi dị ứng theo mùa, quanh năm và mày đay`,
        pill_brand: `VIDIPHA`,
        pill_tags: [`Thuốc dị ứng`],
        pill_quantity: 9,
        pill_sellPrice: 7800,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 20 Viên`,
        pill_imgAddress: [`images/pill/Clorpheniramin.png`],
        pill_indication: [
            `Ðiều trị viêm mũi dị ứng mùa và quanh năm.`,
            `Các dị ứng khác.`,
            `Mày đay, viêm mũi vận mạch do histamin, viêm kết mạc dị ứng, viêm da tiếp xúc, dị ứng thức ăn, phản ứng huyết thanh, côn trùng đốt, ngứa ở người bệnh bị sởi hoặc thủy đậu.`,
            `Phối hợp với các thuốc khác để trị triệu chứng ho và cảm lạnh.`,
        ],
        pill_description: [
            `Clorpheniramin 4mg Vidipha của công ty Cổ phần Dược phẩm Trung ương Vidipha Bình Dương, thành phần chính clorpheniramin maleat. Đây là thuốc dùng để điều trị triệu chứng các bệnh dị ứng như mày đay, phù mạch, viêm mũi dị ứng, viêm màng tiếp hợp dị ứng, ngứa, phối hợp với các thuốc khác để điều trị triệu chứng ho, cảm lạnh.`,
            `Clorpheniramin 4mg dạng viên nén dài màu vàng, một mặt trơn, một mặt có gạch ngang ở giữa, cạnh và thành viên lành lặn.`
        ],
        pill_ingredient: [`Clorpheniramin maleat 4mg`],
        pill_contraindication: [
            `Quá mẫn với clorpheniramin hoặc bất cứ thành phần nào của thuốc.`,
            `Người bệnh đang cơn hen cấp.`,
            `Triệu chứng phì đại tuyến tiền liệt.`,
            `Glôcôm góc hẹp.`,
            `Tắc cổ bàng quang.`,
            `Loét dạ dày chít, tắc môn vị - tá tràng.`,
            `Người cho con bú, trẻ sơ sinh và trẻ thiếu tháng.`,
            `Người bệnh dùng thuốc ức chế monoamin oxidase (MAO) trong vòng 14 ngày, tính đến thời điểm điều trị bằng clorpheniramin.`,
        ],
        pill_use: [
            `Clorpheniramin 4mg dùng theo đường uống.`
        ],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi: 1 viên mỗi 4 - 6 giờ. Liều tối đa hàng ngày: 6 viên (24mg) trong 24 giờ.`,
            `Người già, người già dễ xảy ra tác dụng kháng cholin trên hệ thần kinh. Cần xem xét việc sử dụng liều hàng ngày thấp hơn (ví dụ như tối đa là 12mg trong 24 giờ).`,
            `Trẻ em từ 6 - 12 tuổi: 1/2 viên mỗi 4 - 6 giờ. Liều tối đa hàng ngày: 3 viên (12mg) trong 24 giờ.`,
            `Không nên dùng cho trẻ em dưới 6 tuổi.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Clorpheniramin là một hỗn hợp đồng phân đối quang có tác dụng kháng histamin, an thần trung bình nhưng cũng có thể kích thích nghịch thường, đặc biệt ở trẻ nhỏ và kháng muscarin, Clorpheniramin maleat dẫn xuất từ alkylamin là kháng histamin an thần thuộc thế hệ thứ nhất. Một đồng phân đextro của thuốc là dexclorpheniramin có tác dụng mạnh gấp hai lần, như hầu hết các kháng histamin khác, clorpheniramin làm giảm hoặc làm mất các tác dụng chính của histamin trong cơ thể bằng cách cạnh tranh phong bế có đảo ngược histamin ở các thụ thể H, ở các mô trên đường tiêu hóa, thành mạch và đường hô hấp, thuốc không làm mất hoạt tính của histamin hoặc ngăn cản tổng hợp hoặc giải phóng histamin.`,
            `Clorpheniramin maleat và dexclorpheniramin maleat được dùng để điều trị triệu chứng các bệnh dị ứng như mày đay, phù mạch, viêm mũi dị ứng, viêm màng tiếp hợp dị ứng, ngứa. Thuốc là thành phần phổ biến để điều trị ho, cảm lạnh. Tuy vậy các chế phẩm này phải dùng thận trọng cho trẻ em và thường phải tránh dùng cho trẻ nhỏ dưới hai tuổi, vì nguy cơ gây tử vong.`
        ],
        pill_pharmacokinetics: [
            `Hấp thu`,
            `Clorpheniramin maleat hấp thu tốt nhưng tương đối chậm vì thuốc chuyển hóa nhiều ở niêm mạc đường tiêu hóa và chuyển hóa bước đầu ở gan khi uống và xuất hiện trong huyết tương trong vòng 30 - 60 phút. Nồng độ đỉnh huyết tường đạt được trong khoảng 2,5 đến 6 giờ sau khi uống. Khoảng 5 - 45% liều đơn vào được tuần hoàn toàn thân dưới dạng thuốc không chuyển hóa. Sinh khả dụng thấp, đạt 25 - 50%.`,
            `Phân bố`,
            `Khoảng 70% thuốc trong tuần hoàn liên kết với protein. Thể tích phân bố khoảng 2,5 đến 3,2 lít/kg (người lớn) và 3,8 lít/kg (trẻ em).`,
            `Chuyển hóa`,
            `Clorpheniramin maleat chuyển hóa nhanh và nhiều. Các chất chuyển hóa gồm có desmethyl-didesmethyl-corpheniramin và một số chất chưa được xác định, một hoặc nhiều chất trong số đó có hoạt tính. Nồng độ clorpheniramin trong huyết thanh không tương quan đúng với tác dụng kháng histamin vì còn một chất chuyển hóa chưa xác định cũng có tác dụng.`,
            `Thải trừ`,
            `Thuốc được bài tiết chủ yếu qua nước tiểu dưới dạng không đổi hoặc chuyển hóa, sự bài tiết phụ thuộc vào pH và lưu lượng nước tiểu. Giảm bài tiết nhiều khi pH nước tiêu tăng và lưu lượng nước tiểu giảm. Chỉ một lượng nhỏ được thấy trong phân. Người lớn có chức năng gan, thận bình thường, thời gian bán thải của clorpheniramin dao động từ 12 - 43 giờ và đối với trẻ em từ 5,2 - 23,1 giờ.Ở người bệnh suy thận mạn, thời gian bán thải kéo dài tới 280 - 330 giờ.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Clorpheniramin 4mg Vidipha bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Rất thường gặp, ADR >1/10`,
            [`Rối loạn hệ thần kinh: An thần, buồn ngủ.`,],
            `Thường gặp, <1/100 ADR <1/10`,
            [`Rối loạn hệ thần kinh: Rối loạn sự chú ý, phối hợp bất thường, đau đầu chóng mặt.`,
                `Rối loạn ở mắt: Nhìn mờ.`,
                `Rối loạn hệ tiêu hóa: Buồn nôn, khô miệng.`,
                `Rối loạn chung: Mệt mỏi.`,],
            `Không rõ tần suất:`,
            [`Rối loạn máu và hệ bạch huyết: Thiếu máu tán huyết, loạn tạo máu.`,
                `Rối loạn hệ miễn dịch: Phản ứng dị ứng, phù mạch, phản ứng phản vệ.`,
                `Rối loạn chuyển hóa và dinh dưỡng: Chán ăn.`,
                `Rối loạn tâm thần: Lú lẫn, kích thích, khó chịu, ác mộng, trầm cảm.`,
                `Rối loạn tại và mê đạo: Ù tai.`,
                `Rối loạn tim: Đánh trống ngực, nhịp tim nhanh, loạn nhịp.`,
                `Rối loạn mạch máu: Hạ huyết áp.`,
                `Rối loạn hô hấp, lồng ngực và trung thất: Tăng dịch tiết phế quản.`,
                `Rối loạn hệ tiêu hóa: Nôn mửa, đau bụng, tiêu chảy, khó tiêu.`,
                `Rối loạn gan mật: Viêm gan, vàng da.`,
                `Rối loạn da và các tổ chức dưới da: Viêm da tróc vảy, nổi mẩn, mề đay, nhạy cảm ánh sáng.`,
                `Rối loạn cơ xương khớp và mô liên kết: Co giật cơ, yếu cơ.`,
                `Rối loạn thần và tiết niệu: Bí tiểu.`,
                `Rối loạn chung: Tức ngực.`,],
            `Hướng dẫn cách xử trí ADR`,
            `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
        ],
        pill_interactions: [
            `Các thuốc ức chế monoamin oxydase làm kéo dài và tăng tác dụng chống tiết acetylcholin của thuốc kháng histamin.`,
            `Ethanol hoặc các thuốc an thần gây ngủ có thể tăng tác dụng ức chế hệ thần kinh trung ương của clorpheniramin.`,
            `Clorpheniramin ức chế chuyển hóa phenytoin và có thể dẫn đến ngộ độc phenytoin.`
        ],
        pill_precautions: [
            `Thuốc làm tăng nguy cơ bị tiểu ở người phì đại tuyến tiền liệt, tắc đường niệu, tắc môn vị tá tràng và người bị nhược cơ.`,
            `Tác dụng an thần của clorpheniramin tăng lên khi uống rượu hoặc uống đồng thời với thuốc an thần khác.`,
            `Có nguy cơ biến chứng đường hô hấp, suy giảm hô hấp và ngừng thở ở người bị tắc nghẽn phổi hay trẻ em nhỏ. Thận trọng khi có bệnh phổi mạn tính, thở ngắn hoặc khó thở.`,
            `Có nguy cơ bị sâu răng ở người điều trị thời gian dài.`,
            `Tránh dùng cho người bệnh bị tăng nhãn áp như bị glôcôm.`,
            `Có thể gây ngủ gà, chóng mặt, hoa mắt, nhìn mờ và suy giảm tâm thần vận động ở một số người bệnh.`,
            `Người cao tuổi.`,
            `Không nên sử dụng cho bệnh nhân không dung nạp galactose, thiếu hụt Lapp lactase, rối loạn hấp thu glucose-galactose.`,
            `Cần theo dõi bệnh nhân khi sử dụng thuốc vì thuốc có chứa tá dược màu vàng tartrazin có thể gây các phản ứng dị ứng.`,
            `Khả năng lái xe và vận hành máy móc`,
            `Không dùng thuốc khi lái xe hoặc vận hành máy móc do thuốc có thể gây tác dụng không mong muốn ngủ gà, chóng mặt, hoa mắt.`,
            `Thời kỳ mang thai`,
            `Chỉ dùng khi thật cần thiết. Dùng thuốc trong 3 tháng cuối thai kỳ Có thể dẫn đến những phản ứng nghiêm trọng (như cơn động kinh) ở trẻ sơ sinh.`,
            `Thời kỳ cho con bú`,
            `Clorpheniramin có thể được tiết qua sữa mẹ và ức chế tiết sữa. Nên cân nhắc hoặc không cho con bú hoặc không dùng thuốc, tùy thuộc mức độ cần thiết của thuốc đối với người mẹ.`,
        ],
        pill_overdose: [
            `Những triệu chứng và dấu hiệu quả liều bao gồm an thần, kích thích nghịch thường hệ TKTƯ, loạn tâm thần, cơn động kinh, ngừng thở, co giật, tác dụng chống tiết acetylcholin, phản ứng loạn trương lực và trụy tim mạch, loạn nhịp.`,
            `Điều trị triệu chứng và hỗ trợ chức năng sống cần chú ý đến chức năng gan, thận, hô hấp, tim và cân bằng nước, điện giải. Rửa dạ dày hoặc gây nên bằng siro ipecacuanha. Sau đó, dùng than hoạt và thuốc tây để hạn chế hấp thu. Khi gặp hạ huyết áp và loạn nhịp cần được điều trị tích cực. Có thể điều trị co giật bằng cách tiêm tĩnh mạch diazepam hoặc phenytoin, có thể phải truyền máu trong những ca nặng.`],
        pill_overdose_handling: [`Nếu quên một liều, nên uống thuốc càng sớm càng tốt. Nhưng nếu đã gần đến lúc uống liều tiếp theo, chỉ dùng liều sau mà thôi. Không nên dùng liều đối hay thêm liều để bù vào liền quên uống.`],
        pill_viewed: 10
    },

    {
        pill_id: `E6745n`,
        pill_name: `Thuốc Bisolvon 8mg Boehringer làm loãng đờm, tiêu chất nhầy (3 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 20000,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/Bisolvon.png`],
        pill_indication: [`Thuốc Bisolvon 8mg được chỉ định làm loãng đờm trong các bệnh phế quản phổi cấp và mạn tính có kèm theo sự tiết chất nhầy bất thường và giảm sự vận chuyển chất nhầy.`],
        pill_contraindication: [
            `Bisolvon 8mg không nên dùng cho những bệnh nhân đã biết quá mẫn với bromhexine hoặc các thành phần khác của thuốc.
            Chống chỉ định trong những trường hợp bệnh di truyền hiếm gặp có thể không dung nạp với một tá dược nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc Bisolvon dùng đường uống.`],
        pill_dosage: [
            `Người lớn và trẻ trên 12 tuổi: 8mg (1 viên) 3 lần mỗi ngày.
            Trẻ em 6 - 12 tuổi: 4mg (1/2 viên) 3 lần mỗi ngày.
            Trẻ nhỏ 2 - 6 tuổi: 4mg (1/2 viên) 2 lần mỗi ngày.
            Khi bắt đầu điều trị có thể cần tăng tổng liều hàng ngày lên đến 48 mg ở người lớn.
            Nên thông báo cho bệnh nhân điều trị với Bisolvon về khả năng gia tăng bài tiết chất nhầy.
            Trong chỉ định cho bệnh hô hấp cấp tính, cần hỏi ý kiến bác sỹ nếu các triệu chứng không cải thiện hoặc xấu đi trong thời gian điều trị.
            Không khuyến cáo dùng Bisolvon dạng viên nén cho trẻ dưới 2 tuổi. Bisolvon Kids dạng siro phù hợp hơn với lứa tuổi này.`
        ],
        pill_pharmacology: [
            `Bromhexine là một dẫn xuất tổng hợp từ hoạt chất thảo dược Vasicine.
            Về mặt tiền lâm sàng, Bromhexine được nhận thấy làm tăng tỷ lệ tiết thanh dịch phế quản. Bromhexine làm tăng sự vận chuyển chất nhầy bằng cách làm giảm độ quánh của chất nhầy và hoạt họá biểu mô có nhung mao (độ thanh lọc chất nhầy của nhung mao).
            Trong các thử nghiệm lâm sàng, Bromhexine cho thấy có tác dụng phân hủy chất tiết và vận chuyển chất tiết ở đường phế quản giúp thuận lợi việc khạc đờm và ho dễ dàng.
            Sau khi điều trị bằng Bromhexine, nồng độ kháng sinh (Amoxicilin, Erythromycin, Oxytetracyclin) trong đờm và dịch tiết phế quản - phổi tăng lên.`
        ],
        pill_pharmacokinetics: [
            `Hấp thu:
                Bromhexine được hấp thu nhanh và hoàn toàn qua đường tiêu hóa.
                Sinh khả dụng là tương đương sau khi uống dạng rắn và dung dịch.
                Sinh khả dụng tuyệt đối của Bromhexine Hydrochloride khoảng 22,2 ± 8,5% và 26,8 ± 13,1% tương ứng với Bisolvon dạng viên và dung dịch.
                Lượng chất chuyên hóa lần đầu khoảng 75 - 80%.
                Dùng cùng thức ăn dẫn đến tăng nồng độ Bromhexine trong huyết tương.
            Phân bố:
                Sau khi dùng đường tĩnh mạch, Bromhexine được phân bố nhanh và rộng rãi trong toàn cơ thể với thể tích phân phối trung bình (Vss) lên tới 1209 ± 206L (19 L/kg). Đã nghiên cứu sự phân bố vào mô phổi (phế quản và nhu mô) sau khi uống 32mg và 64mg Bromhexine. Nồng độ tại mô phổi sau 2 giờ dùng thuốc, nồng độ tại mô phế quản-phổi cao hơn 1,5 - 4,5 lần và tại nhu mô phổi cao hơn khoảng 2,4 - 5,9 lần so với nồng độ trong huyết tương.
                Bromhexlne liên kết dưới dạng không đổi với Protein huyết tương khoảng 95% (liên kết không hạn chế).
                Chuyển hóa:
                Bromhexine chuyển hóa gần như hoàn toàn thành chất chuyển hóa Hydroxy hóa đa dạng và thành Axit dibromanthranilic. Tất cả chất chuyển hóa và bản thân Bromhexine được liên hợp hầu hết dưới dạng N - glucuronides và O - glucuronides. Không có bằng chứng có ý nghĩa về việc thay đổi phương thức chuyển hóa do Sulphonamide, Oxytetracycline hay Erythromycin. Do vậy, tương tác tương ứng do chất nền CYP 450 2C9 và 3A4 là không thể xảy ra.
            Thải trừ:
                Sau khi dùng đường tĩnh mạch, Bromhexine có tỷ lệ chiết xuất cao trong phạm vi của dòng máu đến gan, 843 - 1073 ml/phút dẫn đến độ khác biệt lớn giữa các cá thể và trên cùng một cá thể (CV > 30%). Sau khi dùng Bromhexine có đánh dấu phóng xạ, khoảng 97,4% ± 1,9% liều được tìm thấy dưới dạng có phóng xạ trong nước tiểu, với dạng hoạt chất gốc dưới 1%. Nồng độ Bromhexine huyết tương giảm theo cấp số mũ. Sau khi uống đơn liều từ 8 - 32 mg, nửa đời thải trừ cuối nằm trong khoảng 6,6 - 31,4 giờ. Nửa đời thải trừ liên quan để dự đoán dược động học đa liều là khoảng 1 giờ, do vậy không có sự tích lũy sau khi dùng đa liều (hệ số tích lũy 1,1).
            Tổng quát:
                Bromhexine thể hiện dược động học tỉ lệ với liều dùng trong phạm vi từ 8 - 32 mg sau khi dùng đường uống.
                Không có dữ liệu dược động học của Bromhexine trên bệnh nhân cao tuổi, hoặc bệnh nhân suy gan hoặc suy thận. Kinh nghiệm lâm sàng không cho thấy những vấn đề liên quan đến tính an toàn trên những đối tượng này.
                Cũng chưa có các nghiên cứu về tương tác với thuốc chống đông máu dạng uống hoặc Digoxin. Dược động học của Bromhexine không bị ảnh hưởng liên quan khi dùng đồng thời Ampicillin hoặc Oxytetracycline. So sánh trước đó không thấy tương tác tương ứng giữa Bromhexine và Erythromycin. Không có bất kỳ báo cáo tương tác liên quan trong thời gian dài lưu hành thuốc gợi ý khả năng tương tác không đáng kể với các thuốc này.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Bisolvon 8mg, bạn có thể gặp các tác dụng không mong muốn (ADR).
            Rối loạn hệ miễn dịch, rối loạn trên da và mô phụ thuộc, rối loạn ngực và trung thất: 
            Phản ứng phản vệ bao gồm sốc phản vệ, phù mạch, co thắt phế quản, phát ban, mày đay, ngứa và các quá mẫn khác.
            Rối loạn dạ dày - ruột: 
            Buồn nôn, nôn, tiêu chảy và đau bụng trên.`
        ],
        pill_interactions: [
            `Tương tác thuốc có thể làm thay đổi khả năng hoạt động của thuốc hoặc gia tăng ảnh hưởng của các tác dụng phụ. Tốt nhất là bạn viết một danh sách những thuốc bạn đang dùng (bao gồm thuốc được kê toa, không kê toa và thực phẩm chức năng) và cho bác sĩ hoặc dược sĩ xem. Không được tự ý dùng thuốc, ngưng hoặc thay đổi liều lượng của thuốc mà không có sự cho phép của bác sĩ.
            Thuốc không ghi nhận tương tác không có lợi với các thuốc khác về mặt lâm sàng.`
        ],
        pill_precautions: [
            `Có rất ít báo cáo tổn thương da nghiêm trọng như hội chứng Stevens - Johnson và hoại tử biểu bì nhiễm độc (toxic epidermal necrolysis - TEN) tạm thời liên quan đến việc sử dụng thuốc long đờm như bromhexine. Hầu hết các trường hợp được lý giải là do bệnh lý mà bệnh nhân đang mắc phải và/hoặc thuốc dùng cùng. Hơn nữa trong giai đoạn sớm của hội chứng Stevens - Johnson hoặc TEN, trước tiên bệnh nhân có tiền triệu giống cúm không đặc hiệu như sốt, đau nhức người, viêm mũi, ho và đau họng. 
            Do bị nhầm lẫn bởi các tiền triệu giống cúm không đặc hiệu này mà người ta có thể bắt đầu điều trị triệu chứng bằng thuốc ho và cảm. Do đó, nếu xuất hiện một vài tổn thương mới trên da hoặc niêm mạc thi nên đi khám bác sĩ ngay và ngừng điều trị bằng Bromhexine.
            Bisolvon viên 8 mg chứa 222 mg lactose cho tổng liều tối đa đề nghị mỗi ngày (tương ứng 444 mg lactose trong trường hợp dùng liều gấp đôi ở người lớn khi bắt đầu điều trị). Bệnh nhân với bệnh di truyền hiếm gặp không dung nạp galactose như chứng loạn chuyển hóa Cacbon hydrat bẩm sinh không nên dùng thuốc này.`
        ],
        pill_overdose: [`Cho đến nay chưa ghi nhận các triệu chứng đặc hiệu do quá liều ở người.`],
        pill_overdose_handling: [`Dựa trên các báo cáo về quá liều một cách tình cờ và/hoặc dùng nhầm thuốc, các triệu chứng quan sát thấy phù hợp với các tác dụng phụ đã biết của Bisolvon tại liều khuyến cáo và có thể cần điều trị triệu chứng.`],
        pill_viewed: 10
    },
    {
        pill_id: `S7890j`,
        pill_name: `Thuốc Cảm Xuyên Hương Yên Bái điều trị cảm cúm, cảm lạnh (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 0,
        pill_sellPrice: 7900,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/CXH.png`],
        pill_indication: [`Cảm Xuyên Hương được chỉ định điều trị các trường hợp cảm cúm, cảm lạnh, nhức đầu, hắt hơi, sổ mũi do cảm lạnh.`],
        pill_contraindication: [
            `Thuốc Cảm Xuyên Hương chống chỉ định trong các trường hợp sau:
                Không dùng cho phụ nữ có thai, người đang chảy máu, rối loạn chảy máu, người cảm nhiệt, tăng huyết áp, đang có xuất huyết, trẻ em dưới 30 tháng tuổi, có tiền sử động kinh, sốt cao, co giật và có mẫn cảm với bất kỳ thành phần nào của thuốc.`
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`
            Uống với nước đun sôi để nguội. Nên uống thuốc với một cốc nước đầy, tốt nhất là từ 100 - 200ml nước/lần.
            Sau khi uống thuốc nên ăn nhẹ một bát nhỏ cháo hành còn nóng để tăng hiệu quả điều trị.`],
        pill_dosage: [
            `Liều khuyến cáo: Ngày uống 3 - 4 lần
            Người lớn và trẻ em từ 12 tuổi: Nỗi lần 3 - 4 viên.
            Trẻ em từ 30 tháng tuổi - 12 tuổi: mỗi lần 1 - 2 viên.
            Thời gian điều trị: Một đợt dùng thuốc từ 3 - 5 ngày.
            Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`
        ],
        pill_pharmacology: [`Chưa có dữ liệu`],
        pill_pharmacokinetics: [`Chưa có dữ liệu`],
        pill_sideEffects: [
            `Chưa ghi nhận được báo cáo về phản ứng có hại của thuốc.
            Phải thông báo ngay cho bác sĩ hoặc dược sĩ khi có bất cứ dấu hiệu bất thường nào xảy ra khi sử dụng thuốc.`
        ],
        pill_interactions: [
            `Thuốc có thể bị giảm tác dụng nếu dùng đồng thời với các thuốchoặc món ăn có tính hàn lạnh, do vậy không dùng đồng thời với các thuốc có tính hàn lạnh và tránh ăn hải sản và các món ăn có tính hàn lạnh khi dùng thuốc.
            Chưa ghi nhận được các tài liệu hoặc báo cáo nào về tương tác của thuốc với các thuốc tây y, nhưng nếu phải dùng đồng thời với thuốc tây y thì tốt nhất nên uống cách nhau 2h.
            Tương kỵ của thuốc: Do không có nghiên cứu về tính tương kỵ của thuốc, không trộn lẫn thuốc này với các thuốc khác.`
        ],
        pill_precautions: [`Cảnh báo và thận trọng khi dùng thuốc: Mặc dù ít khi xảy ra nhưng không loại trừ trường hợp bệnh nhân có thể mắc bệnh cúm do các loại virus nguy hiểm như virus cúm lợn, cúm gia cầm và một số loại virus cúm A khác. Vì vậy trong quá trình điều trị, cần theo dõi chặt chẽ diễn biến của bệnh để phát hiện và xử trí kịp thời.`],
        pill_overdose: [`Quá liều: Không có dữ liệu về sử dụng thuốc quá liều, không dùng quá liều chỉ định của thuốc.`],
        pill_overdose_handling: [
            `Cách xử trí khi dùng thuốc quá liều: tích cực theo dõi để có biện pháp xử trí kịp thời.
            Trong trường hợp khẩn cấp hoặc quá liều, gọi ngay cho trung tâm cấp cứu 115 hoặc đến trạm y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },
    {
        pill_id: `S789aj`,
        pill_name: `Cadimusol 200mg`,
        pill_brand: `Pharma USA`,
        pill_tags: [`Thuốc trị ho cảm`],
        pill_quantity: 9,
        pill_sellPrice: 7900,
        pill_buyPrice: 2000,
        pill_packKind: `1 Vỉ x 10 Viên`,
        pill_imgAddress: [`images/pill/cadimusol.png`],
        pill_indication: [
            `Tiêu nhầy trong các bệnh lý nhầy nhớt như xơ nang tuyến tuy;`,
            `Giải độc quá liều Paracetamol;`,
            `Điều trị các bệnh lý có đờm nhầy như viêm phế quản cấp tính, viêm phế quản mạn tính;`,
            `Làm sạch thường quy trong mở phế quản.`,],
        pill_contraindication: [
            `Người bệnh quá mẫn với Acetylcystein hoặc bất kỳ thành phần nào của thuốc Cadimusol 200mg;`,
            `Người có tiền sử mắc hen phế quản hoặc co thắt phế quản;`,
            `Trẻ em dưới 2 tuổi.`,
        ],
        pill_description: [`Thuốc Cadimusol 200mg bào chế dưới dạng viên nang chứa hoạt chất Acetylcystein. Acetylcystein có công dụng làm giảm độ quánh của đờm thông qua cơ chế tách các cầu nối Disulfua có trong Mucoprotein, từ đó giúp tạo điều kiện để tống đờm ra ngoài bằng phản ứng ho, biện pháp cơ học hoặc dẫn lưu tư thế. Ngoài ra, Acetylcystein còn được sử dụng trong giải độc do quá liều thuốc Paracetamol theo cơ chế khôi phục hoặc duy trì nồng độ Glutathion tại gan.`],
        pill_ingredient: [``],
        pill_use: [],
        pill_dosage: [
            `Thuốc Cadimusol 200mg được dùng bằng đường uống, có thể uống thuốc trước hoặc sau bữa ăn đều được do sinh khả dụng không bị ảnh hưởng bởi thức ăn. Người bệnh cần sử dụng thuốc theo đúng chỉ định của bác sĩ, không dùng quá liều thuốc hoặc kéo dài thời gian điều trị. Một số khuyến cáo về liều dùng Cadimusol 200mg như sau:`,
            [
                `Liều thuốc tiêu nhầy trong một số bệnh lý: Người trưởng thành uống 1 viên/lần x 3 lần/ngày. Trẻ em từ 2 – 6 tuổi uống 1 viên/lần x 2 lần/ngày;`,
                `Liều thuốc giải độc khi quá liều thuốc Paracetamol: Liều thuốc Cadimusol 200mg khởi đầu là 140mg/kg, lặp lại liều dùng sau 4 giờ. Liều dùng sau đó nâng lên 70mg/kg cân nặng, lặp lại 17 lần. Người bệnh bị ngộ độc Paracetamol nên được dùng Acetylcystein càng sớm càng tốt, tốt nhất là nên uống trong vòng 8 giờ sau khi dùng quá liều Paracetamol.`,
            ],
            `Sử dụng quá liều thuốc Cadimusol 200mg có thể xuất hiện các triệu chứng tương tự như phản vệ và có xu hướng nghiêm trọng hơn nhiều (đặc biệt là triệu chứng hạ huyết áp). Các dấu hiệu quá liều bao gồm suy hô hấp, tan máu, suy thận, đông máu rải rác nội mạch. Đã có báo cáo về tử vong khi điều trị nhiễm độc Paracetamol. Vì vậy trong trường hợp dùng quá liều thuốc và xuất hiện các tác dụng phụ nghiêm trọng, người bệnh cần ngưng sử dụng thuốc và thông báo cho bác sĩ điều trị.`,
        ],
        pill_pharmacology: [`Chưa có dữ liệu`],
        pill_pharmacokinetics: [`Chưa có dữ liệu`],
        pill_sideEffects: [
            `Thường gặp: Nhức đầu, ù tai, buồn ngủ, viêm miệng, mày đay, chảy nước mũi nhiều;`,
            `Hiếm gặp: Sốt, co thắt phế quản, phản ứng phản vệ, rét run.`,
            `Trong trường hợp gặp phải tác dụng phụ, người bệnh cần ngưng sử dụng thuốc Cadimusol 200mg và thông báo cho bác sĩ điều trị để được xử trí kịp thời.`
        ],
        pill_interactions: [
            `Acetylcystein là chất khử nên có thể tương tác với các thuốc tính oxy hóa.`,
            `Thuốc Cadimusol 200mg tương tác với thuốc ho, chế phẩm làm giảm bài tiết phế quản.`,
            `Tránh sử dụng đồng thời Cadimusol 200mg với các thuốc chứa ion kim loại như Niken, sắt, đồng, cao su...`,
            `Cadimusol tương tự về mặt vật lý và hóa học với các thuốc sau: Tetracyclin, Penicillin, Oxacillin, Natri Penicillin, Amphotericin B, Oleandomycin.`,
            `Tryosin, Iod và Hydrogen peroxid tương tác làm giảm tác dụng của Acetylcystein.`,
            `Tương tác thuốc xảy ra làm giảm tác dụng điều trị của thuốc Cadimusol 200mg, tăng nguy cơ gặp phải các tác dụng không mong muốn. Vì vậy người bệnh cần thông báo với bác sĩ điều trị các thuốc đang điều trị (thuốc không kê đơn, thuốc kê đơn) và thực phẩm chức năng trước khi điều trị bằng thuốc Cadimusol 200mg để đảm bảo an toàn, hiệu quả khi điều trị.`,
        ],
        pill_precautions: [
            `Người bệnh có nguy cơ cao xảy ra cơn hen cần được giám sát chặt chẽ trong thời gian điều trị bằng thuốc Cadimusol 200mg. Trường hợp xuất hiện cơn co thắt phế quản cần sử dụng thuốc dạng phun mù giúp giãn phế quản như Salbutamol, Ipratropium và cần ngưng điều trị bằng Acetylcystein.`,
            `Điều trị bằng Acetylcystein sẽ xuất hiệu đờm loãng tại phế quản, trường hợp người bệnh bị giảm khả năng ho cần lấy hết đờm ra ngoài bằng phương pháp khác.`,
            `Đối với phụ nữ đang mang thai: Thuốc Cadimusol sử dụng ở phụ nữ đang mang thai với mục đích điều trị quá liều Paracetamol đem lại hiệu quả an toàn, ngăn chặn độc tính ở gan cho thai nhi của người mẹ.`,
            `Đối với phụ nữ đang cho con bú: Thuốc Cadimusol 200mg an toàn khi sử dụng ở đối tượng này.`,
            `Người lái xe, vận hành máy móc: Thuốc Cadimusol 200mg không ảnh hưởng đến khả năng lái xe, vận hành máy móc của người bệnh.`,
            `Bảo quản thuốc Cadimusol 200mg ở nhiệt độ phòng, tránh ánh nắng và độ ẩm cao.`,
        ],
        pill_overdose: [`Quá liều: Không có dữ liệu về sử dụng thuốc quá liều, không dùng quá liều chỉ định của thuốc.`],
        pill_overdose_handling: [
            `Cách xử trí khi dùng thuốc quá liều: tích cực theo dõi để có biện pháp xử trí kịp thời.
            Trong trường hợp khẩn cấp hoặc quá liều, gọi ngay cho trung tâm cấp cứu 115 hoặc đến trạm y tế địa phương gần nhất.`
        ],
        pill_viewed: 10
    },


    //Duy


    {
        pill_id: `G1929k`,
        pill_name: `Băng cuộn y tế 0.1m x 2m Bảo Thạch dùng để băng vết thương (5 cuộn)`,
        pill_brand: ``,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 0,
        pill_sellPrice: 3400,
        pill_buyPrice: 2000,
        pill_packKind: `5 cuộn`,
        pill_imgAddress: [`images/pill/băng_y_tế.png`],
        pill_indication: [`Băng cuộn y tế Bảo Thạch dùng để băng bó vết thương ở đầu, tay, chân...`],
        pill_contraindication: [],
        pill_description: [
            `An toàn khi sử dụng:`,
            [
                `Băng cuộn y tế Bảo Thạch là sản phẩm được làm từ 100% cotton rất mềm mịn, không gây kích ứng da và bảo vệ vết thương của bạn.`,
                `Điều rất quan trọng khi có vết thương hở là giữ sạch sẽ để đảm bảo vết thương nhanh lành. Băng bó là cách để bảo vệ vết thương hở khỏi những tác động từ bên ngoài. Tuy nhiên, không có câu trả lời tuyệt đối cho câu hỏi khi nào nên băng bó vết thương hở. Vì điều đó phụ thuộc vào tình trạng vết thương. Trong nhiều trường hợp, bạn phải sử dụng các sản phẩm chăm sóc vết thương và băng cuộn y tế để tăng tốc độ chữa lành vết thương.`,
            ],
            `Thành phần của băng cuộn y tế Bảo Thạch dùng:`,

            `Băng cuộn y tế Bảo Thạch được làm 100% cotton, sợi bông tự nhiên đảm bảo an toàn cho da, có những đặc tính sau:`,
            [
                `Sợi bông tự nhiên mềm mại và thoáng khí.`,
                `Không gây dị ứng, không chứa hoá chất.`,
                `Sợi bông không thể tích điện, loại bỏ tĩnh điện.`,
                `Sợi chắc chắn, không dính xơ vào vết thương.`,
                `Khả năng thấm hút cao.`,
            ],

            `Ưu điểm của băng cuộn y tế Bảo Thạch dùng:`,
            [
                `Băng cuộn y tế thành phần 100% cotton của Bảo Thạch được sản xuất dưới dạng lưới mịn, thoáng khí giúp băng vết thương nhưng không gây bí, gây khó chịu, rát ngứa hoặc có thể hoại tử vết thương.`,
                `Băng cuộn Bảo Thạch giúp băng bó, bảo vệ vết thương khỏi các tác nhân lây nhiễm như vi khuẩn, bụi bẩn hoặc cố định vết thương tránh bị rách sau điều trị giúp vết thương nhanh lành.`,
                `Băng y tế Bảo Thạch có thể co giãn nhẹ giúp người bệnh không bị hạn chế cử động mà vẫn ổn định vị trí vết thương, không dính vào vết thương hở và gây đau khi tháo băng.`,
                `Băng y tế còn giúp thấm nước, huyết tương hoặc máu ở vết thương đang chảy máu giúp vết thương không bị nhiễm trùng, luôn khô ráo và sạch sẽ.`,
            ],
            `Các chứng nhận đạt được:`,
            [
                `Hàng Việt Nam chất lượng cao.`,
                `Sản phẩm Việt Nam tốt nhất.`,
                `Đạt tiêu chuẩn ISO 9001.`,
                `Đạt danh hiệu Hàng Việt Nam chất lượng cao từ năm 2010 đến nay do người tiêu dùng bình chọn.`,
                `Sản xuất theo tiêu chuẩn Dược Điển Việt Nam.`,
            ],
        ],
        pill_ingredient: [``],
        pill_use: [`Quấn băng bó các vết thương ở các vị trí như đầu, tay, chân.`],
        pill_dosage: [
            `Dưới đây là một số trường hợp vết thương hở cần được băng bó như:`,
            [
                `Vết thương ở vị trí dễ bị bẩn: Vị trí vết thương thường xuyên tiếp xúc với môi trường bên ngoài như bàn tay, bàn chân có khả năng bị nhiễm bẩn cao nhất. Môi trường ô nhiễm thường tiềm ẩn nhiều mầm bệnh. Khi các tác nhân gây bệnh này xâm nhập vào cơ thể qua vết thương có thể gây bệnh. Do đó, cần phải bảo vệ vết thương khỏi các tác động bên ngoài càng nhiều càng tốt. Lúc này, băng cuộn vết thương là một phương án hợp lý.`,
                `Vết thương ma sát với quần áo: Ma sát có thể xảy ra ở nhiều nơi da tiếp xúc với quần áo. Trong quá trình di chuyển, ma sát xảy ra giữa quần áo và vết thương có thể bào mòn lớp da bị tổn thương. Từ đó, vết hở càng đau và lở loét ra. Băng cuộn giúp ngăn ma sát để vết thương lành nhanh hơn.`,
                `Vết thương chưa đóng vảy: Lớp vảy là hàng rào tự nhiên chống lại các tác nhân bên ngoài, ngăn vi khuẩn xâm nhập vào vết thương và ngăn ngừa nhiễm trùng. Tuy nhiên, vảy cũng có thể ngăn cản sự hình thành các tế bào mới, làm chậm quá trình lành vết thương và tăng khả năng để lại sẹo. Mặc dù lớp vảy khô lại nhưng vết thương bên dưới vẫn chưa lành hoàn toàn. Giai đoạn này hay bị ngứa, nhưng quan trọng là không được gãi. Quấn băng lúc này có thể gây ma sát khiến vết thương lâu lành. Vì vậy, chỉ nên băng vết thương ở giai đoạn chưa đóng vảy.`,
            ],
            `Đối tượng sử dụng:`,
            [`Băng cuộn được sử dụng ở hầu hết các bệnh viện, phòng khám, trung tâm y tế.`,],
        ],
        pill_pharmacology: [``],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [`Chưa có thông tin về tác dụng phụ của sản phẩm.`],
        pill_interactions: [],
        pill_precautions: [
            `Đọc kỹ hướng dẫn sử dụng trước khi dùng.`,
            `Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp.`,
            `Để xa tầm tay trẻ em.`,
        ],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


    {
        pill_id: `L1543e`,
        pill_name: `Khẩu trang y tế Thiên Thủy 4 lớp hỗ trợ ngăn khói, bụi, kháng khuẩn (50 cái)`,
        pill_brand: ``,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 0,
        pill_sellPrice: 39000,
        pill_buyPrice: 2000,
        pill_packKind: `50 cái`,
        pill_imgAddress: [`images/pill/khẩu_trang.png`],
        pill_indication: [],
        pill_contraindication: [],
        pill_description: [
            `Khẩu trang y tế kháng khuẩn 4 lớp nâng cao hiệu quả bảo vệ hệ hô hấp.`,
            [
                `Khẩu trang y tế Thiên Thủy 4 lớp với 3 cấu tạo 3 lớp vải không dệt và 1 lớp vi lọc thấu khí cho hiệu quả bảo vệ cao trước bụi bẩn, vi khuẩn và các bệnh nguy hiểm lây qua đường hô hấp.`,
                `Có thể bạn đã quá quen thuộc với các loại khẩu trang 2 lớp, 3 lớp trên thị trường với tác dụng ngăn khói bụi, virus,... và khẩu trang 4 lớp cũng không ngoại lệ. Trước đây khẩu trang y tế 4 lớp chỉ được sử dụng trong các cơ sở  khám chữa bệnh thì ngày nay loại khẩu trang này ngày càng được sử dụng rộng rãi hơn khi môi trường ngày càng ô nhiễm, đặc biệt là tình hình dịch bệnh hiện nay. Được các chuyên gia y tế khuyên dùng, đặc biệt trong môi trường công nghiệp, khói bụi và đặc biệt là phòng chống các bệnh do virus, vi khuẩn,... `,
            ],
            `Cấu tạo khẩu trang Thiên Thuỷ 4 lớp:`,
            [
                `Khẩu trang kháng khuẩn Thiên Thuỷ 4 lớp có cấu tạo bao gồm: 3 lớp vải không dệt Polypropylene và 1 lớp vi lọc thấu khí Polypropylene.`,
                `Vải không dệt Polypropylene: Với tính năng không thấm nước, mềm mại, vải PP đạt tiêu chuẩn sử dụng trong sản xuất các sản phẩm và thiết bị y tế, kháng khuẩn, phòng chống bệnh truyền nhiễm đường hô hấp và chống khói bụi.`,
                `Lớp vi lọc thấu khí Polypropylene: Lớp vi thấu khí PP không thấm nước, với kích thước lỗ lọc siêu nhỏ phát huy khả năng cao trong việc lọc bụi mịn và vi khuẩn.`,
                `Thiết kế khẩu trang có thanh nẹp mũi bằng nhựa phía trước và dây đeo đàn hồi dễ dàng điều chỉnh sao cho ôm sát khuôn mặt, che kín mũi và miệng, tăng hiệu quả bảo vệ của khẩu trang y tế.`,
            ],
            `Tính năng nổi bật:`,
            [
                `Khẩu trang kháng khuẩn ngăn cản sự tiếp xúc của các tác nhân gây hại đường hô hấp như vi khuẩn, virus, hóa chất, khói bụi cao hơn 90%. Từ đó ngăn ngừa được các bệnh liên quan đến đường hô hấp.`,
                `Khẩu trang nhẹ, mềm mại, thông khí, có nẹp mũi bằng nhựa dễ dàng ôm sát mặt tạo sự cố định và đảo bảo che kín cho người sử dụng.`,
                `Tăng khả năng chống nắng và tia UV, tăng cường bảo vệ da.`,
                `Không gây kích ứng da và phù hợp với mọi loại da.`,
            ],
            `Chất liệu đảm bảo tiêu chuẩn y tế:`,
            `Vải không dệt được làm từ chất liệu nhựa Polypropylene (PP), tuy nhiên để làm vải không dệt PP thường sử dụng phương pháp nối các sợi Polypropylene (PP) có đường kính nhỏ bằng phương pháp ép nóng hoặc chất kết dính đặc biệt. Điều này giúp tiết kiệm thời gian cũng như chi phí so với phương pháp dệt truyền thống. Vì vải không dệt PP không trải qua quá trình dệt mà tạo thành bằng kết dính nhiệt hoặc hóa chất nên có những đặc tính như:`,
            [
                `Độ bền cao, khả năng chịu lực khá tốt.`,
                `Trọng lượng nhẹ, mỏng.`,
                `Có khả năng thấm hút tốt.`,
                `Không gây ô nhiễm môi trường.`,
                `Có đặc tính chống vi khuẩn.`,
                `Lớp vi lọc thấu khí Polypropylene - Ngăn cản vi khuẩn siêu nhỏ.`,
                `Phần quan trọng nhất của khẩu trang y tế là lớp vi lọc. Điều đặc biệt là thấu khí nhưng không thấm nước. Lớp màng này có chức năng lọc bụi bẩn và vi khuẩn mà những loại khẩu trang thông thường không làm được. Lớp vi lọc kháng khuẩn được làm từ các sợi Polypropylene có khả năng ngăn chặn virus và bụi bẩn có kích thước nhỏ hơn 10 micromet.`,
            ],

            `Các chứng nhận:`,
            [
                `Khẩu trang y tế Thiên Thuỷ đạt một số chứng nhận:`,
                `Chứng nhận khẩu trang y tế đạt tiêu chuẩn quốc tế ISO.`,
                `Có giấy phép lưu hành khẩu trang y tế.`,
                `Khẩu trang y tế có tấm lọc bụi đạt tiêu chuẩn và quy chuẩn kỹ thuật do nhà nước quy định.`,
                `Chứng nhận Kiểm tra chất lượng sản phẩm do bộ Khoa học và Công nghệ hướng dẫn xây và áp dụng tiêu chuẩn.`,
            ],
        ],
        pill_ingredient: [
            `Khẩu trang y tế Thiên Thủy 4 lớp hỗ trợ ngăn ngừa: Bụi, vi khuẩn và các bệnh lây qua đường hô hấp.`,
            `Giảm tác động của ánh sáng mặt trời lên da.`,
        ],
        pill_use: [
            `Kéo hai dây khẩu trang vòng qua hai bên vành tay.`,
            `Điều chỉnh nẹp mũi ôm vừa khít sống mũi.`,
            `Kéo mép dưới khẩu trang qua cằm.`,
        ],
        pill_dosage: [],
        pill_pharmacology: [``],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [`Chưa có thông tin về tác dụng phụ của sản phẩm.`,],
        pill_interactions: [],
        pill_precautions: [
            `Sản phẩm chỉ sử dụng một lần.`,
            `Tránh xa khu vực có lửa hoặc nguy cơ bắt lửa.`,
            `Tránh xa tầm tay trẻ em.`,
            `Sau khi sử dụng, bỏ chất thải đúng nơi quy định.`,
            `Bảo quản:`,
            [
                `Bảo quản nơi khô ráo, đảm bảo vệ sinh.`,
                `Tránh xa nhiệt độ cao.`,
            ],
        ],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


    {
        pill_id: `H2643e`,
        pill_name: `Băng cá nhân độ dính cao, co giãn tốt Urgo Family size 2cm x 6cm bảo vệ các vết thương nhỏ (10 miếng)`,
        pill_brand: ``,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 0,
        pill_sellPrice: 15000,
        pill_buyPrice: 2000,
        pill_packKind: `50 cái`,
        pill_imgAddress: [`images/pill/băng_cá_nhân.png`],
        pill_indication: [
            `Urgo Family được chỉ định dùng bảo vệ các vết thương nhỏ, vết trầy xước, rách da, vết kim đâm.`,
            `Đối tượng sử dụng: Thích hợp dùng cho mọi người có vết thương nhỏ, vết cắt, vết trầy xước…`,
        ],
        pill_contraindication: [],
        pill_description: [
            `2 loại băng dán khác nhau trong 1 gói sản phẩm.`,
            `Urgo Family gồm có 5 miếng băng dán cá nhân độ dính cao, co dãn tốt và 5 miếng băng dán cá nhân ít thấm nước.`,
            [
                `Băng cá nhân độ dính cao, co giãn tốt 5 miếng, 2.0 cm x 6.0 cm:`,
                `Băng cá nhân bằng vải co giãn tốt, thông thoáng. Được thiết kế với lớp gạc màu trắng phủ bởi lớp lưới polyethylene không gây dính, giúp thay băng dễ dàng, không đau.`,
            ],
            [
                `Băng cá nhân ít thấm nước 5 miếng 2 x 7.2 cm:`,
                `Băng cá nhân bằng polyethylene hợp màu da, ít thấm nước, lỗ thông lớn, độ dính cao. Thiết kế bao gồm lớp gạc màu trắng phủ bởi lớp lưới polyethylene không gây dính giúp thay băng không đau.`,
            ],
            `Ưu điểm nổi bật của sản phẩm:`,
            [
                `Ưu điểm lớn nhất của dòng băng cá nhân Urgo ít thấm nước là giúp bảo vệ vết thương khỏi nước, thích hợp cho những người có các hoạt động tiếp xúc nhanh với nước.`,
                `Phần gạc được phủ bởi lớp lưới Polyethylene không gây dính vào vết thương, không gây đau khi băng.`,
                `Sản phẩm có lớp keo Acrylic không dùng dung môi, dung nạp tốt, độ dính cao, giúp giữ cho vết thương sạch sẽ và khô ráo, ngăn ngừa nhiễm trùng và tăng tốc độ chữa lành.`,
                `Mỗi miếng băng cá nhân được đựng trong từng bao riêng vô trùng, kín, hạn chế nhiễm khuẩn khi chưa sử dụng.`,
                `Chất liệu an toàn, không gây kích ứng da, thích hợp với cả làn da nhạy cảm.`,
            ],
            ``
        ],
        pill_ingredient: [``],
        pill_use: [
            `Làm vệ sinh da và lau khô trước khi dán băng.`,
            `Thay băng hàng ngày.`,
        ],
        pill_dosage: [
            `Việc đơn giản và hiệu quả để xử lý mà mọi người thường làm là sử dụng dán băng cá nhân khi có vết thương nhỏ, vết cắt. Tuy nhiên một số người vẫn chưa biết đến cách dán băng cá nhân đúng khiến cho vết thương lâu lành hơn. Cùng lưu ý một số vấn đề sau khi sử dụng băng dán cá nhân:`,
            [
                `Làm sạch và khô vết thương trước khi băng.`,
                `Không nên siết băng quá chặt, tránh làm máu không lưu thông được xuống phần bị thương. Cũng không nên dán băng quá lỏng khiến băng dễ bị bung và tăng nguy cơ nhiễm trùng vết thương.`,
                `Chỉ nên sử dụng băng dán cá nhân cho những vết thương nhỏ ngoài da. Không sử dụng băng dán cá nhân khi vết thương quá sâu, rộng và chảy nhiều máu. Cần thực hiện các biện pháp cầm máu khác.`,
                `Không nên sử dụng băng cá nhân trên các vết thương bị nhiễm trùng, như vết côn trùng cắn, mụn nhọt,... `,
                `Thay băng mỗi ngày ít nhất 2 lần nếu băng bị bẩn hoặc ướt để giữ cho vết thương sạch và khô, tránh nhiễm trùng vết thương.`,
                `Không nên quá lạm dụng việc dùng băng keo cá nhân nhiều khi bị thương. Đối với các vết thương nhẹ hơn, thì bạn dán để cầm máu và sau đó nên tháo ra và để cho miệng vết thương tự khô. `,
            ],
        ],
        pill_pharmacology: [``],
        pill_pharmacokinetics: [``],
        pill_sideEffects: [`Chưa có báo cáo về tác dụng phụ sản phẩm.`],
        pill_interactions: [],
        pill_precautions: [
            `Không sử dụng nếu bao bì bị rách, hở hoặc hư hỏng.`,
            `Đọc kỹ thông tin hướng dẫn sử dụng trước khi dùng.`,
            `Bảo quản:`,
            [
                `Nơi khô ráo, thoáng mát.`,
            ],
        ],
        pill_overdose: [],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


    {
        pill_id: `S9890j`,
        pill_name: `Dung dịch sát khuẩn Povidine 10% Pharmedic ngăn ngừa nhiễm khuẩn ở vết cắt, vết trầy (20ml)`,
        pill_brand: ``,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 0,
        pill_sellPrice: 7000,
        pill_buyPrice: 2000,
        pill_packKind: `10 miếng`,
        pill_imgAddress: [`images/pill/sát_khuẩn.png`],
        pill_indication: [
            `Thuốc Povidine 20ml được chỉ định dùng trong các trường hợp sau:`,
            [
                `Sát khuẩn để giúp ngăn ngừa nhiễm khuẩn ở vết cắt, vết trầy và vết bỏng nhỏ.`,
                `Sát trùng da trước khi phẫu thuật.`,
                `Giúp giảm các vi khuẩn có khả năng gây nhiễm trùng da.`,
            ],
        ],
        pill_contraindication: [
            `Thuốc Povidine 20ml chống chỉ định trong các trường hợp sau:`,
            [
                `Quá mẫn với bất cứ thành phần nào của thuốc.`,
                `Không dùng vào mắt.`,
                `Sử dụng lâu hơn 1 tuần trừ khi có chỉ định của bác sĩ.`,
                `Dùng trên diện rộng của cơ thể.`,
            ],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [
            `Bôi ngoài da.`,
            `Lau sạch vùng bị bệnh.`,
            `Bôi một lượng nhỏ thuốc lên vùng da.`,
            `Có thể phủ miếng gạc vô trùng.`,
            `Nếu băng bó trước tiên phải để khô.`,
        ],
        pill_dosage: [
            `Bôi một lượng nhỏ thuốc Povidine 20ml lên vùng da bị bệnh 1 – 3 lần/ngày.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Povidon iod là phức hợp của iod với povidon. Povidon được dùng làm chất mang iod. Dung dịch povidon - iod được giải phóng iod dần dần, do đó kéo dài tác dụng sát khuẩn diệt khuẩn, nấm, virus, động vật đơn bào, kén và bào tử.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: lod thấm được qua da và thải qua nước tiểu. Hấp thu toàn thân phụ thuộc vào vùng và tình trạng sử dụng thuốc (diện rộng, da, niêm mạc, vết thương, các khoang trong cơ thể). Khi dùng làm dung dịch rửa các khoang trong cơ thể, toàn bộ phức hợp cao phân tử povidon iod cũng có thể được cơ thể hấp thu.`,
            `Phân bố: Thuốc được hệ liên võng nội mô lọc giữ.`,
            `Chuyển hóa và thải trừ: Phức hợp này không chuyển hóa hoặc đào thải qua thận.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Povidine 20ml, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Chế phẩm có thể gây kích ứng tại chỗ, mặc dù thuốc ít kích ứng hơn iod tự do. Dùng lặp lại với vết thương rộng hoặc vết bỏng nặng, có thể gây phản ứng toàn thân.`,
            `Thường gặp, ADR > 1/100:`,
            [
                `Toàn thân: Dùng povidon iod ở vết thương rộng và bỏng nặng có thể gây nhiễm acid chuyển hóa, tăng natri huyết và tổn thương chức năng thận.`,
                `Tuyến giáp: Có thể gây giảm năng giáp và nếu có giảm năng giáp tiềm tàng, có thể gây cơn nhiễm độc giáp.`,
                `Huyết học: Giảm bạch cầu trung tính (ở những người bệnh bị bỏng nặng).`,
                `Thần kinh: Co giật (ở những người bệnh điều trị kéo dài).`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Huyết học: Giảm bạch cầu trung tính (ở những người bệnh bị bỏng nặng).`,
                `Thần kinh: Co giật (ở những người bệnh điều trị kéo dài).`,
                `Dị ứng như viêm da do iod, đốm xuất huyết, viêm tuyến nước bọt, nhưng với tỉ lệ rất thấp.`,
                `Đã thấy iod trong nước ối của người mẹ dùng povidon iod gây suy giáp và bướu giáp bẩm sinh do thuốc ở trẻ sơ sinh, mặc dù người mẹ dùng lượng thấp iod làm thuốc sát khuẩn. Tuy nhiên povidon iod cũng có thể gây cường giáp.`,
            ],
            `Hướng dẫn cách xử trí ADR:`,
            [
                `Khi gặp tác dụng phụ của thuốc Povidine 20ml, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
            ],
        ],
        pill_interactions: [
            `Tác dụng kháng khuẩn bị giảm khi có kiềm và protein. Xà phòng không làm mất tác dụng.`,
            `Tương tác với hợp chất thủy ngân: Gây ăn da. Thuốc bị mất tác dụng với natri thiosulfat, ánh sáng mặt trời, nhiệt độ cao và các thuốc sát khuẩn khác.`,
            `Povidon iod có thể cản trở test thăm dò chức năng tuyến giáp.`,
            `Tương kỵ của thuốc:`,
            [
                `Do không có các nghiên cứu về tính tương kỵ của thuốc Povidine 20ml, không trộn lẫn thuốc này với các thuốc khác.`,
            ],
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,
            [
                `Cần thận trọng khi dùng thuốc thường xuyên trên vết thương đối với người bệnh có tiền sử suy thận, đối với người bệnh đang điều trị bằng lithi.`,
                `Lưu ý với bỏng nặng, vết thương sâu, kích ứng tại chỗ nhiều hay nhiễm khuẩn.`,
            ],
            `Khả năng lái xe và vận hành máy móc:`,
            [
                `Chưa có bằng chứng về ảnh hưởng của thuốc lên khả năng lái xe và vận hành máy móc.`,
            ],
            `Thời kỳ mang thai:`,
            [
                `Tránh dùng thường xuyên ở phụ nữ mang thai. Mặc dù chưa có bằng chứng về nguy hại, nhưng vẫn nên thận trọng và cân nhắc giữa lợi ích điều trị và tác dụng có thể gây ra do hấp thu iod đối với sự phát triển và chức năng của tuyến giáp thai nhi.`,
            ],
            `Thời kỳ cho con bú:`,
            [
                `Tránh dùng thường xuyên ở phụ nữ cho con bú.`,
            ],
            `Bảo quản:`,
            [
                `Ở nhiệt độ không quá 30°C.`,
                `Đậy nắp kín ngay sau khi dùng.`,
            ],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Lượng iod quá thừa sẽ gây bướu giáp, nhược giáp hoặc cường giáp. Dùng chế phẩm nhiều lần trên vùng da tổn thương rộng hoặc bỏng sẽ gây nhiều tác dụng không mong muốn như vị kim loại, tăng tuyến nước bọt, đau rát họng và miệng, mắt bị kích ứng, sưng, đau dạ dày, tiêu chảy, khó thở do phù phổi... có thể có nhiễm acid chuyển hóa, tăng natri huyết và tổn thương thận.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [
            `Cách xử trí: Trong trường hợp uống nhầm một lượng lớn povidon iod, phải điều trị triệu chứng và hỗ trợ, chú ý đặc biệt đến cân bằng điện giải, chức năng thận và tuyến giáp.`,
        ],
        pill_viewed: 10
    },


    {
        pill_id: `S7890j`,
        pill_name: `Thuốc Vitamin C 500mg Vidipha điều trị bệnh do thiếu Vitamin C (10 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 0,
        pill_sellPrice: 3000,
        pill_buyPrice: 2000,
        pill_packKind: `10 vỉ x 10 viên`,
        pill_imgAddress: [`images/pill/Vitamin_c.png`],
        pill_indication: [
            `Thuốc Vitamin C 500mg Vidipha được chỉ định dùng trong các trường hợp sau:`,
            [
                `Ðiều trị bệnh do thiếu vitamin C.`,
                `Methemoglobin huyết vô căn khi không có sẵn xanh methylen.`,
            ],
        ],
        pill_contraindication: [
            `Tránh dùng vitamin C liều cao cho những bệnh nhân:`,
            [
                `Thiếu hụt glucose - 6 - phosphat dehydrogenase nguy cơ (G6PD) (thiếu máu huyết tán).`,
                `Có tiền sử sỏi thận, tăng oxalat niệu và loạn chuyển hóa oxalat (tăng nguy cơ sỏi thận).`,
                `Bệnh thalassemia (tăng nguy cơ hấp thu sắt).`,
            ],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Dùng đường uống.`],
        pill_dosage: [
            `Điều trị bệnh thiếu vitamin C (scorbut):`,
            [
                `Người lớn: liều 1 viên/ngày, uống ít nhất trong 2 tuần.`,
                `Methemoglobin huyết khi không có sắn xanh methylen: 1 viên/ngày.`,
            ],
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Vitamin C cần cho sự tạo thành colagen, tu sửa mô trong cơ thể và tham gia trong một số phản ứng oxy hóa - khử. Vitamin C tham gia trong chuyển hóa phenylalanin, tyrosin, acid folic, norepinephrin, histamin, sắt và một số hệ thống enzym chuyển hóa thuốc, trong sử dụng carbonhydrat, trong tổng hợp lipid và protein, trong chức năng miễn dịch, trong đề kháng với nhiễm khuẩn, trong giữ gìn sự toàn vẹn của mạch máu và trong hô hấp tế bào.`,
            `Thiếu hụt vitamin C dẫn đến bệnh scorbut, trong đó có sự sai sót tổng hợp colagen với biểu hiện là không lành vết thương, khiếm khuyết về cấu tạo răng, vỡ mao mạch gây nhiều đốm xuất huyết, đám bầm máu, chảy máu dưới da và niêm mạc (thường là chảy máu lợi).`,
            `Dùng vitamin C làm mất hoàn toàn các triệu chứng thiếu hụt vitamin C.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Nồng độ vitamin C trong huyết tương ở khoảng 10 - 20 mcg/ml. Dự trữ toàn bộ vitamin C trong cơ thể ước tính khoảng 1,5g với khoảng 30 – 45 mg được luân chuyển hàng ngày. Dấu hiệu lâm sàng của bệnh scorbut thường trở nên rõ ràng sau 3 - 5 tháng thiếu hụt vitamin C.`,
            `Phân bố: Vitamin C phân bố rộng rãi trong các mô cơ thể. Khoảng 25% vitamin C trong huyết tương kết hợp với protein.`,
            `Chuyển hóa: Vitamin C oxy - hóa thuận nghịch thành acid dehydroascorbic. Một ít vitamin C chuyển hóa thành những hợp chất không có hoạt tính gồm ascorbic acid – 2 sulfat và acid oxalic được bài tiết trong nước tiểu.`,
            `Thải trừ: Lượng vitamin C vượt quá nhu cầu của cơ thể cũng được nhanh chóng đào thải ra nước tiểu dưới dạng không biến đổi. Điều này thường xảy ra khi lượng vitamin C nhập hàng ngày vượt quá 200 mg.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Vitamin C 500mg, bạn có thể gặp các tác dụng không mong muốn (ADR): Tăng oxalat - niệu, buồn nôn, nôn, ợ nóng, co cứng cơ bụng, mệt mỏi, đỏ bừng, nhức đầu, mất ngủ, và tình trạng buồn ngủ đã xảy ra. Sau khi uống 1 liều 1g hàng ngày hoặc lớn hơn, có thể xảy ra tiêu chảy.`,
            `Thường gặp, ADR >1/100:`,
            [
                `Thận: Tăng oxalat niệu.`,
            ],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [
                `Máu: Thiếu máu tan máu.`,
                `Tim mạch: Bừng đỏ, suy tim.`,
                `Thần kinh trung ương: Xỉu, chóng mặt, nhức đầu, mệt mỏi.`,
                `Dạ dày - ruột: Buồn nôn, nôn, ợ nóng, tiêu chảy.`,
                `Thần kinh - cơ và xương: Đau cạnh sườn.`,
            ],
            `Hướng dẫn cách xử trí ADR:`,
            [
                `Thông báo cho bác sỹ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
            ],
        ],
        pill_interactions: [
            `Dùng đồng thời theo tỷ lệ trên 200mg vitamin C và 30 mg sắt nguyên tố làm tăng hấp thu sắt qua đường dạ dày - ruột; tuy vậy, đa số người bệnh đều có khả năng hấp thu sắt uống vào một cách đầy đủ mà không phải dùng đồng thời vitamin C.`,
            `Dùng đồng thời vitamin C với aspirin làm tăng bài tiết vitamin C và giảm bài tiết aspirin trong nước tiểu.`,
            `Dùng đồng thời vitamin C và fluphenazin dẫn đến giảm nồng độ fluphenazin huyết tương. Sự acid - hóa nước tiểu sau khi dùng vitamin C làm thay đổi sự bài tiết của các thuốc khác.`,
            `Vitamin C liều cao có thể phá hủy vitamin B12; cần khuyên người bệnh tránh uống vitamin C liều cao trong vòng một giờ trước hoặc sau khi uống vitamin B12.`,
            `Vì vitamin C là một chất khử mạnh, nên ảnh hưởng đến nhiều xét nghiệm dựa trên phản ứng oxy - hóa khử. Sự có mặt vitamin C trong nước tiểu làm tăng giả tạo lượng glucose nếu định lượng bằng thuốc thử đồng (II) sulfat và giảm giả tạo lượng glucose nếu định lượng bằng phương pháp glucose oxydase. Với các xét nghiệm khác, cần phải tham khảo tài liệu chuyên biệt về ảnh hưởng của vitamin C.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,
            [
                `Dùng vitamin C liều cao kéo dài có thể dẫn đến hiện tượng lớn thuốc, do đó khi giảm liều sẽ dẫn đến thiếu hụt vitamin C. Uống liều lớn vitamin C trong khi mang thai sẽ dẫn đến bệnh scorbut ở trẻ sơ sinh.`,
                `Tăng oxalat niệu có thể xảy ra sau khi dùng liều cao vitamin C, Vitamin C có thể gây acid hóa nước tiểu, đôi khi dẫn đến kết tủa urat hoặc cystin, hoặc sỏi oxalat, hoặc thuốc trong đường tiết niệu.`,
            ],
            `Khả năng lái xe và vận hành máy móc:`,
            [
                `Chưa có tài liệu.`
            ],
            `Thời kỳ mang thai:`,
            [
                `Vitamin C đi qua nhau thai. Chưa có các nghiên cứu cả trên súc vật và người mang thai, và nếu dùng vitamin C theo nhu cầu bình thường hàng ngày thì chưa thấy xảy ra vấn đề gì trên người. Tuy nhiên, uống những lượng lớn vitamin C trong khi mang thai có thể làm tăng nhu cầu về vitamin C và dẫn đến bệnh scorbut ở trẻ sơ sinh.`,
            ],
            `Thời kỳ cho con bú:`,
            [
                `Vitamin C phân bố trong sữa mẹ. Người cho con bú dùng vitamin C theo nhu cầu bình thường, chưa thấy có vấn đề gì xảy ra đối với trẻ sơ sinh.`,
            ],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Triệu chứng: Những triệu chứng quá liều gồm sỏi thận, buồn nôn, viêm dạ dày và tiêu chảy.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [`Điều trị: Gây lợi tiểu bằng truyền dịch có thể có tác dụng sau khi uống liều lớn.`],
        pill_viewed: 10
    },

    {
        pill_id: `S789aj`,
        pill_name: `Thuốc Allvitamine bổ sung Vitamin`,
        pill_brand: `USA - NIC PHARMA`,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 9,
        pill_sellPrice: 3000,
        pill_buyPrice: 2000,
        pill_packKind: `10 vỉ x 10 viên`,
        pill_imgAddress: [`images/pill/Allvitamine.png`],
        pill_indication: [
            `Thuốc Allvitamine được chỉ định dùng để bổ sung vitamin.`
        ],
        pill_contraindication: [
            `Mẫn cảm với một trong các thành phần của thuốc.`,
            `Bệnh gan nặng, loét dạ dày tiến triển, xuất huyết động mạch, hạ huyết áp nặng.`,
        ],
        pill_description: [`Allvitamine của công ty TNHH Dược phẩm USA-NIC (USA-NIC Pharma), có thành phần Vitamin A (Retinol acetat) 1500 IU, Vitamin B1 (Thiamin hydroclorid) 2,5 mg, Vitamin B2 (Riboflavin) 2,5 mg, Vitamin B6 (Pyridoxin hydroclorid) 0,75 mg, Vitamin B5 (Calci pantothenat) 2,5 mg, Vitamin PP (Nicotinamid) 5 mg, Vitamin E (Alpha tocopherol acetat) 5 mg.`],
        pill_ingredient: [
            `Vitamin A - 1500UI`,
            `Vitamin B1 - 2.5mg`,
            `Vitamin B2 - 2.5mg`,
            `Vitamin B5 - 2.5mg`,
            `Vitamin B6 - 0.75mg`,
            `Vitamin PP - 12.5mg`,
            `Vitamin E - 5mg`,
        ],
        pill_use: [`Dùng đường uống.`],
        pill_dosage: [
            `Người lớn: Uống mỗi lần 2 - 3 viên, ngày 2 - 3 lần.`,
            `Trẻ em: Uống mỗi lần 1 viên, ngày 2 - 3 lần.`,
        ],
        pill_pharmacology: [],
        pill_pharmacokinetics: [],
        pill_sideEffects: [
            `Khi sử dụng thuốc Allvitamin, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Vitamin A`,
            [`Mệt mỏi, dễ bị kích thích, chán ăn, sút cân khi dùng vitamin A liều cao dài ngày.`,],
            `Vitamin B1`,
            [`Rất hiếm khi xảy ra, thường theo kiểu dị ứng.`,],
            `Vitamin B6`,
            [`Dùng liều 200 mg/ ngày và dài ngày (trên 2 tháng) có thể gây bệnh thần kinh ngoại vi nặng, tiến triển từ dáng đi không vững và tê cóng bàn chân đến tê cóng và vụng về bàn tay. Tình trạng này có thể hồi phục khi ngưng thuốc, nhưng để lại ít nhiều di chứng.`,],
            `Vitamin PP`,
            [`Khi dùng liều cao (300 - 500 mg/ ngày) có thể gây một số tác dụng không mong muốn sau, nhưng sẽ hết khi ngưng sử dụng thuốc.`,
                `Thường gặp: Buồn nôn, đỏ bừng mặt và cổ, ngứa, cảm giác rát bỏng.`,
                `Ít gặp: Loét dạ dày tiến triển, nôn, chán ăn, tiêu chảy, tăng tuyến bã nhờn.`,],
            `Hướng dẫn cách xử trí ADR`,
            `Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời.`,
        ],
        pill_interactions: [
            `Vitamin A: Neomycin, cholestyramin, paraffin lỏng làm giảm hấp thu vitamin A. Các thuốc tránh thai có thể làm tăng nồng độ vitamin A trong huyết tương và các tác dụng không thuận lợi trong việc thụ thai.`,
            `Vitamin B2: Rượu gây cản trở hấp thu vitamin B2 ở ruột. Probenecid sử dụng cùng vitamin B2 gây giảm hấp thu vitamin B2 ở dạ dày và ruột.`,
            `Vitamin B5: Một số chất đối kháng tác dụng của vitamin B5.`,
            `Vitamin B6: Làm giảm tác dụng của levodopa trong điều trị bệnh Parkinson; điều này không xảy ra đối với chế phẩm là hỗn hợp levodopa - carbidopa hoặc levodopa - benserazid. Vitamin B6 có thể làm giảm bớt trầm cảm ở phụ nữ uống thuốc tránh thai.`,
            `Vitamin PP: Sử dụng đồng thời với các chất ức chế men khử HGM - CoA có thể làm tăng nguy cơ gây tiêu cơ vân. Sử dụng đồng thời với các thuốc có độc tính với gan có thể làm tăng tác hại độc cho gan.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,
            [
                `Dùng vitamin C liều cao kéo dài có thể dẫn đến hiện tượng lớn thuốc, do đó khi giảm liều sẽ dẫn đến thiếu hụt vitamin C. Uống liều lớn vitamin C trong khi mang thai sẽ dẫn đến bệnh scorbut ở trẻ sơ sinh.`,
                `Tăng oxalat niệu có thể xảy ra sau khi dùng liều cao vitamin C, Vitamin C có thể gây acid hóa nước tiểu, đôi khi dẫn đến kết tủa urat hoặc cystin, hoặc sỏi oxalat, hoặc thuốc trong đường tiết niệu.`,
            ],
            `Khả năng lái xe và vận hành máy móc:`,
            [
                `Chưa có tài liệu.`
            ],
            `Thời kỳ mang thai:`,
            [
                `Vitamin C đi qua nhau thai. Chưa có các nghiên cứu cả trên súc vật và người mang thai, và nếu dùng vitamin C theo nhu cầu bình thường hàng ngày thì chưa thấy xảy ra vấn đề gì trên người. Tuy nhiên, uống những lượng lớn vitamin C trong khi mang thai có thể làm tăng nhu cầu về vitamin C và dẫn đến bệnh scorbut ở trẻ sơ sinh.`,
            ],
            `Thời kỳ cho con bú:`,
            [
                `Vitamin C phân bố trong sữa mẹ. Người cho con bú dùng vitamin C theo nhu cầu bình thường, chưa thấy có vấn đề gì xảy ra đối với trẻ sơ sinh.`,
            ],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [
                `Triệu chứng: Những triệu chứng quá liều gồm sỏi thận, buồn nôn, viêm dạ dày và tiêu chảy.`,
            ],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [`Điều trị: Gây lợi tiểu bằng truyền dịch có thể có tác dụng sau khi uống liều lớn.`],
        pill_viewed: 10
    },

    {
        pill_id: `A7890j`,
        pill_name: `Thuốc Vitamin E 400IU OPC hỗ trợ điều trị thiếu Vitamin E (4 vỉ x 10 viên)`,
        pill_brand: ``,
        pill_tags: [`Sơ cứu, thuốc bổ chăm sóc sức khỏe`],
        pill_quantity: 0,
        pill_sellPrice: 10000,
        pill_buyPrice: 2000,
        pill_packKind: `4 vỉ x 10 viên`,
        pill_imgAddress: [`images/pill/Vitamin_e.png`],
        pill_indication: [
            `Điều trị thiếu vitamin E trong các trường hợp:`,
            [
                `Chế độ ăn thiếu vitamin E, trẻ em bị xơ nang tuyến tụy hoặc kém hấp thu mỡ do teo đường dẫn mật hoặc thiếu betalipoprotein huyết, trẻ sơ sinh thiếu tháng rất nhẹ cân khi đẻ; các bệnh cơ và thần kinh như giảm phản xạ, dáng đi bất thường, giảm nhạy cảm với rung động và cảm thụ bản thân, liệt cơ mắt, bệnh võng mạc nhiễm sắc tố, thoái hóa sợi trục thần kinh.`,
                `Chống oxy hóa kết hợp với vitamin C, vitamin A và selenium.`,
                `Phụ trị gan nhiễm mỡ, tăng cholesterol máu, vô sinh, giảm sản xuất tinh trùng ở nam giới.`,
                `Phòng ngừa sự thiếu hụt vitamin E.`,
            ],
        ],
        pill_contraindication: [
            `Thuốc Vitamin E chống chỉ định trong trường hợp sau:`,
            [
                `Không dùng cho bệnh nhân mẫn cảm với bất kỳ thành phần nào của thuốc.`,
            ],
        ],
        pill_description: [],
        pill_ingredient: [``],
        pill_use: [`Thuốc dùng đường uống.`],
        pill_dosage: [
            `Uống mỗi lần 1 viên, ngày uống 1 lần: dùng cho cả phòng ngừa và điều trị thiếu hụt Vitamin E; hoặc theo hướng dẫn của thầy thuốc.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,
        ],
        pill_pharmacology: [
            `Vitamin E làm mất các triệu chứng thiếu vitamin E và được sử dụng làm chất chống oxy hóa thông qua các cơ chế: Ngăn cản oxy hóa các thành phần thiết yếu trong tế bào; ngăn cản tạo thành các sản phẩm oxy hóa độc hại như các sản phẩm peroxy hóa do chuyển hóa các acid béo chưa bão hòa; phản ứng với các gốc tự do (nguyên nhân gây tổn hại màng tế bào do oxy hóa), mà không tạo ra các gốc tự do khác trong quá trình đó.`,
            `Vitamin E giúp tăng hấp thu vitamin A qua ruột, bảo vệ vitamin A khỏi bị thoái hóa do oxy hóa làm cho nồng độ vitamin A trong tế bào tăng lên, đồng thời bảo vệ chống lại tác dụng của chứng thừa vitamin A.`,
        ],
        pill_pharmacokinetics: [
            `Để vitamin E hấp thu qua đường tiêu hóa, mật và tuyến tụy phải hoạt động bình thường. Lượng vitamin E hấp thu giảm khi liều dùng tăng lên. Thuốc vào máu qua vi thể dưỡng chấp trong bạch huyết, rồi được phân bố rộng rãi vào tất cả các mô và tích lại ở mô mỡ.`,
            `Một ít vitamin E chuyển hóa ở gan thành các glucuronid của acid tocopheronic và gamma - lacton của acid này, rồi thải qua nước tiểu, còn hầu hết liều dùng thải trừ chậm vào mật. Vitamin E vào sữa, nhưng rất ít qua nhau thai.`,
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Vitamin E 400IU OPC, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Thường gặp, ADR >1/100:`,
            [`Chưa có báo cáo.`,],
            `Ít gặp, 1/1000 < ADR < 1/100:`,
            [`Chưa có báo cáo.`,],
            `Không xác định tần suất:`,
            [
                `Tiêu hóa: Liều cao có thể gây tiêu chảy, đau bụng và các rối loạn tiêu hóa khác.`,
                `Toàn thân: Mệt mỏi, yếu (dùng liều cao).`,
            ],
            `Hướng dẫn cách xử trí ADR:`,
            [`Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,],
        ],
        pill_interactions: [
            `Vitamin E đối kháng với tác dụng của vitamin K, nên làm tăng thời gian đông máu. Nồng độ vitamin E thấp ở người bị kém hấp thu do thuốc (như kém hấp thu khi dùng cholestyramin).Vitamin E làm tăng tác dụng của thuốc chống đông, warfarin, aspirin.`,
        ],
        pill_precautions: [
            `Trước khi sử dụng thuốc bạn cần đọc kỹ hướng dẫn sử dụng và tham khảo thông tin bên dưới.`,
            `Thận trọng khi sử dụng:`,
            [
                `Thận trọng khi sử dụng trên bệnh nhân đang dùng thuốc chống đông máu.`,
            ],
            `Khả năng lái xe và vận hành máy móc:`,
            [
                `Thuốc không ảnh hưởng lên khả năng lái xe và vận hành máy móc.`,
            ],
            `Thời kỳ mang thai:`,
            [
                `Trong thời kỳ mang thai, thiếu hoặc thừa vitamin E đều không gây biến chứng cho mẹ hoặc thai nhi. Ở người mẹ được dinh dưỡng tốt, lượng vitamin E có trong thức ăn là đủ và không cần bổ sung. Nếu chế độ ăn kém, nên bổ sung cho đủ nhu cầu hàng ngày khi có thai.`,
            ],
            `Thời kỳ cho con bú:`,
            [
                `Vitamin E vào sữa. Sữa người có lượng vitamin E gấp 5 lần sữa bò và có hiệu quả hơn trong việc duy trì đủ lượng vitamin E trong huyết thanh cho trẻ đến 1 năm tuổi. Nhu cầu vitamin E hàng ngày trong khi cho con bú là 12 mg. Chỉ cần bổ sung cho mẹ khi thực đơn không cung cấp đủ lượng vitamin E cần cho nhu cầu hàng ngày.`,
            ],
        ],
        pill_overdose: [
            `Làm gì khi dùng quá liều?`,
            [`Chưa có báo cáo.`,],
            `Làm gì khi quên 1 liều?`,
            [
                `Nếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`,
            ],
        ],
        pill_overdose_handling: [],
        pill_viewed: 10
    },


]