const main = (io) => {
  console.log('socket server Open!')
io.on("connection", (socket) => {

  socket.on("start", () => {
      console.log("start");
    });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});
};

export default main;
