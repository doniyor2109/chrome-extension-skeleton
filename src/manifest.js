module.exports = {
    "manifest_version": 2,
    "name": "EXTENSION_NAME",
    "version": "1.0.0",
    "description": "DESCRIPTION",
    "author": "AUTHOR",
    "browser_action": {
        "default_icon": require("./img/chrome.png")
    },
    "devtools_page": "devtools_page.html",
    "background": {
        "matches":["http://*/*","https://*/*"],
        "scripts":["background.js"],
        "persistent": false
    },
    "content_scripts": [
        {
            "matches":["http://*/*","https://*/*"],
            "js": ["content.js"],
            "css":["content.css"]
        }
    ],
    "icons": {
        "128": require("./img/chrome.png")
    },
    "web_accessible_resources": [
        "files/*"
    ],
    "minimum_chrome_version": "10.0",
    "default_locale": "en"
};