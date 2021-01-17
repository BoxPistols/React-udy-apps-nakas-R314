import React, { Component } from "react"
import axios from "axios"

export default class Giphy extends Component {
  constructor() {
    super()
    this.state = { gifImageList: [] }
  }

  renderImages(list){
    const images = list.map(url => {
      return <img src={url}/>
    })
    return images
  }

  giphyAPI() {
    // var
    const search = "designer"
    const key = "OfplL4eyYsa99Z8rQo1aQCOOwARPnBKg"
    const limit = 16

    // set var on url
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

    axios.get(url).then((res) => {
      const data = res.data.data
      const imageUrl = data.map((i) => i.images.downsized.url)
      this.setState({ gifImageList: imageUrl })
    })
  }

  // マウントして表示させる
  componentDidMount() {
    this.giphyAPI()
  }

  render() {
    console.log(this.state.gifImageList)

    return (
      <div>
        <div className="gf_lay">
          <div className="gf_org">
            <div className="gf_mol">
              {this.renderImages(this.state.gifImageList)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
