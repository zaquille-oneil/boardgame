const style = {
  app: {
    display: 'flex',
    width:'80vw',
    margin:'0 auto',
    fontFamily:'Helvetica, sans-serif',
    flexDirection: 'column'
  },
  suggestionbox: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'space-between',
    flexWrap: 'wrap'
  },
  suggestion: {
    width: '200px',
    height: '200px',
    border: '5px solid green',
    padding: '4px',
    margin: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  button: {
    display: 'flex',
    flex: 1,
    alignSelf: 'space-between',
    margin: '4px',
    borderRadius: '28px',
    border: 'none',
    color: '#ffffff',
    fontSize: '10px',
    background: '#51acb8',
    padding: '5px 10px 5px 10px',
    textDecoration: 'none'
  },
  reset: {
    backgroundColor: 'pink', /* Green */
    border: 'none',
    color: 'white',
    fontSize: '16px'   
  }
}


module.exports = style;
