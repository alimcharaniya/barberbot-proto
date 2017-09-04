// Socket IO
var socket = io.connect('/');


$("#sendMessageButton").on('click', function(){
  var message = $("#message-to-send").val();
  socket.emit("userSentMessage", message);
  console.log(message)
  addUserReply(message);
  //delete text and disable button
});

socket.on("botSentMessage", function(message){
  addBotReply(message);
})


function addBotReply(message){
  console.log(message);
  var $res = $("#resMessage").clone();
  console.log($res);
  $res.appendTo(".chat-history").find('ul');
}

//append user message to chat bpox
function addUserReply(message){
  //inser message text into element
  var $chatHistory = $('#userMessage').clone();
  console.log("here");
  console.log($chatHistory)
  $chatHistory.appendTo(".chat-history").find('ul');

}
