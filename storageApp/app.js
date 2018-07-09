let chooseFileButton = document.getElementById('save_file');
let collection = [];
  
function writeToFile(theFileEntry) {
  	theFileEntry.createWriter(function(fileWriter) {
    	fileWriter.onerror = function(e) {
      		console.log("Write failed: " + e.toString());
        };
                 
        //collection = formatJSON(collection);         
        let blob = new Blob([JSON.stringify(collection,null,2)],{type : "text/plain"});
        fileWriter.truncate(blob.size);
        console.log(blob.size);
		fileWriter.onwriteend = function() {
            fileWriter.onwriteend = function(e) {
              console.log("Write completed.");
            };   
            fileWriter.write(blob);
        }   
    });	
}

function saveAsFile() {
    var accepts = [{
        mimeTypes: ['application'],
        extensions: ['json']
    }]; 

    chrome.fileSystem.chooseEntry({type: 'saveFile' ,accepts: accepts}, function(writableEntry) {
        if (!writableEntry) {
            return;
        }

        chrome.storage.local.set(
            {'chosenFile': chrome.fileSystem.retainEntry(writableEntry)});

        console.log('file selected');
        writeToFile(writableEntry);
  });
}

chooseFileButton.addEventListener('click',saveAsFile);
chrome.runtime.onMessageExternal.addListener(function(message,messageSender,sendResponse) {
    collection.push.apply(collection, message.data);
    console.log(message.list);
    return sendResponse({
        say: 'got'
    });
});


