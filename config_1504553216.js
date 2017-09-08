{
	"pairs": {
		"poloniex": {
			"BTC_XMR": {
				"strategy": "bb",
				"override": {}
			}
		},
		"kraken": {
			"DASHEUR": {
				"strategy": "bb",
				"override": {}
			}
		},
		"bittrex": {
			"BTC-LTC": {
				"strategy": "bb",
				"override": {}
				}
			},
		"cryptopia": {
			"SIGT_BTC": {
				"strategy": "bb",

				"override": {}
			}
		}
	},

	"exchanges": {
		"poloniex": {
			"key": "",
			"secret": ""
		},
		"kraken": {
			"key": "",
			"secret": ""
		},
		"bittrex": {
			"key": "",
			"secret": ""
		},
		"cryptopia": {
			"key": "",
			"secret": ""
		}
		
	},

	"bot": {
		"debug": true,

		"period_storage_ticker": 2000,
		"interval_ticker_update": 25000,

		"timeout_buy": 60000,
		"timeout_sell": 60000,

		"WATCH_MODE": false,
		"VERBOSE": false
	},

	"strategies": {
		"bb": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"GAIN": 0.6,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"gain": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 2,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"pp": {
			"BTC_TRADING_LIMIT": 0.01,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"stepgain": {
			"BTC_TRADING_LIMIT": 0.02,
			"PERIOD": 15,
			"BUYLVL1": 0.1,
			"BUYLVL2": 0.1,
			"BUYLVL3": 70,
			"SELLLVL1": 0.1,
			"SELLLVL2": 0.1,
			"SELLLVL3": 70,
			"BUYLVL": 3,
			"SELLLVL": 3,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"bbgain": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"GAIN": 0.6,
			"LOW_BB": 45,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"gainbb": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"HIGH_BB": 49,
			"LOW_BB": 40,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"bbstepgain": {
			"BTC_TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"SELLLVL1": 0.1,
			"SELLLVL2": 0.1,
			"SELLLVL3": 70,
			"SELLLVL": 3,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"stepgainbb": {
			"BTC_TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"HIGH_BB": 49,
			"LOW_BB": 40,
			"BUYLVL1": 0.1,
			"BUYLVL2": 0.1,
			"BUYLVL3": 70,
			"BUYLVL": 3,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"bbpp": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"GAIN": 0.1,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"ppbb": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"GAIN": 0.1,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 0.00000001,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"gainstepgain": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"SELLLVL1": 0.1,
			"SELLLVL2": 0.1,
			"SELLLVL3": 70,
			"SELLLVL": 3,
			"BUY_LEVEL": 0.1,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"stepgaingain": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 0.1,
			"BUYLVL2": 0.1,
			"BUYLVL3": 70,
			"BUYLVL": 3,
			"GAIN": 0.6,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"gainpp": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"PP_SELL": 0.12345678,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"ppgain": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"GAIN": 2,
			"PP_BUY": 0.12345678,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"stepgainpp": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 3,
			"BUYLVL3": 5,
			"BUYLVL": 2,
			"PP_SELL": 0.1,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		},
		"ppstepgain": {
			"BTC_TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"SELLLVL1": 2,
			"SELLLVL2": 5,
			"SELLLVL3": 10,
			"SELLLVL": 2,
			"PP_BUY": 0.00000001,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
			
		}


	},

	"optionals": {
		"toOverride": {
			"BOUGHT_PRICE": 0.104744
 
		}
	}


}
