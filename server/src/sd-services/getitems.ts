let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class getitems {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'getitems';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new getitems(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_getitems_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getitems');

    //appendnew_flow_getitems_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getitems');

    this.app['get'](
      `${this.serviceBasePath}/item`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_Ds1ATKuiR84MnyuU(bh);
          //appendnew_next_sd_A9YIB74qNmZgtOeG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_A9YIB74qNmZgtOeG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/images`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_RHhfKAptp4OI6bzg(bh);
          //appendnew_next_sd_Bm8ZyhguKvMRLJCz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Bm8ZyhguKvMRLJCz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getitems_HttpIn
  }
  //   service flows_getitems

  //appendnew_flow_getitems_start

  async sd_Ds1ATKuiR84MnyuU(bh) {
    try {
      bh.input.mongoquery = {};
      bh = await this.sd_NQF8T66rweJbaUtc(bh);
      //appendnew_next_sd_Ds1ATKuiR84MnyuU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ds1ATKuiR84MnyuU');
    }
  }

  async sd_NQF8T66rweJbaUtc(bh) {
    try {
      bh.input.recipes = await MongoPersistance.getInstance().find(
        'sd_OfXpEquDoWWqcdHI',
        'recipe',
        bh.input.mongoquery,
        {}
      );
      bh = await this.sd_w8AFs4nBeWeN8f0T(bh);
      //appendnew_next_sd_NQF8T66rweJbaUtc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NQF8T66rweJbaUtc');
    }
  }

  async sd_w8AFs4nBeWeN8f0T(bh) {
    try {
      bh.web.res.status(200).send(bh.input.recipes);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w8AFs4nBeWeN8f0T');
    }
  }

  async sd_RHhfKAptp4OI6bzg(bh) {
    try {
      // const id= '633a8e0e6fb017291c64d2a0';
      console.log(bh.input.query.uuid);
      //console.log(bh.input)

      bh.local.query = {
        uuid: bh.input.query.uuid,
      };
      bh = await this.sd_1EC5CUkRjmPFHQuT(bh);
      //appendnew_next_sd_RHhfKAptp4OI6bzg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RHhfKAptp4OI6bzg');
    }
  }

  async sd_1EC5CUkRjmPFHQuT(bh) {
    try {
      bh.local.Imgresult = await MongoPersistance.getInstance().find(
        'sd_OfXpEquDoWWqcdHI',
        'recipeimages',
        bh.local.query,
        {}
      );
      bh = await this.sd_Kk32GQ3oXGSbFL01(bh);
      //appendnew_next_sd_1EC5CUkRjmPFHQuT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1EC5CUkRjmPFHQuT');
    }
  }

  async sd_Kk32GQ3oXGSbFL01(bh) {
    try {
      console.log(bh.local.Imgresult[0].file[0].mimetype);

      // bh.local.Imgresult = bh.local.Imgresult[0].file[0].buffer;

      const mimetype = bh.local.Imgresult[0].file[0].mimetype;
      bh.local.Imgresult = bh.local.Imgresult[0].file[0].buffer;
      //console.log(bh.local.Imgresult)
      bh.local.headers = {
        'Content-Type': mimetype,
      };
      bh = await this.sd_6KYyShdkPh1sFEgw(bh);
      //appendnew_next_sd_Kk32GQ3oXGSbFL01
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Kk32GQ3oXGSbFL01');
    }
  }

  async sd_6KYyShdkPh1sFEgw(bh) {
    try {
      bh.web.res.set(bh.local.headers);

      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.local.Imgresult.buffer);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6KYyShdkPh1sFEgw');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_getitems_Catch
}
