componentWillMount(){
  fetch(`http://localhost:9000`)
  getPrediction()
}

function getPrediction(){
  fetch(`http://localhost:9000/api/prediction`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      origLat: this.state.origLat,
      origLong: this.state.origLong,
      destLat: this.state.destLat,
      destLong: this.state.destLong,
      distance: this.state.distance,
      month: this.state.month,
      day: this.state.day
    })
  })
  .then(r => r.json())
  .then((response) => {
    this.setState({
      predictResponse = response
    })
    next();
  })
}
