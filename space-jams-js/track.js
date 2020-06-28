

class Track {
  constructor(album_id, track_id, title, track_number, duration_ms) {
    this.album_id = album_id
    this.id = track_id
    this.title = title
    this.track_number = track_number
    this.duration_ms = duration_ms
  }
}

module.exports = Track
