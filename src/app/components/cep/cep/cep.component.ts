
import { element } from 'protractor';
import { CepService } from './../../../services/cep/cep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep';

import { PositionGPS } from 'src/app/models/position-gps';
import { AgmMarker } from '@agm/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
    ceps: Cep[];
    positions: PositionGPS[];
    agmMarkerOpen: AgmMarker;
    clicked: PositionGPS;
    items = [
      {
        id: 1,
        name: 'name1'
      },
      {
        id: 2,
        name: 'name2'
      }
    ];
  constructor(private cepService: CepService) { }


  ngOnInit() {
    this.cepService.cepGet().subscribe( (cep: Cep) => {
      const a: string[] = new Array<string>(Math.floor(Math.random() * 10) + 1);

      this.ceps = [];
      this.positions = [];
      this.positions.push(new PositionGPS(0, 45.516136, -73.656830));

      a.fill('1').map( (t, i) => {
          this.ceps.push(cep);
          this.positions.push(new PositionGPS((i + 1) , 45.516136 + ((i + 1) * 0.008), -73.656830));
      });
      console.log(this.positions);
      // console.log('cityAndUfGet', this.cep.cityAndUfGet());
    });
  }

  trackHeroFN( index, p) {

    return p ? `${p.lat}${p.id}` : undefined;

  }
  trackHero(index, p) {

    return p ? p.lat : undefined;

  }
  infoClose(event){
    console.log(event)
    //this.clicked = null;
  }
  marker(event: AgmMarker, positionGPS: PositionGPS) {
    if(this.agmMarkerOpen) {
      try {

        this.agmMarkerOpen.infoWindow.forEach( info => {
          info.close();
        });
      } catch (error) {

      }
    }
    this.clicked = positionGPS;
    this.agmMarkerOpen = event;
    console.log(event);
  }

}
