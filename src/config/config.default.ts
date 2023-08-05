import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1691219857210_2567',
    egg: {
      port: 7001,
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
