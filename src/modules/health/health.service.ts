export class HealthService {
  getHealth() {
    const currentDate = new Date(Date.now()).toLocaleDateString("pt-br");
    const currentTime = new Date(Date.now()).toLocaleTimeString("pt-br");
    const timeStamp = `The current time is: ${currentTime} on: ${currentDate}`;

    return {
      status: "OK",
      timeCheck: timeStamp,
    };
  }
}
