require('../set')
__path = process.cwd()

// Created by: King Of Bear | Saipul Anuar

// Module
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var { performance } = require('perf_hooks');

// Lib
var { runtime, fetchJson } = require('../lib/myfunc')

// Info Api
router.get('/info/api', async (req, res, next) => {
	info = {
		status: true,
		creator: 'King Of Bear',
		make: '8, September, 2022',
		language: 'node.js, html, css, js'
    }
    res.json(info)
})
// Main Api
// Statistic
router.get('/main/statistic', async (req, res, next) => {
var date = new Date
var hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()
var neww = performance.now()
var old = performance.now()
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var cpu = require('os').cpus()
var json = await (await fetch('https://api.ipify.org/?format=json')).json()
var port = process.env.PORT || 8888 || 5000 || 3000 
    status = {
        status: true,
        memory: ram,
        cpu: cpu,
        port: port,
        ip: json.ip,
        time: `${hour} : ${minute} : ${second}`,        
        speed: `${old - neww}ms`,
        info:{       
            creator: 'King Of Bear'
        }
    }
    res.json(status)
})

// Runtime
router.get('/main/runtime', async (req, res, next) => {
	runtim = {
		status: true,
		runtime: muptime(process.uptime()),
		info:{       
            creator: 'King Of Bear'            
        }
    }
    res.json(runtim)
})

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/dashboard.html')
})

module.exports = router

// Func Runtime
function muptime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds)
}
