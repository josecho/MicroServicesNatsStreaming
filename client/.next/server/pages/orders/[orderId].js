"use strict";
(() => {
var exports = {};
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 9797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _orderId_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-stripe-checkout"
const external_react_stripe_checkout_namespaceObject = require("react-stripe-checkout");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(6471);
;// CONCATENATED MODULE: ./pages/orders/[orderId].js





const OrderShow = ({ order , currentUser  })=>{
    const { 0: timeLeft , 1: setTimeLeft  } = (0,external_react_.useState)("");
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: "/api/payments",
        method: "post",
        body: {
            orderId: order.id
        },
        onSuccess: ()=>router_default().push("/orders")
    });
    (0,external_react_.useEffect)(()=>{
        const findTimeLeft = ()=>{
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        };
        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);
        return ()=>{
            clearInterval(timerId);
        };
    }, [
        order
    ]);
    if (timeLeft < 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Order Expired"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "Time left to pay: ",
            timeLeft,
            " seconds",
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_stripe_checkout_default()), {
                token: ({ id  })=>doRequest({
                        token: id
                    }),
                stripeKey: "pk_test_wAMQXpncPDTDel3N9WiQdj8800o0mpHiym",
                amount: order.ticket.price * 100,
                email: currentUser.email
            }),
            errors
        ]
    });
};
OrderShow.getInitialProps = async (context, client)=>{
    const { orderId  } = context.query;
    const { data  } = await client.get(`/api/orders/${orderId}`);
    return {
        order: data
    };
};
/* harmony default export */ const _orderId_ = (OrderShow);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [471], () => (__webpack_exec__(9797)));
module.exports = __webpack_exports__;

})();