# Twilio Flex 
This project itegrates Twilio Flex with a custom Frontend application using typescript and react. The aim is to create a seamless customer support interface for user and connect this frontend application with flex dashboard to appropriate agent enchanced features and flexibility.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Flex prodvide a dashboard where agent/ worker accept task initated by customer. Task whould of different types and task here symbolize the communication which is initiated by customer. Task would be a call, sms, chat and any interaction through social media.

### Flex Dashboard 
  It looks like below image,But If you want to customized your dashboard according to your requirement then       you need to follow these step to download in your local then customize and redeploy again. 
 
  1. The Flex Plugins CLI is available via the Twilio CLI. You can install it using the twilio plugins     
     command. NPM version must be 6.0.0 or later and Node versions must be 14, 16 or 18.
     
    
    twilio plugins:install @twilio-labs/plugin-flex
    
    
  2. In order to run the CLI commands, on your Flex application run the following command:

    twilio login

  3.In your terminal, run the following commands to set up a sample Flex plugin:

    # Now we can start with a template plugin for Flex 2.0 with the create command
    twilio flex:plugins:create plugin-sample --install

    # Or if you prefer a typescript project run
    twilio flex:plugins:create plugin-sample --install --typescript

  4. Once you have created your plugin development environment, you can navigate into your plugin's code 
     directory and start Flex:
     
    cd plugin-sample
    twilio flex:plugins:start 
   
  5. Once you are done with the changes, then deploy and release it.

    # In your terminal, within the plugin-sample directory we created, run
    twilio flex:plugins:deploy --major --changelog "Adding Bing as search engine" --description "First Plugin     on Flex"

    # Inorder to enable your plugin, run
    twilio flex:plugins:release --name "First Plugin Release" --description "Enabling Plugin Sample" --plugin 
    plugin-sample@1.0.0

  
