import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`.jumbotron {
    padding: 5px;
    margin: 1px;
    background-image: url('./assets/lobo.jpg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50%;
    border-radius: 20px;
  }

  img:hover {
    transform: scaleX(-1);
  }

  .examen {
    text-align: center;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }`
  ]
})
export class HeaderComponent implements OnInit {

  title = environment.appName;
  autor = environment.appAuthor;
  date: Date;
  fecha: String;


  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.fecha = this.date.toLocaleDateString();
  }

}
