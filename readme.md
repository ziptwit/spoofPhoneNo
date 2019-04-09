# Phone number spoofer                                                     

## About

This is a simple node.js script that sends text messages and allows you to spoof the sender phone number. Uses the clockworksms API

## Installation

Install node and npm from https://nodejs.org

In the directory you installed this git repo into run 'npm install'

Go to http://clockworksms.com and create an account and an API key. Add credit (min £5, max £50) or verify a phone number for a free £0.50. Each text message costs £0.04

Create a 'config.json' in the directory and copy and paste the following into it (the key is from your clockworksms account):

```
{
  "key": "ENTER_KEY_HERE"
}
```

## Usage

For regular use run 'node run' and follow the prompts

To check the remaining balance on your account run 'node balance'

## legal

DO NOT use this to spoof phone numbers without permission from the recipient. This was created purely for academic purposes. Using this code for social engineering is illegal. It is also against clockworksms's terms of service.
