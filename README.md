# HKGN-web-assignment
**Hướng dẫn sử dụng:**

**1. Commit:**
- Trước khi bắt đầu làm gì, nhớ git pull trước để cập nhật lại dữ liệu trên local. Sau đó chuyển sang nhánh của mình và bắt đầu code. Cách chuyển nhánh: git checkout tên-nhánh.

- Xong một feature nào thì nên commit lại. Các bước commit như sau:
+ Mở terminal lên, cd đến cái thư mục project của mình.
+ Nhập thứ tự các lệnh sau:
git add .
git commit -m "[Mã ticket] nội dung commit"
git push -u origin tên-nhánh

- Trước khi tắt project đi ngủ hoặc chơi game, nhớ commit lại, mục đích là để không bị lỗi khi pull nhánh stagging về khi làm vào buổi khác. Không commit => lỗi thì đừng hỏi tại sao nha :vv. Commit gì cũng được.
**- Quan trọng:** không được commit vào nhánh main và staging.

**2. Tạo nhánh và đặt tên nhánh (branch):**
- Quy định: mỗi branch sẽ đi đôi với 1 ticket. Như vậy thì một feature của mình sẽ có nhiều ticket. Để không bị lẫn lộn, đặt tên nhánh khi tạo với cú pháp như sau:
+ Nếu ticket đó là story: feature/tên-feature/đôi-lời-về-cái-mình-đã-làm.
+ Nếu ticket đó là bug: fix/tên-bug/đôi-lời-về-cái-mình-đã-làm.

Cách tạo nhánh mới: git branch -M tên-nhánh.
Chạy lệnh này xong tự động checkout vào nhánh của mình nên không cần sử dụng git checkout.

3. Pull request:
Cách tạo pull request, viết tắt là PR:
+ Trên cái thanh header, bấm vô muc Pull Request, sau đó bấm nút "New pull request".
+ Chọn nhánh cần merge: ô base là nhánh cha và ô compare là nhánh của mình.
+ Bấm create pull request.
+ Ở phía bên phải màn hình, chọn người reviewer là Nam và assignee là mình.
Làm xong rồi thì không làm gì nữa cả, để việc còn lại cho Nam :vv.
