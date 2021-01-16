import React, { Component } from "react";
import axios from "axios";
import CardProduk from "./CardProduk";

export class DaftarProduk extends Component {
  state = {
    produk: [],
  };
  async componentDidMount() {
    await axios.get("http://localhost/tokoAPI/ambildata.php").then((response) =>
      this.setState({
        produk: response.data,
      })
    );
  }
  render() {
    const renderData = this.state.produk.map(produk => {
      return <CardProduk produk = {produk} />;
    });
    return <div className="row">{renderData}</div>;
  }
}
export default DaftarProduk;
