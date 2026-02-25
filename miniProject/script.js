let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];

let flag = true;

while (flag) {
  let menu = prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu (Giảm 10%)
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-7):`);

  if (menu === null || menu.trim() === "") {
    console.log("Đã thoát chương trình.");
    break;
  }

  let choice = Number(menu);

  switch (choice) {
    case 1:
      let highEndProducts = [];

      for (let i = 0; i < names.length; i++) {
        if (prices[i] > 500) {
          highEndProducts.push(names[i]);
        }
      }

      console.log("Những sản phẩm có giá trên 500:");
      highEndProducts.forEach((p) => console.log(p));
      break;

    case 2:
      let outOfStock = false;
      let allAbove100 = true;

      for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] === 0) {
          outOfStock = true;
        }
        if (prices[i] <= 100) {
          allAbove100 = false;
        }
      }

      console.log("Có sản phẩm hết hàng:", outOfStock);
      console.log("Tất cả giá trên 100:", allAbove100);
      break;

    case 3:
      let total = 0;
      for (let i = 0; i < prices.length; i++) {
        total += prices[i] * stocks[i];
      }
      console.log("Tổng giá trị kho:", total);
      break;

    case 4:
      for (let i = 0; i < prices.length; i++) {
        prices[i] = prices[i] * 0.9;
      }
      console.log("Đã áp dụng giảm giá 10%");
      console.log(prices);
      break;

    case 5:
      let key = prompt("Nhập từ khóa tìm kiếm:");
      let result = [];

      if (key !== null) {
        key = key.toLowerCase();

        for (let i = 0; i < names.length; i++) {
          if (names[i].toLowerCase().includes(key)) {
            result.push(i);
          }
        }
      }

      if (result.length === 0) {
        console.log("Không tìm thấy sản phẩm");
      } else {
        console.log("Kết quả tìm kiếm:");
        for (let i = 0; i < result.length; i++) {
          let index = result[i];
          console.log(
            names[index] + " - Giá " + prices[index] + " - SL " + stocks[index],
          );
        }
      }
      break;

    case 6:
      console.log("Báo cáo tồn kho:");
      for (let i = 0; i < stocks.length; i++) {
        let status = "Hết hàng";
        if (stocks[i] > 0) {
          status = "Còn hàng";
        }
        console.log(names[i] + " - " + status);
      }
      break;

    case 7:
      console.log("Thoát chương trình...");
      flag = false;
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
  }
}
