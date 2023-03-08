import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../models/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  loaded: boolean;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.loaded = false;
    this.albumsService.getAllAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
      this.loaded = true;
    });
  }


  deleteAlbum(id: number, index: number){
    this.albumsService.deleteAlbum(id).subscribe( _=> {
      this.albums.splice(index, 1);
    });
  }

}
