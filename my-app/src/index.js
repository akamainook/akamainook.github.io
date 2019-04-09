import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css'
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, Divider, List, Input, Item, Button } from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><h1>Akamai Nook</h1></Menu.Item>
            <Menu.Item position="right">HOME</Menu.Item>
            <Menu.Item>ADD A SPOT</Menu.Item>
            <Menu.Item>PROFILE</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleHome extends React.Component {
  render() {
    return (
        <Grid columns={2} divided>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
        </Grid>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Container fluid className="footer-background">
          <Grid container columns={2}>
            <Grid.Column>About Akamai Nook
              <hr/>
                <text>Akamai Nook is a team of college students who want
                 to provide a simple and efficient way to find and share
                study spots on Oahu.</text>
            </Grid.Column>
            <Grid.Column>Links
              <hr/>
              <Button icon>Our Github Page
                <Icon huge name='github square' />
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
    )
  }
}

class AkamaiNook extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <MiddleHome/>
        <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<AkamaiNook />, document.getElementById('root'));
