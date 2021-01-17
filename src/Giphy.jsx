import React, { Component } from "react"
import axios from "axios"

export default class Giphy extends Component {

  giphyAPI() {
    // var
    const search = "designer"
    const key = "OfplL4eyYsa99Z8rQo1aQCOOwARPnBKg"
    const limit = 3

    // set var on url
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

    //
    axios.get(url).then((res) => {
      console.log(res.data)
      const data = res.data.data

      const imageUrl = data[0].images.downsized.url
      console.log(imageUrl)

      // img 要素を生成して、body 直下に強引に入れ込む
      const img = document.createElement("img")
      img.src = imageUrl
      document.body.appendChild(img)
    })
  }
  // マウントして表示させる
  componentDidMount(){
    this.giphyAPI()
  }

  render() {
    return <div></div>
  }

}
