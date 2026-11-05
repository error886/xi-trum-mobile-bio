/* =========================================================
   DANH SÁCH SẢN PHẨM – XI TRUM MOBILE
   Sửa / thêm / xoá máy ở đây, trang catalog & trang bio tự cập nhật.
   - cat:   "iphone" | "ipad" | "laptop" | "phukien"
   - tag:   nhãn nhỏ góc trên (vd "Siêu lướt", "New box", "Hot")
   - price: để "" nếu muốn hiện "Inbox báo giá"
   - color: màu minh hoạ máy (mã màu)
   - img:   (tuỳ chọn) đường dẫn ảnh thật, vd "assets/sp/ip18pm.webp"
   - featured: true để hiện ở mục "Hàng mới về" trên trang bio
   ========================================================= */
window.XT_PRODUCTS = [
  { cat:"iphone", img:"assets/sp/ip18pm.webp", name:"iPhone 18 Pro Max", spec:"Đủ màu: Bạc · Xanh băng tan · Burgundy", note:"Sẵn hàng tại quán, tặng full phụ kiện & quà tặng", price:"Từ 20xx₩", tag:"Hot", color:"#C9CDD3", featured:true },
  { cat:"iphone", img:"assets/sp/ip18blue.webp", name:"iPhone 18 Pro Max 256GB – Xanh băng tan", spec:"Siêu lướt · Sạc 21 lần · Pin 100%", note:"Còn bảo hành hãng 1 năm", price:"", tag:"Siêu lướt", color:"#BFD9E6", featured:true },
  { cat:"iphone", img:"assets/sp/ip18burg.webp", name:"iPhone 18 Pro", spec:"Về sẵn màu", note:"Tặng full phụ kiện, ship hoả tốc trong 대전", price:"", tag:"Mới", color:"#9AA3AE" },
  { cat:"iphone", img:"assets/sp/ip17pm.webp", name:"iPhone 17 Pro Max 256GB – Trắng", spec:"Siêu lướt · Pin 100% · Sạc 136 lần", note:"Kích hoạt 06/2026, ngoại hình đẹp keng", price:"", tag:"Siêu lướt", color:"#EDEDEA", featured:true },
  { cat:"iphone", img:"assets/sp/ip16pro.webp", name:"iPhone 16 Pro 128GB – Black Titanium", spec:"Zin đẹp · Pin cao", note:"Máy tuyển chọn, không vết xước", price:"", tag:"Like new", color:"#3A3A3C" },
  { cat:"iphone", img:"assets/sp/ip1615.webp", name:"iPhone 16 Pro / 15 Pro", spec:"Máy đẹp · Pin cao · Giá tốt", note:"Thu cũ lên đời giá cao", price:"", tag:"Giá tốt", color:"#8C8A84" },
  { cat:"iphone", img:"assets/sp/ip15plus.webp", name:"iPhone 15 Plus 128GB – Hồng", spec:"Zin keng · Màn hình lớn", note:"Pin tốt, dùng thoải mái cả ngày", price:"", tag:"Like new", color:"#F2C9D4" },

  { cat:"ipad", img:"assets/sp/ipadgen11.webp", name:"iPad Gen 11 – New box", spec:"Hơn 50 máy sẵn tại quán", note:"Tặng ốp + cường lực + sạc dự phòng/tai nghe + voucher 30k₩", price:"619.000₩", tag:"Sale", color:"#F4C542", featured:true },
  { cat:"ipad", img:"assets/sp/ipadair.webp", name:"iPad Air M4", spec:"Siêu lướt · Pin 100%", note:"Chip M4 mạnh, mỏng nhẹ, màn đẹp", price:"", tag:"Siêu lướt", color:"#AFC6E9" },
  { cat:"ipad", img:"assets/sp/ipadpro.webp", name:"iPad Pro M1 128GB", spec:"Pin 9x%", note:"Đa nhiệm mượt, hợp học tập & sáng tạo", price:"", tag:"Giá tốt", color:"#7D7F84" },

  { cat:"laptop", img:"assets/sp/mba.webp", name:"MacBook Air M4 16GB / 256GB – Sky Blue", spec:"Siêu lướt · Sạc hơn 30 lần", note:"Học tập, làm việc, thiết kế đều mượt", price:"", tag:"Siêu lướt", color:"#BCD7EA", featured:true },
  { cat:"laptop", name:"ASUS Zenbook Duo", spec:"Laptop 2 màn hình", note:"Có máy trải nghiệm tại quán", price:"", tag:"Độc lạ", color:"#4A5A7A" },
  { cat:"laptop", name:"Laptop các dòng", spec:"Từ bình dân đến cao cấp", note:"Tư vấn đúng nhu cầu, cài đặt & bảo hành đầy đủ", price:"", tag:"Tư vấn", color:"#2B3A55" },

  { cat:"phukien", img:"assets/sp/airpods.webp", name:"AirPods 5", spec:"Kèm hộp sạc không dây", note:"Hàng mới về", price:"", tag:"Mới", color:"#FFFFFF", featured:true },
  { cat:"phukien", name:"AirPods Pro 3", spec:"Chống ồn chủ động", note:"", price:"", tag:"", color:"#FFFFFF" },
  { cat:"phukien", name:"AirPods 4 / AirPods 4 ANC", spec:"Bản thường & bản chống ồn", note:"", price:"", tag:"", color:"#FFFFFF" }
];

