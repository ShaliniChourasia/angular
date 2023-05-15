import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataserviceService } from '../service/dataservice.service';
import {dashboard,dnsRecordsViewAll, module1Component1} from '../../shared/Common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  number: string;
  serviceCode: number;
  IsCache: boolean;
  dnsRecords: any[];
  dnsRecordsTotalCount: Observable<any>;

  constructor(private dataserviceService: DataserviceService, private router: Router, private route: ActivatedRoute) 
  { }

  ngOnInit() 
  {
  }
  ngOnDestroy()
  {
    
  }
  GoBack() {
    this.router.navigate([module1Component1]);
}

ViewDetails(dnsStatusId: string, dnsRecordSerial: number, oldDNSRecord: string, queryType: string, intExt: string, isEnabled: boolean) {
    this.router.navigate([dnsRecordsViewAll], {
        queryParams: {
            dnsStatusId: dnsStatusId, dnsRecordSerial: dnsRecordSerial, oldDNSRecord: oldDNSRecord, queryType: queryType, intExt: intExt,
            isEnabled: isEnabled
        }
    });
  }
}
