- [1. HTTP và Restful API](#1-http-v%c3%a0-restful-api)
  - [1.1. AJAX](#11-ajax)
  - [1.2. HTTP Method: GET, POST, PUT, DELETE,...](#12-http-method-get-post-put-delete)
  - [1.3. CORS](#13-cors)
    - [1.3.1. Cơ chế hoạt động của CORS :](#131-c%c6%a1-ch%e1%ba%bf-ho%e1%ba%a1t-%c4%91%e1%bb%99ng-c%e1%bb%a7a-cors)
  - [1.4. Session và Cookie](#14-session-v%c3%a0-cookie)
    - [1.4.1. Cookie](#141-cookie)
    - [1.4.2. Session](#142-session)
    - [1.4.3. So sánh giữa Cookie và Session](#143-so-s%c3%a1nh-gi%e1%bb%afa-cookie-v%c3%a0-session)
  - [1.5. JWT](#15-jwt)
    - [1.5.1. Cấu trúc](#151-c%e1%ba%a5u-tr%c3%bac)
      - [1.5.1.1. Header](#1511-header)
      - [1.5.1.2. Payload](#1512-payload)
      - [1.5.1.3. Signature](#1513-signature)
      - [1.5.1.4. Cuối cùng](#1514-cu%e1%bb%91i-c%c3%b9ng)
      - [1.5.1.5. Trường hợp sử dụng JWT :](#1515-tr%c6%b0%e1%bb%9dng-h%e1%bb%a3p-s%e1%bb%ad-d%e1%bb%a5ng-jwt)
      - [1.5.1.6. JWT làm việc như thế nào ?](#1516-jwt-l%c3%a0m-vi%e1%bb%87c-nh%c6%b0-th%e1%ba%bf-n%c3%a0o)
  - [1.6. Restful API](#16-restful-api)
    - [1.6.1. Restful API là gì :](#161-restful-api-l%c3%a0-g%c3%ac)
    - [1.6.2. Design Restful API](#162-design-restful-api)
  - [1.7. Server Render và Single Page App](#17-server-render-v%c3%a0-single-page-app)
      - [1.7.0.1. Cơ chế server-side rendering](#1701-c%c6%a1-ch%e1%ba%bf-server-side-rendering)
        - [1.7.0.1.1. Ưu và nhược điểm của Server Side Rendering](#17011-%c6%afu-v%c3%a0-nh%c6%b0%e1%bb%a3c-%c4%91i%e1%bb%83m-c%e1%bb%a7a-server-side-rendering)
      - [1.7.0.2. Cơ chế client-side rendering](#1702-c%c6%a1-ch%e1%ba%bf-client-side-rendering)
        - [1.7.0.2.1. Ưu nhược điểm của Client-side rendering](#17021-%c6%afu-nh%c6%b0%e1%bb%a3c-%c4%91i%e1%bb%83m-c%e1%bb%a7a-client-side-rendering)
  - [1.8. Các công cụ hỗ trợ thiết kế Restful API](#18-c%c3%a1c-c%c3%b4ng-c%e1%bb%a5-h%e1%bb%97-tr%e1%bb%a3-thi%e1%ba%bft-k%e1%ba%bf-restful-api)
    - [1.8.1. Swagger](#181-swagger)
    - [1.8.2. Postman](#182-postman)
  - [1.9. ReactJS](#19-reactjs)
- [2. Bài tập](#2-b%c3%a0i-t%e1%ba%adp)

# 1. HTTP và Restful API

## 1.1. AJAX 

- **AJAX** = Asynchronous JavaScript And XML.

- **AJAX** là kĩ thuật có thể làm những việc sau :
  - Cập nhật lại một thành phần của trang web mà không load lại toàn bộ trang
  - Yêu cầu dữ liệu từ phía server - sau khi trang đã được load.
  - Nhận dữ liệu từ phía server - sau khi trang đã load.
  - Gửi dữ liệu xuống server - ở dưới nền.

- Ví dụ minh họa :

```html
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>
```

```js
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

- Khi `loadDoc()` được gọi, nó sẽ tạo ra một yêu cầu từ phía server để load dữ liệu có tên `ajax_info.txt`, và với phương thức `GET`.

- AJAX hoạt động như sau :

<p align="center"><img src="media/ajax.gif"/></p>

- XMLHttpRequest Object Methods

<p align="center"><img src="media/ajax-obj.png"/></p>

- XMLHttpRequest Object Properties

<p align="center"><img src="media/ajax-props.png"/></p>

- Để gửi một yêu cầu đến server ta dùng hai phương thức `open()` và `send()`, ví dụ đơn giản như sau :

```js
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```


<p align="center"><img src="media/ajax-para.png"/></p>



hoặc 

```js
xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
xhttp.send();
```

- Dùng phương thức `POST` : 

```js
xhttp.open("POST", "demo_post2.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
```

- Dùng `POST` hay `GET` ?
  - `GET` thì đơn giản và nhanh hơn `POST`, và có thể dùng trong nhiều trường hợp, tuy nhiên ta cần dùng `POST` khi:
  - Truyền tải file, gửi một lượng lớn dữ liệu xuống server, vì `GET` có giới hạn kích thước, còn `POST` thì không.
  - `POST` : những thông tin cần bảo mật, vì thông tin được giấu trong body, không phải trên `URL` dễ nhìn thấy hơn.


- The onreadystatechange Property


<p align="center"><img src="media/ajax-orc.png"/></p>


## 1.2. HTTP Method: GET, POST, PUT, DELETE,...

- HTTP định nghĩa một tập hợp các **request methods** để diễn tả hành động mà chúng ta muốn thực hiện trên **resource** cho trước. Mỗi phương thức đó có một ngữ nghĩa riêng, và phải đảm bảo tính *safe*, *idempotent*, *cacheable*.

- **GET** : Phương thức này yêu cầu lấy về một resource cụ thể; request dùng *GET* chỉ đọc resource mà không thực hiện bất cứ sự thay đổi nào trên resource đó.
  - `200` OK : resource trả về thành công
  - `404` NOTFOUND : resource không tìm thấy
  - `400` BAD REQUEST : request gửi đi không hợp lệ

- **HEAD** : Phương thức **HEAD** cũng tương tự như **GET** , khác biệt ở chỗ chúng không có phần *body*.

- **POST** : Phương thức **POST** được sử dụng để  *submit* một thực thể đến *resource* định sẵn, thường gây ra một sự thay đổi trạng thái trên server.
  - `201` (Created) : Tạo resource mới thành công.
  - `204` (No content).

- **PUT** : Phương thức **PUT** được dùng để thay thế toàn bộ resource cụ thể với dữ liệu gửi lên từ request.

- **DELETE**  Phương thức này dùng để xóa một resource cụ thể.

- **CONNECT** : Phương thức này được dùng để thiết lập một kênh truyền dữ liệu đến một resource cụ thể của server.

- **OPTIONS**  :  Được dùng để mô tả những *communication options* cho resource nguồn.

- **TRACE** : Phương thức này dùng để biểu diễn một tin nhắn *loop-back* test trên đường truyền đến resource nguồn.

- **PATCH** : Phương thức này được áp dụng cho *partial modifications* đến resource. (`thay thế, chỉnh sửa một phần`).


> Tham khảo thêm tại https://restfulapi.net/http-methods/

## 1.3. CORS

- **CORS** (Cross origin resources sharing) là một cơ chế sử dụng HTTP headers để tương tác với browser, cho phép một webApplication chạy từ một domain A có quyền truy cập vào các tài nguyên của domain B(different origin).
- Một request tới một tài nguyên nằm ngoài phạm vi của Website đó được gọi là **Cross origin request**
- **CORS** yêu cầu server phải implement và grant access resources cho các domain và các tài nguyên cụ thể tương ứng với domain đó. Nếu truy cập nằm ngoài các phạm vi được server quy định thì request đó sẽ bị chặn.

### 1.3.1. Cơ chế hoạt động của CORS : 

- Khi một client (web app chạy ở một browser) từ domain A tạo một request *GET, POST, PUT, HEAD,..* để yêu cầu một domain B làm một việc gì đó, request này sẽ đính kèm một header tên là `Origin` với giá trị là A.

- Server B xem xét domain A này có nằm trong danh sách hợp lệ hay không và trả về response kèm header `Access-Control-Allow-Origin` thông thường sẽ chứa giá trị A, nếu cho phép , hoặc một `regex` như `*` (cho phép tất cả).

- Ngoài ra có thêm khái niệm `preflight request`, nghĩa là một request phụ có phương thức `OPTIONS`mà browser gửi trước phương thức chính chứa request mà user thực sự muốn gửi. Ví dụ `client` muốn gửi request `DELETE` lên B, thì browser sẽ tự động tạo một request `OPTIONS` hỏi B có cho phép request `DELETE` hay không, và response trả về của `OPTIONS` này kèm những header như `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Max-Age`.

  - `Access-Control-Allow-Methods`: mô tả những method nào client có thể gửi đi.
  - `Access-Control-Max-Age`: mô tả thời gian hợp lệ của preflight request, nếu quá hạn, browser sẽ tự tạo một preflight request mới.

- Sau đó browser sẽ có thể gửi request `DELETE` và nhận response như bình thường. Hoặc ngược lại thì browser không cho phép.

## 1.4. Session và Cookie

### 1.4.1. Cookie 

- Cookie là một chuỗi ghi thông tin được tạo ra và lưu trữ trên trình duyệt của máy users khi họ truy cập một website, chuỗi đó có dạng key-value, gía trị cookie được phía server thiết lập. Cookie giống như một chìa khóa định danh để  server xác định (session) trạng thái những phiên làm việc (session) về trước của user khi họ truy cập lại thì browser có thể  hiển thị tiếp tục trạng thái đó.

```js
console.log(document.cookie)
"_ga=GA1.2.245865087.1546796763; __gads=ID=84d175ba532ea9fe:T=1546796763:S=ALNI_MaIKfmZH5uu0keBtUd-N5PtYdKAwQ; G_ENABLED_IDPS=google; username=qwerty; _gid=GA1.2.642069951.1548012629; snhbFromEEA=false; _gat=1"
```

- Những thông tin do cookie ghi nhận không được tiết lộ rộng rãi, chỉ có website chứa cookie mới có thể xem được thông tin này. Cookie sử dụng phổ biến trong những trang thương mại điện tử (lịch sử xem sản phẩm, giỏ hàng).

### 1.4.2. Session 

- Session là một khái niệm phổ biến của website phía server có sử dụng cơ sở dữ liệu. Nếu như cookie được xem là một key, thì session sẽ chứa value của key đó. Và thông tin về trạng thái hoạt động của user được thực sự lưu ở session này.

### 1.4.3. So sánh giữa Cookie và Session

**Cookie** | **Session**
---|---
**Cookie** được lưu trữ trên trình duyệt của người dùng. |**Session** không được lưu trữ trong trình duyệt của người dùng.
Dữ liệu **cookie** được lưu trữ ở phía máy khách. | Dữ liệu session được lưu trữ ở phía máy chủ.
Dữ liệu **cookie** dễ dàng sửa đổi khi chúng được lưu trữ ở phía khách hàng. | Dữ liệu **session** không dễ dàng sửa đổi vì chúng được lưu trữ ở phía máy chủ.
Dữ liệu **cookie** có sẵn trong trình duyệt của chúng ta đến khi hết hạn. | Dữ liệu **session** có sẵn cho trình duyệt chạy. Sau khi đóng trình duyệt sẽ mất thông tin **session**.

## 1.5. JWT

- **JWT** (JSON Web Token) được định nghĩa bởi **RFC 7519** như sau :

> JWT là một phương tiện đại diện cho các yêu cầu chuyển giao giữa hai bên Client - Server , các thông tin trong chuỗi JWT được định dạng bằng JSON . Trong đó chuỗi Token phải có 3 phần là header , phần payload và phần signature được ngăn bằng dấu “.

### 1.5.1. Cấu trúc

- Chuỗi Token đó như sau :

  ```
  header.payload.signature
  ```
#### 1.5.1.1. Header

- Phần **header** sẽ chứa kiểu dữ liệu , và thuật toán sử dụng để mã hóa ra chuỗi JWT.

  ```
  {
      "typ": "JWT",
      "alg": "HS256"
  }
  ```

- **"typ" (type)** chỉ ra rằng đối tượng là một **JWT**
- **"alg" (algorithm)** xác định thuật toán mã hóa cho chuỗi là **HS256**

#### 1.5.1.2. Payload
- Phần **payload** sẽ chứa các thông tin mình muốn đặt trong chuỗi **Token** như **username**, **userId**, **author**,... 

  ```
  {
    "user_name": "admin",
    "user_id": "1513717410",
    "authorities": "ADMIN_USER",
    "jti": "474cb37f-2c9c-44e4-8f5c-1ea5e4cc4d18"
  }
  ```

- Lưu ý đừng đặt quá nhiều thông tin trong chuỗi **payload**  vì nó sẽ ảnh hưởng đến độ trể khi **Server** phải xác nhận một **Token** quá dài

#### 1.5.1.3. Signature
- Phần chữ ký này sẽ được tạo ra bằng cách mã hóa phần **header** , **payload** kèm theo một chuỗi **secret** (khóa bí mật) , ví dụ

  ```
  data = base64urlEncode( header ) + "." + base64urlEncode( payload )
  signature = Hash( data, secret );
  ```

- **base64UrlEncoder** : thuật toán mã hóa **header** và **payload**.

- Đoạn code trên sau khi mã hóa **header** và **payload** bằng thuật toán **base64UrlEncode** ta sẽ có chuỗi như sau :

  ```
  // header
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  // payload
  eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTEzNzE
  ```
- Sau đó mã hóa 2 chuỗi trên kèm theo **secret** (khóa bí mật) bằng thuật toán **HS256** ta sẽ có chuỗi signature như sau

  ```
  9nRhBWiRoryc8fV5xRpTmw9iyJ6EM7WTGTjvCM1e36Q
  ```

#### 1.5.1.4. Cuối cùng
- Kết hợp 3 chuỗi trên lại ta sẽ có được một chuỗi **JWT** hoàn chỉnh như sau:

  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTEzNzE.9nRhBWiRoryc8fV5xRpTmw9iyJ6EM7WTGTjvCM1e36Q
  ```

#### 1.5.1.5. Trường hợp sử dụng JWT :

- **Authentication**: Tình huống thường gặp nhất, khi user logged in, mỗi request tiếp đó đều kèm theo chuỗi token **JWT**, cho phép người dùng có thể truy cập đường dẫn, dịch vụ và tài nguyên được phép ứng với token đó.

- **Information Exchange** : **JWT** cũng là một cách hữu hiệu và bảo mật để trao đổi thông tin giữa nhiều ứng dụng, bởi vì **JWT** phải được ký (bằng cặp public / private key), cho nên khó có thể bị mạo danh, chữ ký cũng được tính toán dựa trên nội dung của header và nội dung payload, nhờ đó, bạn có thể xác thực được nội dung là nguyên bản, chưa được chỉnh sửa hoặc can thiệp.

#### 1.5.1.6. JWT làm việc như thế nào ?

- Với ứng dụng của **JWT** trong bài toán **Authenticate** (xác thực), khi user đăng nhập thành công (Browser sẽ post **username** và **password** về Server), Server sẽ trả về một chuỗi **JWT** về Browser, và **Token JWT** này cần được lưu lại trong Browser của người dùng (thường là **LocalStorage** hoặc **Cookies**), thay vì cách truyền thống là tạo một **session** trên Server và trả về **Cookie**.

- Bất cứ khi nào mà User muốn truy cập vào `Route` (URI khác) được bảo vệ (mà chỉ có User đã đăng nhập mới được phép), Browser sẽ gửi token **JWT** này trong **Header Authorization**, Bearer schema của request gửi đi.

  ```
  Authorization: Bearer <token>
  ```

- Đây là cách mà stateless (phi trạng thái) authentication làm việc, trạng thái của user không được lưu trong bộ nhớ của Server mà được đóng gói hẳn vào trong JWT. Server sẽ kiểm tra Token JWT này có hợp lệ hay không (Bởi vì JWT có tính chất self-contained, mọi thông tin cần thiết để kiểm tra JWT đều đã được chứa trong Token JWT).

- Do tính chất stateless nên chúng ta không còn phải lo lắng về domains nào được sử dụng cho API của bạn, như không còn gặp rắc rối với CORS (Cross-Origin Resource Sharing) vì nó không sử dụng cookies.

<p align="center"><img src="media/jwt.png"/></p>

## 1.6. Restful API
<p align="center"><img src="media/rest.png"/></p>

### 1.6.1. Restful API là gì :

- REST (Representational State Transfer) ta có thể hiểu đơn giản là một chuẩn thiết kế phần mềm, nó quy định cách mà client và server sẽ tương tác với nhau.

- RESTful API là một tiêu chuẩn dùng trong việc thiết kế các API cho các ứng dụng web để quản lý các resource. RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến nhất ngày nay.

- JSON là format chính của Restful API khi thiết kế.

- Trọng tâm của REST quy định cách sử dụng các HTTP method (như GET, POST, PUT, DELETE...) và cách định dạng các URL cho ứng dụng web để quản các resource. Ví dụ với một trang blog để quản lý các bài viết chúng ta có các URL đi với HTTP method như sau:

  - URL tạo bài viết: `http://my-blog.xyz/posts`. Tương ứng với HTTP method là POST
  - URL đọc bài viết với ID là 123: `http://my-blog.xyz/posts/123`. Tương ứng với HTTP method là GET
  - URL cập nhật bài viết với ID là 123: `http://my-blog.xyz/posts/123`. Tương ứng với HTTP method là PUT
  - URL xoá bài viết với ID là 123: `http://my-blog.xyz/posts/123`. Tương ứng với HTTP method là DELETE


### 1.6.2. Design Restful API 

- Sử dụng HTTP method để mô tả về chức năng của resource: Chúng ta có 4 HTTP method cơ bản bao gồm POST, GET, PUT, DELETE. Với mỗi method sẽ ứng với một chức năng tương ứng của API là tạo, đọc, sửa và xoá.

- Sử dụng danh từ số nhiều và không sử dụng động từ:

<p align="center"><img src="media/de-api.png"/></p>

- Dùng như này :

<p align="center"><img src="media/al-api.png"/></p>

- Không phải thế này :

<p align="center"><img src="media/n-api.png"/></p>

- Chỉ sử dụng danh từ số nhiều: Rất nhiều người hay có thói quen mix giữa danh từ số ít và danh từ số nhiều. Lời khuyên là hãy giữ mọi thứ đơn giản và chỉ sử dụng danh từ số nhiều cho tất cả các resource.

<p align="center"><img src="media/name-api.png"/></p>


- Liên kết trong resource: Thông thường chúng ta sẽ có rất nhiều resource có quan hệ đến nhau và việc thiết kế liên kiết cho những resource đó là việc hết sức đau đầu không chỉ cho những developer có kinh nghiệm mà còn cho cả chính mình.

- Thử tượng tượng chúng ta có 2 resource là cars và users. Bây giờ ta cần lấy tất cả car của user cụ thể, ta sẽ có API sau:

  ```
  GET /users/123/cars
  ```

- Bây giờ ta cần xem chi tiết thông tin của một car cụ thể của user 123, ta sẽ có 2 cách như sau:

  ```
    GET /users/123/cars/5 (lấy thông tin của car 5 của user 123)
    GET /cars/5 (lấy thông tin của car 5)
  ```

-  Với các api truy vấn dữ liệu dạng filter với nhiều param thì có thể dùng cú pháp như sau:

  ```
  /users/1/filter?properties.post=5&properties.comment=10
  ```

> Tham khảo thêm tại https://medium.com/eway/nguy%C3%AAn-t%E1%BA%AFc-thi%E1%BA%BFt-k%E1%BA%BF-rest-api-23add16968d7


## 1.7. Server Render và Single Page App

> Xem thêm tại https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering/


#### 1.7.0.1. Cơ chế server-side rendering

Gọi nó là server-side rendering là vì phần lớn logic sẽ được xử lý ở server:

- Khi người dùng vào một trang web, trình duyệt sẽ gửi GET request tới web server
- Web server sẽ nhận request, đọc dữ liệu từ database.
- Web server sẽ render HTML, trả về cho browser để hiển thị cho người dùng

![](https://toidicodedao.files.wordpress.com/2018/07/diagram-serversiderendered.png)

Một số tính chất của cơ chế server side rendering:

- Logic từ đơn giản (validation, đọc dữ liệu) cho đến phức tạp (phân quyền, thanh toán) đều nằm ở phía server
- Logic để routing – chuyển trang nằm ở server
- Logic để render – hiển thị trang web cũng nằm ở server nốt

##### 1.7.0.1.1. Ưu và nhược điểm của Server Side Rendering

Ra đời đã lâu, server side rendering đã được sử dụng, cải tiến rất nhiều (Caching, CDN). Những ưu điểm của cơ chế này:

- Initial load nhanh, dễ otpimize, vì toàn bộ dữ liệu đã được xử lý ở server. Client chỉ việc hiển thị.
- Các web framework từ xưa đến nay đều hỗ trợ cơ chế này
- Dễ hiểu và dễ code hơn. Developer chỉ cần code 1 project web là được, không cần phải tách ra front-end và back-end
- SEO tốt vì khi bot của Google, Bing vào web sẽ thấy toàn bộ dữ liệu dưới dạng HTML.
- Chạy được trên phần lớn mọi trình duyệt, kể cả disable JavaScript vẫn chạy tốt

Thế nhưng, bên cạnh đó, server side rendering cũng có một số nhược điểm:

- Mỗi lần người dùng chuyển trang là site phải load lại nhiều lần, gây khó chịu
- Nặng server vì server phải xử lý nhiều logic và dữ liệu. Có thể sử dụng caching để giảm tải.
- Tốn băng thông vì server phải gửi nhiều dữ liệu thừa và trùng  (HTML, header, footer). Có thể sử dụng CDN để giảm tải.
- Tương tác không tốt như Client Side rendering vì trang phải refresh, load lại nhiều lần.

Cơ chế server side rendering vẫn còn được sử dụng ở rất rất nhiều site. Do vậy, chỉ cần hiểu rõ và nắm vững cơ chế này là bạn đã có thể làm một trang web đầy đủ tính năng rồi.

Các trang web sử dụng cơ chế này:

- Toàn bộ những trang web được build từ CMS như Joomla, WordPress.
- Các trang web bán hàng, web tin tức: Thegioididong, Vnexpress, Zing News
- Các web đọc truyện và forum: Webtretho, vozforum

#### 1.7.0.2. Cơ chế client-side rendering

Thế rồi, ở những năm 2010, với sự phát triển của JavaScript và AJAX, cơ chế client-side rendering bắt đầu được sử dụng.

Developer bắt đầu build ứng dụng dưới dạng SPA – Single Page Application. Ứng dụng nằm trong 1 page duy nhất nên được gọi là Single Page Application.

Client Side Rendering tức là việc render HTML, CSS sẽ được thực hiện ở client (Tức JavaScript ở trình duyệt)

![](https://toidicodedao.files.wordpress.com/2018/07/sharepoint-2013-clientside-rendering-csr-jslink-templates-10-638.jpg)

So với Server Side Rendering (SSR) đã nhắc, Client Side Rendering (CSR) có những đặc điểm sau:

- Những logic đơn giản (validation, đọc dữ liệu, sorting, filtering) nằm ở client side
- Logic để routing (chuyển trang), render (hiển thị) dữ liệu thì 96.69% là nằm ở client side
- Logic phức tạp (thanh toán, phân quyền) hoặc cần xử lý nhiều (data processing, report) vẫn nằm ở server side.

##### 1.7.0.2.1. Ưu nhược điểm của Client-side rendering

Ra mắt sau nên Client Side Rendering giải quyết được một số vấn đề của server side rendering:

- Page chỉ cần load một lần duy nhất. Khi user chuyển trang hoặc thêm dữ liệu, JavaScript sẽ lấy và gửi dữ liệu từ server qua AJAX. User có thể thấy dữ liệu mới mà không cần chuyển trang.
- Chuyển logic sang client nên giảm tải được một phần cho server.
- Giảm được băng thông do chỉ cần lấy JSON và dữ liệu cần thiết, thay vì phải lấy toàn bộ trang
- Với các ứng dụng cần tương tác nhiều, SPA hoạt động mượt mà hơn vì code chạy trên browser, không cần load đi loại lại nhiều

Tất nhiên là client side rendering cũng có một số nhược điểm riêng:

- Initial load sẽ chậm hơn nếu không biết optimize. Lý do là browser phải tải toàn bộ JavaScript về (khá nặng), parse và chạy JS, gọi API để lấy dữ liệu từ server (chậm), sau đó render dữ liệu
- Đòi hỏi project phải chia làm 2 phần riêng là back-end (REST api) và front-end nên khó code hơn
- Không chạy được nếu JavaScript bị disable, hoặc ở các trình duyệt cũ không nhận JavaScript ES6 (Có thể dùng transpiler và polyfill nhưng sẽ làm tăng kích cỡ file js)
- SEO không tốt bằng Server Side Rendering (Do bot crawl không đọc được dữ liệu). Để giải quyết, ta phải kết hợp thêm SSR (Bot mới của Google đọc được client-side rendering rồi).
- Nếu client sử dụng mobile, device yếu thì khi load sẽ bị chậm

Các website sử dụng Client-Side Rendering:

Vì Client-side rendering rất phù hợp cho những ứng dụng cần tương tác nhiều, hầu hết web của các công ty công nghệ, công ty startup đều đùng cơ chế này:

- Facebook (React)
- Instagram (React)
- Netflix (React)
- Dropbox (React)
- AirBnb (React)
- Trello (Angular)
- Paypal (Angular + React)
- Xiaomi (VueJS)
- Alibabe (VueJS)
- Gitlab (VueJS)

## 1.8. Các công cụ hỗ trợ thiết kế Restful API

### 1.8.1. Swagger

[Swagger](https://gpcoder.com/5967-gioi-thieu-swagger-cong-cu-document-cho-restfull-apis/#Tim_hieu_ve_tai_lieu_huong_dan_su_dung_API)

### 1.8.2. Postman

[Postman](https://viblo.asia/p/postman-cong-cu-tuyet-voi-de-lam-viec-voi-api-va-tao-api-documents-OeVKBoxMZkW)


## 1.9. ReactJS

- **ReactJS**: principles, **Component**, **State** và **Props**, **Life Cycle**, **JSX**, ...
  > Component, State: https://reactjs.org/docs/components-and-props.html
  > State, Life Cycle: https://reactjs.org/docs/state-and-lifecycle.html

- **Create-react-app**, **NextJS**
- **React Router**
- State Management: **Redux**, **MobX**. Khi nào cần dùng một State Management?
  - Khi app trở nên lớn, và việc quản lý dữ liệu khó khăn.
- Các React Framework: **Ant.design**, **React Bootstrap**, **RechartsJS**, ...

# 2. Bài tập

[Minesweeper](./minesweeper)