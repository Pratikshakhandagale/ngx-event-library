import { Injectable } from '@angular/core';
import { IEventDetailInterface } from '../../interfaces/event-detail.interface';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }


  /**
   * For get event detail 
   */
  
  getEvent() {
    const req = {

      url: this.userConfigService.getConfigUrl().eventDetailApi

     

      // will remove commnet latter onces will get final api
      // url: this.userConfigService.getConfigUrl().detail + identifier

    };
    return this.dataService.get(req);
  }


 


  /**
   * For enroll/unenroll user
   */
  enrollUser(cId, uId) {
    //param : cid and uid
    //let apiUrl = '' + this.eventLibraryService.userID;
    //return this.http.get<any>(apiUrl);

    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };
  }

}


