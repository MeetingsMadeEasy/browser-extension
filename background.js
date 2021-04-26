

  console.log("background running");
  
  
  //chrome.action.onClicked.addListener(askForAlarm);
  function buttonClicked()
  {
      console.log("buttonclicked!");
      console.log("now opening...");
      //chrome.app.window.create('/user_inp.html')
  }

  chrome.action.onClicked.addListener(function () {
    console.log("opening!")
    chrome.tabs.create({ url: chrome.runtime.getURL("main.html") });
});
  //chrome.app.runtime.onLaunched.addListener(() => {
    //chrome.app.window.create('/user_inp.html', {
     // id: 'main',
      //bounds: { width: 620, height: 500 }
    //});
  //});

//chrome.app.runtime.onLaunched.addListener(createAlarm)