window.XT_LINKS = {
  fanpage: "https://www.facebook.com/profile.php?id=61592877740484",
  tiktok:  "https://www.tiktok.com/@xitrummobile",
  phone:   "tel:+821097301903"
};

/* Hình minh hoạ máy (SVG) khi chưa có ảnh thật */
window.XT_ART = function(cat, color){
  var c = color || "#C9CDD3";
  if(cat==="iphone") return '<svg viewBox="0 0 120 120"><rect x="38" y="10" width="44" height="100" rx="10" fill="'+c+'" stroke="#00214A" stroke-opacity=".25" stroke-width="2"/><rect x="42" y="14" width="36" height="92" rx="7" fill="#0B1B36" opacity=".9"/><rect x="53" y="18" width="14" height="4" rx="2" fill="#000"/><rect x="58" y="16" width="0" height="0"/><g transform="translate(46 24)"><rect width="16" height="16" rx="5" fill="'+c+'"/><circle cx="5" cy="5" r="2.6" fill="#1b2433"/><circle cx="11" cy="5" r="2.6" fill="#1b2433"/><circle cx="5" cy="11" r="2.6" fill="#1b2433"/></g><path d="M44 90 Q60 60 76 40" stroke="#fff" stroke-opacity=".12" stroke-width="10" fill="none"/></svg>';
  if(cat==="ipad") return '<svg viewBox="0 0 120 120"><rect x="22" y="14" width="76" height="96" rx="9" fill="'+c+'" stroke="#00214A" stroke-opacity=".25" stroke-width="2"/><rect x="27" y="19" width="66" height="86" rx="5" fill="#0B1B36" opacity=".9"/><path d="M30 95 Q55 55 90 30" stroke="#fff" stroke-opacity=".12" stroke-width="14" fill="none"/></svg>';
  if(cat==="laptop") return '<svg viewBox="0 0 120 120"><rect x="22" y="26" width="76" height="52" rx="5" fill="'+c+'" stroke="#00214A" stroke-opacity=".25" stroke-width="2"/><rect x="26" y="30" width="68" height="44" rx="2" fill="#0B1B36" opacity=".9"/><path d="M12 80h96l-6 10H18z" fill="'+c+'" stroke="#00214A" stroke-opacity=".25" stroke-width="2"/><path d="M30 70 Q55 45 90 34" stroke="#fff" stroke-opacity=".12" stroke-width="10" fill="none"/></svg>';
  return '<svg viewBox="0 0 120 120"><rect x="30" y="52" width="60" height="50" rx="16" fill="#fff" stroke="#00214A" stroke-opacity=".2" stroke-width="2"/><path d="M30 72h60" stroke="#00214A" stroke-opacity=".12" stroke-width="2"/><circle cx="60" cy="86" r="2.5" fill="#00214A" opacity=".3"/><g fill="#fff" stroke="#00214A" stroke-opacity=".25" stroke-width="2"><path d="M40 16c-8 0-12 7-12 14s5 12 10 12v26h7V20c0-2-2-4-5-4z"/><path d="M80 16c8 0 12 7 12 14s-5 12-10 12v26h-7V20c0-2 2-4 5-4z"/></g></svg>';
};
