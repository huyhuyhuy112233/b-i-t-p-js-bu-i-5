function tinhDiem() {
    // debugger;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    var diemMonThuNhat = +document.getElementById('monThuNhat').value;
    var diemMonThuHai = +document.getElementById('monThuHai').value;
    var diemMonThuBa = +document.getElementById('monThuBa').value;
    var diemChuan = +document.getElementById('diemChuan').value;
    var diemTrungBinh = 0;
    var outPut = '';
    var tongDiem = 0;
    diemTrungBinh = (diemMonThuNhat+diemMonThuHai+diemMonThuBa);
    if(khuVuc === 'A' && doiTuong == 1 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+2+2.5);
    } 
    if(khuVuc === 'A' && doiTuong == 2 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+2+1.5);
    } 
    if(khuVuc === 'A' && doiTuong == 3 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+2+1);
    } 

    if(khuVuc === 'B' && doiTuong == 1 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+1+2.5);
    } 
    if(khuVuc === 'B' && doiTuong == 2 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+1+1.5);
    } 
    if(khuVuc === 'B' && doiTuong == 3 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+1+1);
    } 

    if(khuVuc === 'C' && doiTuong == 1 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+0.5+2.5);
    } 
    if(khuVuc === 'C' && doiTuong == 2 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+0.5+1.5);
    } 
    if(khuVuc === 'C' && doiTuong == 3 && diemMonThuNhat && diemMonThuHai && diemMonThuBa > 0){
        tongDiem = (diemTrungBinh+0.5+1);
    } 
    if(diemChuan <= tongDiem){
        outPut = ' Bạn đã đậu';
    }
    else{
        outPut = ' Bạn đã rớt';
    }
    document.getElementById('ketQua').innerHTML = "Kết Quả: " +  outPut;
    document.getElementById('hamTinhTong').innerHTML = " Điểm: " + tongDiem;
}

// bài tập 2
function tienDien() {
    // debugger;
    var tenKhachHang = document.getElementById('tenKhachHang').value;
    var soKW = document.getElementById('soKW').value;
    var tienDien = 0;
    if(soKW <= 50 ) {
        tienDien = (soKW*500);
    }
    if(soKW > 50 && soKW <= 100){
        tienDien = (50*500) + ((soKW-50)*650);
    }
    if(soKW > 100 && soKW <= 200){
        tienDien =(50*500) + (50*650) + (soKW-100)*850;
    }
    if(soKW > 200 && soKW <= 350){
        tienDien =(50*500) + (50*650) + (100*850) + (soKW-200)*1100;
    }
    if(soKW > 350 ){
        tienDien =(50*500) + (50*650) + (100*850) + (150*1100) + (soKW-350)*1300;
    }
    document.getElementById('tenNguoiDung').innerHTML =  " Tên Khách Hàng: " + tenKhachHang;
    document.getElementById('hamTinhDien').innerHTML = "Tiền Điện là: " + tienDien.toLocaleString() + " Đồng ";
}

// bài tập ba
function tinhThueLa() {
    // debugger;
    var hoTen = document.getElementById('nhapHoTen').value;
    var tongThuNhap = +document.getElementById('thuNhap').value;
    var soNGuoiPhuThuoc = +document.getElementById('phuThuoc').value;
    var thuNhapChiuThue = (tongThuNhap - 4000000 - soNGuoiPhuThuoc * 1600000);
    var tienLuong = 0;
    if(thuNhapChiuThue <= 60000000) {
        tienLuong = thuNhapChiuThue * 5 / 100 ;
    }
    if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        tienLuong = thuNhapChiuThue * 10 / 100;
    }
    if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        tienLuong = thuNhapChiuThue * 15 / 100;
    }
    if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        tienLuong = thuNhapChiuThue * 20 / 100;
    }
    if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        tienLuong = thuNhapChiuThue * 25 / 100;
    }
    if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        tienLuong = thuNhapChiuThue * 30 / 100;
    }
    if(thuNhapChiuThue > 960000000) {
        tienLuong = thuNhapChiuThue * 35 / 100;
    }
    document.getElementById('hoVaTen').innerHTML = "  Họ Và Tên:" +hoTen;
    document.getElementById('hamTinhThue').innerHTML = " Tiền thuế thu nhập cá nhân: " +tienLuong.toLocaleString() + "VND ";
}

// bai tap 4: 
document.getElementById('loaiKhachHang').onclick = function() {
    var loaikhachHang = +document.getElementById('loaiKhachHang').value;
    if(loaikhachHang === 2) {
        document.getElementById('soCap').className = " d-block mt-3 ";
    } else{
        document.getElementById('soCap').className = " d-none ";
    }
}

function tienCap2() {
    var loaiKhachHang = +document.getElementById('loaiKhachHang').value;
    var maKhachHang = document.getElementById('maKhachHang2').value;
    var kenhCaoCap = +document.getElementById('kenhCaoCap2').value;
    var soCap = +document.getElementById('soCap').value;

    var tongTien2 = 1;
    if(loaiKhachHang === 1){
        tongTien2 = 4.5 + 20.5 + (7.5 * kenhCaoCap);
    }
    if(loaiKhachHang === 2 && soCap <= 10){
        tongTien2 = 15 + 75 + (50*kenhCaoCap);
    }
    else if(loaiKhachHang === 2 && soCap > 10) {
       tongTien2 = 15 + (soCap - 10) * 5  + 75 + (50*kenhCaoCap); 
    }
    document.getElementById('mKH2').innerHTML = "Mã Khách Hàng: " +maKhachHang;
    document.getElementById('hamTinhCap2').innerHTML = tongTien2.toLocaleString() + " $";
}