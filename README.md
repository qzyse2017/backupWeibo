# weiboBackup

## How to use
- load the extensions:
  - open page ```chrome://extensions``` in a chrome browser
  - there is a switch on the top-right corner of the page, turn it on and let the extensions run in ```developer mode```
  - click the ```LOAD UNPACKED``` button, and choose the directory which the extension's ```manifest.json``` file belongs to.
  - to load the chrome app, repeat the above steps.
- turn the extension and app on at the same page.
- fix extension ID in your local file, at the location corresponding to [parameter in sendMessage](https://github.com/qzyse2017/weibo-backup-crx/blob/master/lib/collector.js#L9), the extension ID depends on your local path and can be got at the address bar, where you see a string like ```chrome://extensions/?id=mmmeefojbhcemjekbppnjpjnakkjdhle``` , the string equal to ``id`` is what we want.
- open a new page ```chrome://apps/```, click on the apps with name ```weibo storage```
- open a new tab and let it be the page where you want to back up you weibo posts from, for example if you want to back up weibo posts for yourself, you need to open your personal page which shows all your posts. 
- the page should be turned to the next automatically, when it comes to the end. When the page comes to the location where you want to stop, turn the extension off at page ```chrome://extensions``` and click the ```Save as``` button on the chrome app's index page, choose the path you want to store your posts. It is recommended that you use a new file to store the data. To use the existed file, its content may be overrided.
- Note:after completing your back-up, turn the two extensions off, and turn the ```developer mode``` down.

## Other possible ways to get things done
- Building a chrome app alone can make things done.
- The chrome app may be replaced by a local server and the [weibo-backup-crx](https://github.com/tiye/weibo-backup-crx) chrome extension with [sendNativeMessage](https://developer.chrome.com/extensions/runtime#method-sendNativeMessage) api.
I decided to build a chrome app because I happened to think of that. : (

## For debugging
- on page ```chrome://extensions``` , open the background page of the extensions, here you can debug the ```background``` files which you wrote in manifest.json.
- to debug the app's index page and its relative files, right click at the index page of the app and choose ```Check(N) ctrl + shift + I``` to open the page in DevTools.


## Built with
- [weibo-backup-crx](https://github.com/tiye/weibo-backup-crx)
Thanks a lot for the author's work. 

## REF
if you want to further develop this extensions, you may refer to [the developer guide of Chrome extensions](https://developer.chrome.com/extensions)

  