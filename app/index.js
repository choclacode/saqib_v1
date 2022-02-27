/**
 * saqib.ml « v1 « First project ever but in Node.js form
 *
 * The Application Entrypoint
 *
 * Author: Saqib https://saqib.eu.org <contact@saqib.eu.org>
 * url: http://v1.saqib.eu.org
 */

const express = require('express')

const config = require('../config')

config(express())
