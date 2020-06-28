class Album {
  constructor(album_id, album_name, artists) {
    this.id = album_id
    this.album_name = album_name
    this.artists = artists
    this.tracks = []
  }

  summary() {
    `Name: ${this.album_name}\nArtist(s): ${this.artists}\n`
    let sumInMS = 0
    let titles = []
      this.tracks.forEach((track) => {
        sumInMS += parseInt(track.duration_ms, 10)
        titles.push(track.title)
      })
    this.durationMs = sumInMS
    this.durationMin = (sumInMS / 60000).toFixed(2)


    return `\nName: ${this.album_name}\nArtist(s): ${this.artists}\nDuration (min.): ${this.durationMin}\nTracks:\n- ${titles.join("\n- ")}`
    }

}

module.exports = Album;
