import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: any = {
    imgdefault: '../../assets/images/office_gallery.png',
    defaultprofil: '../../assets/images/account-64.png',
    logoafhunt: '../../assets/images/logo-afhunt.png'
  }
  constructor() { }

  public getImages(): any {
    return this.images;
  }

}
