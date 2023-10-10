# animated-custom-status
a tool for discord which can change your custom_status after the specified time

## How to build

### requirements
- node https://nodejs.dev/en/download/

### tutorial of building
- `git clone https://github.com/AkameTheCoder/animated-custom-status.git`
- `cd animated-custom-status`
- `npm i fetch`
- in case you get an error related to fs just try to run `npm i fs`
- to run the code `node index`

## How to use
this application works by using configuation files also known for example as config.json, it's relative simple to use once you understood how it works.

- the config.json file in the source code is the file where you define the behaviour of the application.

```json
{
    "token": "your token here",
    "set_time_interval_sec": 30,
    "statusMessage": [
        "message 1",
        "message 2",
        "message 3"

    ]
    
}
```
We have here 3 properties:
- token
- set_time_interval_sec
- statusMessage

the token is basically the login to our account here is a tutorial how you can get your [token](https://linuxhint.com/get-discord-token/).

the set_time_interval_sec is the property which defines how fast the animation will be updated

**VERY IMPORTANT**

I would always recommend setting a time interval of 30 seconds, or else discord is gonna get mad at you, it's also more likely that people are gonna report you, JUST DONT TRY TO SEEK TOO MUCH ATTENTION WITH IT

**I AM NOT RESPONSIBLE FOR ANY ACCOUNT TERMINATIONS BY DISCORD!!**

and finally the last property we have is statusMessage, here you can define the messages which should appear in the custom status, feel free to add as many as you want to, in the example is shown how they are added you can just copy the way how its done there and change the content within the qoutes.

Have fun using this tool! even tho this project is already done for me, there might come some extras in the future, who knows :)


