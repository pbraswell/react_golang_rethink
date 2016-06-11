class Channel extends React.Component {
  onClick(){
    console.log('Hey!!!  I was clickTed: ', this.props.name);
  }
  render() {
    return(
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}

ReactDOM.render(<Channel name='Hardware Supported'/>,
  document.getElementById('app'));
