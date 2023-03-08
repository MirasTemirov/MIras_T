import {Component, OnInit} from '@angular/core';
import {Photo} from "../../models/photo";
import {AlbumsService} from "../../services/albums.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[];
  loaded: boolean;

  constructor(private albumsService: AlbumsService, private router: ActivatedRoute, private location: Location) {
    this.photos = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.loaded = false;

    this.router.paramMap.subscribe(params => {

      this.albumsService.getPhotosByAlbumId( parseInt(<string>params.get('id')) ).subscribe(photos => {
        this.photos = photos;
        this.loaded = true;
      });

    });

  }

  goBack(){
    this.location.back();
  }

}
