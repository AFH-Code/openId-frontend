import { HttpHeaders } from '@angular/common/http';

export class appSettings {
   public static API_ENDPOINT_PLATFORM = 'http://localhost:8000/api/'; //'https://be.myaccount.afhunt.com/api/';
   public static API_ENDPOINT_BASE = 'http://localhost:8000/';  //'https://be.myaccount.afhunt.com/';
   public static RESOURCE_URL_BASE = 'http://localhost:8000/'; //'https://be.myaccount.afhunt.com/';

   public static httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };
}
