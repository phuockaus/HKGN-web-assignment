# HKGN-web-assignment

**Hướng dẫn sử dụng:**

**I. Clone:**
git clone https://github.com/phuockaus/HKGN-web-assignment.git

**II. Commit:**
Trước khi bắt đầu làm gì, nhớ git pull trước để cập nhật lại dữ liệu trên local. Sau đó chuyển sang nhánh của mình và bắt đầu code. Cách chuyển nhánh: git checkout tên-nhánh.

Xong một feature nào thì nên commit lại. Các bước commit như sau:

1. Mở terminal lên, cd đến cái thư mục project của mình.
2. Nhập thứ tự các lệnh sau:
   git add .
   git commit -m "[Mã ticket] nội dung commit"
   git push -u origin tên-nhánh

Trước khi tắt project đi ngủ hoặc chơi game, nhớ commit lại, mục đích là để không bị lỗi khi pull nhánh stagging về khi làm vào buổi khác. Không commit => lỗi thì đừng hỏi tại sao nha :vv. Commit gì cũng được.
**Quan trọng:** không được commit vào nhánh main và staging.

**III. Tạo nhánh và đặt tên nhánh (branch):**
Quy định: mỗi branch sẽ đi đôi với 1 ticket. Như vậy thì một feature của mình sẽ có nhiều ticket. Để không bị lẫn lộn, đặt tên nhánh khi tạo với cú pháp như sau:

1. Nếu ticket đó là story: feature/tên-feature/đôi-lời-về-cái-mình-đã-làm.
2. Nếu ticket đó là bug: fix/tên-bug/đôi-lời-về-cái-mình-đã-làm.

Cách tạo nhánh mới: git branch -M tên-nhánh.
Chạy lệnh này xong tự động checkout vào nhánh của mình nên không cần sử dụng git checkout.

**IV. Pull request:**
Cách tạo pull request, viết tắt là PR:

1. Trên cái thanh header, bấm vô muc Pull Request, sau đó bấm nút "New pull request".
2. Chọn nhánh cần merge: ô base là nhánh cha và ô compare là nhánh của mình.
3. Bấm create pull request.
4. Ở phía bên phải màn hình, chọn người reviewer là Nam và assignee là mình.
   Làm xong rồi thì không làm gì nữa cả, để việc còn lại cho Nam :vv.

**V. Coding convention:**
Coding convention hay dịch dân dã là bộ quy tắc ứng xử giống con người trong lúc code.
Sau đây là hướng dẫn mục đích ra đời của 1 số folder:

1. Folder Components là folder chứa các thành phần cấu thành nên app. Mỗi khi có 1 page mới, hãy tạo 1 folder con bên trong chứa tất cả phần code của page đó và các component đi kèm. trong này đã có 1 ví dụ đó là main page. mỗi thư mục như vậy có 1 file index.js.
2. Folder style chứa 2 file color và styling, 2 file này chứa tất cả các biến số về màu sắc và các chỉ số css.
3. Folder ultis là folder chứa các file đa dụng và được gọi liên tục như cấc controller của các database.

Tiếp theo, chúng ta đến việc chạy lệnh trong app: chỉ sử dụng yarn add để cài đặt các package, không sử dụng npm để cài đặt. Start ứng dụng cũng sử dụng yarn start, không nên dùng npm start.
