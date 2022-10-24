require('../set')
__path = process.cwd()

// Created by: King Of Bear | Saipul Anuar

// Module
var express = require('express');
var router  = express.Router();
var fetch = require('node-fetch');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var isUrl = require('is-url');
const { TTScraper } = require("tiktok-scraper-ts");
const TikTokScraper = new TTScraper();

// Lib
var { fetchJson, runtime, getBuffer } = require('../lib/myfunc');

// Features
// Downloader

router.get('/download/tiktokview', async (req, res, next) => {
	var url = req.query.url
	if (!url ) return res.json(loghandler.noturl)
    TikTokScraper.video(url)
.then(data => {
	var result = data
	res.json({
	status: true,
	creator: `${creator}`,
		result
	})
	})
	 .catch(e => {
	
		res.json(loghandler.noturl)
})
})

router.get('/download/tiktokstalk2', async (req, res, next) => {
	var query = req.query.username
	if (!query ) return res.json(loghandler.notquery)

    TikTokScraper.user(query)
.then(data => {
	var result = data
	res.json({
	status: true,
	creator: `${creator}`,
		result
	})
	})
	 .catch(e => {
	
		res.json(loghandler.notquery)
})
})

router.get('/download/tiktokstalk3', async (req, res, next) => {
	var username = req.query.username
	if (!username ) return res.json(loghandler.noturl)
    TikTokScraper.getAllVideosFromUser(username)
.then(data => {
	var result = data
	res.json({
	status: true,
	creator: `${creator}`,
		result
	})
	})
	 .catch(e => {
	
		res.json(loghandler.notquery)
})
})

module.exports = router
