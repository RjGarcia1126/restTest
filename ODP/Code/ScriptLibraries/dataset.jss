var randomText = "Sed sollicitudin odio et orci elementum mattis Pellentesque ultrices quis massa et vehicula Etiam nec ornare odio Vestibulum malesuada arcu purus et auctor sem commodo ac Aliquam ligula leo aliquam vitae lectus in aliquet dapibus neque Cras eget nisi porta ligula pulvinar luctus lobortis eget nulla Sed turpis eros dictum nec ornare egestas posuere sed purus Donec dignissim ante id vulputate scelerisque mauris justo egestas mi fermentum condimentum ligula tellus malesuada libero Nunc nec viverra felis Phasellus tincidunt neque nec pulvinar consequat justo nulla blandit diam sed euismod libero odio non tellus Integer nec venenatis dui Curabitur in dui imperdiet vehicula nibh sed elementum sapien Sed pharetra nisl quis aliquam cursus Vivamus aliquam vel elit nec laoreet Proin ut lectus molestie ultrices ipsum dictum feugiat neque Donec feugiat non lacus vitae auctor";
var randomTextArray = randomText.split(" ");
var randomTextArrayLength = randomTextArray.length;

var userName = @UserName();

function createMessage() {
    var chat = i + " -> ";
    for (var j = 0; j < 10; j++) {
        
        chat += " " + randomTextArray[Math.floor(Math.random() * randomTextArrayLength)];
    }
    return chat;
}

function createSmallDataSet() {
    var chatsView = database.getView("chats");
    //if we already have a dataset, don't bother to make a new one
    if (chatsView.getEntryCount() > 0) {
        return;
    }

    for (var i = 0; i < 10000; i++) {
        if (i % 1000 == 0) {
            print("counter: " + i);
        }
        var doc: NotesDocument = database.createDocument();
        doc.appendItemValue("Form", "chat");
        doc.appendItemValue("author", userName);
        doc.appendItemValue("chat", createMessage());
        doc.save();
        doc.recycle();
    }
}

function createLargeDataSet() {
    var catChatsView = database.getView("catChats");
    //if we already have a dataset, don't bother to make a new one
    if (catChatsView.getEntryCount() > 0) {
        return;
    }
    catChatsView.recycle();
    for (var i = 0; i < 100000; i++) {
        if (i % 1000 == 0) {
            print("counter: " + i);
        }
        var doc: NotesDocument = database.createDocument();
        doc.appendItemValue("Form", "catChat");
        doc.appendItemValue("category", Math.floor(Math.random() * 10).toString());
        doc.appendItemValue("author", userName);
        doc.appendItemValue("chat", createMessage());
        doc.save();
        doc.recycle(); //very important, otherwise LSXBE: Out of Memory
    }
}