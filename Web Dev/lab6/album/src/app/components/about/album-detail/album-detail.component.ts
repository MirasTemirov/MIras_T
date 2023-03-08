import {Component, OnInit} from '@angular/core';
import {Album} from "../../models/album";
import {AlbumsService} from "../../services/albums.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;
  toEdit: boolean;
  loaded: boolean;

  constructor(private albumsService: AlbumsService, private router: ActivatedRoute, private location: Location) {
    this.album = {} as Album;
    this.toEdit = false;
    this.loaded = true;
  }

  ngOnInit(): void {

    this.loaded = false;

    this.router.paramMap.subscribe(params => {

      this.albumsService.getAlbumById(parseInt(<string>params.get('id') ) ).subscribe(album => {

        this.album = album;
        this.loaded = true;

      });

    });
  }



  updateAlbum(){
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(album => {
      console.log(album);

      this.toEdit = false;

    });
  }

  goBack(){
    this.location.back();
  }

}
