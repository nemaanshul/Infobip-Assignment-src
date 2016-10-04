import React, { Component } from 'react';
import logo from './asset/logo_team_india.png';
import './App.css';
import $ from 'jquery';
window.$ = $;
class App extends Component {
  deleteCard(index){
     let id = "#player_"+index;
     let playerName = $(id).find(".title-name").html();
     if (confirm('Are you sure to delete '+ playerName+ ' card ?')) {
       $(id).remove();
     }
  }
  openCard(index){
      let id = "#player_"+index;
      let playerName = $(id).find(".title-name").html();
      let printContent = $(id).html();
      let ua = window.navigator.userAgent;
      let msie = ua.indexOf('MSIE ');
      let trident = ua.indexOf('Trident/');
      let rv = ua.indexOf('rv:');
      let edge = ua.indexOf('Edge/');
      if(msie > 0 || trident>0 || rv>0 || edge>0){
       let newWindow = window.open("", "Print Card",  "width=320,height=400,_blank");
       newWindow.document.write('<html><head><title>'+playerName+' Card Print</title><link rel="stylesheet" href="./src/App.css"></head><body>');
       newWindow.document.write(printContent);
     }else{
       let newWindow = window.open("", "Print Card",  "width=250,height=300,_blank");
       newWindow.document.write('<html><head><title>'+playerName+' Card Print</title><link rel="stylesheet" href="./App.css"></head><body>');
       $("link, style, script").each(function() {
          $(newWindow.document.head).append($(this).clone())
       });
       newWindow.document.write(printContent);
     }
  }
  printCard(index){
       let id = "#player_"+index;
       $(".card-box").removeClass("print-box");
       $(id).addClass("print-box");
       window.print();
    }
  render() {
    var data = this.props.items;
    var playerList = data.map(function(item, index) {
   return (
     <div className="card-box" id={"player_"+index} key={index}>
     <div className="titleBox">
     <p className="title-name">{item.name}</p>
     <img src={logo} alt="team logo" className="team-logo"/>
     </div>
      <div className="boxInner">
        <img src={item.src} alt="player name" className="bg-image" />
      </div>
    <div className="option-menu">
    <a onClick={this.openCard.bind(this, index)} href="#">Open</a>
    <a onClick={this.deleteCard.bind(this, index)} href="#">Delete</a>
    <a onClick={this.printCard.bind(this, index)} href="#">Print</a>
    </div>
    </div>
   );
  }, this);

    return (
       <div className="wrap">
          {playerList}
        </div>
    );
  }
}

export default App;
