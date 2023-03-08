import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../models/album";
import {Photo} from "../models/photo";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = '';

  constructor(private http: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com/albums';
  }

  public getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.BASE_URL);
  }

  public getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.BASE_URL}/${id}`);
  }

  public deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/${id}`);
  }

  public updateAlbum(id: number, album: Album): Observable<Album> {
    return this.http.patch<any>(`${this.BASE_URL}/${id}`, album);
  }

  public getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/${albumId}/photos`);
  }
}
