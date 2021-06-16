/**
 * saqib.ml « v1 « First project ever but in Node.js form
 *
 * The Application Entrypoint
 *
 * Author: Saqib https://saqib.ml <contact@saqib.ml>
 * url: http://v1.saqib.ml
 */

const express = require('express')

const config = require('../config')

config(express())
