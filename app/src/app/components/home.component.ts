/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { getuserclientservice } from 'app/sd-services/getuserclientservice'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_943b6NXm8nkv1Z8s(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_943b6NXm8nkv1Z8s(bh) {
    try {
      bh = this.sd_Dzl7CacCIdu9dllr(bh);
      //appendnew_next_sd_943b6NXm8nkv1Z8s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_943b6NXm8nkv1Z8s');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_Dzl7CacCIdu9dllr(bh) {
    try {
      this.page.recipes = bh.input.recipes;
      bh = this.sd_Zl9LRoxjvasYtgwz(bh);
      //appendnew_next_sd_Dzl7CacCIdu9dllr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dzl7CacCIdu9dllr');
    }
  }

  async sd_Zl9LRoxjvasYtgwz(bh) {
    try {
      const getuserclientserviceInstance: getuserclientservice =
        this.__page_injector__.get(getuserclientservice);

      let outputVariables =
        await getuserclientserviceInstance.sd_8jTsoKFR7x1IEzEl(undefined);
      this.page.recipes = outputVariables.input.recipes;

      //appendnew_next_sd_Zl9LRoxjvasYtgwz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zl9LRoxjvasYtgwz');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_homeComponent_Catch
}
