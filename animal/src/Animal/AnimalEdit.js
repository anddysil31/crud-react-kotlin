import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class AnimalEdit extends Component {

  emptyItem = {
    name: '',
    family: ''
    };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      errorMessage: null,
      isCreate: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.state.isCreate = this.props.match.params.id === 'new'; // are we editing or creating?
    if (!this.state.isCreate) {
      const response = await this.props.server.getById(this.props.match.params.id)
      const animal = await response.json();
      this.setState({item: animal});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item, isCreate} = this.state;

    let result = isCreate ? await this.props.server.create(item) : await this.props.server.update(item);
    if (!result.ok) {
      this.setState({errorMessage: `Failed to ${isCreate ? 'create' : 'update'} record: ${result.status} ${result.statusText}`})
    } else {
      this.setState({errorMessage: null});
      this.props.history.push('/api/animal/');
    }
    }


  render() {
    const {item, errorMessage, isCreate} = this.state;
    const title = <h2>{isCreate ? 'Add Animal' : 'Edit Animal'}</h2>;

    return (
      <div>
        {this.props.navbar}
        <Container style={{textAlign: 'left'}}>
          {title}
          {errorMessage ?
            <Alert color="warning">
              {errorMessage}
            </Alert> : null
          }
          <Form onSubmit={this.handleSubmit}>
            <div className="row">
              <FormGroup className="col-md-8 mb-3">
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" value={item.name || ''}
                       onChange={this.handleChange} autoComplete="name"/>
              </FormGroup>
              <FormGroup className="col-md-4 mb-3">
                <Label for="phone">Family</Label>
                <Input type="text" name="family" id="family" value={item.family || ''}
                       onChange={this.handleChange} autoComplete="family"/>
              </FormGroup>
            </div>
            <FormGroup>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary" tag={Link} to="api/animal/">Cancel</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(AnimalEdit);