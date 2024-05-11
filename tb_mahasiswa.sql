USE tb_mahasiswa;

CREATE TABLE mahasiswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    nim VARCHAR(20) UNIQUE,
    jenis_kelamin ENUM('Laki-laki', 'Perempuan'),
    tanggal_lahir DATE,
    alamat TEXT
);

INSERT INTO mahasiswa (nama, nim, jenis_kelamin, tanggal_lahir, alamat) 
VALUES ('John Doe', '1234567890', 'Laki-laki', '1998-05-25', 'Jl. Contoh No. 123');

INSERT INTO mahasiswa (nama, nim, jenis_kelamin, tanggal_lahir, alamat) 
VALUES ('Jane Doe', '0987654321', 'Perempuan', '1999-08-12', 'Jl. Contoh No. 456');

SELECT * FROM mahasiswa;