# CYPRESS
# install_project
*  Bước 1:Kiểm tra xem đã có node js và npm chưa<br>
![](img/anh_8.png)<br>
* Bước 2: Tạo một thư mục<br>
![](img/anh_9.png)<br>
* Bước 3:Chạy lệnh npm init:<br>
![](img/anh_10.png)<br>
* Bước 4: Bước 4:Cài đặt cypress:<br>
![](img/anh_11.png)<br>
* Bước 5: Vào file package.json:<br>
![](img/anh_12.png)<br>
Thêm vào script: <br>
+   "cy:open":"cypress open": để mở cypress lên<br>
+   "cy:run":"cypress run": để chạy cypress <br>
* Bước 6: Mở cypress lên dùng lệnh:<br>
+   cypress open or ./node_modules/.bin/cypress open<br>
![](img/anh_14.png)<br>
* Bước 7: Chạy cypress lên dùng lệnh:
+    cypress run or ./node_modules/.bin/cypress run<br>
![](img/anh_15.png)<br>
# Các cách run <br>
* Chạy bằng lệnh ./node_modules/.bin/cypress run<br>
![](img/anh_3.png)<br>
![](img/anh_4.png)<br>
Kết quả trả về : Xuất hiện các thông số như hình phía trên<br>
* Chạy debug <br>
![](img/anh_17.png)
![](img/anh_18.png)
![](img/anh_19.png)
* Run bằng lệnh ./node_modules/.bin/cypress run --headed<br>
![](img/anh_5.png)<br>
Kết quả: Hiển thị trình duyệt của từng trang lên<br>
* Run bằng lệnh ./node_modules/.bin/cypress run --headless<br>
![](img/anh_6.png)<br>
![](img/anh_6.png)<br>
Kết quả: Chạy liên tục ẩn trình duyệt của trang<br>
* Run bằng lệnh: ./node_modules/.bin/cypress run --browser chrome
![](img/hinh_7.png)<br>
Kết quả: Chạy bằng trình duyệt chrome, chạy liên tục không mở trình duyệt (dạng headless phía trên)<br>
* Run bằng lệnh:./node_modules/.bin/cypress run --spec "cypress/integration/examples/actions.spec.js": để chạy trong một thư mục chỉ định thay vì chạy tất cả các thư mục<br>
![](img/anh_16.png)
