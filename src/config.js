'use strict';

/**
 *
 * @author TT
 */

module.exports = function (set, get, has) {

  // 服务器监听端口
  set('web.port', 3000);

  // session secret
  set('web.session.secret', 'test');

};
