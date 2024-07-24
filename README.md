# Twilio Flex 
This project itegrates Twilio Flex with a custom Frontend application using typescript and react. The aim is to create a seamless customer support interface for user and connect this frontend application with flex dashboard to appropriate agent enchanced features and flexibility.

## Table of Contents

- [Introduction](#introduction)
- [Flex Dashboard](#Flex_Dashboard )
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

## A Web chat app through which user can connect with agent at Flex Dashboard.
  In the branch <b>WebChat_App</b>, You will get the code where In Frontend part I used 
  <b>Twilio/Conversation</b> lib which is helpfull in creating conversation. And In backend part I used 
  <b>Twilio</b> lib by which I am creating interaction between customer and agent using interaction API. 

  ### Prerequisite
1. **Twilio Account**:
   - Sign up for a Twilio account at [Twilio](https://www.twilio.com/try-twilio).
   - Create a new Flex project from the Twilio Console.

2. **Twilio Credentials**:
   - Obtain your Twilio Account SID and Auth Token from the [Twilio Console](https://www.twilio.com/console).
   - Set up a Flex Flow SID by following the [Twilio Flex Quickstart Guide](https://www.twilio.com/docs/flex/quickstart/getting-started).

3. **Node.js and npm**:
   - Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. You can download and install them from the official websites.
   - Verify the installation by running the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```

4. **Basic Knowledge**:
   - Familiarity with JavaScript/TypeScript.
   - Understanding of React and its ecosystem.
   - Basic understanding of REST APIs and HTTP requests.

  ### Installation 
      
      - git clone
      - cd WebChat_App
      - npm install
      - npm run dev
      
      For Backend 
      - cd server
      - npm install
      - npm start
      
### Add ENV File at backend side inside server file

    Account_SID=
    Auth_Token=
    API_Key_SID=
    API_Key_Secret=
    Service_SID=
    Workspace_SID=
    Workflow_SID=
