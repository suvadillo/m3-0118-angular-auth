module.exports = io => {
  console.log("Socket io Ready");
  io.on("connection", socket => {
    console.log("a user connected");
    socket.on("chat-ready", m => {
      console.log(m);
      socket.broadcast.emit("chat", m);
    });

    // socket.on("init-game", data => {
    //   console.log(`El juego va a empezar`);
    //   Game.findById(data.gameId)
    //     .populate("questions")
    //     .then(game => {
    //       socket.broadcast.emit("start-game", {
    //         name: game.name,
    //         timeRemaining: startTimeOut
    //       });
    //       console.log(`Starting game in ${startTimeOut} sec`);
    //       setTimeout(() => {
    //         sendNextQuestion(socket, game);
    //       }, startTimeOut * 1000);
    //     });
    // });
  });
};
