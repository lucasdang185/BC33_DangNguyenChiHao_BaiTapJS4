/**
 * Bài tập 1:Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
 *
 * Sơ đồ 3 khối
 * INPUT: 3 SỐ NGUYÊN BẤT KÌ A B C
 *
 * PROCESS:
 * 1: LẤY ĐƯỢC INPUT
 * 2: SỬ DỤNG IF ELSE
 *    NẾU A > B THÌ KIỂM TRA B CÓ LỚN HƠN C KHÔNG?  NẾU CÓ THÌ A > B > C
 *                                                  NẾU KHÔNG THÌ KIỂM TRA C>A KHÔNG? NẾU CÓ THÌ C > A > B. NGƯỢC LẠI A > C > B
 *    NGƯỢC LẠI NẾU A< THÌ KIỂM TRA A CÓ LỚN HƠN C KHÔNG? NẾU CÓ THÌ B > A > C
 *                                                        NẾU KHÔNG THÌ KIỂM TRA B CÓ LỚN HƠN C KHÔNG? NẾU CÓ THÌ B > C > A. NGƯỢC LẠI C > B > A
 * 3: IN RA MÀN HÌNH KẾT QUẢ 3 SỐ TĂNG DẦN
 * OUTPUT: XUẤT RA 3 SỐ NGUYÊN TĂNG DẦN
 */
var a = 100;
var b = 7;
var c = 7;

if (a > b) {
  if (b > c) {
    console.log("Thứ tự tăng dần của 3 số nguyên:", c, b, a);
  } else {
    if (c > a) {
      console.log("Thứ tự tăng dần của 3 số nguyên:", b, a, c);
    } else {
      console.log("Thứ tự tăng dần của 3 số nguyên:", b, c, a);
    }
  }
} else {
  if (a > c) {
    console.log("Thứ tự tăng dần của 3 số nguyên:", c, a, b);
  } else {
    if (b > c) {
      console.log("Thứ tự tăng dần của 3 số nguyên:", a, c, b);
    } else {
      console.log("Thứ tự tăng dần của 3 số nguyên:", a, b, c);
    }
  }
}

/**
 * BÀI TẬP 2:Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)

 * 
 * INPUT: NHẬP VÀO TÊN NGƯỜI SỬ DỤNG MÁY ( EX: BỐ, MẸ ANH TRAI, EM GÁI)
 * 
 * PROCESS:
 * 1: LẤY INPUT
 * 2: SỬ DỤNG SWITCH CASE
 *    SAU KHI LẤY INPUT SO VỚI CÁC TRƯỜNG HỢP TỪ CASE 1 -> CASE N.
 * 3: XUẤT RA KẾT QUẢ PHÙ HỢP
 * 
 * OUTPUT: CÂU CHÀO HỎI THÀNH VIÊN 
 */
var fisrtName = "Em gái";
switch (fisrtName) {
  case "Bố":
    console.log("Xin chào Bố!");
    break;
  case "Mẹ":
    console.log("Xin chào Mẹ!");
    break;
  case "Anh trai":
    console.log("Xin chào Anh Trai!");
    break;
  case "Em gái":
    console.log("Xin chào Em Gái!");
    break;
  default:
    console.log("Ai đang sử dụng máy vậy!");
}

/**
 * BÀI TẬP 3:Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
 *
 * INPUT: NHẬP 3 SỐ NGUYÊN BẤT KÌ
 *
 * PROCESS:
 * 1: LẤY INPUT
 * 2: KIỂM TRA SỐ CHẴN BẰNG CÁCH CHIA % LẤY DƯ = 0. NẾU LÀ SỐ CHẴN THÌ ĐẾM TĂNG LÊN 1
 *    ĐẾM SỐ LẺ BẰNG CÁCH LẤY 3 - COUNT SỐ CHẴN VÌ CHƯƠNG TRÌNH NHẬP 3 SÔ NGUYÊN
 * 3: IN KẾT QUẢ RA MÀN HÌNH
 *
 * OUTPUT: ĐẾM SỐ LẺ VÀ CHẴN
 */

var a = 2;
var b = 100;
var c = 3;
var count = 0;
if (a % 2 === 0) {
  count++;
}
if (b % 2 === 0) {
  count++;
}
if (c % 2 === 0) {
  count++;
}
var count1 = 3 - count;
console.log("Có", count, "Số chẵn và", count1, "Số lẻ");

/**
 * BÀI TẬP 4:Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
• Ví dụ: a=2, b=2, c=1 => Tam giác cân
• a = 3, b=3 c=3 => Tam giác đều
• a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago) 
* INPUT: NHẬP 3 CẠNH A,B,C CỦA TAM GIÁC
* PROCESS:
1: LẤY INPUT
2: KIỂM TRA CÁC CẠNH CÓ PHẢI LÀ TAM GIÁC KHÔNG: a + b <= c || a + c <= b || b + c <= a
   NẾU CẠNH A = CẠNH B VÀ CẠNH A = CẠNH C => TAM GIÁC ĐỀU
   NẾU CẠNH A = CẠNH B HOẶC CẠNH A = CẠNH C HOẶC CẠNH B = CẠNH C => TAM GIÁC CÂN
   ÁP DỤNG CT PITAGO: NẾU A^2 + B^2 = C^2 || A^2 =B^2 +C^2 || B^2 = A^2+ C^2 => TAM GIÁC VUÔNG
   CÒN LẠI LÀ TAM GIÁC THƯỜNG
3: IN KẾT QUẢ RA MÀN HÌNH
* OUTPUT: KẾT QUẢ TÊN TAM GIÁC

 */

var a = 3;
var b = 4;
var c = 3;
if (a + b <= c || a + c <= b || b + c <= a) {
  console.log("Tam giác không đúng! Kiểm tra lại các cạnh!");
} else if (a === b && a === c) {
  console.log("Tam giác đều");
} else if (a === b || a === c || b === c) {
  console.log("Tam giác cân");
} else if (
  a * a + b * b === c * c ||
  a * a + c * c === b * b ||
  c * c + b * b === a * a
) {
  console.log("Tam giác vuông");
} else {
  console.log("Tam giác thường");
}
