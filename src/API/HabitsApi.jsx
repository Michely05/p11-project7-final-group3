export class HabitsApi {
  provideHabits() {
    return fetch("http://localhost:3000/habits");
  }
  createHabit(name) {
    return fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
  }
}
