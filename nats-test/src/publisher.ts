import { TicketCreatedPublisher } from "./events/ticket-created-publisher";
import nats from "node-nats-streaming";

console.clear();
const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);

  await publisher.publish({
    id: "1234",
    title: "test",
    price: 30,
  });
  // const data = JSON.stringify({
  //   id: "1234",
  //   title: "test",
  //   price: 30,
  // });

  // stan.publish("ticket:created", data, () => {
  //   console.log("event published");
  // });
});
