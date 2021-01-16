import React from "react";

function CardProduk({ produk}) {
  return <div className="col-md-3 card" style={{margin:5}}>
    <h3>{produk.nama_produk}</h3>
    <p>{produk.deskripsi}</p>
    <p>{produk.harga}</p>
    </div>;
}

export default CardProduk;
