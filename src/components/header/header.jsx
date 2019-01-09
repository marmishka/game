import React, { Component } from 'react';
import Landing from '../landing/landing';
import Register from '../Register/register';
import ScoreBoard from '../ScoreBoard/scoreboard';
import santa from './images/fav.png';
import tree from './images/tree.png';
import { Button, Navbar, Image, Nav,  } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './header.scss';
import pushButtonAudio from './audio/button-push.mp3';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundOn: true
    };
    this.soundButtonClick = this.soundButtonClick.bind(this);
    this.pushButtonSound = this.pushButtonSound.bind(this);
  }

  soundButtonClick() {
    this.pushButtonSound();
    this.setState(state => ({
      soundOn: !state.soundOn
    }));
  }

  pushButtonSound() {
    if (this.state.soundOn) {
      const pushAudio = new Audio(pushButtonAudio);
      pushAudio.play();
    }
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar bg="light" expand="md">
              <Navbar.Brand>
                <Image src={santa} className="Header-logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavLink className="nondecor" to={'/'}><Button onClick={this.pushButtonSound} variant="outline-success" id="btn-0">Об игре</Button></NavLink>
                    <NavLink className="nondecor" to={'/Table'}><Button onClick={this.pushButtonSound} variant="outline-success" id="btn-1">Рекорды</Button></NavLink>
                    <NavLink className="nondecor" to={'/Register'}><Button onClick={this.pushButtonSound} variant="outline-success" id="btn-2">Вход</Button></NavLink>
                    <Button variant="outline-success" id="btn-3" onClick={this.soundButtonClick}>
                      {this.state.soundOn ? 'Звук : вкл' : 'Звук : выкл'}
                    </Button>     
                  </Nav>
                  <span id="text"></span>
                  <Image src={tree} className="Header-logo" />
                </Navbar.Collapse>
            </Navbar>;
          </header>
          <Switch>
            <Route exact path='/' component={Landing} />            
            <Route path='/Table' component={ScoreBoard} />
            <Route path='/Register' component={Register} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default Header;








