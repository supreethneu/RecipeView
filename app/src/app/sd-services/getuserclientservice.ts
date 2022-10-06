/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class getuserclientservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_getuserclientservice

  async sd_8jTsoKFR7x1IEzEl(recipes: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          recipes: recipes,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_mvmuXaICZbGE3yb2(bh);
      //appendnew_next_sd_8jTsoKFR7x1IEzEl
      return (
        // formatting output variables
        {
          input: {
            recipes: bh.input.recipes,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8jTsoKFR7x1IEzEl');
    }
  }

  async sd_Cw7Xek2uCGLO2q30(image: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          image: image,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_jS3EpcsmMKRQSVTZ(bh);
      //appendnew_next_sd_Cw7Xek2uCGLO2q30
      return (
        // formatting output variables
        {
          input: {
            image: bh.input.image,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cw7Xek2uCGLO2q30');
    }
  }

  //appendnew_flow_getuserclientservice_start

  async sd_mvmuXaICZbGE3yb2(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'item';
      bh = await this.sd_n4wyiuZkBGOc7mde(bh);
      //appendnew_next_sd_mvmuXaICZbGE3yb2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mvmuXaICZbGE3yb2');
    }
  }

  async sd_n4wyiuZkBGOc7mde(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.recipes = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_udhsPV3u7z5WTxqo(bh);
      //appendnew_next_sd_n4wyiuZkBGOc7mde
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n4wyiuZkBGOc7mde');
    }
  }

  async sd_udhsPV3u7z5WTxqo(bh) {
    try {
      console.log(bh.input.recipes);
      //appendnew_next_sd_udhsPV3u7z5WTxqo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_udhsPV3u7z5WTxqo');
    }
  }

  async sd_jS3EpcsmMKRQSVTZ(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + 'images';
      bh = await this.sd_dccpKrtZRO5bHzYr(bh);
      //appendnew_next_sd_jS3EpcsmMKRQSVTZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jS3EpcsmMKRQSVTZ');
    }
  }

  async sd_dccpKrtZRO5bHzYr(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.image = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_rjiDGNG6D6EaJG6Q(bh);
      //appendnew_next_sd_dccpKrtZRO5bHzYr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dccpKrtZRO5bHzYr');
    }
  }

  async sd_rjiDGNG6D6EaJG6Q(bh) {
    try {
      console.log(bh.input.image);
      //appendnew_next_sd_rjiDGNG6D6EaJG6Q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rjiDGNG6D6EaJG6Q');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_getuserclientservice_Catch
}
