import { observable } from 'mobx'

export default {
  updateXcodeLocation: observable(false),
  addJitterToMoves: observable(true),
  stationaryUpdates: observable(true),
  speedLimit: observable(3),
  zoom: observable(16) // map zoom
}
