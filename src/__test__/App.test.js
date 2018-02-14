import React from 'react'
import ReactDOM from 'react-dom'
import puppeteer from 'puppeteer'
import 'snapshoot'

import App from '../App'

it('📸 home', async () => {
  const page = await global.__BROWSER__.newPage()
  await page.goto('http://google.com')
  const newSnap = await page.screenshot()
  expect(newSnap).toMatchSnap()
})
