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
    if(diemTrungBinh >= diemChuan){
        outPut = ' Bạn đã đậu';
    }
    else{
        outPut = ' Bạn đã rớt';
    }
    document.getElementById('ketQua').innerHTML = outPut;
    document.getElementById('hamTinhTong').innerHTML = tongDiem;
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
    document.getElementById('tenNguoiDung').innerHTML =  tenKhachHang;
    document.getElementById('hamTinhDien').innerHTML = tienDien.toLocaleString();
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
    document.getElementById('hoVaTen').innerHTML =  hoTen;
    document.getElementById('hamTinhThue').innerHTML = tienLuong.toLocaleString();
}

function tienCap() {

    // debugger;
    var loaiKhachHang = document.getElementById('khachHang').value;
    var maKhachHang = document.getElementById('maKhachHang').value;
    var kenhCaoCap = +document.getElementById('kenhCaoCap').value;
    var soKetNoi = +document.getElementById('soKetNoi').value;

    var tongTien = 0;
    if(loaiKhachHang === 'nhaDan'){
        tongTien = 4.5 + 20.5 + (7.5 * kenhCaoCap);
    }
    if(loaiKhachHang === 'doanhNghiep' && soKetNoi <= 10){
        tongTien = 15 + 75 + (50*kenhCaoCap);
    }
    else if(loaiKhachHang === 'doanhNghiep' && soKetNoi > 10) {
       tongTien = 15 + (soKetNoi - 10) * 5  + 75 + (50*kenhCaoCap); 
    }
    document.getElementById('mKH').innerHTML = maKhachHang;
    document.getElementById('hamTinhCap').innerHTML = tongTien.toLocaleString();
}