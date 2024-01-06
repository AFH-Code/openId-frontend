import { HttpHeaders } from '@angular/common/http';

export class appSettings {
   public static API_ENDPOINT_PLATFORM = 'http://127.0.0.1:8000/api/';  //'http://be.myaccount.afhunt.com/api/';
   public static API_ENDPOINT_BASE = 'http://127.0.0.1:8000/'; //'http://be.myaccount.afhunt.com/';
   public static RESOURCE_URL_BASE = 'http://127.0.0.1:8000/'; //'http://be.myaccount.afhunt.com/';

   public static httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };
}
